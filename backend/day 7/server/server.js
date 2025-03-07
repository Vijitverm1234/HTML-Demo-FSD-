const express = require('express');
const app = express();
const PORT = 3000;
const cors = require('cors');
const fs = require('fs/promises');

const FILE_PATH = './user.json';

app.use(cors({
    origin: "http://localhost:5174"
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware to check age authorization
const m1 = (req, res, next) => {
    const age = req.query.age;
    if (!age) {
        return res.status(400).json({ msg: "Age is required" });
    }
    if (age < 18) {
        return res.status(403).json({ msg: "User not authorized" });
    }
    next();
};

// Read and Write functions for file handling
const readUsers = async () => {
    try {
        const data = await fs.readFile(FILE_PATH, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        return [];
    }
};

const writeUsers = async (users) => {
    await fs.writeFile(FILE_PATH, JSON.stringify(users, null, 2));
};

// Get all users
app.get('/users', async (req, res) => {
    try {
        const users = await readUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ msg: "Server error", error });
    }
});

// Get user by ID
app.get('/users/:id', async (req, res) => {
    try {
        const uid = Number(req.params.id);
        const users = await readUsers();
        const user = users.find(u => u.id === uid);

        if (!user) {
            return res.status(404).json({ msg: "No such user" });
        }
        res.status(200).json({ msg: "User found", user });
    } catch (error) {
        res.status(500).json({ msg: "Server error", error });
    }
});

// Create a new user
app.post('/createuser', m1, async (req, res) => {
    try {
        const { name, email } = req.body;
        if (!name || !email) {
            return res.status(400).json({ msg: "Name and email are required" });
        }

        const users = await readUsers();

        // Check if email already exists
        if (users.some(user => user.email === email)) {
            return res.status(400).json({ msg: "Email already exists" });
        }

        const newUser = { id: Date.now(), name, email };
        users.push(newUser);
        await writeUsers(users);

        res.status(201).json({ msg: "User added", user: newUser });
    } catch (error) {
        res.status(500).json({ msg: "Server error", error });
    }
});

// Edit user details
app.patch('/edituser/:id', async (req, res) => {
    try {
        const uid = Number(req.params.id);
        const { name, email } = req.body;

        const users = await readUsers();
        const index = users.findIndex(u => u.id === uid);
        if (index === -1) {
            return res.status(404).json({ msg: "No such user" });
        }

        // Update only if fields are provided
        if (name) users[index].name = name;
        if (email) users[index].email = email;

        await writeUsers(users);
        res.status(200).json({ msg: "User updated", user: users[index] });
    } catch (error) {
        res.status(500).json({ msg: "Server error", error });
    }
});

// Delete user
app.delete('/deleteuser/:id', async (req, res) => {
    try {
        const uid = Number(req.params.id);
        const users = await readUsers();
        const index = users.findIndex(u => u.id === uid);

        if (index === -1) {
            return res.status(404).json({ msg: "No such user" });
        }

        const deletedUser = users.splice(index, 1)[0];
        await writeUsers(users);

        res.status(200).json({ msg: "User deleted", user: deletedUser });
    } catch (error) {
        res.status(500).json({ msg: "Server error", error });
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
