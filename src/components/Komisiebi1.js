import React, { useState , useEffect } from 'react'
import {useParams , Link} from 'react-router-dom'
import {motion} from 'framer-motion'
import { Helmet } from 'react-helmet-async'

import {FaPhoneAlt} from 'react-icons/fa'
import KomisiaImage from '../images/komisiebi.png'
function Komisiebi1() {
    
    const { id } = useParams();
    
    

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
          return <span key={index} className={window.location.href.includes(qveItem[1].slug)? "active" :""}>
                    <Link to={`/${qveItem[1].slug}`}>
                    {qveItem[1].name_geo}
                    </Link>
                 </span>
        } 
        
      })
     }
    })  : "LOADING"


    const [komisiaMembers, setKomisiaMembers] = useState([])
    const [members, setMembers] = useState([])
    useEffect(() => {
      const link = `https://khulo.gov.ge/api/members.php?`;
     fetch(link)
    .then((response) => response.json())
    .then((data) => {
  
     
      data.map((item)=>{
        if(item.geo.comision==id){
          console.log(item)
         komisiaMembers.push(item)
        }
      })
      setMembers(data)
      // console.log(data)
     // console.log('news', news)
      
     // console.log('object keys menu', Object.keys(menu))
      //console.log('object entries news', Object.entries(data))
    // console.log(Object.entries(data).length)
   
     });
    // console.log('news', news)
    // console.log('news 0', news[0])
    // console.log(JSON.parse(localStorage.getItem('languageLink')))
  
    //console.log('sheicvala!')
    
    },[])
  return (
    <motion.div
    intial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{opacity: 0}}>
    
    <div className="news-container margin-280px">
        <header>
          <span className='big'> საკრებულო</span>
          <span>საკრებულოს კომისიები</span>
        </header>
        <div>
          
          <div className='sakrebulo-landing'>
            <div className="landing-container">
             
            <div className="komisia">
                    <div className="">
                      {komisiaMembers.length ?  komisiaMembers.map((item,index)=>{
                          if(item.geo.chairman == 1  ){
                           
                           
                            return   <>
                                      <span>{item.geo.title}</span>
                                      <span>{item.geo.comision}</span>
          <Helmet>
          <title>
          {item.geo.comision}
          </title>
        </Helmet>
                                      <div className="half">
                                          <span>{item.geo.email}</span>
                                          <span><FaPhoneAlt/> {item.geo.mobile}</span>
                                      </div>
                                      <header>კომისიის წევრები</header>
                                      {komisiaMembers.map((item)=>{
                                        if(item.geo.chairman == 0){
                                          console.log(item , 'member')
                                          return  <> <span>{item.geo.title}</span>
                                                    
                                                    </>
                                        }
                                      })}
                                      
                                      </>   
                          }



                      })   : "loading members"}
                      
                        
                       
                    </div>

                    <div className="">
                        <img src={KomisiaImage} alt="komisiaimage" />
                    </div>
                </div>
              
              
            
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

export default Komisiebi1