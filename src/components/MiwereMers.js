import React , {useRef , useState}from 'react'
import emailjs from '@emailjs/browser'

import {motion} from 'framer-motion'
import miwereMers from '../images/miweremers.png'



function MiwereMers() {
  const goToTop = () =>{

    window.scrollTo({top: 0, behavior: 'smooth'})
}


 
  


const form = useRef();
  const sendEmail = (e) =>{
    e.preventDefault();
    
    emailjs.sendForm('service_orybe8g','template_i232rai' , form.current , '0fSYO3iBkEcEh3E8Y' ).then
    (result=> console.log(result),
    (error => console.log(error))
    )
    goToTop();
    e.target.reset();
}



const hiddenFileInput = useRef(null);
  
// Programatically click the hidden file input element
// when the Button component is clicked
const handleClick = event => {
  hiddenFileInput.current.click();
};  // Call a function (passed as a prop from the parent component)
// to handle the user-selected file 
const handleChange = event => {
  const fileUploaded = event.target.files[0];
  console.log(event)
};
  return (
   <motion.div
   intial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{opacity: 0}}>
   
      <div className='miwereMers padding-280px'>
       
       <span className='header'>მიწერე მერს</span>
       <div>
        <div className='miwereMers-container'>

        <form ref={form} onSubmit={sendEmail}>
           <span>შეავსეთ ველები და მოგვწერეთ თქვენი კომენტარი</span>
           <input type="text"  placeholder='მიწერე ხულოს მერს' />
           <input type="text"  placeholder='სახელი გვარი' required/>
           <input type="text"  placeholder='პირადი ნომერი' required />
           <input type="text"  placeholder='ელ.ფოსტა'/>
           <input type="text"  placeholder='ტელეფონი' required/>
           <input type="text"  placeholder='ფაქტობრივი მისამართი' required/>
           <div class="mb-6 pt-4">
        <label className="formbold-form-label formbold-form-label-2">
          ფაილის ატვირთვა
        </label>

        <div className="formbold-mb-5 formbold-file-input">
          <input type="file" name="file" id="file"  ref={hiddenFileInput}
        onChange={handleChange}/>
          
           
             
              <span className="formbold-browse"> არჩევა </span>
            
          
        </div>
        </div>
           <textarea name="" id="" cols="20" rows="10" placeholder='შეტყობინება' required></textarea>
           <button className='miwereMers-submit' type='submit'>გაგზავნა</button>
           
        </form>

        </div>
        <div className='miwereMers-container'>
         <img src={miwereMers} alt="" />
         <div className="miwereMers-info">
          <span className='header'>ხულოს მუნიციპალიტეტის მერია</span>
          <span>+995 551 00 52 72</span>
          <span>ტბელ აბუსერისძის ქუჩა,N1 . დაბა ხულო,აჭარა ,საქართველო</span>
         </div>
        </div>
       </div>
       
       
     </div>
   </motion.div>
  )
}

export default MiwereMers