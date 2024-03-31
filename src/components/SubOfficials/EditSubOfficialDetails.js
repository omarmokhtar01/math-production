import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { Card, Col, Form, Row } from 'react-bootstrap';


const EditSubOfficialDetails = () => {
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
                    <p> المسؤلين الفرعين </p>

                    <div style={{display:'flex'}}>
                        <p> admin</p>
                        <p> admin</p>
                        <p> admin</p>
                    </div>
                </div>
        </div>

<div style={{paddingRight:'30px', paddingLeft:'30px' , height:'100%'}}>


        <div style={{background:'#FFFFFF', width:'100%', height:'100%' , borderRadius:'10px' , padding:'20px', margin:'20px 15px 20px 15px'}}>      
             <p style={{ display:'flex', fontSize:'18px', paddingBottom:'15px'}}> تعديل تفاصيل مسؤلين فرعي  </p>

            <Row>
               <Col sm={6}>
               <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label style={{display:'flex', marginBottom:'15px'}} > الاسم* </Form.Label>
                    <Form.Control type="text" placeholder="  أدخل الاسم كامل " className='custom-input' value="محمد معتصم "
                        style={{borderRadius:'8px', background:'rgb(245 245 245 / 43%)', border:'none', padding:'18px'}}
            />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label style={{display:'flex', marginBottom:'15px'}}>   رقم الهاتف* </Form.Label>
                    <Form.Control type="text" placeholder="أدخل رقم الموبايل الخاص بك " className='custom-input' value="254163781"
                    style={{borderRadius:'8px', background:'rgb(245 245 245 / 43%)', border:'none', padding:'18px' }}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label style={{display:'flex', marginBottom:'15px'}}>  تاكيد كلمة المرور* </Form.Label>
                    <Form.Control type="password" placeholder="تاكيد كلمة المرور" className='custom-input' value="254163781"
                    style={{borderRadius:'8px', background:'rgb(245 245 245 / 43%)', border:'none', padding:'18px' }}/>
                </Form.Group>
               
            </Form>
                 </Col>

                 <Col sm={6}>
                 <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label style={{display:'flex', marginBottom:'15px'}}> البريد الإلكتروني* </Form.Label>
                    <Form.Control type="email" placeholder="أدخل البريد الالكتروني الخاص بك" className='custom-input' value="Mohamed motasem@gamil .com"
                        style={{borderRadius:'8px', background:'rgb(245 245 245 / 43%)', border:'none', padding:'18px'}}
            />
                </Form.Group>

   
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label style={{display:'flex', marginBottom:'15px'}}>   كلمة المرور* </Form.Label>
                    <Form.Control type="password" placeholder=" كلمة المرور" className='custom-input' value="254163781"
                    style={{borderRadius:'8px', background:'rgb(245 245 245 / 43%)', border:'none', padding:'18px' }}/>
                </Form.Group>
            </Form>

           
                 </Col>
             

            </Row>


            <Row>
            <p style={{ display:'flex', fontSize:'18px', paddingBottom:'15px', marginTop:'15px'}}> الصلاحيات </p>
            
               <Col sm={6} md={6} xs={12} xl={3} style={{display:'flex' , justifyContent:'center'}}>
                    <Card style={{ width: '14rem' , marginBottom:'30px'}}>
                        <Card.Body>
                            <Card.Title style={{textAlign:'start', fontSize:'15px'}}>الصفحة الرئسية</Card.Title>
                            <div style={{border:'0.1px solid rgba(21, 21, 21, 0.1)',marginRight:'-15px' , width:'220px', marginBottom:'10px', marginTop:'15px'}}>  </div>
                            <Card.Text>
                            <div>
                                <div style={{display:'flex', gap:'10px'}}>  <Form.Check aria-label="option 1" />   <p>  اضافة  </p> </div>
                                <div style={{display:'flex', gap:'10px'}}>  <Form.Check aria-label="option 1" />   <p> مسح </p> </div>
                                <div style={{display:'flex', gap:'10px'}}>  <Form.Check aria-label="option 1" />   <p>  تعديل  </p> </div>
                                <div style={{display:'flex', gap:'10px'}}>  <Form.Check aria-label="option 1" />   <p> رؤية </p> </div>
                            
                            </div>
                            </Card.Text>
                        
                        </Card.Body>
                    </Card>
                 </Col>

                 <Col sm={6} md={6} xs={12} xl={3} style={{display:'flex' , justifyContent:'center'}}>
                    <Card style={{ width: '14rem' , marginBottom:'30px'}}>
                        <Card.Body>
                            <Card.Title style={{textAlign:'start', fontSize:'15px'}}>المسؤلين الفرعين </Card.Title>
                            <div style={{border:'0.1px solid rgba(21, 21, 21, 0.1)',marginRight:'-15px' , width:'220px', marginBottom:'10px', marginTop:'15px'}}>  </div>
                            <Card.Text>
                            <div>
                                <div style={{display:'flex', gap:'10px'}}>  <Form.Check aria-label="option 1" />   <p>  اضافة  </p> </div>
                                <div style={{display:'flex', gap:'10px'}}>  <Form.Check aria-label="option 1" />   <p> مسح </p> </div>
                                <div style={{display:'flex', gap:'10px'}}>  <Form.Check aria-label="option 1" />   <p>  تعديل  </p> </div>
                                <div style={{display:'flex', gap:'10px'}}>  <Form.Check aria-label="option 1" />   <p> رؤية </p> </div>
                            
                            </div>
                            </Card.Text>
                        
                        </Card.Body>
                    </Card>
                 </Col>

                  <Col sm={6} md={6} xs={12} xl={3} style={{display:'flex' , justifyContent:'center'}}>
                    <Card style={{ width: '14rem' , marginBottom:'30px'}}>
                        <Card.Body>
                            <Card.Title style={{textAlign:'start', fontSize:'15px'}}>الصفحة الشخصية  </Card.Title>
                            <div style={{border:'0.1px solid rgba(21, 21, 21, 0.1)',marginRight:'-15px' , width:'220px', marginBottom:'10px', marginTop:'15px'}}>  </div>
                            <Card.Text>
                            <div>
                                <div style={{display:'flex', gap:'10px'}}>  <Form.Check aria-label="option 1" />   <p>  اضافة  </p> </div>
                                <div style={{display:'flex', gap:'10px'}}>  <Form.Check aria-label="option 1" />   <p> مسح </p> </div>
                                <div style={{display:'flex', gap:'10px'}}>  <Form.Check aria-label="option 1" />   <p>  تعديل  </p> </div>
                                <div style={{display:'flex', gap:'10px'}}>  <Form.Check aria-label="option 1" />   <p> رؤية </p> </div>
                            
                            </div>
                            </Card.Text>
                        
                        </Card.Body>
                    </Card>
                 </Col>

                 <Col sm={6} md={6} xs={12} xl={3} style={{display:'flex' , justifyContent:'center'}}>
                    <Card style={{ width: '14rem' , marginBottom:'30px'}}>
                        <Card.Body>
                            <Card.Title style={{textAlign:'start', fontSize:'15px'}}>الاعدادات   </Card.Title>
                            <div style={{border:'0.1px solid rgba(21, 21, 21, 0.1)',marginRight:'-15px' , width:'220px', marginBottom:'10px', marginTop:'15px'}}>  </div>
                            <Card.Text>
                            <div>
                                <div style={{display:'flex', gap:'10px'}}>  <Form.Check aria-label="option 1" />   <p>  اضافة  </p> </div>
                                <div style={{display:'flex', gap:'10px'}}>  <Form.Check aria-label="option 1" />   <p> مسح </p> </div>
                                <div style={{display:'flex', gap:'10px'}}>  <Form.Check aria-label="option 1" />   <p>  تعديل  </p> </div>
                                <div style={{display:'flex', gap:'10px'}}>  <Form.Check aria-label="option 1" />   <p> رؤية </p> </div>
                            
                            </div>
                            </Card.Text>
                        
                        </Card.Body>
                    </Card>
                 </Col>

                 <Col sm={6} md={6} xs={12} xl={3} style={{display:'flex' , justifyContent:'center'}}>
                    <Card style={{ width: '14rem' , marginBottom:'30px'}}>
                        <Card.Body>
                            <Card.Title style={{textAlign:'start', fontSize:'15px'}}>الباقات </Card.Title>
                            <div style={{border:'0.1px solid rgba(21, 21, 21, 0.1)',marginRight:'-15px' , width:'220px', marginBottom:'10px', marginTop:'15px'}}>  </div>
                            <Card.Text>
                            <div>
                                <div style={{display:'flex', gap:'10px'}}>  <Form.Check aria-label="option 1" />   <p>  اضافة  </p> </div>
                                <div style={{display:'flex', gap:'10px'}}>  <Form.Check aria-label="option 1" />   <p> مسح </p> </div>
                                <div style={{display:'flex', gap:'10px'}}>  <Form.Check aria-label="option 1" />   <p>  تعديل  </p> </div>
                                <div style={{display:'flex', gap:'10px'}}>  <Form.Check aria-label="option 1" />   <p> رؤية </p> </div>
                            
                            </div>
                            </Card.Text>
                        
                        </Card.Body>
                    </Card>
                 </Col>

                 <Col sm={6} md={6} xs={12} xl={3} style={{display:'flex' , justifyContent:'center'}}>
                    <Card style={{ width: '14rem' , marginBottom:'30px'}}>
                        <Card.Body>
                            <Card.Title style={{textAlign:'start', fontSize:'15px'}}>الاقسام   </Card.Title>
                            <div style={{border:'0.1px solid rgba(21, 21, 21, 0.1)',marginRight:'-15px' , width:'220px', marginBottom:'10px', marginTop:'15px'}}>  </div>
                            <Card.Text>
                            <div>
                                <div style={{display:'flex', gap:'10px'}}>  <Form.Check aria-label="option 1" />   <p>  اضافة  </p> </div>
                                <div style={{display:'flex', gap:'10px'}}>  <Form.Check aria-label="option 1" />   <p> مسح </p> </div>
                                <div style={{display:'flex', gap:'10px'}}>  <Form.Check aria-label="option 1" />   <p>  تعديل  </p> </div>
                                <div style={{display:'flex', gap:'10px'}}>  <Form.Check aria-label="option 1" />   <p> رؤية </p> </div>
                            
                            </div>
                            </Card.Text>
                        
                        </Card.Body>
                    </Card>
                 </Col>

                  <Col sm={6} md={6} xs={12} xl={3} style={{display:'flex' , justifyContent:'center'}}>
                    <Card style={{ width: '14rem' , marginBottom:'30px'}}>
                        <Card.Body>
                            <Card.Title style={{textAlign:'start', fontSize:'15px'}}>الاسئلة   </Card.Title>
                            <div style={{border:'0.1px solid rgba(21, 21, 21, 0.1)',marginRight:'-15px' , width:'220px', marginBottom:'10px', marginTop:'15px'}}>  </div>
                            <Card.Text>
                            <div>
                                <div style={{display:'flex', gap:'10px'}}>  <Form.Check aria-label="option 1" />   <p>  اضافة  </p> </div>
                                <div style={{display:'flex', gap:'10px'}}>  <Form.Check aria-label="option 1" />   <p> مسح </p> </div>
                                <div style={{display:'flex', gap:'10px'}}>  <Form.Check aria-label="option 1" />   <p>  تعديل  </p> </div>
                                <div style={{display:'flex', gap:'10px'}}>  <Form.Check aria-label="option 1" />   <p> رؤية </p> </div>
                            
                            </div>
                            </Card.Text>
                        
                        </Card.Body>
                    </Card>
                 </Col>

                 <Col sm={6} md={6} xs={12} xl={3} style={{display:'flex' , justifyContent:'center'}}>
                    <Card style={{ width: '14rem' , marginBottom:'30px'}}>
                        <Card.Body>
                            <Card.Title style={{textAlign:'start', fontSize:'15px'}}>الطلاب المسجلين   </Card.Title>
                            <div style={{border:'0.1px solid rgba(21, 21, 21, 0.1)',marginRight:'-15px' , width:'220px', marginBottom:'10px', marginTop:'15px'}}>  </div>
                            <Card.Text>
                            <div>
                                <div style={{display:'flex', gap:'10px'}}>  <Form.Check aria-label="option 1" />   <p>  اضافة  </p> </div>
                                <div style={{display:'flex', gap:'10px'}}>  <Form.Check aria-label="option 1" />   <p> مسح </p> </div>
                                <div style={{display:'flex', gap:'10px'}}>  <Form.Check aria-label="option 1" />   <p>  تعديل  </p> </div>
                                <div style={{display:'flex', gap:'10px'}}>  <Form.Check aria-label="option 1" />   <p> رؤية </p> </div>
                            
                            </div>
                            </Card.Text>
                        
                        </Card.Body>
                    </Card>
                 </Col>

                 <Col sm={6} md={6} xs={12} xl={3} style={{display:'flex' , justifyContent:'center'}}>
                    <Card style={{ width: '14rem', marginBottom:'30px' }}>
                        <Card.Body>
                            <Card.Title style={{textAlign:'start', fontSize:'15px'}}>المدربين المسجلين   </Card.Title>
                            <div style={{border:'0.1px solid rgba(21, 21, 21, 0.1)',marginRight:'-15px' , width:'220px', marginBottom:'10px', marginTop:'15px'}}>  </div>
                            <Card.Text>
                            <div>
                                <div style={{display:'flex', gap:'10px'}}>  <Form.Check aria-label="option 1" />   <p>  اضافة  </p> </div>
                                <div style={{display:'flex', gap:'10px'}}>  <Form.Check aria-label="option 1" />   <p> مسح </p> </div>
                                <div style={{display:'flex', gap:'10px'}}>  <Form.Check aria-label="option 1" />   <p>  تعديل  </p> </div>
                                <div style={{display:'flex', gap:'10px'}}>  <Form.Check aria-label="option 1" />   <p> رؤية </p> </div>
                            
                            </div>
                            </Card.Text>
                        
                        </Card.Body>
                    </Card>
                 </Col>

                 <Col sm={6} md={6} xs={12} xl={3} style={{display:'flex' , justifyContent:'center'}}>
                    <Card style={{ width: '14rem' , marginBottom:'30px'}}>
                        <Card.Body>
                            <Card.Title style={{textAlign:'start', fontSize:'15px'}}>البطولات </Card.Title>
                            <div style={{border:'0.1px solid rgba(21, 21, 21, 0.1)',marginRight:'-15px' , width:'220px', marginBottom:'10px', marginTop:'15px'}}>  </div>
                            <Card.Text>
                            <div>
                                <div style={{display:'flex', gap:'10px'}}>  <Form.Check aria-label="option 1" />   <p>  اضافة  </p> </div>
                                <div style={{display:'flex', gap:'10px'}}>  <Form.Check aria-label="option 1" />   <p> مسح </p> </div>
                                <div style={{display:'flex', gap:'10px'}}>  <Form.Check aria-label="option 1" />   <p>  تعديل  </p> </div>
                                <div style={{display:'flex', gap:'10px'}}>  <Form.Check aria-label="option 1" />   <p> رؤية </p> </div>
                            
                            </div>
                            </Card.Text>
                        
                        </Card.Body>
                    </Card>
                 </Col>

                 <Col sm={6} md={6} xs={12} xl={3} style={{display:'flex' , justifyContent:'center'}}>
                    <Card style={{ width: '14rem' , marginBottom:'30px'}}>
                        <Card.Body>
                            <Card.Title style={{textAlign:'start', fontSize:'15px'}}>الاشعارات   </Card.Title>
                            <div style={{border:'0.1px solid rgba(21, 21, 21, 0.1)',marginRight:'-15px' , width:'220px', marginBottom:'10px', marginTop:'15px'}}>  </div>
                            <Card.Text>
                            <div>
                                <div style={{display:'flex', gap:'10px'}}>  <Form.Check aria-label="option 1" />   <p>  اضافة  </p> </div>
                                <div style={{display:'flex', gap:'10px'}}>  <Form.Check aria-label="option 1" />   <p> مسح </p> </div>
                                <div style={{display:'flex', gap:'10px'}}>  <Form.Check aria-label="option 1" />   <p>  تعديل  </p> </div>
                                <div style={{display:'flex', gap:'10px'}}>  <Form.Check aria-label="option 1" />   <p> رؤية </p> </div>
                            
                            </div>
                            </Card.Text>
                        
                        </Card.Body>
                    </Card>
                 </Col>

                  <Col sm={6} md={6} xs={12} xl={3} style={{display:'flex' , justifyContent:'center'}}>
                    <Card style={{ width: '14rem' , marginBottom:'30px'}}>
                        <Card.Body>
                            <Card.Title style={{textAlign:'start', fontSize:'15px'}}>الدعم الفني   </Card.Title>
                            <div style={{border:'0.1px solid rgba(21, 21, 21, 0.1)',marginRight:'-15px' , width:'220px', marginBottom:'10px', marginTop:'15px'}}>  </div>
                            <Card.Text>
                            <div>
                                <div style={{display:'flex', gap:'10px'}}>  <Form.Check aria-label="option 1" />   <p>  اضافة  </p> </div>
                                <div style={{display:'flex', gap:'10px'}}>  <Form.Check aria-label="option 1" />   <p> مسح </p> </div>
                                <div style={{display:'flex', gap:'10px'}}>  <Form.Check aria-label="option 1" />   <p>  تعديل  </p> </div>
                                <div style={{display:'flex', gap:'10px'}}>  <Form.Check aria-label="option 1" />   <p> رؤية </p> </div>
                            
                            </div>
                            </Card.Text>
                        
                        </Card.Body>
                    </Card>
                 </Col>

                 <Col sm={6} md={6} xs={12} xl={3} style={{display:'flex' , justifyContent:'center'}}>
                    <Card style={{ width: '14rem' , marginBottom:'30px'}}>
                        <Card.Body>
                            <Card.Title style={{textAlign:'start', fontSize:'15px'}}>تواصل معنا    </Card.Title>
                            <div style={{border:'0.1px solid rgba(21, 21, 21, 0.1)',marginRight:'-15px' , width:'220px', marginBottom:'10px', marginTop:'15px'}}>  </div>
                            <Card.Text>
                            <div>
                                <div style={{display:'flex', gap:'10px'}}>  <Form.Check aria-label="option 1" />   <p>  اضافة  </p> </div>
                                <div style={{display:'flex', gap:'10px'}}>  <Form.Check aria-label="option 1" />   <p> مسح </p> </div>
                                <div style={{display:'flex', gap:'10px'}}>  <Form.Check aria-label="option 1" />   <p>  تعديل  </p> </div>
                                <div style={{display:'flex', gap:'10px'}}>  <Form.Check aria-label="option 1" />   <p> رؤية </p> </div>
                            
                            </div>
                            </Card.Text>
                        
                        </Card.Body>
                    </Card>
                 </Col>
            
              

            </Row>

            <div style={{display:'flex', justifyContent:'end'}}>
              <button style={{padding:'8px 30px', fontSize:'15px', background:'linear-gradient(91deg, #FF7300 0.18%, #FFCD4D 99.68%)' ,color:'#FFFFFF',
                            border:'none' , borderRadius:'7px', marginTop:'20px'}} >
                           حفظ 
                        </button>
              </div>   
              





            
         
      </div>
</div>
        </Col>
    
     
    </Row>

    </div>
}



export default EditSubOfficialDetails;