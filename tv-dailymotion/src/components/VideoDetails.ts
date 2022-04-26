import Video from '../models/Video'

const $ = document.querySelector.bind(document)
const imageNotFound = '/img/image_not_found.png'

const renderVideoDetails = (video: Video, container: HTMLElement) => {
  const htmlContent = `
    <div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;">

    <iframe style="width:25%;height:25%;position:absolute;left:0px;top:0px;overflow:hidden"
      frameborder="0" type="text/html" src="https://www.dailymotion.com/embed/video/${video.id}" 
      width="25%" height="25%" allowfullscreen allow="autoplay">
      
    </iframe>

    <h2>${video.title}</h2>
    
    </div>
  `

  container.innerHTML = htmlContent
}

export default renderVideoDetails
