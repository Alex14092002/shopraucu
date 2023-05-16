import React from 'react'
import { Carousel } from 'react-carousel-minimal';
import { useState , useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import "./Detailuudaihot.css"
const Detailuudaihot = (props) => {
 
    const {id} = useParams();
    const [data2 , setData2 ]  = useState([])
    useEffect(() => {
        fetch(`https://data-banraucu-default-rtdb.firebaseio.com/thucphamtuoisong/${id}.json`)
          .then((response) => response.json())
          .then((data2) => setData2(data2))
          .catch((error) => console.error(error));
      }, []);

      console.log(data2);



    const data = [
        {
          image: data2.img1
        },
        {
          image: data2.img2
         
        },
        {
          image: data2.img3
       
        },
        {
          image: data2.img4
        },
        {
          image: data2.img5
         
        }
      ];
      

      const formatter = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
        minimumFractionDigits: 0
      });

      
  return (
    <>

    <div className="container">
        <div className="detail-main row">
            <div className="item-detail col-12 col-md-6">
            <Carousel
            data={data}
            time={1000}
            width="850px"
            height="500px"
       
            radius="10px"
         
           
            automatic={true}
            dots={false}
           
            pauseIconSize="40px"
        
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "850px",
              maxHeight: "500px",
              margin: "40px auto",
            }}
          />
            </div>
            <div className="item-detail col-12 col-md-6">
                <div className="name">
                    <h1>{data2.name}</h1>
                </div>
                <div className="price-detail">
                    <div className="priceN">
                        
                        <h5>{formatter.format(data2.price)}</h5>
                        <h3>{formatter.format(data2.promotionalPrice)}</h3>
                    </div>
                </div>

                <div className="btn-detail">
                    <div className="btn-buy-now">
                        <Link to='/cart'>Mua Ngay</Link>
                    </div>
                    <div className="add-cart">
                    <Link  onClick={ () => props.handleAddToCart( 'thucphamtuoisong',  data2.id , data2.name , data2.promotionalPrice , data2.img1 )}>Thêm Vào Giỏ</Link>
                    </div>
                </div>


                <div className="mota">
                    <h5>Mô tả sản phẩm</h5>
                    <hr />

                    <div className="item-detail">
                        <div className="title-detail">
                            <h5>Chứng nhận/ Tiêu chuẩn: <span>{data2.chungnhan}</span> </h5>
                        </div>
                        <div className="title-detail">
                            <h5>Xuất xứ: <span>{data2.xuatxu}</span> </h5>
                        </div>
                        <div className="title-detail">
                            <h5>Khối lượng tịnh: <span>{data2.khoiluongtinh}</span> </h5>
                        </div>
                        <div className="title-detail">
                            <h5>Thành phần: <span>{data2.thanhphan}</span> </h5>
                        </div>
                        <div className="title-detail">
                            <h5>Công dụng: <span>{data2.congdung}</span> </h5>
                        </div>
                        <div className="title-detail">
                            <h5>Bảo quản: <span>{data2.baoquan}</span> </h5>
                        </div>
                        <div className="title-detail">
                            <h5>HSD: <span>{data2.hsd}</span> </h5>
                        </div>
                       
                    </div>
                </div>
             
            </div>
        </div>
    </div>



  


    </>
  )
}

export default Detailuudaihot
