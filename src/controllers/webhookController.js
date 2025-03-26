export function handleWebhook1(req, res) {
    console.log('📩 Webhook 1 received:', req.body);
    res.status(200).json({message: 'Webhook 1 processed successfully!'})
}

export function handleWebhook2(req, res) {
    console.log('📩 Webhook 2 received:', req.body);
    res.status(200).json({ message: 'Webhook 2 processed successfully!'})
}