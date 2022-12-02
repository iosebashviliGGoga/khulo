import React, { useState , useEffect  , useRef } from 'react'
import {useParams , Link , useLocation} from 'react-router-dom'
import { motion } from 'framer-motion'
import {FacebookShareButton, TwitterShareButton} from 'react-share'
import { Helmet } from 'react-helmet-async'

import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'



import { FaFacebookF , FaTwitter} from 'react-icons/fa'



function News1() {
  const location = useLocation();
  
  
  
    const { id } = useParams();
   // const [news, setNews] = useState(ArrayOfObject[id])
    const [moreNews, setMoreNews] = useState({})

  //  const [news,setNews] = useState({})
    const [exactNews, setExactNews] = useState({})
   
    
 
    
    
  useEffect(() => {
    const link = 'https://khulo.gov.ge/api/news.php?lang=geo';
   fetch(link)
  .then((response) => response.json())
  .then((data) => {

    
    setExactNews(data.სიახლეები[id].geo)
    setMoreNews(data.სიახლეები)
   // console.log('data ID',data.სიახლეები[id].geo)
    
   // console.log(data.სიახლეები[id].geo.text)
   
   // console.log(data)
   // console.log('news', news)
    
   // console.log('object keys menu', Object.keys(menu))
   // console.log('object entries news', Object.entries(data))
   
   
   
   });
  // console.log('news', news)
  // console.log('news 0', news[0])
  
 
  },[])
 

  
   
    const newsList = Object.entries(moreNews).length ? Object.entries(moreNews).reverse().filter(news => id !== news[0]).map((news,i) => 
    
    {   
        if(i <= 1 ){
        
            return  <Link to={`/news/${news[0]}`}><div className="landing-items-container-infos" id={news.id} key={news.id}>
            <div className='new-image-wrapper'>
            <img src={'https://khulo.gov.ge/'+ (news[1].geo.thumb_img ? news[1].geo.thumb_img   : news[1].geo.img)  } alt="" />
            </div>
            <div>
              <span className='time'>{news[1].geo.date}</span>
              <span className='header'>{news[1].geo.title}</span>
              <span className='vrclad'><Link to={`/news/${news[0]}`}>ვრცლად</Link></span>
            </div>
          </div></Link>

        }
     }) : "loading news"


    
     const sliderSettings = {
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 4000,
      speed: 1000,
     // adaptiveHeight: true,
      lazyLoad: 'ondemand',
      fade: true,
      Easing: 'cubic-bezier(0.600, -0.280, 0.735, 0.045)',
      useTransform: true,
      pauseOnHover: false,
      dots: true
    }
     

     
    return (
    <motion.div
    intial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{opacity: 0}}>
   
   
      <Helmet>
      <meta property="og:type"          content="WebSite" />
   
    <meta property="fb:app_id" content="440924728203663"/>
    <meta  property='og:title'  content={exactNews.title}/>
    <meta property="og:url" content={window.location.href}/>
    <meta property="og:description" content=""></meta>
    <meta property="og:image" content={exactNews.title ? `https://khulo.gov.ge/${exactNews.img}` :   "alt"}/>
       
       
    
       <title>{exactNews.title ? exactNews.title :  ""}</title>


       


      </Helmet>
        
    <div className="news1-container margin-280px">
    <header>
          <span className='big'> პრესცენტრი</span>
          <span>სიახლეები</span>
    </header>
    <div className="main">
        <div>
            <div className="main-picture">
                <img src={'https://khulo.gov.ge/'+ (exactNews.thumb_img ? exactNews.thumb_img   : exactNews.img)  } alt="" />
                <span className='time'>{exactNews.date}</span>
                <span className='header'>{exactNews.title}</span>
            </div>
            <div className="main-content">
                
                <span className='main-content-text'dangerouslySetInnerHTML={{__html: exactNews.text ? exactNews.text.replaceAll('<img', '<img tabIndex="-1"').replaceAll('../uploads','https://www.khulo.gov.ge/uploads') : ""}} ></span>

                
             
                

                <span>გააზიარე:  
                       
                         <a href={`https://www.facebook.com/sharer.php?u=https://khulo.gov.ge/uploads_script/share/${id}.html`} rel="noreferrer" target='_blank'>
                          <FaFacebookF/>
                         </a>
                      

                       
                      
                      
                          <a href={`https://twitter.com/intent/tweet?url=https://khulo.gov.ge/uploads_script/share/${id}.html&text=${exactNews.title}`} rel="noreferrer" target='_blank'>
                            <FaTwitter/>
                          </a>
                      
                     

                   
                      
                     
                      
                  </span>
            </div>

        </div>
        <div className="moreNews">
            <span>სხვა სიახლეები</span>
            {newsList}
        </div>

    </div>


    </div>







    </motion.div>
  )
}

export default News1