//Dependencies
import mongoose from "mongoose";
import Express from "express";
import dotenv from "dotenv";
import users from "./controllers/user.js";
import tickets from "./controllers/ticket.js";
import authn from "./controllers/authn.js";

dotenv.config(); //Make sure this is at the top of your file otherwise your app can't access the .env file
//Connection to MongoDB
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("Connected to Sleick Mongo Database ..."))
    .catch((err) =>
        console.error("Connected to Sleick Mongo Database ...", err.message)
    );

//Variables
const app = Express();

//Controllers
app.get("/", (req, res) => {
    res.send("hello api");
});

//Middleware
app.use(Express.json());
app.use("/api/users", users);
app.use("/api/tickets", tickets);
app.use("/api/authn", authn);

//Port
const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`server started on port ${port} ...`);
});
