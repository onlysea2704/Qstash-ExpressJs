export function getUsers(req, res){
    res.status(200).json({user: [{id: 1, name: "Hai"}, {id: 2, name: "Bob"}]})
}

export function createUser(req, res){
    console.log('👤 New user:', req.body);
    res.status(201).json({ message: 'User created successfully!' });
}