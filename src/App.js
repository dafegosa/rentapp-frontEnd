import './App.css'
import BigCarousel from './components/BigCarousel'
import Header from './components/Header'
import LargeCard from './components/LargeCard'

function App() {
  return (
    <div style={{ background: '#e8e8e8' }}>
      <Header />
      <BigCarousel />
      <LargeCard />
    </div>
  )
}

export default App
