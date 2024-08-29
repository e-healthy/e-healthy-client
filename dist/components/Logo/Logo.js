"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const image_1 = __importDefault(require("next/image"));
const classnames_1 = __importDefault(require("classnames"));
const variants = {
    core: 'core.svg',
    logomark: 'logomark.svg',
    wordmark: 'wordmark.svg',
};
const sizes = {
    xxsmall: 104,
    xsmall: 144,
    small: 176,
    medium: 240,
    large: 360,
    xlarge: 480,
};
const Logo = ({ variant = 'core', size = 'medium' }) => {
    const wordmarkHeight = variant === 'wordmark' ? sizes[size] / 3 : sizes[size];
    return (React.createElement(image_1.default, { className: (0, classnames_1.default)('c-logo'), src: variants[variant], alt: "Logo do E-Healthy", width: sizes[size], height: wordmarkHeight, priority: true }));
};
exports.default = Logo;
