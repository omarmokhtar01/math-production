import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
//import './question.css'

const SliderPictures = () => {
    return    <div>

    <Row style={{maxWidth:'100%'}}>

       <Col  sm={2} xs={2} md={3} xl={2}>
           <div>
          <Sidebar />
          
           </div> 
             
       </Col>
    

        <Col sm={10} xs={10} md={9} xl={10} >       
        <div style={{background:'#FFFFFF' }}>
                <div style={{display:'flex', justifyContent:'space-between'}}>
                    <p> الاعدادات</p>

                    <div style={{display:'flex'}}>
                        <p> admin</p>
                        <p> admin</p>
                        <p> admin</p>
                    </div>
                </div>
        </div>

<div style={{paddingRight:'30px', paddingLeft:'30px' , height:'100%'}}>

        <div style={{background:'#FFFFFF', width:'100%', height:'100%' , borderRadius:'10px' , padding:'20px', margin:'20px 15px 20px 15px'}}>      
             <p style={{ display:'flex', fontSize:'18px', marginBottom:'20px'}}>   صور السلايدر    </p>

            <Row>
               <Col sm={6}>
                    <Form>
                    
                    <Link to='/slider-pictures-student' style={{textDecoration:'none', color:'#111111'}}>
                        <div className="mb-3" >         
                            <div
                            style={{borderRadius:'8px', background:'rgb(245 245 245 / 43%)', border:'none', padding:'18px' }}> صور السلايد ( الطالب )</div>
                        </div>
                    </Link>
                    </Form>
                 </Col>

                 <Col sm={6}>
                    <Form>
                        <div className="mb-3" >
                        <div type="text" placeholder="أدخل القسم الرئيسي " className='custom-input' 
                        style={{borderRadius:'8px', background:'rgb(245 245 245 / 43%)', border:'none', padding:'18px' }}> صور السلايد( المدرب )</div>
                    </div>
                </Form>
                 </Col> 
            </Row>
        
      </div>
</div>
        </Col>
    
     
    </Row>

    </div>
}
  


export default SliderPictures;