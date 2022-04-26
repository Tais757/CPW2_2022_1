type Video = {
  id: string
  title: string
  channel: string
  owner: string
  thumbnail?: string
}

export default Video


  export const getVideo = (objJson: any): Video => {
    const {
      id,
      title,
      owner,
      channel,
      thumbnail
    } = objJson

    const Videos: Video = {
      id,
      title,
      owner,
      channel
    }

  return Videos
}