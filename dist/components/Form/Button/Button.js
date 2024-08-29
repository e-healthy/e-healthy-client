"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const classnames_1 = __importDefault(require("classnames"));
const Button_module_scss_1 = __importDefault(require("./Button.module.scss"));
const Button = ({ children, ...props }) => {
    const classes = {
        default: (0, classnames_1.default)(Button_module_scss_1.default['c-button']),
    };
    return (React.createElement("button", { className: classes.default, ...props }, children));
};
exports.default = Button;
