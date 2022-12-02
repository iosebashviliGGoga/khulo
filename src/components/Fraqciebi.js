import React , {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'

import { useContext } from 'react'
  import { SearchContext } from './Contexts/Context'
import {Helmet} from 'react-helmet-async'
function Fraqciebi() {
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

    const [members, setMembers] = useState([])
    useEffect(() => {
      const link = `https://khulo.gov.ge/api/members.php?`;
     fetch(link)
    .then((response) => response.json())
    .then((data) => {
  
     // console.log(data)
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

    const fullList = (string) =>{

      const tavmjdomare = 
      <ol>

        { members.length ?  members.filter(news => news.geo.title.includes(search)).map((item)=>{
          if(item.geo.fraction){
            if(item.geo.fraction.includes(string)){
         
         
              if(item.geo.fraction_position && item.geo.fraction_position.includes('თავმჯდომარე')){
              
                return <li>{item.geo.title}  -   {item.geo.fraction_position}</li>
              }
            }
          }
      
      })  :  ""}
      { members.length ?  members.filter(news => news.geo.title.includes(search)).map((item)=>{
        if(item.geo.fraction){
          if(item.geo.fraction.includes(string)){
         
            if(item.geo.fraction_position && item.geo.fraction_position.includes('თავმჯდომარის მოადგილე') ){
           
              return <li>{item.geo.title}  -   {item.geo.fraction_position}</li>
            }
          }
        }
       
      })  :  ""}

      </ol>
      
     
      const wevrebi = 
      <ul>   { members.length ?  members.filter(news => news.geo.title.includes(search)).map((item)=>{
        if(item.geo.fraction){
          if(item.geo.fraction.includes(string) ){
         
            if(item.geo.fraction_position && (!item.geo.fraction_position.includes('თავმჯდომარე')  && !item.geo.fraction_position.includes('თავმჯდომარის მოადგილე'))){
             
              return <li>{item.geo.title}  -   {item.geo.fraction_position}</li>
              
            }
            if(!item.geo.fraction_position){
              return <li>{item.geo.title} -  ფრაქციის წევრი</li>
            }
          }
        }
       
      })  :  ""}   </ul>
      
      
     
      return [tavmjdomare , wevrebi]

    }

    
  return (
    <motion.div 
    intial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{opacity: 0}}>
      
       <div className="news-container margin-280px">
        <header>
          <span className='big'> საკრებულო</span>
          <span>საკრებულოს ფრაქციები</span>
          <Helmet>
          <title>
         საკრებულოს ფრაქციები
          </title>
        </Helmet>
        </header>
        <div>
          
          <div className='sakrebulo-landing'>
            <div className="landing-container">
            <div className="fraqciebi">
                <div>
                    <span style={{color: '#0070E1'}}>ფრაქცია "ქართული ოცნება - დემოკრატიული საქართველოსთვის" </span>
                    <div className="list">
                    {fullList('ქართული ოცნება')}
                    </div>
                </div>
                <div>
                    <span style={{color: '#F1394C'}}>ფრაქცია "ერთიანი ნაციონალური მოძრაობა" </span>
                    <div className="list">
                    {fullList('ერთიანი ნაციონალური მოძრაობა')}
                    </div>
                </div>
                
                 <div>
                 
                    <span style={{color: '#AC00DF'}}>ფრაქცია "ხულო - საქართველოსთვის" </span>
                    <div className="list">
                    {fullList('ხულო საქართველოსთვის')}
                    
                    </div>
                    
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

export default Fraqciebi