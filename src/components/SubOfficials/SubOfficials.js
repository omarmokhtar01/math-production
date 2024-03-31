import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { Col, Container, Form, Modal, Row, Table } from 'react-bootstrap';
import addIconColor from "../../images/addColor.svg"
import addIconWhite from "../../images/addWhite.svg"
import editIcon from "../../images/edit.svg"
import viewIcon from "../../images/view.svg"
import delIcon from "../../images/delete.svg"
import attentionIcon from "../../images/attention.svg"
import { Link } from 'react-router-dom';

const SubOfficials = () => {
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
                    <p> المسؤلين الفرعين</p>

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
                    <p> المسؤلين الفرعين </p>
                </div>

                <div style={{display:'flex', alignItems:'center', gap:'15px'}}>
            <Link to='/add-sub-official'>
                <button style={{padding:'8px 10px 8px 10px', fontSize:'15px', background:'linear-gradient(91deg, #FF7300 0.18%, #FFCD4D 99.68%)' ,color:'#FFFFFF',
                    border:'none' , borderRadius:'7px'}} >
                   اضافة مسؤل  <img src={addIconWhite} />
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
          <p>  هل انت متاكد من حذف هذا المسؤل من
          <span style={{color:'#FF8410'}}> المسؤلين الفرعين </span> </p>

          <button style={{  borderRadius:'10px', color:'#FFFFFF', padding:'8px',
                fontSize:'18px', border:'none', background:'linear-gradient(91deg, #FF7300 0.18%, #FFCD4D 99.68%)', width:'100%', marginTop:'5px'}}>
                حذف </button>


        </div>

        </Modal.Body>
      </Modal>


          <Table responsive="sm"    >
        <thead>
          <tr>
            <th>#</th>
            <th>  الاسم </th>
            <th> رقم الموبايل</th>
            <th> البريد الاكتروني </th>
            <th> تاريخ التسجيل </th>
            <th>  اخر تسجيل دخول </th>
            <th>  الصلاحيات </th>
            <th>  الإجراءات </th>
            
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>   
            <td> محمد </td>
            <td> 0128305858 </td>
            <td> Mohamed...@gmail.com </td>
            <td> 20نوفنبر2024    5:20 م </td>
            <td> 20نوفنبر2024    5:20 م </td>
            <td>

            <Link to='/edit-sub-official-details'>
              <button style={{padding:'8px 20px', fontSize:'15px', background:'#FFFFFF' ,color:'#FF8410',
                            border:'1px solid #FF8410' , borderRadius:'7px'}}>
                           الصلاحيات
               </button>
               </Link>
                         </td>
            
                        <td>
            
            <div style={{display:'flex', gap:'8px'}}>
            <Link to='/edit-sub-official-details'>
                <img src={editIcon} />
           </Link>
           <Link to=''>
                <img src={viewIcon} />
            </Link>
                <img src={delIcon}   onClick={() => setSmShow(true)} style={{cursor:'pointer'}} />
                
                <button style={{padding:'8px 15px', fontSize:'15px', background:'#FFFFFF' ,color:'#FF8410',
                            border:'1px solid #FF8410' , borderRadius:'7px'}}>
                            تفعيل  
                             
                        </button> 
             <div style={{marginTop:'8px'}}>
             <Form.Check aria-label="option 1" />
             </div>
                     

            </div></td>
           
          </tr>

        <tr>
            <td>2</td>   
            <td> محمد </td>
            <td> 0128305858 </td>
            <td> Mohamed...@gmail.com </td>
            <td> 20نوفنبر2024    5:20 م </td>
            <td> 20نوفنبر2024    5:20 م </td>
            <td>

            <Link to='/edit-sub-official-details'>
              <button style={{padding:'8px 20px', fontSize:'15px', background:'#FFFFFF' ,color:'#FF8410',
                            border:'1px solid #FF8410' , borderRadius:'7px'}}>
                           الصلاحيات
               </button>
               </Link>
                         </td>
            
                        <td>
            
            <div style={{display:'flex', gap:'8px'}}>
            <Link to='/edit-sub-official-details'>
                <img src={editIcon} />
           </Link>
           <Link to=''>
                <img src={viewIcon} />
            </Link>
                <img src={delIcon}   onClick={() => setSmShow(true)} style={{cursor:'pointer'}} />
                
                <button style={{padding:'8px 15px', fontSize:'15px', background:'#FFFFFF' ,color:'#FF8410',
                            border:'1px solid #FF8410' , borderRadius:'7px'}}>
                            تفعيل  
                             
                        </button> 
             <div style={{marginTop:'8px'}}>
             <Form.Check aria-label="option 1" />
             </div>
                     

            </div></td>
           
          </tr>

        <tr>
            <td>3</td>   
            <td> محمد </td>
            <td> 0128305858 </td>
            <td> Mohamed...@gmail.com </td>
            <td> 20نوفنبر2024    5:20 م </td>
            <td> 20نوفنبر2024    5:20 م </td>
            <td>

            <Link to='/edit-sub-official-details'>
              <button style={{padding:'8px 20px', fontSize:'15px', background:'#FFFFFF' ,color:'#FF8410',
                            border:'1px solid #FF8410' , borderRadius:'7px'}}>
                           الصلاحيات
               </button>
               </Link>
                         </td>
            
                        <td>
            
            <div style={{display:'flex', gap:'8px'}}>
            <Link to='/edit-sub-official-details'>
                <img src={editIcon} />
           </Link>
           <Link to=''>
                <img src={viewIcon} />
            </Link>
                <img src={delIcon}   onClick={() => setSmShow(true)} style={{cursor:'pointer'}} />
                
                <button style={{padding:'8px 15px', fontSize:'15px', background:'#FFFFFF' ,color:'#FF8410',
                            border:'1px solid #FF8410' , borderRadius:'7px'}}>
                            تفعيل  
                             
                        </button> 
             <div style={{marginTop:'8px'}}>
             <Form.Check aria-label="option 1" />
             </div>
                     

            </div></td>
           
          </tr>

         <tr>
            <td>4</td>   
            <td> محمد </td>
            <td> 0128305858 </td>
            <td> Mohamed...@gmail.com </td>
            <td> 20نوفنبر2024    5:20 م </td>
            <td> 20نوفنبر2024    5:20 م </td>
            <td>

            <Link to='/edit-sub-official-details'>
              <button style={{padding:'8px 20px', fontSize:'15px', background:'#FFFFFF' ,color:'#FF8410',
                            border:'1px solid #FF8410' , borderRadius:'7px'}}>
                           الصلاحيات
               </button>
               </Link>
                         </td>
            
                        <td>
            
            <div style={{display:'flex', gap:'8px'}}>
            <Link to='/edit-sub-official-details'>
                <img src={editIcon} />
           </Link>
           <Link to=''>
                <img src={viewIcon} />
            </Link>
                <img src={delIcon}   onClick={() => setSmShow(true)} style={{cursor:'pointer'}} />
                
                <button style={{padding:'8px 15px', fontSize:'15px', background:'#FFFFFF' ,color:'#FF8410',
                            border:'1px solid #FF8410' , borderRadius:'7px'}}>
                            تفعيل  
                             
                        </button> 
             <div style={{marginTop:'8px'}}>
             <Form.Check aria-label="option 1" />
             </div>
                     

            </div></td>
           
          </tr>

          <tr>
            <td>5</td>   
            <td> محمد </td>
            <td> 0128305858 </td>
            <td> Mohamed...@gmail.com </td>
            <td> 20نوفنبر2024    5:20 م </td>
            <td> 20نوفنبر2024    5:20 م </td>
            <td>

            <Link to='/edit-sub-official-details'>
              <button style={{padding:'8px 20px', fontSize:'15px', background:'#FFFFFF' ,color:'#FF8410',
                            border:'1px solid #FF8410' , borderRadius:'7px'}}>
                           الصلاحيات
               </button>
               </Link>
                         </td>
            
                        <td>
            
            <div style={{display:'flex', gap:'8px'}}>
            <Link to='/edit-sub-official-details'>
                <img src={editIcon} />
           </Link>
           <Link to=''>
                <img src={viewIcon} />
            </Link>
                <img src={delIcon}   onClick={() => setSmShow(true)} style={{cursor:'pointer'}} />
                
                <button style={{padding:'8px 15px', fontSize:'15px', background:'#FFFFFF' ,color:'#FF8410',
                            border:'1px solid #FF8410' , borderRadius:'7px'}}>
                            تفعيل  
                             
                        </button> 
             <div style={{marginTop:'8px'}}>
             <Form.Check aria-label="option 1" />
             </div>
                     

            </div></td>
           
          </tr>

          <tr>
            <td>6</td>   
            <td> محمد </td>
            <td> 0128305858 </td>
            <td> Mohamed...@gmail.com </td>
            <td> 20نوفنبر2024    5:20 م </td>
            <td> 20نوفنبر2024    5:20 م </td>
            <td>

            <Link to='/edit-sub-official-details'>
            <button style={{padding:'8px 20px', fontSize:'15px', background:'#FFFFFF' ,color:'#FF8410',
                            border:'1px solid #FF8410' , borderRadius:'7px'}}>
                        الصلاحيات
            </button>
            </Link>
             </td>
            
                        <td>
            
            <div style={{display:'flex', gap:'8px'}}>
            <Link to='/edit-sub-official-details'>
                <img src={editIcon} />
           </Link>
           <Link to=''>
                <img src={viewIcon} />
            </Link>
                <img src={delIcon}   onClick={() => setSmShow(true)} style={{cursor:'pointer'}} />
                
                <button style={{padding:'8px 15px', fontSize:'15px', background:'#FFFFFF' ,color:'#FF8410',
                            border:'1px solid #FF8410' , borderRadius:'7px'}}>
                            تفعيل  
                             
                        </button> 
             <div style={{marginTop:'8px'}}>
             <Form.Check aria-label="option 1" />
             </div>
                     

            </div></td>
           
          </tr>

          <tr>
            <td>7</td>   
            <td> محمد </td>
            <td> 0128305858 </td>
            <td> Mohamed...@gmail.com </td>
            <td> 20نوفنبر2024    5:20 م </td>
            <td> 20نوفنبر2024    5:20 م </td>
            <td>

            <Link to='/edit-sub-official-details'>
              <button style={{padding:'8px 20px', fontSize:'15px', background:'#FFFFFF' ,color:'#FF8410',
                            border:'1px solid #FF8410' , borderRadius:'7px'}}>
                           الصلاحيات
               </button>
               </Link>
                         </td>
            
                        <td>
            
            <div style={{display:'flex', gap:'8px'}}>
            <Link to='/edit-sub-official-details'>
                <img src={editIcon} />
           </Link>
           <Link to=''>
                <img src={viewIcon} />
            </Link>
                <img src={delIcon}   onClick={() => setSmShow(true)} style={{cursor:'pointer'}} />
                
                <button style={{padding:'8px 15px', fontSize:'15px', background:'#FFFFFF' ,color:'#FF8410',
                            border:'1px solid #FF8410' , borderRadius:'7px'}}>
                            تفعيل  
                             
                        </button> 
             <div style={{marginTop:'8px'}}>
             <Form.Check aria-label="option 1" />
             </div>
                     

            </div></td>
           
          </tr>

          <tr>
            <td>8</td>   
            <td> محمد </td>
            <td> 0128305858 </td>
            <td> Mohamed...@gmail.com </td>
            <td> 20نوفنبر2024    5:20 م </td>
            <td> 20نوفنبر2024    5:20 م </td>
            <td>

            <Link to='/edit-sub-official-details'>
            <button style={{padding:'8px 20px', fontSize:'15px', background:'#FFFFFF' ,color:'#FF8410',
                            border:'1px solid #FF8410' , borderRadius:'7px'}}>
                        الصلاحيات
            </button>
            </Link>
                        </td>
            
                        <td>
            
            <div style={{display:'flex', gap:'8px'}}>
            <Link to='/edit-sub-official-details'>
                <img src={editIcon} />
           </Link>
           <Link to=''>
                <img src={viewIcon} />
            </Link>
                <img src={delIcon}   onClick={() => setSmShow(true)} style={{cursor:'pointer'}} />
                
                <button style={{padding:'8px 15px', fontSize:'15px', background:'#FFFFFF' ,color:'#FF8410',
                            border:'1px solid #FF8410' , borderRadius:'7px'}}>
                            تفعيل  
                             
                        </button> 
             <div style={{marginTop:'8px'}}>
             <Form.Check aria-label="option 1" />
             </div>
                     

            </div></td>
           
          </tr>

          
        </tbody>
      </Table>  
            
            </div>
    </div>
        </Col>
     
    </Row>

    </div>
}



export default SubOfficials; 