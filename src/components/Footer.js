import React  , {useState, useEffect , useContext}from 'react'
import { Link } from 'react-router-dom'

import {FaAngleRight} from 'react-icons/fa'
import { FaArrowAltCircleUp } from 'react-icons/fa'
import logo from '../images/logo.png'
import {SearchContext} from './Contexts/Context'

function Footer() {
  const {language} = useContext(SearchContext)
  const goToTop = () =>{

    window.scrollTo({top: 0, behavior: 'smooth'})
}


const [subscribe , setSubscribe] = useState('')
const [menu,setMenu] = useState({})
 
useEffect(() => {
  const link = 'https://khulo.gov.ge/api/site_menu1.php';
 fetch(link)
.then((response) => response.json())
.then((data) => {


  setMenu(data.menu)
 
//  console.log('menu', menu)
  
 
//  console.log('object entries', Object.entries(menu))
  // Object.entries(menu).map(item =>{
   
  //   if(item[1].level == 1)
  //   console.log('entries item', item[1].name_eng , item[1].level)
  // })

 });



},[])

function handleClick() {
    
  // Send data to the backend via POST
  fetch('https://khulo.gov.ge/api/subscribe.php', {  // Enter your IP address here

    method: 'POST', 
    
    body: JSON.stringify(subscribe) // body data type must match "Content-Type" header

  })
  
  
}


  return (
    <div className='footer'>
      
      <div className="topFooter padding-280px">
      
      <div className="">
     <Link to='/links'>
       <img src={require('../images/Group 273.png')} alt="" />
     </Link>
      </div>
      
      <div className="">
      <Link to='/sajaroInfo'>
        <img src={require('../images/Group 272.png')} alt="" />
      </Link>
      </div>
      <div className="">
      <img src={require('../images/Group 271.png')} alt="" />
      </div>
      
      <div className="">
        <Link to='/writeMessage'>
          <img src={require('../images/Group 270.png')} alt="" />
        </Link>
      </div>
      </div>
      <div className="bottomFooter ">
        <div className="footer-gmail margin-280px">
          <div className="">
            <span>
              {language == 1 && '??????????????? ??????????????? ?????????????????? ??????.?????????????????? ??????????????????????????????'}
              {language == 2 && 'Get all the news via Email'}
              {language == 3 && '?????????????????? ?????? ?????????????? ???? ?????????????????????? ??????????'}
              </span>
          </div>
          <div className="">
            <form action="">
            <input type="text" name="" id="" placeholder={`${language == 1 ? '??????.???????????????' : ""}${language == 2 ? 'Email' : ""}${language == 3 ? '????. ??????????' : ""}`} onChange={e => setSubscribe(e.target.value)}/>
            </form>
           
          </div>
          <div className="">
            <button style={{cursor: "pointer"}} onClick={handleClick} >
            {language == 1 && ' ????????????????????????'}
              {language == 2 && 'Subscribe'}
              {language == 3 && '??????????????????????????'}
             
            </button>
          </div>
        </div>
        <div className="footer-nav padding-280px">
       {Object.entries(menu).length &&   Object.entries(menu).map((item) =>{
          if(item[1].parent_id == 1){
            return <div className="">
              <span>
              {language == 1 && item[1].name_geo}
              {language == 2 && item[1].name_eng}
              {language == 3 && item[1].name_ru}
                
                
              </span>
                { Object.entries(menu).map((qveItem) =>{
                  if(item[1].cat_id == qveItem[1].parent_id && qveItem[1].level == 2){
                    return <span><Link to={`/${qveItem[1].slug}`}>
                       <FaAngleRight/>
                       
                       {language == 1 && qveItem[1].name_geo}
                       {language == 2 && qveItem[1].name_eng}
                       {language == 3 && qveItem[1].name_ru}
                       
                       </Link></span>
                  }
                })}
            </div>
          }
       })}
         
        </div>
        <div className="credits padding-280px">
          <div className="">
            <img src={logo} alt="" />
          </div>
          <div className="">
            <span>  
            &copy; {language == 1 && `??????????????? ?????????????????? ????????????????????? 2022`}
             {language == 2 && 'All rights reserved'}
            {language == 3 && '?????? ?????????? ????????????????'}

            </span>
          </div>
          <div className="">
            <span>Created by <a href='https://proservice.ge/' target='blank'> ProService</a> </span>
          </div>
          
        </div>
        <div className="goToTop" onClick={goToTop}>
            <FaArrowAltCircleUp/>
          </div>
      </div>


    </div>
  )
}

export default Footer