import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { Col, Container, Form, Modal, Row, Table } from 'react-bootstrap';
import imgSlid from "../../images/imgSlid.png"
import addIconWhite from "../../images/addWhite.svg"
import editIcon from "../../images/colorEdit.svg"
import viewIcon from "../../images/view.svg"
import delIcon from "../../images/delete.svg"
import attentionIcon from "../../images/attention.svg"
import { Link } from 'react-router-dom';

const SliderPicturesStudent = () => {
    const [smShow, setSmShow] = useState(false);
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
                
            <div style={{ display:'flex', justifyContent:'space-between', marginLeft:'25px', marginRight:'25px'}}>

                <div>
                <p style={{ display:'flex', fontSize:'18px', marginBottom:'25px'}}> صور السلايدر ( الطالب )  </p>
                 
                </div>

                <div style={{display:'flex', alignItems:'center', gap:'15px'}}>
            <Link to='/add-slider-pictures-student'>
                <button style={{padding:'8px 10px 8px 10px', fontSize:'15px', background:'linear-gradient(91deg, #FF7300 0.18%, #FFCD4D 99.68%)' ,color:'#FFFFFF',
                    border:'none' , borderRadius:'7px'}} >
                    اضافة صورة  <img src={addIconWhite} />
                </button>
            </Link>
                </div>

            </div>
                <div
                    style={{
                    marginLeft: "-55px",
                    borderBottom: "1.5px solid #EEEEEE ",
                    width: "100%",
                    marginTop:'15px',
                    marginBottom:'15px'
                    }}
                ></div> 

<Modal
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          
        </Modal.Header>
        <Modal.Body>
        <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', textAlign:'center'}}>
          <div> <img src={attentionIcon} />  </div>
          <p style={{fontWeight:'bold'}}> انتبه </p>
          <p>  هل انت متاكد من حذف هذه الصوره من
          <span style={{color:'#FF8410'}}> صوره الاسليدات </span> </p>

          <button style={{  borderRadius:'10px', color:'#FFFFFF', padding:'8px',
                fontSize:'18px', border:'none', background:'linear-gradient(91deg, #FF7300 0.18%, #FFCD4D 99.68%)', width:'100%', marginTop:'5px'}}>
                حذف </button>


        </div>

        </Modal.Body>
      </Modal>


          <Table responsive="sm"    >
        <thead>
          <tr>
            <th> صورة</th>
            <th>  الإجراءات </th>
            
          </tr>
        </thead>

        <tbody>
          <tr>
            <td> <img src={imgSlid} style={{width:'61px' , height:'61px', borderRadius:'5px'}} /> </td>   
          
            <td>
                <div style={{display:'flex', gap:'8px', justifyContent:'center', marginTop:'10px'}}>
                    <Link to='/edit-slider-pictures-student'>
                        <img src={editIcon} />
                </Link>
                
                        <img src={delIcon}  onClick={() => setSmShow(true)} style={{cursor:'pointer'}} />
                </div>
          </td>
           
          </tr>
          <tr>
            <td> <img src={imgSlid} style={{width:'61px' , height:'61px', borderRadius:'5px'}} /> </td>   
          
            <td>
                <div style={{display:'flex', gap:'8px', justifyContent:'center', marginTop:'10px'}}>
                    <Link to='/edit-slider-pictures-student'>
                        <img src={editIcon} />
                </Link>
                
                        <img src={delIcon}  onClick={() => setSmShow(true)} style={{cursor:'pointer'}} />
                </div>
          </td>
           
          </tr>
          <tr>
            <td> <img src={imgSlid} style={{width:'61px' , height:'61px', borderRadius:'5px'}} /> </td>   
          
            <td>
                <div style={{display:'flex', gap:'8px', justifyContent:'center', marginTop:'10px'}}>
                    <Link to='/edit-slider-pictures-student'>
                        <img src={editIcon} />
                </Link>
                
                        <img src={delIcon}  onClick={() => setSmShow(true)} style={{cursor:'pointer'}} />
                </div>
          </td>
           
          </tr>
          <tr>
            <td> <img src={imgSlid} style={{width:'61px' , height:'61px', borderRadius:'5px'}} /> </td>   
          
            <td>
                <div style={{display:'flex', gap:'8px', justifyContent:'center', marginTop:'10px'}}>
                    <Link to='/edit-slider-pictures-student'>
                        <img src={editIcon} />
                </Link>
                
                        <img src={delIcon}  onClick={() => setSmShow(true)} style={{cursor:'pointer'}} />
                </div>
          </td>
           
          </tr>
          <tr>
            <td> <img src={imgSlid} style={{width:'61px' , height:'61px', borderRadius:'5px'}} /> </td>   
          
            <td>
                <div style={{display:'flex', gap:'8px', justifyContent:'center', marginTop:'10px'}}>
                    <Link to='/edit-slider-pictures-student'>
                        <img src={editIcon} />
                </Link>
                
                        <img src={delIcon}  onClick={() => setSmShow(true)} style={{cursor:'pointer'}} />
                </div>
          </td>
           
          </tr>
          <tr>
            <td> <img src={imgSlid} style={{width:'61px' , height:'61px', borderRadius:'5px'}} /> </td>   
          
            <td>
                <div style={{display:'flex', gap:'8px', justifyContent:'center', marginTop:'10px'}}>
                    <Link to='/edit-slider-pictures-student'>
                        <img src={editIcon} />
                </Link>
                
                        <img src={delIcon}  onClick={() => setSmShow(true)} style={{cursor:'pointer'}} />
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



export default SliderPicturesStudent;