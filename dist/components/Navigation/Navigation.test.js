"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@testing-library/react");
const test_1 = require("@/utils/test");
const Navigation_1 = __importDefault(require("./Navigation"));
const setup = () => (0, react_1.render)(React.createElement(Navigation_1.default, null));
describe('<Navigation />', () => {
    it('should render the Logo component with the correct variant and size', () => {
        (0, test_1.createMatchMedia)(1024);
        setup();
        const logo = react_1.screen.getByAltText('Logo do E-Healthy');
        expect(logo).toHaveAttribute('src', 'wordmark.svg');
        expect(logo).toHaveAttribute('height', '48');
        expect(logo).toHaveAttribute('width', '144');
    });
    it('should render the Logo component with the correct size for smaller viewports', () => {
        (0, test_1.createMatchMedia)(768);
        setup();
        const logo = react_1.screen.getByAltText('Logo do E-Healthy');
        expect(logo).toHaveAttribute('src', 'wordmark.svg');
        expect(logo).toHaveAttribute('height', `${104 / 3}`);
        expect(logo).toHaveAttribute('width', '104');
    });
});
