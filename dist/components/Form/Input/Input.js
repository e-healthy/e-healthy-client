"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Typography_1 = __importDefault(require("@/components/Typography"));
const react_1 = require("react");
const Input_module_scss_1 = __importDefault(require("./Input.module.scss"));
const classnames_1 = __importDefault(require("classnames"));
const Input = (0, react_1.forwardRef)(({ id, label, placeholder, startAdornment, endAdorment, error, ...props }, ref) => {
    const classes = {
        default: (0, classnames_1.default)(Input_module_scss_1.default['c-input']),
        container: (0, classnames_1.default)(Input_module_scss_1.default['c-input__container']),
        input: (0, classnames_1.default)(Input_module_scss_1.default['c-input__input']),
        error: (0, classnames_1.default)(Input_module_scss_1.default['c-input__error']),
    };
    return (React.createElement("div", { className: Input_module_scss_1.default['c-input'] },
        label && (React.createElement(Typography_1.default, { variant: "body", as: "label", styling: "bold" }, label)),
        React.createElement("div", { className: classes.container },
            startAdornment,
            React.createElement("input", { id: id, placeholder: placeholder, ref: ref, className: classes.input, ...props }),
            endAdorment),
        error && (React.createElement(Typography_1.default, { variant: "small", as: "small", className: classes.error }, error))));
});
exports.default = Input;
