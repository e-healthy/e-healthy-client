"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const classnames_1 = __importDefault(require("classnames"));
const Modal_module_scss_1 = __importDefault(require("./Modal.module.scss"));
const Button_1 = __importDefault(require("../Form/Button"));
const Modal = ({ closeByIcon, closeByButton, isOpen, onClose, children, }) => {
    const handleClose = (0, react_1.useCallback)(() => {
        onClose();
    }, [onClose]);
    if (!isOpen)
        return null;
    const classes = {
        default: (0, classnames_1.default)(Modal_module_scss_1.default['c-modal']),
        close: (0, classnames_1.default)(Modal_module_scss_1.default['c-modal__close']),
        body: (0, classnames_1.default)(Modal_module_scss_1.default['c-modal__body']),
        overlay: (0, classnames_1.default)(Modal_module_scss_1.default['c-modal__overlay']),
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: classes.overlay, onClick: handleClose, "aria-hidden": "true" }),
        React.createElement("div", { className: classes.default, role: "dialog", "aria-modal": "true" },
            closeByIcon && (React.createElement("button", { type: "button", className: classes.close, onClick: handleClose, "aria-label": "Fechar o modal" }, "\u00D7")),
            React.createElement("div", { className: classes.body },
                children,
                closeByButton && (React.createElement("div", { className: Modal_module_scss_1.default['c-modal__footer'] },
                    React.createElement(Button_1.default, { type: "button", onClick: handleClose, "aria-label": "Fechar o modal" }, "Fechar")))))));
};
exports.default = Modal;
