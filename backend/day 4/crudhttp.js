const http = require('http');

const data = [
    {
        id: 1,
        name: 'Vijit Verma',
        email: 'ABC@gmail.com'
    }
];
const server = http.createServer((req, res) => {
    const url = req.url;
    if (url === '/users' && req.method === "GET") {
        res.writeHead(200, { 'Content-Type': "application/json" });
        res.end(JSON.stringify(data));
    } 
    else if (url === '/users' && req.method === "POST") {
        let body = '';
        req.on('data', (chunk) => {
            body += chunk;
        });
        req.on('end', () => {
            try {
                const parsedData = JSON.parse(body);
                const { name, email } = parsedData;
                if (!name || !email) {
                    res.writeHead(400, { 'Content-Type': "application/json" });
                    return res.end(JSON.stringify({ status: 'fail', msg: "Name and email are required" }));
                }
                const newId = data.length > 0 ? (data[data.length - 1].id + 1) : 1;
                const newUser = { id: newId, name, email };
                data.push(newUser);
                res.writeHead(201, { 'Content-Type': "application/json" });
                res.end(JSON.stringify({ status: 'success', msg: "User created", user: newUser }));
            } catch (error) {
                res.writeHead(400, { 'Content-Type': "application/json" });
                res.end(JSON.stringify({ status: 'fail', msg: "Invalid JSON format" }));
            }
        });
    } 
    else {
        res.writeHead(404, { 'Content-Type': "application/json" });
        res.end(JSON.stringify({ msg: "Something went wrong" }));
    }
});

server.listen(3000, (err) => {
    if (err) {
        console.error("Server Error:", err);
    } else {
        console.log("Server is running on port 3000");
    }
});
