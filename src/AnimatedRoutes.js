import React from 'react'
import {Route , Routes, useLocation} from 'react-router-dom'
import {AnimatePresence} from 'framer-motion'


import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Landing from './components/Landing'
import News from './components/News'
import SasargebloBmulebi from './components/SasargebloBmulebi'
import MiwereMers from './components/MiwereMers'
import SajaroInformacia from './components/SajaroInformacia'
import News1 from './components/News1'
import Contact from './components/Contact'
import SakrebuloMembers from './components/SakrebuloMembers'
import SakrebuloMembers1 from './components/SakrebuloMembers1'
import Komisiebi from './components/Komisiebi'
import Komisiebi1 from './components/Komisiebi1'
import Fraqciebi from './components/Fraqciebi'
import SakrebulosWevrebi from './components/SakrebulosWevrebi'
import Header from './components/Header'
import SakrebulosBiuro from './components/SakrebulosBiuro'
import HeaderApi from './components/HeaderApi'
import SamartlebriviAqtebi from './components/SamartlebriviAqtebi'
import MeriaSamsakhurebi from './components/MeriaSamsakhurebi'
import MerisWarmomadgenlebi from './components/MerisWarmomadgenlebi'
//import KhulosIstoria from './components/KhulosIstoria'
import GenderuliTanasworobisSabcho from './components/GenderuliTanasworobisSabcho'
import VideoGalerea from './components/VideoGalerea'
import MonawileobitiBiujeti from './components/MonawileobitiBiujeti'
import Gankargulebebi from './components/Gankargulebebi'
//import KhulosSimbolika from './components/KhulosSimbolika'
//import KhulosBuneba from './components/KhulosBuneba'
//import KhulosKurortebi from './components/KKhulosKurortebi'
//import KKhulosKurortebi from './components/KKhulosKurortebi'
//import KhulosMoqalaqeebi from './components/KhulosMoqalaqeebi'
//import KhulosKultura from './components/KhulosKultura'
import SkhdomisOqmebi from './components/SkhdomisOqmebi'
import SakrebulosSamartlebriviAqtebi from './components/SakrebulosSamartlebriviAqtebi'
import SakrebulosTavmjdomare from './components/SakrebulosTavmjdomare'
import SakrebulosDadgenilebebi from './components/SakrebulosDadgenilebebi'
import BiurosOqmebi from './components/BiurosOqmebi'
import KhulosBiujeti from './components/KhulosBiujeti'
//import PortaliSocialuriProgramebi from './components/PortaliSocialuriProgramebi'
//import PortaliMonawileobitiBiujeti from './components/PortaliMonawileobitiBiujeti'
//import PortaliMerisMrcheveltaSabcho from './components/PortaliMerisMrcheveltaSabcho'
//import PortaliGenderuliTanasworobisSabcho from './components/PortaliGenderuliTanasworobisSabcho'
//import PortaliSajarimoQvitari from './components/PortaliSajarimoQvitari'
import MeriaMeri from './components/MeriaMeri'
import MeriaMoadgile from './components/MeriaMoadgile'
import MeriaMerisPirveliMoadgile from './components/MeriaMerisPirveliMoadgile'
import PrescentriGancxadebebi from './components/PrescentriGancxadebebi'
import PrescentriGancxadebebi1 from './components/PrescentriGancxadebebi1'
import PrescentriAnonsebi from './components/PrescentriAnonsebi'
import PrescentriAnonsebi1 from './components/PrescentriAnonsebi1'
import PrescentriPresrelizebi from './components/PrescentriPresrelizebi'
import PrescentriPresrelizebi1 from './components/PrescentriPresrelizebi1'
import MeriaBrdzanebebi from './components/MeriaBrdzanebebi'
import MeriaSkhdomisOqmebi from './components/MeriaSkhdomisOqmebi'
import MeriaKonkursi from './components/MeriaKonkursi'
import MeriaAngarishi from './components/MeriaAngarishi'
import SakrebulosTavmjdomarisPirveliMoadgile from './components/SakrebulosTavmdjomarisPirveliMoadgile'
import SakrebuloAparati from './components/SakrebuloAparati'
import SakrebulosTavmjdomarisMoadgile from './components/SakrebulosTavmjdomarisMoadgile'
import SakrebulosKonkursebi from './components/SakrebulosKonkursebi'

import Default from './components/Default'

import SakrebulosTavmjdomarisMoadgileebi from './components/SakrebulosTavmjdomarisMoadgileebi'
import SakrebulosTavmjdomarisMoadgileebi1 from './components/SakrebulosTavmjdomarisMoadgileebi1'
import SakrebulosBrdzanebebi from './components/SakrebulosBrdzanebebi'
//import HeaderApi from './components/HeaderApi'
function AnimatedRoutes() {
    const location = useLocation()


    // khulos kontenturi gverdebi
    //<Route path='/geografia-da-buneba' element={<KhulosBuneba/>}/>
    // <Route path='/khulos-istoria' element={<KhulosIstoria/>}/>
    //         <Route path='/khulos-simbolika' element={<KhulosSimbolika/>}/>
            
    //         <Route path='/kurortebi' element={<KKhulosKurortebi/>}/>
    //         <Route path='/khulos-sapatio-moqalaqeebi' element={<KhulosMoqalaqeebi/>}/>
    //         <Route path='/khelovneba-da-kultura' element={<KhulosKultura/>}/>



        // moqalaqis portalis kontenturi gverdebi
    // <Route path='/monawileobiti-biujeti' element={<PortaliMonawileobitiBiujeti/>}/>
    // <Route path='/socialuri-programebi' element={<PortaliSocialuriProgramebi/>}/>
   
    // <Route path='/meris-mrchevelta-sabcho' element={<PortaliMerisMrcheveltaSabcho/>}/>
    // <Route path='/genderuli-tanascorobis-sabcho' element={<PortaliGenderuliTanasworobisSabcho/>}/>
    // <Route path='/sajarimo-qvitari' element={<PortaliSajarimoQvitari/>}/>

    
  return (
   <>
    <HeaderApi/>
    <AnimatePresence>
    <ScrollToTop/>
        <Routes location={location} key={location.pathname}>

            <Route path='/' element={<Landing/>} />
            <Route path='/:id' element={<Default/>} />

            

            <Route path='/meri' element={<MeriaMeri/>}/>
            <Route path='/meris-pirveli-moadgile' element={<MeriaMerisPirveliMoadgile/>}/>
            <Route path='/meris-moadgile' element={<MeriaMoadgile/>}/>
            <Route path='/meriis-samsakhurebi' element={<MeriaSamsakhurebi/>}/>
            <Route path='/meris-tsarmomadgenlebi' element={<MerisWarmomadgenlebi/>}/>
            <Route path='/meris-brdzanebebi' element={<MeriaBrdzanebebi/>}/>
            <Route path='/meriis-skhdomis-oqmebi' element={<MeriaSkhdomisOqmebi/>}/>
            <Route path='/meriis-konkursebi' element={<MeriaKonkursi/>}/>
            <Route path='/meris-angarishi' element={<MeriaAngarishi/>}/>



            <Route path='/links' element={<SasargebloBmulebi/>} />
            <Route path='/writeMessage' element={<MiwereMers/>}/>
            <Route path='/sajaroInfo' element={<SajaroInformacia/>}/>
            <Route path='/contact' element={<Contact/>}/>





           
            <Route path='/sakrebuloswevrebi' element={<SakrebulosWevrebi/>}/>
            
            


            <Route path='/sakrebulos-tavmjdomare' element={<SakrebulosTavmjdomare/>}/>
            <Route path='/sakrebulos-tavmjdomaris-pirveli-moadgile' element={<SakrebulosTavmjdomarisMoadgileebi/>}/>
            <Route path='/sakrebulos-tavmjdomaris-pirveli-moadgile/:id' element={<SakrebulosTavmjdomarisMoadgileebi1/>}/>
            <Route path='/sakrebulos-tavmjdomaris-moadgile' element={<SakrebulosTavmjdomarisMoadgile/>}/>
            <Route path='/sakrebulos-aparati' element={<SakrebuloAparati/>}/>
            <Route path='/sakrebulos-biuro' element={<SakrebulosBiuro/>}/>
            <Route path='/sakrebuloMembers' element={<SakrebuloMembers/>}/>
            <Route path='/sakrebuloMembers/:id' element={<SakrebuloMembers1/>}/>
            <Route path='/municipalitetis-biujeti' element={<KhulosBiujeti/>}/>
            <Route path='/sakrebulos-dadgenilebebi' element={<SakrebulosDadgenilebebi/>}/>
            <Route path='/sakrebulos-gankargulebebi' element={<Gankargulebebi/>}/>
            <Route path='/skhdomis-oqmebi' element={<SkhdomisOqmebi/>}/>
            <Route path='/biuros-skhdomis-oqmebi' element={<BiurosOqmebi/>}/>
            <Route path='/sakrebulos-komisiebi' element={<Komisiebi/>}/>
            <Route path='/sakrebulos-komisiebi/:id' element={<Komisiebi1/>}/>
            <Route path='/konkursebi' element={<SakrebulosKonkursebi/>}/>
            <Route path='/sakrebulos-fraqciebi' element={<Fraqciebi/>}/>
            <Route path='/samartlebrivi-aqtebi' element={<SakrebulosSamartlebriviAqtebi/>}/>
            <Route path='/sakrebulos-brdzanebebi' element={<SakrebulosBrdzanebebi/>}/>
            
           
           
           
           


           

          






            <Route path='/News' element={<News/>}/>
            <Route path='/news/:id' element={<News1/>}/>
            <Route path='/ganckhadebebi' element={<PrescentriGancxadebebi/>}/>
            <Route path='/ganckhadebebi/:id' element={<PrescentriGancxadebebi1/>}/>
            <Route path='/anonsebi' element={<PrescentriAnonsebi/>}/>
            <Route path='/anonsebi/:id' element={<PrescentriAnonsebi1/>}/>
            <Route path='/presrelizebi' element={<PrescentriPresrelizebi/>}/>
            <Route path='/presrelizebi/:id' element={<PrescentriPresrelizebi1/>}/>
            <Route path='/video-galerea' element={<VideoGalerea/>}/>


            

        </Routes>
    </AnimatePresence>
    <Footer/>
   </>
  )
}

export default AnimatedRoutes