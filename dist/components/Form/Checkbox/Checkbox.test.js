"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@testing-library/react");
const Checkbox_1 = __importDefault(require("./Checkbox"));
const defaultProps = {
    id: 'test-id',
    label: 'Test Label',
    checked: false,
    onChange: jest.fn(),
    error: '',
};
const setup = (props = defaultProps) => (0, react_1.render)(React.createElement(Checkbox_1.default, { ...props }));
describe('<Checkbox />', () => {
    it('should render the checkbox and label correctly', () => {
        setup();
        const label = react_1.screen.getByLabelText(/test/i);
        const checkbox = react_1.screen.getByRole('checkbox');
        expect(checkbox).toBeInTheDocument();
        expect(label).toBeInTheDocument();
    });
    it('should render the checkbox as checked when checked prop is true', () => {
        setup({ ...defaultProps, checked: true });
        const checkbox = react_1.screen.getByRole('checkbox');
        expect(checkbox).toBeChecked();
    });
    it('should call the onChange function when clicked', () => {
        setup();
        const checkbox = react_1.screen.getByRole('checkbox');
        react_1.fireEvent.click(checkbox);
        expect(defaultProps.onChange).toHaveBeenCalledTimes(1);
    });
    it('should render the correct styles when checked', () => {
        setup({ ...defaultProps, checked: true });
        const label = react_1.screen.getByText('Test Label').closest('label');
        expect(label).toHaveClass('c-checkbox__container--checked');
    });
    it('should display an error message when error prop is provided', () => {
        const errorMessage = 'This is an error';
        setup({ ...defaultProps, error: errorMessage });
        const error = react_1.screen.getByText(errorMessage);
        expect(error).toBeInTheDocument();
        expect(error).toHaveClass('c-checkbox__error');
    });
});
