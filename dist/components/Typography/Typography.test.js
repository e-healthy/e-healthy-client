"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("@testing-library/react");
const Typography_1 = __importDefault(require("./Typography"));
const defaultProps = {
    variant: 'body',
    as: 'p',
    align: 'right',
    styling: 'normal',
    transform: 'uppercase',
    className: '',
    children: 'Default Text',
};
const setup = (props = defaultProps) => (0, react_2.render)(react_1.default.createElement(Typography_1.default, { ...props }, props.children));
describe('<Typography />', () => {
    it('should render with default props', () => {
        setup();
        const element = react_2.screen.getByText('Default Text');
        expect(element.tagName).toBe('P');
        expect(element).toHaveClass('c-typography');
    });
    it('should render correct HTML element for variant', () => {
        const text = 'Heading Text';
        setup({
            ...defaultProps,
            variant: 'h1',
            as: 'h1',
            children: text,
        });
        const element = react_2.screen.getByText(/text/i);
        expect(element.tagName).toBe('H1');
        expect(element).toHaveClass('c-typography--h1');
    });
    it('should render with different "as" elements', () => {
        const text = 'Label Text';
        setup({ ...defaultProps, as: 'label', children: text });
        const element = react_2.screen.getByText(/text/i);
        expect(element.tagName).toBe('LABEL');
    });
    it('should apply alignment class correctly', () => {
        const text = 'Center Aligned Text';
        setup({
            ...defaultProps,
            align: 'center',
            children: text,
        });
        const element = react_2.screen.getByText(/text/i);
        expect(element).toHaveClass('c-typography--center');
    });
    it('should apply styling class correctly', () => {
        const text = 'Bold Text';
        setup({ ...defaultProps, styling: 'bold', children: text });
        const element = react_2.screen.getByText(/text/i);
        expect(element).toHaveClass('c-typography--bold');
    });
    it('should apply transform class correctly', () => {
        const text = 'Uppercase Text';
        setup({
            ...defaultProps,
            transform: 'uppercase',
            children: text,
        });
        const element = react_2.screen.getByText(/text/i);
        expect(element).toHaveClass('c-typography--uppercase');
    });
    it('should accept additional className', () => {
        const text = 'Text with Extra Class';
        setup({
            ...defaultProps,
            className: 'extra-class',
            children: text,
        });
        const element = react_2.screen.getByText(/text/i);
        expect(element).toHaveClass('extra-class');
    });
});
