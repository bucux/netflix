
import './App.css'
import Section from './comps/section'
import images from './assets/images.json'

function App() {

  console.log(images)

  return (
    <div id="cont0">
      <img src="logo-netflix.png" alt="logo netflix" style={{width: "150px"}}/>
      { images.map((categ, index)=> (<Section key={index} categ={categ}></Section>))}
    </div>
  )
}

export default App
