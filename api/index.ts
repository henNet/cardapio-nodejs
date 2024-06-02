// import express from "express";
const express = require("express");
import cors  from "cors";
import routes from "./routes.js";

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());
app.use(routes);

// app.get("/", (req, res) => res.send("Express on Vercel"));

app.listen(process.env.PORT || port, () => {
    console.log(`server listening on port ${port}!`);
});

module.exports = app;
