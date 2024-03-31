import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { Col, Container, Form, Row, Table } from 'react-bootstrap';
import addIconColor from "../../images/addColor.svg"
import addIconWhite from "../../images/addWhite.svg"
import editIcon from "../../images/edit.svg"
import viewIcon from "../../images/view.svg"
import delIcon from "../../images/delete.svg"
import attentionIcon from "../../images/attention.svg"
import { Link } from 'react-router-dom';

const ViewMainSection = () => {
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
                
            <div style={{ display:'flex', justifyContent:'space-between', marginLeft:'25px', marginRight:'25px'}}>

                <div>
                    <p style={{ display:'flex', fontSize:'18px', marginBottom:'25px'}}> رياضيات</p>
                </div>
            </div>
             

            <div
                    style={{
                    marginLeft: "-55px",
                    borderBottom: "1.5px solid #EEEEEE ",
                    width: "100%",
                 
                    marginBottom:'15px'
                    }}
                ></div> 

          <Table responsive="sm"    >
        <thead>
          <tr>
            <th>#</th>
            <th> الاقسام الفرعيه المندرجه</th>
            
          </tr>
        </thead>

        <tbody>
          <tr>
            <td style={{padding:'15px'}} >1</td>   
            <td>تطبيقيه 
             <div style={{marginTop:'-25px', display:'flex', justifyContent:'flex-end'}}>
             <Form.Check aria-label="option 1" />
             </div> 
             </td>
          </tr>

          <tr>
            <td style={{padding:'15px'}} >2</td>   
            <td>تطبيقيه 
             <div style={{marginTop:'-25px', display:'flex', justifyContent:'flex-end'}}>
             <Form.Check aria-label="option 1" />
             </div> 
             </td>
          </tr>

          <tr>
            <td style={{padding:'15px'}} >1</td>   
            <td>تطبيقيه 
             <div style={{marginTop:'-25px', display:'flex', justifyContent:'flex-end'}}>
             <Form.Check aria-label="option 1" />
             </div> 
             </td>
          </tr>

          <tr>
            <td style={{padding:'15px'}} >3</td>   
            <td>تطبيقيه 
             <div style={{marginTop:'-25px', display:'flex', justifyContent:'flex-end'}}>
             <Form.Check aria-label="option 1" />
             </div> 
             </td>
          </tr>

          <tr>
            <td style={{padding:'15px'}} >6</td>   
            <td>تطبيقيه 
             <div style={{marginTop:'-25px', display:'flex', justifyContent:'flex-end'}}>
             <Form.Check aria-label="option 1" />
             </div> 
             </td>
          </tr>

          <tr>
            <td style={{padding:'15px'}} >7</td>   
            <td>تطبيقيه 
             <div style={{marginTop:'-25px', display:'flex', justifyContent:'flex-end'}}>
             <Form.Check aria-label="option 1" />
             </div> 
             </td>
          </tr>
          
          <tr>
            <td style={{padding:'15px'}}>8</td>   
            <td>تطبيقيه 
             <div style={{marginTop:'-25px', display:'flex', justifyContent:'flex-end'}}>
             <Form.Check aria-label="option 1" />
             </div> 
             </td>
          </tr>

          <tr>
            <td style={{padding:'15px'}}>9</td>   
            <td>تطبيقيه 
             <div style={{marginTop:'-25px', display:'flex', justifyContent:'flex-end'}}>
             <Form.Check aria-label="option 1" />
             </div> 
             </td>
          </tr>
    

          
        </tbody>
      </Table>  
            
            </div>
    </div>
        </Col>
     
    </Row>

    </div>
}



export default ViewMainSection;