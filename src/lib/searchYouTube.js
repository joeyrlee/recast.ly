var searchYouTube = ({query, max = 5}, callback) => {
  $.get('https://www.googleapis.com/youtube/v3/search', {
    part: 'snippet',
    q: query,
    maxResults: max,
    type: 'video',
    videoEmbeddable: 'true'
  })
  .done(({items}) => {
    if (callback) {
      callback(items);
    }
  })
  .fail(({responseJSON}) => {
    responseJSON.error.errors.forEach((err) =>
      console.error(err)
    );
  });
};


window.searchYouTube = searchYouTube;
