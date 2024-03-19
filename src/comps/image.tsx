
import './css/image.css'

export default function Image({url} : {url: string}) {
  return (
    <img className = "imageFilm" src={url}/>
  )
}
