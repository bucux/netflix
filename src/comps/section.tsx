
import './css/section.css'
import Image from './image'

type Categ = {
    category: string,
    images: string[]
}

export default function Section({categ} : {categ : Categ}) {

  return (
    <div className='sectionCont0'>
      <h2>{categ.category}</h2>
      <div className='sectionCont1'>
        { categ.images.map((url, index)=> (<Image key={index} url={url}/>))}
      </div>
    </div>
  )
}
