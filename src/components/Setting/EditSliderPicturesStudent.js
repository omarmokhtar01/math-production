import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { Col, Row } from 'react-bootstrap';
// import './question.css'
import downloadIcon from "../../images/download.svg"

const EditSliderPicturesStudent = () => {
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
             <p style={{ display:'flex', fontSize:'18px'}}>  تعديل صورة السلايدر </p>


             <div style={{display:'flex' , flexDirection:'column' , justifyContent:'center', alignItems:'center', textAlign:'center'}}>

                <div style={{border:'1px solid rgb(31 31 31 / 15%)', borderRadius:'10px', padding:'10px 20px', marginBottom:'25px'}}>
                    <label for="myfile" style={{fontSize:'15px',cursor:'pointer'}}>  <img src={downloadIcon} />   تحميل الصوره   </label>
                        <input type="file" id="myfile" name="myfile" />

                </div>
                        

                        <button style={{  borderRadius:'10px', color:'#FFFFFF', padding:'8px',
                            fontSize:'18px', border:'none', background:'linear-gradient(91deg, #FF7300 0.18%, #FFCD4D 99.68%)', width:'30%'}}>
                            حفظ</button>
             </div>
         
                </div>
</div>
        </Col>
    
     
    </Row>

    </div>
}


export default EditSliderPicturesStudent;