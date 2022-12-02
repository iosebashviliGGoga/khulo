import React from 'react'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'
import {FaAngleRight} from 'react-icons/fa'
function SamartlebriviAqtebi() {
  return (
    <motion.div
    intial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{opacity: 0}}
    >
    
    <div className="news-container margin-280px">
        <header>
          <span className='big'> საკრებულო</span>
          <span>სამართლებრივი აქტები</span>
        </header>
        <div>
          
          <div className='sakrebulo-landing'>
            <div className="landing-container">
              <div className="wrapper">
                <Link to='/gankargulebebi'><span>განკარგულებები <FaAngleRight/></span></Link>
              </div>
              <div className="wrapper">
                <a href=""><span>ბრძანებები <FaAngleRight/></span></a>
              </div>
            
            </div>
          </div>
          <div className="presscenter-info">
              <span>საკრებულოს თავმჯდომარე</span>
              <span>საკრებულოს თავმჯდომარის მოადგილე</span>
              <span>საკრებულოს აპარატი</span>
              <span>საკრებულოს ბიურო</span>
              <span >საკრებულოს წევრები</span>
              <span>საკრებულოს წევრთა სია</span>
              <span>საკრებულოს კომისიები</span>
              <span>საკრებულოს ფრაქციები</span>
              <span>ხულოს მუნიციპალიტეტის ბიუჯეტი</span>
              <span className='active'>სამართლებრივი აქტები</span>
              <span>კონკურსები</span>
            </div>
        </div>


          
      </div>

    </motion.div>
  )
}

export default SamartlebriviAqtebi