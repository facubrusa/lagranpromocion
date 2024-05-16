import { Route, Routes } from 'react-router-dom'

import { AboutUs } from '../components/AboutUs.jsx'
import { Live } from '../components/Live.jsx'
import { ContactUs } from '../components/ContactUs.jsx'
import { GoldenClover } from '../components/GoldenClover.jsx'
import { Home } from '../components/Home.jsx'
import { GanadoresClover } from '../components/GanadoresClover.jsx'
import { GanadoresLGP } from '../components/GanadoresLGP.jsx'
import { JugaOnline } from '../components/JugaOnline.jsx'
import { Sorteos } from '../components/Sorteos.jsx'

import { Premios } from "../ultilitarios/data.json"
import { GanadoresPremiosClover } from "../ultilitarios/data.json"
import { PremiosClover } from "../ultilitarios/data.json"
import { Folletos } from "../ultilitarios/data.json"

import { Slider } from 'pure-react-carousel'
export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home data={Premios} />} />
            <Route path="/live" element={<Live />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/goldenclover" element={<GoldenClover data={PremiosClover} />} />
            <Route path="/ganadoresclover" element={<GanadoresClover data={GanadoresPremiosClover} />} />
            <Route path="/jugaonline" element={<JugaOnline />} />
            <Route path="/ganadoreslgp" element={<GanadoresLGP />} />
            <Route path="/sorteos" element={<Sorteos data={Folletos} />} />
            <Route path="/Slider" element={<Slider />} />
            <Route path="/*" element={<Home />} />
        </Routes>
    )
}
