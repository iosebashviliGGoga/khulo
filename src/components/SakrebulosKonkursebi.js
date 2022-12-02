import React , {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

import {motion} from 'framer-motion'
import {FaPhoneAlt } from 'react-icons/fa'
import { useContext } from 'react'
  import { SearchContext } from './Contexts/Context'
function SakrebulosKonkursebi() {
// import { useContext } from 'react'
  //import { SearchContext } from './Contexts/Context'
  // .filter(news => news[1].geo.pdf_title.includes(search))
  const {search} = useContext(SearchContext)
  const {language} = useContext(SearchContext)

    const [menu,setMenu] = useState({})
    useEffect(() => {
        const link = 'https://khulo.gov.ge/api/site_menu1.php';
       fetch(link)
      .then((response) => response.json())
      .then((data) => {
    
       // console.log('data.menu',data.menu)
        setMenu(data.menu)
       
      //  console.log('menu', menu)
        
       
      //  console.log('object entries', Object.entries(menu))
    
        Object.entries(menu).map(item =>{
         
          if(item[1].level == 1)
         { 
          //console.log('entries item', item[1].name_eng , item[1].level)
        }
        })
     
       });
    
    
      
      },[])
      const presscenterList = Object.entries(menu).length ?  Object.entries(menu).map((item,index)=>{
        
      if(item[1].level == 1 && item[1].name_geo.includes('საკრებულო')){
    
        return Object.entries(menu).map((qveItem,index)=>{
          if(qveItem[1].parent_id == item[1].cat_id){
            const windoww = window.location.pathname;
            const result = windoww.split('/').pop();
            const slugg = qveItem[1].slug
            return <span key={index} className={result === slugg? "active" :""}>
                      <Link to={`/${qveItem[1].slug}`}>
                      {qveItem[1].name_geo}
                      </Link>
                   </span>
          }
        })
       }
      })  : "LOADING"
  return (
    <motion.div
    intial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{opacity: 0}}>
         <div className="news-container margin-280px">
        <header>
          <span className='big'> საკრებულო</span>
          <span>კონკურსები</span>
        </header>
        <div>
          
          <div className='sakrebulo-landing'>
            <div className="landing-container">
           
         
            
            </div>
          </div>
          <div className="presscenter-info">
          {presscenterList}
            </div>
        </div>


          
      </div>



    </motion.div>
    
  )
}

export default SakrebulosKonkursebi