import React, {useState , useEffect}from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ReactPaginate from 'react-paginate'
import {DefaultPlayer as video} from 'react-html5video'


import {FaArrowLeft , FaArrowRight , FaPlay} from 'react-icons/fa'
import { useContext } from 'react'
  import { SearchContext } from './Contexts/Context'
import {Helmet} from 'react-helmet-async'
function VideoGalerea() {
  const [menu,setMenu] = useState([])
  // import { useContext } from 'react'
  //import { SearchContext } from './Contexts/Context'
  // .filter(news => news[1].geo.title.includes(search))
  const {search} = useContext(SearchContext)
  const {language} = useContext(SearchContext)
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
    const [videos,setVideos] = useState({})
    useEffect(() => {
      const link = 'https://khulo.gov.ge/api/video.php';
     fetch(link)
    .then((response) => response.json())
    .then((data) => {
  
      
     setVideos(data)
    // console.log(data)
     
     // console.log(data)
     // console.log('news', news)
      
     // console.log('object keys menu', Object.keys(menu))
     // console.log('object entries news', Object.entries(data))
     
   
     });
    // console.log('news', news)
    // console.log('news 0', news[0])
  
   
    },[])
    const presscenterList = Object.entries(menu).length ?  Object.entries(menu).map((item,index)=>{
      
    if(item[1].level == 1 && item[1].name_geo.includes('პრესცენტრი')){
  
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

    

    //pagination 
    const [pageNumber, setPageNumber] = useState(0);
    const usersPerPage = 6;
    const pagesVisited = pageNumber * usersPerPage;
    const pageCount = Math.ceil(videos.length / usersPerPage);
    const pageChange = ({selected}) => {
    setPageNumber(selected)
    }
    
  
  
  
  
  
    
    const newsList = videos.length ?  Object.entries(videos).filter(news => news[1].title_geo.includes(search)).slice(pagesVisited, pagesVisited + usersPerPage).map((news,index) => 
    
               {
               // console.log(news)
                return <a href={news[1].youtube_link} target='blank'> <div className="landing-items-container-infos"  key={index}>
                 
                   <div className='video-wrapper'>
                   <div className='new-image-wrapper'>
                    <iframe src={news[1].youtube_link.replace('youtube.com/watch?v=' , 'youtube.com/embed/').slice(0, (news[1].youtube_link.indexOf('&')-2))} controls id='video' title={news[1].title_geo}></iframe>
                    </div>
                    
                   </div>
                   <div>
                     <span className='time'>{news[1].date_geo}</span>
                     <span className='header'>{news[1].title_geo}</span>
                     <span className='vrclad'><Link to={`/news/${news.id}`}>ვრცლად</Link></span>
                   </div>
                 
                </div>
                </a>
  
                }) :  ""

  return (
    <motion.div
    intial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{opacity: 0}}>
     
      <div className="news-container margin-280px">
        <header>
          <span className='big'> პრესცენტრი</span>
          <span>ვიდეოგალერეა</span>
          <Helmet>
            <title>ვიდეოგალერეა</title>
          </Helmet>
        </header>
        <div>
          
          <div className="landing-container">
            
          {newsList}
          </div>
          <div className="presscenter-info">
            {presscenterList}
            </div>
        </div>


        <div className="pagination">
        <div className="left-space"></div>
      <ReactPaginate 
       previousLabel = {<FaArrowLeft/>}
       nextLabel = {<FaArrowRight/>}
      pageCount = {pageCount}
      onPageChange = {pageChange}
      containerClassName = {"paginationButtons"}
      previousLinkClassName = {"previusButton"}
      nextLinkClassName = { "nextButton"}
      disabledClassName = {"disabledButton"}
      activeClassName = {"activeButton"}
      onClick = {window.scrollTo({top: 0, behavior: 'smooth'})}
      />
      </div>    
      </div>



      </motion.div>
  )
}

export default VideoGalerea