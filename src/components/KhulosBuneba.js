import React , {useState, useEffect} from 'react'
import {motion} from 'framer-motion'
import { useNavigate , Link} from 'react-router-dom'
import { FaFacebookF , FaTwitter, FaAngleLeft} from 'react-icons/fa'
import {FacebookShareButton , TwitterShareButton} from 'react-share'
function KhulosBuneba() {
    const navigate = useNavigate();
    const [api,setApi] = useState({})
   
    const [istoriebi,setIstoriebi] = useState({})
    console.log(istoriebi)
      useEffect(() => {
      const link = 'https://khulo.gov.ge/api/site_menu.php';
       fetch(link)
      .then((response) => response.json())
      .then((data) => {

       // console.log('data.menu[1] api' , data.menu[339].content_id)
        setApi(data.menu[394].content_id)
     //  console.log('data.menu[1] api' , data.menu[339].content_id)
      //  console.log('menu', menu)
        
       
      //  console.log('object entries', Object.entries(menu))
    //  console.log(istoriebi)
        Object.entries(data.menu[394].content_id).map((item, index) =>{
          console.log('item',item)
            const apiLink = `https://khulo.gov.ge/api/get_content.php?content_id=${item[index+1]}`
            fetch(apiLink)
            .then((res) => res.json())
            .then((dat)=>{
              setIstoriebi(dat)
              
              console.log(dat)
            })
            return console.log(istoriebi)
          
        


          
         

         
         
        })
     
       });


      
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
          
        if(item[1].level == 1 && item[1].name_geo.includes('ხულო')){
      
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
              <span className='big ' id='meria'> ხულო</span>
              <span>გეოგრაფია და ბუნება</span>
            </header>
            <div>
              
              <div className='sakrebulo-landing'>
                <div className="landing-container flex">
                
                {istoriebi.length && istoriebi.map((item)=>{
                  
                  return <div className='istoria'>
                   
                
                  <div className="sakrebulo-landing-paragraphs">
                  
                    <span dangerouslySetInnerHTML={{__html: item.geo.content.replace("../","https://khulo.gov.ge/")}}></span>
                  
                  
                  </div>
                  <div className='share'>
                      <span className='back' onClick={() => navigate(-1)}>
                          <div>
                              <FaAngleLeft/>
                          </div > უკან დაბრუნება
                      </span>
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
                 })}
                
                
                
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

export default KhulosBuneba