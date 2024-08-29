"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const classnames_1 = __importDefault(require("classnames"));
const Typography_1 = __importDefault(require("@/components/Typography"));
const Checkbox_module_scss_1 = __importDefault(require("./Checkbox.module.scss"));
const Checkbox = (0, react_1.forwardRef)(({ id, label, checked, onChange, error, ...props }, ref) => {
    const classes = {
        default: (0, classnames_1.default)(Checkbox_module_scss_1.default['c-checkbox']),
        container: (0, classnames_1.default)(Checkbox_module_scss_1.default['c-checkbox__container'], {
            [Checkbox_module_scss_1.default['c-checkbox__container--checked']]: checked,
        }),
        checkbox: (0, classnames_1.default)(Checkbox_module_scss_1.default['c-checkbox__input']),
        checkmark: (0, classnames_1.default)(Checkbox_module_scss_1.default['c-checkbox__checkmark']),
        error: (0, classnames_1.default)(Checkbox_module_scss_1.default['c-checkbox__error']),
    };
    return (React.createElement("div", { className: classes.default },
        React.createElement("label", { htmlFor: id, className: classes.container },
            React.createElement("input", { id: id, type: "checkbox", className: classes.checkbox, checked: checked, onChange: onChange, ref: ref, ...props }),
            label,
            React.createElement("span", { className: classes.checkmark })),
        React.createElement(Typography_1.default, { variant: "small", as: "small", className: classes.error }, error)));
});
exports.default = Checkbox;
