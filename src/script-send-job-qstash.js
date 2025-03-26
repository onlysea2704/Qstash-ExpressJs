import dotenv from 'dotenv';
import { Client } from '@upstash/qstash';

dotenv.config();

const qstash = new Client({
    token: process.env.QSTASH_TOKEN,
});

async function sendWebhook() {
    try {
        const response = await qstash.publishJSON({
            url: 'https://7e53-2402-800-6d3e-ab05-545f-bf8d-876a-5ed1.ngrok-free.app/api/webhook2',
            body: { message: 'Hello Webhook 1' },
            delay: 10, // Gửi sau 10 giây
        });

        console.log('✅ Webhook Job Scheduled:', response);
    } catch (error) {
        console.error('❌ Error sending webhook:', error);
    }
}

async function scheduleWebhook() {
    try {
        // Create Schedules
        const responseCreate = await qstash.schedules.create({
            destination: "https://7e53-2402-800-6d3e-ab05-545f-bf8d-876a-5ed1.ngrok-free.app/api/webhook1", // Địa chỉ webhook nhận request
            body: JSON.stringify({ message: "This is a scheduled task" }),
            cron: "0 9 * * *", // Chạy lúc 9h sáng mỗi ngày (UTC)
        });
        console.log("✅ Schedule created:", responseCreate);

        // List Schedules
        const schedules = await qstash.schedules.list();
        console.log(schedules);

        // Delete Schedules
        const responseDelete = await qstash.schedules.delete(schedules[0].scheduleId);
        console.log(responseDelete)

        // Hình như hiện tại ko có update mà phải xóa rồi tạo cái mới
        // Update Schedules
        // const responseUpdate = await qstash.schedules.update(schedules[0].scheduleId, {
        //     cron: "0 10 * * *", // Cập nhật để chạy vào 10h sáng mỗi ngày (UTC)
        //     body: JSON.stringify({ message: "Updated scheduled task" }),
        // });
        console.log("✅ Schedule updated:", responseUpdate);
    } catch (error) {
        console.error("❌ Error creating schedule:", error);
    }
}

sendWebhook();
scheduleWebhook();
