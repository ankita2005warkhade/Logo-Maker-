import React from 'react'
import { Button } from './ui/button'
import { Download } from 'lucide-react'

function Header({DownloadIcon}) {
  return (
    <div  className=' p-4 shadow-sm border flex place-content-between  items-center  '>
         <img src='public\logo.svg'/>
      <Button className='flex gap-2 items-center' 
      onClick={()=>DownloadIcon(Date.now())}
      > <Download className='h-4 w-4'/>Download</Button>
        
    </div>
   
  )
}

export default Header

