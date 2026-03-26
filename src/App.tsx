import { Route, Routes } from 'react-router-dom'
import Home from '@/pages/Home'
import SymbaroumEditor from '@/pages/SymbaroumEditor'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sistemas/symbaroum" element={<SymbaroumEditor />} />
    </Routes>
  )
}

export default App
