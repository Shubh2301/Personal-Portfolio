import React, { useEffect, useState } from 'react'
import {getFileStructure} from "../data/files.js"
import FileTreeItem from './explorer/FileTreeItem.jsx';



const Explorer = ({activeTab}) => {
  const[files,setFiles]=useState(getFileStructure(activeTab));
  const [selectedFile,setSelctedFile]=useState(null)

  useEffect(()=>{
    setFiles(getFileStructure(activeTab));
    setSelctedFile(null)
  },[activeTab])

  const handleFileSelect=(file)=>{
    setSelctedFile(file)
  }
  return (
    <div className='bg-gray-800 h-screen overflow-y-auto'>
        <div className='p-2'>
            <div className="text-sm uppercase tracking-wide text-gray">
               Explorer
            </div>
            <div className='space-y-1'>
              {
                files.map((file)=>{
                return <FileTreeItem key={file.name} item={file} level={0} onSelect={handleFileSelect} selectedFile={selectedFile}/>
                })
              }

            </div>

        </div>
    </div>
  )
}

export default Explorer;