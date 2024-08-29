"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMatchMedia = void 0;
const css_mediaquery_1 = __importDefault(require("css-mediaquery"));
const createMatchMedia = (width) => {
    window.matchMedia = (query) => ({
        matches: css_mediaquery_1.default.match(query, {
            width,
        }),
        addListener: jest.fn((listener) => {
            listener({ query });
        }),
        removeListener: () => { },
    });
};
exports.createMatchMedia = createMatchMedia;
beforeAll(() => {
    // Set the initial/default matchMedia implementation
    // for Mobile First development
    (0, exports.createMatchMedia)(768);
});
afterEach(() => {
    // Reset matchMedia after each test
    (0, exports.createMatchMedia)(768);
});
