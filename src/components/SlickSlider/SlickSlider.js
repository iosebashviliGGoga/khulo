import React, { useState , useEffect , useContext} from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'


import {SearchContext} from '../Contexts/Context'

function SlickSlider() {
    const {language} = useContext(SearchContext)
    const [karuseli, setKaruseli] = useState([])
    useEffect(() => {
        const link = 'https://khulo.gov.ge/api/banner_carusel.php';
       fetch(link)
      .then((response) => response.json())
      .then((data) => {
    
       // console.log(data)
       // setExactNews(data[id])
        setKaruseli(data)
       
       // console.log(data.სიახლეები)
       // console.log(Object.entries(data.სიახლეები))
    
       
       // console.log(data)
       // console.log('news', news)
        
       // console.log('object keys menu', Object.keys(menu))
       // console.log('object entries news', Object.entries(data))
       
     
       });
      // console.log('news', news)
      // console.log('news 0', news[0])
    
    
      },[])
      



    // SLIDER

   
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
      const [sliderRef, setSliderRef] = useState(null)
   
  return (
    <>
   <div className='content'>
      
      <Slider ref={setSliderRef} {...sliderSettings}>
     
        { karuseli.length? [...karuseli].reverse().map((item,index)=>{

        return <div
        key={item.id}
            id={index}
             >
            <div className="image-gradient"></div>
              <img src={`https://khulo.gov.ge/${item.img}`} alt="photos" className='slider_image' />
   
            <div className="carouselText margin-280px">
                
                <span>
                 
              {language ==1 ? item.title_geo  :   ""}
              {language ==2 ? item.title_eng  :   ""}
              {language ==3 ? item.title_ru  :   ""}
                  </span>
         
             
        
            </div>
            <button className='margin-280px'> <a href={item.url} target='blank'>{language ==1 ? " ვრცლად"  :   ""}
              {language ==2 ? " see more"  :   ""}
              {language ==3 ? " узнать больше"  :   ""}  </a> </button>
   



  

</div>

}) : " "}
      </Slider>
      
    </div>
    
    
    </>
  )
}

export default SlickSlider