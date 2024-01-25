import express from "express";

const app = express();

app.use(express.json())

const port = 3000

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})

app.get("/", (req, res)=>{
    console.log(req.url);
    res.send("Hello World")
})