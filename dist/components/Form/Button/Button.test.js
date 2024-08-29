"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@testing-library/react");
const Button_1 = __importDefault(require("./Button"));
const defaultProps = {
    disabled: false,
    onClick: jest.fn(),
};
const setup = (props = defaultProps) => (0, react_1.render)(React.createElement(Button_1.default, { ...props }, "Click Me"));
describe('<Button />', () => {
    it('should render the button with the correct text', () => {
        setup();
        const button = react_1.screen.getByRole('button', { name: /click me/i });
        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent('Click Me');
    });
    it('should apply the default button class', () => {
        setup();
        const button = react_1.screen.getByRole('button');
        expect(button).toHaveClass('c-button');
    });
    it('should accept and apply the disabled attribute', () => {
        setup({ ...defaultProps, disabled: true });
        const button = react_1.screen.getByRole('button');
        expect(button).toBeDisabled();
    });
    it('should call onClick handler when button is clicked', () => {
        const handleClick = jest.fn();
        setup({ ...defaultProps, onClick: handleClick });
        const button = react_1.screen.getByRole('button');
        react_1.fireEvent.click(button);
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});
