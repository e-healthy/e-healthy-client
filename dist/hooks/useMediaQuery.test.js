"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@testing-library/react");
const test_1 = require("@/utils/test");
const useMediaQuery_1 = __importDefault(require("./useMediaQuery"));
describe('useMediaQuery', () => {
    beforeEach(() => {
        (0, test_1.createMatchMedia)(600);
    });
    it('should return false when query does not match', () => {
        const { result } = (0, react_1.renderHook)(() => (0, useMediaQuery_1.default)('(min-width: 800px)'));
        expect(result.current).toBe(false);
    });
    it('should return true when query matches', () => {
        const { result } = (0, react_1.renderHook)(() => (0, useMediaQuery_1.default)('(min-width: 600px)'));
        expect(result.current).toBe(true);
    });
    it('should update matches when query changes', () => {
        const { result, rerender } = (0, react_1.renderHook)(({ query }) => (0, useMediaQuery_1.default)(query), { initialProps: { query: '(min-width: 600px)' } });
        expect(result.current).toBe(true);
        rerender({ query: '(min-width: 1000px)' });
        expect(result.current).toBe(false);
    });
    it('should clean up event listeners on unmount', () => {
        const removeEventListenerSpy = jest.spyOn(window, 'removeEventListener');
        const { unmount } = (0, react_1.renderHook)(() => (0, useMediaQuery_1.default)('(min-width: 600px)'));
        unmount();
        expect(removeEventListenerSpy).toHaveBeenCalled();
        removeEventListenerSpy.mockRestore();
    });
});
