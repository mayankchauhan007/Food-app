"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const db_1 = require("../db/db");
const userRouter = express_1.default.Router();
// interface User {
//     name: String;
//     email: String;
//     password: String;
//     role: {
//         type: String;
//         enum: ["admin", "user"];
//     };
// }
userRouter.post("/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.body;
    // console.log(user);
    const newUser = new db_1.User(user);
    yield newUser.save();
    res.status(200).send(user);
}));
module.exports = userRouter;
