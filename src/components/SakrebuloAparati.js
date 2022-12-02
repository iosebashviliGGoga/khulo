import React , {useEffect,useState}from 'react'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'
import {FaAngleRight} from 'react-icons/fa'
import pdf from '../images/collection-pdf.png'
import {FaEnvelope, FaPhoneAlt } from 'react-icons/fa'
import { Helmet } from 'react-helmet-async'
import { useContext } from 'react'
  import { SearchContext } from './Contexts/Context'
function SakrebuloAparati() {
  const [news,setNews] = useState({})
  const [warmomadgenlebi, setWarmomadgenlebi] = useState([])

   // import { useContext } from 'react'
  //import { SearchContext } from './Contexts/Context'
  // .filter(news => news[1].geo.title.includes(search)).
  const {search} = useContext(SearchContext)
  const {language} = useContext(SearchContext)
    useEffect(() => {
      const link = `https://khulo.gov.ge/api/representatives.php`;
      fetch(link)
     .then((response) => response.json())
     .then((data) => {
     // console.log(data)
      Object.entries(data).map((item,index)=>{
        if(index === 0 ){
          setWarmomadgenlebi(item[1])
         // console.log(item[1])
        }
        
      })
      
     })



     //MODAL is gaketeba, daumtavrebeli 
      // const closeModal = document.querySelectorAll('.closeimg');
      // closeModal.forEach(e =>{
        
      //   e.addEventListener('click' , () => {
      //     console.log(e)
      //     console.log(e.offsetParent)
      //     e.offsetParent.close();
      //   })
      // //  e.attributes.offsetParent.close();
      // })
      // const openModal =  document.querySelectorAll('.openmodal');
      // const modal = document.querySelectorAll('.modal');
      // openModal.forEach(e => {
      //   e.addEventListener('click', () =>{
      //    // console.log(e.lastChild)
      //     e.lastChild.show();
          
      //   })
      // })
     
     
    }, []);
      const warmomadgenlebiList = Object.entries(warmomadgenlebi).length ? Object.entries(warmomadgenlebi).filter(news => news[1].geo.title.includes(search)).map((item,i)=>{

        return  <div className="wevri" key={i}>
            <div className="">
              <span>{item[1].geo.title? item[1].geo.title : 'default header'}</span>
            </div>
            <div className="middle">
              <span>{item[1].geo.position}</span>
            </div>
             
                <div className="">
                    <span> <FaPhoneAlt/>{item[1].geo.mobile}</span>
                </div>
        </div>
        
        
       
     
    }) : " NOT FOUND"
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
        exit={{opacity: 0}}
        >
        
        <div className="news-container margin-280px">
            <header>
            <span className='big'> საკრებულო</span>
        
        <span>საკრებულოს აპარატი</span>
        <Helmet>
          <title>
         საკრებულოს აპარატი
          </title>
        </Helmet>
            </header>
            <div>
              
              <div className='sakrebulo-landing'>
                <div className="landing-container">
                
       
      
        {warmomadgenlebiList}
       
    
                
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

export default SakrebuloAparati