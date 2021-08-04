import request from 'superagent'

const apiKey = 'AIzaSyBRhFq4yyRuakWGiNNyQyoU5sk7aZ61o7Q'

export function getVideos(query) {
  return request
    .get(
      `https://youtube.googleapis.com/youtube/v3/search?autoplay=1&type=video&part=snippet&maxResults=25&q=${query}&key=${apiKey}`
    )
    .then((res) => {
      return res.body.items
    })
    .catch((err) => console.log(err.message))
}
