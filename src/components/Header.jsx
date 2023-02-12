import React from 'react'
import img1 from '../assets/bg2.jpg'
import './header.css'
import Products from './Products'

const Header = () => {
  return (
    <div className='header1'>
          <div className="card bg-dark text-black border-0">
              <img src={img1} className="card-img" alt="..." height="1000"/>
              <div className="card-img-overlay d-flex flex-column justify-content-center">
                      <div className="container">
                        <h5 className="card-title display-3 fw-bold">Beli Barang Murah Tanpa Takut <br/>Ada Yang Marah</h5>
                        <p className="card-text display-6">Harga aman, Pembeli nyaman, Kita pun senang</p>
                        <p className="card-text">AlexShop merupakan toko online yang menyediakan layanan terbaik untuk pelanggan</p>
                      </div>
                  </div>
          </div>
          <Products/>
    </div>
  )
}

export default Header