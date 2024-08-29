"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@testing-library/react");
const Logo_1 = __importDefault(require("./Logo"));
const defaultProps = {
    variant: 'core',
    size: 'medium',
};
const setup = (props = defaultProps) => (0, react_1.render)(React.createElement(Logo_1.default, { ...props }));
describe('<Logo />', () => {
    it('should render the correct image based on the variant', () => {
        setup({ ...defaultProps, variant: 'logomark' });
        const image = react_1.screen.getByAltText('Logo do E-Healthy');
        expect(image).toHaveAttribute('src', 'logomark.svg');
    });
    it('should render the correct size based on the size prop', () => {
        setup({ ...defaultProps, size: 'large' });
        const image = react_1.screen.getByAltText('Logo do E-Healthy');
        expect(image).toHaveAttribute('height', '360');
        expect(image).toHaveAttribute('width', '360');
    });
});
