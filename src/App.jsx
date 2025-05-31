import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Header from './components/Header.jsx'
import { Button } from './components/ui/button'
import SideNav from './components/sideNav'
import IconController from './components/IconController'
import Background from './components/BackgroundControllerr'
import BackgroundCounter from './components/BackgroundControllerr'
import BackgroundControllerr from './components/BackgroundControllerr'
import LogoPreview from './components/LogoPreview'
import { UpdateStorageContext } from './context/UpdateStorageContext'
function App() {
 
  const [selectedIndex,setSelectedIndex]=useState(0);
  const [updateStorage,setUpdateStorage]=useState({});

  const [downloadIcon,setDownloadIcon]=useState(null);
  return (
    <UpdateStorageContext.Provider value={{updateStorage, setUpdateStorage}}>
    <div>

      <Header DownloadIcon={setDownloadIcon}/>
      <div className='w-64 fixed'>
        <SideNav selectedIndex={(value)=>setSelectedIndex(value) }/>
       </div>
        
     
      <div className='ml-64  grid grid-cols-1 md:grid-cols-6 '>
          <div className='md:col-span-2 border h-screen shadow-sm p-5 overflow-auto '>
            {selectedIndex==0? <IconController/>:<BackgroundControllerr/>}
           
            
          </div>
           <div className='md:col-span-3 '>
            <LogoPreview downloadIcon={downloadIcon}/>
          </div>
          
      </div>
    </div>
    </UpdateStorageContext.Provider>
  )
}

export default App
