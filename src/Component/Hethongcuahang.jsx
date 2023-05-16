import React from 'react'
import './Hethongcuahang.css'
import { Link } from 'react-router-dom'
const Hethongcuahang = () => {
  return (
    <>
    <div className="container">
        <div className="main-hethong row">
            <div className="item-hethong col-12 col-md-6">
                <img src="https://bizweb.dktcdn.net/100/459/311/themes/870495/assets/img_store_1.jpg?1667276283801" alt="" width="100%" />
            </div>
            <div className="item-hethong col-12 col-md-6">
                <h1>Xanh Sẫm Nguyên Hồng</h1>
                <p>51 Nguyên Hồng, Láng Hạ, Đống Đa, Hà Nội</p>
                <p>Tel: 0793.233.338</p>
                <p >Giờ mở cửa: 7:30 - 19:30</p>
                <div className="btn-goHome">
                      <Link to='/'>Mua hàng Online</Link>
                </div>
              
            </div>
        </div>
        <div className="main-hethong row">
        <div className="item-hethong col-12 col-md-6">
                <h1>Xanh Sẫm Hàm Nghi</h1>
                <p>A2 SO08, Vinhomes Gardenia, Hàm Nghi, Cầu Diễn, Nam Từ Liêm, Hà Nội</p>
                <p>Tel: 0798.233.338</p>
                <p >Giờ mở cửa: 7:30 - 19:30</p>
                <div className="btn-goHome">
                      <Link to='/'>Mua hàng Online</Link>
                </div>
              
            </div>
            <div className="item-hethong col-12 col-md-6">
                <img src="https://bizweb.dktcdn.net/100/459/311/themes/870495/assets/img_store_1.jpg?1667276283801" alt="" width="100%" />
            </div>
           
        </div>
    </div>
    </>
  )
}

export default Hethongcuahang
