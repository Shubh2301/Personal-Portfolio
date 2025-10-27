import './App.css'
import Sidebar from './component/Sidebar'
import Content from './component/Content'
import Explorer from './component/Explorer'
import { useState } from 'react'


function App() {
  const [activeTab, setActiveTab] = useState("projects")

  return (
    <div className='bg-gray-900 h-screen text-white flex'>
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <Explorer activeTab={activeTab}/>
      <Content activeTab={activeTab}/>

    </div>
  )
}

export default App
