const fetch = require('node-fetch');

// term=beatles&entity=album&medium=music
const iTunesURL = 'https://itunes.apple.com/search?';

function search(req, res, next) {
  fetch(`${iTunesURL}term=${req.body.term || 'beatles'}
    &entity=${req.body.album || 'album'}
    &medium=${req.body.medium || 'music'}`)
    .then((apiResponse) => {
      return apiResponse.json();
    }).then((json) => {
      // console.log(json.results);
      res.results = json.results;
      next();
    });
}

module.exports = {
  search
};
