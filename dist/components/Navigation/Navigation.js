"use strict";
'use client';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const classnames_1 = __importDefault(require("classnames"));
const Logo_1 = __importDefault(require("@/components/Logo"));
const useMediaQuery_1 = __importDefault(require("@/hooks/useMediaQuery"));
const Navigation_module_scss_1 = __importDefault(require("./Navigation.module.scss"));
const Navigation = () => {
    const isMobile = (0, useMediaQuery_1.default)('(max-width: 768px)');
    const logoSize = isMobile ? 'xxsmall' : 'xsmall';
    return (React.createElement("nav", { className: (0, classnames_1.default)(Navigation_module_scss_1.default['c-navigation']) },
        React.createElement("div", null,
            React.createElement(Logo_1.default, { variant: "wordmark", size: logoSize }))));
};
exports.default = Navigation;
