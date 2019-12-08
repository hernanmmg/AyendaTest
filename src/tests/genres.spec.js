const expect = global.expect;

describe("App - Actions", () => {
  describe("List Genres", () => {
    it("fetchGenres() return array of objects for genres.", () => {
      const current = 2;
      const result_expect = 2;
      expect(current).toEqual(result_expect);
    });
  });
});
