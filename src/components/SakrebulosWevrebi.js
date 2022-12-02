import React from 'react'
import {motion} from 'framer-motion'


import {FaPhoneAlt} from 'react-icons/fa'
function SakrebulosWevrebi() {
  return (
    <motion.div
    intial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{opacity: 0}}>
      
      <div className="news-container margin-280px">
        <header>
          <span className='big'> საკრებულო</span>
          <span>საკრებულოს წევრთა სია</span>
        </header>
        <div>
          
          <div className='sakrebulo-landing'>
            <div className="landing-container">
            <div className="wevri">
                <div className="">
                    <span>რევაზ ბოლქვაძე</span>
                    <span className='green'>ვაშლოვნის მმაჟორიტარული ოლქი</span>
                </div>
                <div className="middle">
                <span> "ქართული ოცნება დემოკრატიული საქართველოსთვის"</span>
                </div>
                <div className="">
                    <span> <FaPhoneAlt/>+995 598 23 22 66</span>
                </div>
            </div>
            <div className="wevri">
                <div className="">
                    <span>რევაზ ბოლქვაძე</span>
                    <span className='green'>ვაშლოვნის მმაჟორიტარული ოლქი</span>
                </div>
                <div className="middle">
                <span> "ქართული ოცნება დემოკრატიული საქართველოსთვის"</span>
                </div>
                <div className="">
                    <span> <FaPhoneAlt/>+995 598 23 22 66</span>
                </div>
            </div>
            <div className="wevri">
                <div className="">
                    <span>რევაზ ბოლქვაძე</span>
                    <span className='green'>ვაშლოვნის მმაჟორიტარული ოლქი</span>
                </div>
                <div className="middle">
                <span> "ქართული ოცნება დემოკრატიული საქართველოსთვის"</span>
                </div>
                <div className="">
                    <span> <FaPhoneAlt/>+995 598 23 22 66</span>
                </div>
            </div>
            
            </div>
          </div>
          <div className="presscenter-info">
              <span >საკრებულოს თავმჯდომარე</span>
              <span>საკრებულოს თავმჯდომარის მოადგილე</span>
              <span>საკრებულოს აპარატი</span>
              <span>საკრებულოს ბიურო</span>
              <span >საკრებულოს წევრები</span>
              <span className='active'>საკრებულოს წევრთა სია</span>
              <span>საკრებულოს კომისიები</span>
              <span>საკრებულოს ფრაქციები</span>
              <span>ხულოს მუნიციპალიტეტის ბიუჯეტი</span>
              <span>სამართლებრივი აქტები</span>
              <span>კონკურსები</span>
            </div>
        </div>


          
      </div>



      </motion.div>
  )
}

export default SakrebulosWevrebi