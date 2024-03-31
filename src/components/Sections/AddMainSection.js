import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { Accordion, Col, Form, Row } from 'react-bootstrap';
import './section.css'
import Select from 'react-select';

const options = [
    { value: 'قسم رئيسي', label: 'قسم رئيسي' },
    { value: 'مستوي', label: 'مستوي' },
    
  ];

const AddMainSection = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    //console.log(selectedOption)

    return    <div>

    <Row style={{maxWidth:'100%'}}>

       <Col  sm={2} xs={6} md={3} xl={2}>
           <div>
          <Sidebar />
          
           </div> 
             
       </Col>
    

        <Col sm={10} xs={6} md={9} xl={10} >       
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
             <p style={{ display:'flex', fontSize:'18px', marginBottom:'25px'}}> اضافة قسم رئيسي / مستوي   </p>

            <Row>
               <Col sm={6}>
               <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label style={{display:'flex', marginBottom:'15px'}} > اسم القسم* </Form.Label>
                    <Form.Control type="text" placeholder="  أدخل اسم القسم  " className='custom-input' 
                        style={{borderRadius:'8px', background:'rgb(245 245 245 / 43%)', border:'none', padding:'18px'}}
            />
                </Form.Group>

            </Form>
                 </Col>

                 <Col sm={6}>
                 <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label style={{display:'flex', marginBottom:'15px'}}>  تحديد نوع القسم* </Form.Label>
                    {/* <Form.Control type="email" placeholder="حدد نوع القسم" className='custom-input' 
                        style={{borderRadius:'8px', background:'rgb(245 245 245 / 43%)', border:'none', padding:'18px'}}
            /> */}
            {/* <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header style={{color:'rgba(245, 245, 245, 0.25)'}}  >  تحديد نوع القسم</Accordion.Header>
        <Accordion.Body>
          <p>jj</p>
          <p>jj</p>
        </Accordion.Body>
      </Accordion.Item>
      
    </Accordion> */}

    <Select
        defaultValue={selectedOption} 
        onChange={setSelectedOption}
        options={options}
        placeholder="حدد نوع القسم" 
      />
                </Form.Group>
              
               
            </Form>

           
                 </Col>
              <div style={{display:'flex', justifyContent:'end'}}>
                  <button style={{padding:'8px 30px', fontSize:'15px', background:'linear-gradient(91deg, #FF7300 0.18%, #FFCD4D 99.68%)' ,color:'#FFFFFF',
                            border:'none' , borderRadius:'7px', marginTop:'20px'}} >
                           اضافة
                        </button>
              </div>   
              

            </Row>

      </div>
</div>
        </Col>
     
    </Row>

    </div>
}


export default AddMainSection;