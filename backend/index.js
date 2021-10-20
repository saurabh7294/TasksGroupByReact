import express from "express";
import data from "./data.js";
import cors from 'cors';

const app = express();
app.use(cors());
app.get('/', (req, res)=>{
    res.json(data);
})

app.listen(4800, () => {
    console.log("app running on port 4800");
})