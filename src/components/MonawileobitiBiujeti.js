import React from 'react'
import {motion} from 'framer-motion'
import { Link,  useNavigate } from 'react-router-dom'

import {FaEnvelope, FaPhoneAlt , FaFacebookF , FaTwitter, FaAngleLeft} from 'react-icons/fa'
function MonawileobitiBiujeti() {
    const navigate = useNavigate();
  return (
    <motion.div
    intial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{opacity: 0}}>
        
        <div className="news-container margin-280px">
        <header>
          <span className='big genderuli'> მოქალაქის პორტალი</span>
          <span>მონაწილეობითი ბიუჯეტი</span>
        </header>
        <div>
          
          <div className='sakrebulo-landing'>
            <div className="landing-container">
                <div className="monawileobrivi-biujeti-container">
                    <span>ხულოს მუნიციპალიტეტის მერიაში მოქმედი ჯანმრთელობისა და  სოციალური დაცვის პროგრამები: </span>

                    <span>სოციალურად დაუცველი ფენისათვის ყოველდღიური, ერთჯერადი უფასო კვებით უზრუნველყოფა;</span>
                    <span>მოწყვლადი სოციალური ჯგუფების ბენეფიციართა მედიკამენტებით უზრუნველყოფა;</span>
                    <span>ომისა და თავდაცვის ძალების ვეტერანების, მათთან გათანაბრებული პირების,  ომში დაღუპულთა ოჯახის წევრების და მარჩენალდაკარგულთა სოციალურ-ეკონომიური პირობების გაუმჯობესების შეღავათებით უზრუნველყოფა;</span>
                    <span>მრავალშვილიან ბავშვთა ოჯახებზე (18 წლამდე ასაკის ბავშვები) ერთჯერადი ფინანსური დახმარება;</span>
                    <div className='pdf-container'>
                        <div className="pdf">
                            <span>პდფ ფაილის საზელწოდება გათვლილი ორ ხაზზე. პდფ ფაილის საზელწოდება გათვლილი ორ ხაზზე.</span>
                            <img src={require('../images/collection-pdf.png')} alt="" />
                        </div>
                        <div className="pdf">
                            <span>პდფ ფაილის საზელწოდება გათვლილი ორ ხაზზე. პდფ ფაილის საზელწოდება გათვლილი ორ ხაზზე.</span>
                            <img src={require('../images/collection-pdf.png')} alt="" />
                        </div>
                    </div>
                    <div className='share'>
                    <span className='back' onClick={() => navigate(-1)}>
                <div>
                            <FaAngleLeft/>
                        </div > უკან დაბრუნება
                    </span>
                    <span>გააზიარე:     <FaFacebookF/> <FaTwitter/></span>
                </div>
                </div>
           
               
            
            </div>
          </div>
          <div className="presscenter-info">
              <span >სოციალური პროგრამები</span>
              <span className='active'>მონაწილეობითი ბიუჯეტი</span>
              <span>მერის მრჩეველთა საბჭო</span>
              <span >გენდერული თანასწორობის საბჭო</span>
              <span >საჯარიმო ქვითრები</span>
             
            </div>
        </div>


          
      </div>


    </motion.div>
  )
}

export default MonawileobitiBiujeti