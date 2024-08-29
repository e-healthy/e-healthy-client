import { renderHook } from '@testing-library/react';
import { createMatchMedia } from '@/utils/test';

import useMediaQuery from './useMediaQuery';

describe('useMediaQuery', () => {
  beforeEach(() => {
    createMatchMedia(600);
  });

  it('should return false when query does not match', () => {
    const { result } = renderHook(() => useMediaQuery('(min-width: 800px)'));
    expect(result.current).toBe(false);
  });

  it('should return true when query matches', () => {
    const { result } = renderHook(() => useMediaQuery('(min-width: 600px)'));
    expect(result.current).toBe(true);
  });

  it('should update matches when query changes', () => {
    const { result, rerender } = renderHook(
      ({ query }) => useMediaQuery(query),
      { initialProps: { query: '(min-width: 600px)' } },
    );
    expect(result.current).toBe(true);

    rerender({ query: '(min-width: 1000px)' });
    expect(result.current).toBe(false);
  });

  it('should clean up event listeners on unmount', () => {
    const removeEventListenerSpy = jest.spyOn(window, 'removeEventListener');

    const { unmount } = renderHook(() => useMediaQuery('(min-width: 600px)'));
    unmount();

    expect(removeEventListenerSpy).toHaveBeenCalled();
    removeEventListenerSpy.mockRestore();
  });
});
