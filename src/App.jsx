import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail'
import Box from './pages/Box'
import About from './pages/About'
import FAQ from './pages/FAQ'
import YourPictures from './pages/YourPictures'
import Contact from './pages/Contact'
import Story from './pages/Story'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/product/:slug" element={<ProductDetail />} />
        <Route path="/box" element={<Box />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/your-pictures" element={<YourPictures />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/story" element={<Story />} />
      </Route>
    </Routes>
  )
}
