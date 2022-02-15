"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const arrays_1 = __importDefault(require("./helpers/arrays"));
const port = process.env.PORT || 8080;
const app = (0, express_1.default)();
app.use(express_1.default.static(path_1.default.join(__dirname, "public")));
app.listen(port, () => {
    console.log("listening on port " + port);
});
module.exports = { arrayToObject: arrays_1.default };
