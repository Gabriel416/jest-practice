const search = require("./script");

mockData = [
  "cats.com",
  "funny.com",
  "reddit.com",
  "cats-today.net",
  "shampoo.com"
];

describe("search feature", () => {
  it("should filter mockData by search tern", () => {
    expect(search("fun", mockData)).toEqual(["funny.com"]);
  });

  it("should return empty array if no search results are found", () => {
    expect(search("hello", mockData)).toEqual([]);
    expect(search(undefined, mockData)).toEqual([]);
    expect(search(null, mockData)).toEqual([]);
  });

  it("should not return more than three matches", () => {
    const mockSearch = search(".com", mockData);
    expect(mockSearch.length).toBe(3);
    expect(mockSearch).toEqual(["cats.com", "funny.com", "reddit.com"]);
  });
});
