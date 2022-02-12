import './index.css'
import { useState } from 'react'
import Canvas from 'html2canvas'
//import confetti from 'canvas-confetti'

export default function App() {

  const [lineOne, setLineOne] = useState('')
  const handleChangeLineOne = (e) => {
    setLineOne(e.target.value)
  }

  const [lineTwo, setLineTwo] = useState('')
  const handleChangeLineTwo = (e) => {
    setLineTwo(e.target.value)
  }

  const [img, setImg] = useState('')
  const handleChangeImg = (e) => {
    setImg(e.target.value)
  }

  const [name, setName] = useState('')
  const handleChangeNameMeme = (e) => {
    const NAME = prompt('Enter your name')
    setName(NAME)
    //alert(`Name Seted!! with ${ name || NAME } `)
  }

  const onClickDownload = (e) => {
    Canvas(document.querySelector('.meme'))
    .then(canvas => {
      const Img = canvas.toDataURL('image/jpg')
      const link = document.createElement('a')
      link.href = Img
      name == null || name == undefined || name == ''
        ? link.download = 'download.jpg'
        : link.download = `${name}.jpg`
      link.click()
    })
  }

  return (
    <div className="App">

      <h1 className="PageName" >Meme Creator</h1>

      <div className="container__select" >
        <select className="selector" onChange={handleChangeImg} >
          <option default value="" >Select meme...</option>
          <option value="fire">Fire</option>
          <option value="futurama">Futurama</option>
          <option value="history">History</option>
          <option value="matrix">Matrix</option>
          <option value="philosoraptor">Philosoraptor</option>
          <option value="smart">Smart Guy</option>
          <option value="jerry">Jerry</option>
          <option value="devil">Devil</option>
          <option value="brain">Brain</option>
          <option value="decisions">Decisions</option>
          <option value="executive_chieff">Executive Chieff</option>
          <option value="before_after">Before After</option>
          <option value="homer">Homer</option>
          <option value="wallace">Wallace</option>
        </select>
      </div>

      <div className="container__int" >
        <input className="int int-1" onChange={handleChangeLineOne} type="text" placeholder="Text 1" />
        <input className="int int-2" onChange={handleChangeLineTwo} type="text" placeholder="Text 2" />
        <button className="btn btn-name" onClick={handleChangeNameMeme}>
          <i className="far fa-keyboard"></i>
        </button>
        <button className="btn btn-download" onClick={onClickDownload}>
          <i className="fas fa-arrow-down"></i>
        </button>
      </div>
      <div className="container">
        <span className="meme ln-1" >{ lineOne }</span>
        <span className="meme ln-2" >{ lineTwo }</span>
        <img className="meme" src={`/src/img/memes/${img}.jpg`} alt="" />
      </div>
    </div>
  )
}