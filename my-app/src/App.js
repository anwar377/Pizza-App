import React from 'react'
import Header from './components/header/Header'
import Home from './components/home/Home'
import About from './components/about/About'
import Story from './components/story/Story'
import ExploreFood from './components/explore food/ExploreFood'
import Review from './components/review/Review'
import Faq from './components/faq/Faq'
import New from './components/new/New'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Story />
      <ExploreFood />
      <Review />
      <Faq />
      <New />
      <Footer />
    </div>
  )
}

export default App
