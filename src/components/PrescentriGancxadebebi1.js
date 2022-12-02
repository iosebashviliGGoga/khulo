import React, { useState , useEffect } from 'react'
import {useParams , Link} from 'react-router-dom'
import { motion } from 'framer-motion'






import { FaFacebookF , FaTwitter} from 'react-icons/fa'
import {FacebookShareButton, TwitterShareButton} from 'react-share'
function PrescentriGancxadebebi1() {
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

  //  console.log('სიახლეები', data.განცხადებები)
    setExactNews(data.განცხადებები[id].geo)
    setMoreNews(data.განცხადებები)
  //  console.log('data ID',data[id])
  //  console.log('data' , data)
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
            return  <Link to={`/ganckhadebebi/${news[0]}`}><div className="landing-items-container-infos" id={news.id} key={news.id}>
            <div className='new-image-wrapper'>
            <img src={'https://khulo.gov.ge/'+ news[1].geo.img} alt="" />
            </div>
            <div>
              <span className='time'>{news[1].geo.date}</span>
              <span className='header'>{news[1].geo.title}</span>
              <span className='vrclad'><Link to={`/ganckhadebebi/${news[0]}`}>ვრცლად</Link></span>
            </div>
          </div></Link>

        }
     }) : "loading"

     

     
    return (
    <motion.div
    intial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{opacity: 0}}>
    


    <div className="news1-container margin-280px">
    <header>
          <span className='big'> პრესცენტრი</span>
          <span>განცხადებები</span>
    </header>
    <div className="main">
        <div>
            <div className="main-picture">
                <img src={'https://khulo.gov.ge/'+exactNews.img} alt="" />
                <span className='time'>{exactNews.date}</span>
                <span className='header'>{exactNews.title}</span>
            </div>
            <div className="main-content">
                
                <span className='main-content-text'dangerouslySetInnerHTML={{__html: exactNews.text ? exactNews.text.replaceAll('<img', '<img tabIndex="-1"') : ""}}></span>
                
                

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
        <div className="moreNews">
            <span>სხვა განცხადებები</span>
            {newsList}
        </div>

    </div>


    </div>







    </motion.div>
  )
}

export default PrescentriGancxadebebi1