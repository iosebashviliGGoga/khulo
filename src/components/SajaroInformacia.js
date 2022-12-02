import React , {useState, useEffect} from 'react'
import {motion} from 'framer-motion'

import { Link } from 'react-router-dom'
import pdf from '../images/collection-pdf.png'
function SajaroInformacia() {
  const [news,setNews] = useState({})
  useEffect(() => {
    const link = `https://khulo.gov.ge/api/legal_acts.php`;
   fetch(link)
  .then((response) => response.json())
  .then((data) => {

    // console.log(data)
    setNews(data)
   // console.log(data)
   // console.log('news', news)
    
   // console.log('object keys menu', Object.keys(menu))
   // console.log('object entries აქტები', Object.entries(data).map((item,index)=> console.log(item,index)))
    
 
   });
  // console.log('news', news)
  // console.log('news 0', news[0])
   

 
  },[])
 
  return (
    <motion.div
    intial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{opacity: 0}}>
    <div className="sakrebulo-landing">
      <div className="landing-container">
      <div className="sajaroInfo margin-280px">
        <header>ბიუჯეტი</header>
        {Object.entries(news).length && Object.entries(news).map((item,index)=>{
    
   
      
    return Object.entries(item[1]).map((gank,index) =>{
     if(gank[1].geo.legal_acts_menu.includes('ბიუჯეტი'))
      return <div className="">
     <a href={`https://khulo.gov.ge${gank[1].geo.pdf}`} target='blank'>
      <span key={index}>{gank[1].geo.pdf_title}</span>
   
        <img src={pdf} alt="" />
        
    </a>
  </div>
    })
  
})}
       
       
    </div>
      </div>
    </div>
   
    
    
    
    </motion.div>
  )
}

export default SajaroInformacia