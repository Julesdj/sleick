import Express from "express";
import lodash from "lodash";
import * as bcrypt from "bcrypt";
import User, { validateUser } from "../models/user.model.js";
import admin from "../middleware/admin.js";
import authz from "../middleware/authz.js";

//Variables
const users = Express.Router();
const _ = lodash;

users.get("/", async (req, res) => {
    const users = await User.find().select("-password");
    const userCount = await User.find().count();
    if (userCount === 0)
        return res.status(404).send("Could not find any users.");
    res.send(users);
});

users.post("/", async (req, res) => {
    //Send appropriate error
    const { error } = validateUser(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    //Check if user already in the database
    let user = await User.findOne({ email: req.body.email });
    if (user) return res.status(400).send("User already registered");

    //Register user
    user = new User(
        _.pick(req.body, ["firstName", "lastName", "email", "password", "role"])
    ); //using lodash to avoid repeating req.body

    //Password Hashing
    const saltRouds = 10;
    const salt = await bcrypt.genSalt(saltRouds);
    user.password = await bcrypt.hash(user.password, salt);

    await user.save();

    console.log(user);

    const token = user.generateAuthnToken();

    res.header("x-authn-token", token)
        .header("access-control-expose-headers", "x-authn-token") //this second header needs to be set, otherwise the client won't be able to see the authn token
        .send(_.pick(user, ["firstName", "lastName", "email", "role"])); ////using lodash to avoid repeating req.body
});

//Protected route - Get current user
users.get("/me", authz, async (req, res) => {
    try {
        const user = await User.findById(req.user._id).select("-password");
        res.send(user);
    } catch (error) {
        res.status(404).send("The user with the given ID was not found");
    }
});

//Protected route - Delete a user with a given id
users.delete("/:id", [authz, admin], async (req, res) => {
    try {
        const user = await User.findByIdAndRemove(req.params.id);
        res.send(user);
    } catch (error) {
        res.status(404).send("The user with the given ID was not found");
    }
});

export default users;
