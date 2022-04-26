import Video from '../models/Video'

const renderVideoCard = (list: Video | any, container: HTMLElement) => {
  const htmlContent = `
    <div class="video-thumbnail">
    <a id="modal-${list.id}" href="video.html?id=${list.id}">
    <div class="video-banner">
        <img src="https://www.dailymotion.com/thumbnail/video/${list.id}">
    <div>
    <h3>${list.title}<h3>
    </a>
  `

  container.innerHTML += htmlContent
}

export default renderVideoCard
