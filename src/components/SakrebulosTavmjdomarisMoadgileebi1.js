import React from 'react'
import {useState , useEffect } from 'react'
import {useParams , useNavigate , Link } from 'react-router-dom'
import { motion } from 'framer-motion';

import { Helmet } from 'react-helmet-async';


import {FacebookShareButton,TwitterShareButton} from 'react-share'
import {FaEnvelope, FaPhoneAlt , FaFacebookF , FaTwitter, FaAngleLeft} from 'react-icons/fa'

function SakrebulosTavmjdomarisMoadgileebi1() {

  const navigate = useNavigate();
    const { id } = useParams();
  //  console.log(id)
    const [member, setMember] = useState({})
   // console.log(member)
  const [loading,setLoading] = useState(true)

    useEffect(() => {
      const link = `https://khulo.gov.ge/api/members.php?`;
     fetch(link)
    .then((response) => response.json())
    .then((data) => {
  
     // console.log('data[id]', data[id])
      setMember(data[id])
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
    setLoading(false)
    },[])
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


    //console.log('object entries member' ,Object.entries(member))
    const memberie = Object.entries(member).length && Object.entries(member).map((item , i) => {
      if(i == 0 )
      return  <div className="news-container margin-280px">
      <header>
        <span className='big'> საკრებულო</span>
        <span className=''>საკრებულოს თავმჯდომარის მოადგილეები</span>
        
        <Helmet>
          <title>
          { member.geo.title}
          </title>
        </Helmet>
      </header>
      <div>
        
        <div className='sakrebulo-landing sakrebulo1'>
          <div className="landing-container">
          <div className='image-wrapper'>
            <img src={'https://khulo.gov.ge/'+ member.geo.img} alt="" />
            <div className="sakrebulo-landing-near-image">
              <h3>{ member.geo.title}</h3>
              <span>{ member.geo.position}</span>
              <div className="">
                <span><FaEnvelope/>{ member.geo.email}</span>
                <span><FaPhoneAlt/>{ member.geo.mobile}</span>
              </div>
              <div className="languages">
                <h3>ენები: { member.geo.language}  </h3> <span></span>
              </div>
            </div>
          </div>
          <div className="sakrebulo-landing-paragraphs">
          <span dangerouslySetInnerHTML={{__html: member.geo.text}}></span>
          
          </div>
          
          </div>
          <div className='share'>
            <span className='back' onClick={() => navigate(-1)}>
            <div>
              <FaAngleLeft/>
            </div > უკან დაბრუნება</span>
            <span>გააზიარე:  
                       <FacebookShareButton url={window.location.href}> 
                         <FaFacebookF/>
                       </FacebookShareButton>
                      <TwitterShareButton url={window.location.href}>
                        <FaTwitter/>
                      </TwitterShareButton>
                         
                      </span>
          </div>
        </div>
        <div className="presscenter-info">
       {presscenterList}
        </div>
      </div>


        
    </div>
    })








    if(loading)return <h1>LOADING</h1>
  return (
    <motion.div
    intial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{opacity: 0}}>

      
      {memberie}
      
     
      
      
      
      
      
      
      
      
      </motion.div>
  )
}

export default SakrebulosTavmjdomarisMoadgileebi1