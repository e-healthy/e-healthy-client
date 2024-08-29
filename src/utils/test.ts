import mediaQuery from 'css-mediaquery';

export const createMatchMedia = (width: number) => {
  window.matchMedia = (query) =>
    ({
      matches: mediaQuery.match(query, {
        width,
      }),
      addListener: jest.fn((listener) => {
        listener({ query });
      }),
      removeListener: () => {},
    }) as unknown as MediaQueryList;
};

beforeAll(() => {
  // Set the initial/default matchMedia implementation
  // for Mobile First development
  createMatchMedia(768);
});

afterEach(() => {
  // Reset matchMedia after each test
  createMatchMedia(768);
});
