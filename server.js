const express = require("express");
const path = require("path");

const app = express();

app.get("/* ", (req, res) => {
    res.sendFile(path.resolve("Frontend", "index.html"));
});

app.listen(process.env.PORT || 3000, () => console.log("serveri chairto Dgebu"));