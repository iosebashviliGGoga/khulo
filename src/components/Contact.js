import React  , {useRef}from 'react'
import { motion } from 'framer-motion'

import emailjs from '@emailjs/browser'

import {FaPhoneAlt ,FaEnvelope , FaMapMarkerAlt, FaFacebookF, FaYoutube, FaInstagram }from 'react-icons/fa'

function Contact() {
    const goToTop = () =>{

        window.scrollTo({top: 0, behavior: 'smooth'})
    }
    const form = useRef();
    // const client = new SMTPClient({

    // })


    const sendEmail = (e) =>{
        e.preventDefault();
        
        emailjs.sendForm('service_orybe8g','template_i232rai' , form.current , '0fSYO3iBkEcEh3E8Y' ).then
        (result=> console.log(result),
        (error => console.log(error))
        )
        goToTop();
        e.target.reset();
    }
  return (
    <motion.div
    intial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{opacity: 0}}>
       
       <div className="contact">
        <img src={require('../images/contact.png')} alt="contact" />

        <div className="contact-us margin-280px">
            <span>კონტაქტი</span>
            <span>დაგვიკავშირდი</span>
            <form ref={form} onSubmit={sendEmail}>
            <div className='contact-us-halfs'>
            
                <div className="contact-form">
                       
                            <input type="text" placeholder='სახელი , გვარი' name='name' required/>
                                <div className="input-half">
                                    <input type="text" placeholder='ელ.ფოსტა' name='Email' required/>
                                    <input type="text" placeholder='ტელეფონი' name='mobile' required/>
                                </div>
                            
                             <textarea required name="message" className='msg' id="" cols="8" rows="5" placeholder='შეტყობინება'></textarea>
                        
                </div>
                <div className="contact-location">
                
                    <span><FaMapMarkerAlt/> ტბელ აბუსერისძის ქ. N1, დაბა ხულო, აჭარა, საქართველო</span>
                    <span><FaPhoneAlt/>+995 551 00 52 72</span>
                    <span><FaEnvelope/>info@khulo.gov.ge</span>
                </div>
            </div>
            <div className="contact-buttons">
                <button type='submit' value='send' >გაგზავნა  </button>
                <div className="contact-buttons-socials">
                   
                     <span>გამოგვყვევით: </span>
                     <a href='https://www.facebook.com/KhuloCityHall' target='blank'>
                         <FaFacebookF/>
                     </a>
                     <a href='https://www.youtube.com/channel/UCCP3nGfRLDohB8GWsDmM8mA' target='blank'>
                            <FaYoutube/>
                     </a>
                      <a href='https://www.instagram.com/khulocityhall/' target='blank'>
                        <FaInstagram/>
                      </a>
                </div>
            </div>
            </form>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10140.016993268577!2d42.30507899434628!3d41.6461371006633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x405d45f7e417a4d9%3A0xe4b8ffa127004920!2sKhulo!5e1!3m2!1sen!2sge!4v1665652769057!5m2!1sen!2sge" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='khulo'></iframe>
       </div>
    
    
    
    </motion.div>
  )
}

export default Contact