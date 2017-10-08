import express from 'express';

const app = express();
app.get("/", (req, res) => {
    res.send({ message: "ok", user: { age: 12 } });
    res.end();
})


const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
    console.log(`App running on ${port}`);
})