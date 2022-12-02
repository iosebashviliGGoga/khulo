import React, { useState , useEffect } from 'react'
import {motion} from 'framer-motion'
import greenLogo from '../images/Component 88 – 1.png'



function SasargebloBmulebi() {
    

    const [sajaro, setSajaro] = useState({})
    useEffect(() => {
      const link = 'https://khulo.gov.ge/api/useful_links.php?';
     fetch(link)
    .then((response) => response.json())
    .then((data) => {
  
    //  console.log(data)
     // setExactNews(data[id])
      setSajaro(data)
  
      
     // console.log(data)
     // console.log('news', news)
      
     // console.log('object keys menu', Object.keys(menu))
     // console.log('object entries news', Object.entries(data))
     
   
     });
    // console.log('news', news)
    // console.log('news 0', news[0])
  
  
    
    },[])

    const bmulebii = Object.entries(sajaro).length ?  Object.entries(sajaro).map((item, i )=>{

     // console.log(item)
      return <div className='bmulebi' key={i}>
      <span>{item[1].geo.title}</span> 
    <a href={`https://khulo.gov.ge/${item[1].geo.url}`} target='blank'>
       <img src={greenLogo} alt="" />
    </a>
   
   </div>   

    }) : " LOADING"
    

    
    
  return (
    <motion.div
    intial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{opacity: 0}}>

      
     
      <div className="sasargebloBmulebi margin-280px">
          <span>სასარგებლო ბმულები</span>
          {bmulebii}
      
      </div>
    </motion.div>
  )
}

export default SasargebloBmulebi