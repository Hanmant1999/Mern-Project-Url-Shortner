import './App.css'
import { Footer } from './Components/Footer/Footer'
import { Header } from './Components/Header/Header'
import { MainPortion } from './Components/MainPortion/MainPortion'

function App() {
  return (
    <div style={{width:"100%",height:"100%"}}>
    <Header />
    <MainPortion />
    <Footer />
    </div>
  )
}

export default App
