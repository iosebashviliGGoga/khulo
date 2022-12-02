import React, {useState , useEffect}from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ReactPaginate from 'react-paginate'


import {FaArrowLeft , FaArrowRight} from 'react-icons/fa'

import { SearchContext } from './Contexts/Context'
import { useContext } from 'react'
import {Helmet} from 'react-helmet-async'
function News() {
  
 // const [newss, setNewss] = useState(ArrayOfObject)
  
 // console.log(languageLink)
  //console.log(language)
  const [news,setNews] = useState({})

  const {search} = useContext(SearchContext)
  const {language} = useContext(SearchContext)
  useEffect(() => {
    const link = `https://khulo.gov.ge/api/news.php?lang=geo`;
   fetch(link)
  .then((response) => response.json())
  .then((data) => {

   // console.log(data)
    setNews(data.სიახლეები)
   // console.log(data.სიახლეები)
   // console.log(data)
   // console.log('news', news)
    
   // console.log('object keys menu', Object.keys(menu))
  //  console.log('object entries news', Object.entries(data.სიახლეები))
 //  console.log(Object.entries(data).length)
 
   });
  // console.log('news', news)
  // console.log('news 0', news[0])
  // console.log(JSON.parse(localStorage.getItem('languageLink')))

  //console.log('sheicvala!')
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
              const pageCount = Math.ceil(Object.entries(news).length / usersPerPage);
              const pageChange = ({selected}) => {
              setPageNumber(selected)
              }

  


  const newsList = Object.entries(news).length ? Object.entries(news).reverse().filter(news => news[1].geo.title.includes(search)).slice(pagesVisited, pagesVisited + usersPerPage).map((News, i) => 
              
  {
              
    return  <div className="landing-items-container-infos" id={News.id} key={News.id}>
      <Link to={`/news/${News[1].geo.rec_id}`}>
      <div className='new-image-wrapper'>
        <img src={'https://khulo.gov.ge/'+(News[1].geo.thumb_img ? News[1].geo.thumb_img : News[1].geo.img)  } alt="" />
        </div>
        <div>
          <span className='time'>{News[1].geo.date}</span>
          <span className='header'>{News[1].geo.title}</span>
          <span className='vrclad'>ვრცლად</span>
        </div>
      </Link>
    </div>

    }) : "loading news"

  

  return (
    <motion.div
    intial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{opacity: 0}}>
     
      <div className="news-container margin-280px">
        <header>
          <span className='big'> პრესცენტრი</span>
          <span>სიახლეები</span>
          <Helmet>
            <title>სიახლეები</title>
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

export default News