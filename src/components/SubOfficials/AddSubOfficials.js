import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { Col, Form, Row } from 'react-bootstrap';

const AddSubOfficials = () => {
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
                    <p> الاقسام</p>

                    <div style={{display:'flex'}}>
                        <p> admin</p>
                        <p> admin</p>
                        <p> admin</p>
                    </div>
                </div>
        </div>

<div style={{paddingRight:'30px', paddingLeft:'30px' , height:'100%'}}>


        <div style={{background:'#FFFFFF', width:'100%', height:'100%' , borderRadius:'10px' , padding:'20px', margin:'20px 15px 20px 15px'}}>      
             <p style={{ display:'flex', fontSize:'18px'}}> اضافة مسؤلين فرعي    </p>

            <Row>
               <Col sm={6}>
               <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label style={{display:'flex', marginBottom:'15px'}} > الاسم* </Form.Label>
                    <Form.Control type="text" placeholder="  أدخل الاسم كامل " className='custom-input' 
                        style={{borderRadius:'8px', background:'rgb(245 245 245 / 43%)', border:'none', padding:'18px'}}
            />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label style={{display:'flex', marginBottom:'15px'}}>   رقم الموبايل* </Form.Label>
                    <Form.Control type="text" placeholder="أدخل رقم الموبايل الخاص بك " className='custom-input' 
                    style={{borderRadius:'8px', background:'rgb(245 245 245 / 43%)', border:'none', padding:'18px' }}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label style={{display:'flex', marginBottom:'15px'}}>  تاكيد كلمة المرور* </Form.Label>
                    <Form.Control type="password" placeholder="تاكيد كلمة المرور" className='custom-input' 
                    style={{borderRadius:'8px', background:'rgb(245 245 245 / 43%)', border:'none', padding:'18px' }}/>
                </Form.Group>

               
            </Form>
                 </Col>

                 <Col sm={6}>
                 <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label style={{display:'flex', marginBottom:'15px'}}> البريد الإلكتروني* </Form.Label>
                    <Form.Control type="email" placeholder="أدخل البريد الالكتروني الخاص بك" className='custom-input' 
                        style={{borderRadius:'8px', background:'rgb(245 245 245 / 43%)', border:'none', padding:'18px'}}
            />
                </Form.Group>
              
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label style={{display:'flex', marginBottom:'15px'}}>   كلمة المرور* </Form.Label>
                    <Form.Control type="password" placeholder=" كلمة المرور" className='custom-input' 
                    style={{borderRadius:'8px', background:'rgb(245 245 245 / 43%)', border:'none', padding:'18px' }}/>
                </Form.Group>
            </Form>

           
                 </Col>
              <div style={{display:'flex', justifyContent:'end'}}>
              <button style={{padding:'8px 30px', fontSize:'15px', background:'linear-gradient(91deg, #FF7300 0.18%, #FFCD4D 99.68%)' ,color:'#FFFFFF',
                            border:'none' , borderRadius:'7px', marginTop:'20px'}} >
                           اضافه 
                        </button>
              </div>   
              

            </Row>
                        
            
         
      </div>
</div>
        </Col>
    
     
    </Row>

    </div>
}


export default AddSubOfficials;