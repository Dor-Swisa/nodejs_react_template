// import DescopeClient from '@descope/node-sdk';
import express from 'express';
const app = express();



app.get("/api", (req, res) => {
    res.json({ "users": ["user1", "user2", "user3"] })
})

app.listen(5001, () => {
    console.log("Server startes on port 5001");
})