import React from 'react'
import Logo from '../image/location-pin.png'
import Signal from '../image/signal-tower.png'
import Tulp from '../image/tulip.png'
import BlackTulp from '../image/tulip-black.png'

const Header = () => {
  return (
    <>
    <div className='header'>
        <div className='container' style={{alignItems: "center", justifyContent: "space-between", display: "flex"}}>
            <div style={{display: "flex", alignItems: 'center', fontSize: "22px", color: "#fff", marginLeft: "30px"}}>
                <img src={Tulp} style={{width: "38px", height: "38px", marginRight: "10px"}} alt="logo" />
                SHYMKENT
            </div>
            <div style={{display: "flex", alignItems: 'center', fontSize: "22px", color: "#fff"}}>
                Операторы связи
                <img src={Signal} style={{width: "36px", height: "36px", marginLeft: "10px"}} alt="logo" />
            </div>
        </div>
    </div>
    {/*
    <div style={{width: "100%", height: "30px", padding: "20px", boxShadow: "3px 2px 3px 2px #c9c9c9"}}>
        <div className='container' style={{alignItems: "center", justifyContent: "space-between", display: "flex"}}>
            <div style={{display: "flex", alignItems: 'center', fontSize: "22px", color: "#fff", marginLeft: "30px"}}>
                <img src={BlackTulp} style={{width: "38px", height: "38px", marginRight: "10px"}} alt="logo" />
            </div>
        </div>
    </div>
  */}
    </>
  )
}

export default Header