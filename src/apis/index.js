import request from 'superagent'

export function getVideos(query) {
  return request
    .get(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&key=AIzaSyDYTSVKkDDjUXuSm2RpRsijmO1j2dCe91U`
    )
    .then((res) => {
      return res.body.items
    })
    .catch((err) => console.log(err.message))
}
