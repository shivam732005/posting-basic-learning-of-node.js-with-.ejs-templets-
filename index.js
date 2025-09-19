const express = require("express");
const app = express();
const path = require("path");
const data = require("./data.json");

app.use(express.static(path.join(__dirname,"public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Instagram route
app.get("/ig/:username", (req, res) => {
    const { username } = req.params;   // e.g. "cats" or "dogs"
    const userData = data[username];   // fetch data.cats OR data.dogs
    console.log(userData);
    if (userData) {
        res.render("instagram.ejs", { data: userData }); // ✅ send it as "data"
    } else {
        res.send("User not found 😢");
    }
});

app.listen(8080, () => {
    console.log("Server running on port 8080");
});
