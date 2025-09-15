import './App.css'

// Named imports: Destructured from the react-router-dom library
// Routes: Container component for all route definitions
// Route: Individual route definition component
import {Routes, Route} from 'react-router-dom'
import Banner from './components/banner/Banner'
import Header from './components/header/Header'


// Relative path: ./pages/Women resolves to src/pages/Women.tsx
import Women from './pages/Women'
import Men from './pages/Men'
import Shoes from './pages/Shoes'

import Footer from './components/footer/Footer'


// : React.FC: TypeScript type annotation
// React.FC = React Function Component
const App: React.FC = () => {
  return (
<>
    <Banner />
   <Header />
    <Routes>
      
      {/* Route: Defines URL path / maps to <Home /> component */}
      <Route path="/" element={<Women />} />
      <Route path="/women" element={<Women />} />
      <Route path="/men" element={<Men />} />
      <Route path="/shoes" element={<Shoes />} />
    </Routes>
    <Footer />

    </>
  )
}

export default App
