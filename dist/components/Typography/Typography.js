"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tagsMapping = void 0;
const classnames_1 = __importDefault(require("classnames"));
const react_1 = require("react");
const Typography_module_scss_1 = __importDefault(require("./Typography.module.scss"));
const headings = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
};
exports.tagsMapping = {
    ...headings,
    p: 'p',
    b: 'b',
    em: 'em',
    small: 'small',
    span: 'span',
    strong: 'strong',
    legend: 'legend',
    q: 'q',
    label: 'label',
};
const aligns = {
    center: 'center',
    justify: 'justify',
    left: 'left',
    right: 'right',
};
const stylings = {
    bold: 'bold',
    italic: 'italic',
    normal: 'normal',
};
const transforms = {
    lowercase: 'lowercase',
    uppercase: 'uppercase',
};
const Typography = ({ variant = 'body', as = 'p', align, styling, transform, children, className, }, props) => {
    const Component = (0, react_1.createElement)(as, {
        className: (0, classnames_1.default)('c-typography', className, {
            [Typography_module_scss_1.default[`c-typography--${variant}`]]: variant,
            [Typography_module_scss_1.default[`c-typography--${align}`]]: align,
            [Typography_module_scss_1.default[`c-typography--${styling}`]]: styling,
            [Typography_module_scss_1.default[`c-typography--${transform}`]]: transform,
        }),
        ...props,
    }, children);
    return Component;
};
exports.default = Typography;
