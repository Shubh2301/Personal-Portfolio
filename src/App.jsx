import { useState } from 'react'
import './App.css'
import Sidebar from './component/Sidebar'
import Explore from './component/Explore'
import Content from './component/Content'


function App() {
  const [activeTab, setActiveTab] = useState("projects")

  return (
    <div className='bg-gray-900 h-screen text-white flex'>
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <Explore/>
      <Content activeTab={activeTab}/>

    </div>
  )
}

export default App
