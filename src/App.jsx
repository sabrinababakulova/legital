import  { useState } from 'react'
// import Header from "./components/Header";
import Intro from './components/Intro'
import About from './components/About'
import Services from './components/Services'
import Stages from './components/Stages'
import Team from './components/Team'
import Reviews from './components/Reviews'
import Consultation from "./components/Consultation";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import './assets/icons/style.css'
import SliderImages from './components/TeamSlider.jsx/SliderImages'
import TeamSlider from './components/TeamSlider.jsx/TeamSlider'
import RightsBlock from './components/RightsBlock'
import Header from './components/Header'

const App = () => {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0)

    const handleSlideChange = (swiper) => {
        setActiveSlideIndex(swiper.activeIndex)
    }

    return (
        <div className="App">
            <Header />
            <Intro />
            <About />
            <Services />
            <Stages />

            <Team />
            <Reviews />
            <Consultation/>
            <Contacts/>
            <Footer/> 
            <RightsBlock/>
            {/*

      <Contacts/>
      <Footer/> */}
        </div>
    )
}

export default App
