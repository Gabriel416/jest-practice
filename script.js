const googleSites = [
  "dogs.com",
  "youtube.com",
  "insurance.com",
  "dogspics.com",
  "cooking.com",
  "giphy.com"
];

const search = (searchInput, data) => {
  const matches = data.filter(site => site.includes(searchInput));

  return matches.length > 3 ? matches.slice(0, 3) : matches;
};

module.exports = search;
