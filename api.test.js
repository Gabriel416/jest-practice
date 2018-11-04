const fetch = require("node-fetch");
const getPeople = require("./api");

describe("api call", () => {
  it("calls api to get people", done => {
    expect.assertions(2);
    getPeople(fetch).then(data => {
      expect(data.count).toBeDefined();
      expect(data.results).toBeDefined();
      done();
    });
  });

  //Different way to handle async tests
  it("should return 87 people from api", () => {
    expect.assertions(1);
    return getPeople(fetch).then(data => {
      expect(data.count).toEqual(87);
    });
  });

  //mock api call
  it("should get count and results", () => {
    const mockFetch = jest.fn().mockResolvedValue({
      json: () =>
        Promise.resolve({
          count: 2,
          results: [
            {
              name: "luke",
              homePlanet: "Tatooine"
            },
            {
              name: "han",
              homePlanet: "Corellia"
            }
          ]
        })
    });

    expect.assertions(4);
    return getPeople(mockFetch).then(data => {
      expect(mockFetch.mock.calls.length).toBe(1);
      expect(data.count).toBe(2);
      expect(data.results[0]).toEqual({ name: "luke", homePlanet: "Tatooine" });
      expect(data.results[1]).toEqual({ name: "han", homePlanet: "Corellia" });
    });
  });
});
