import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { Col, Container, Form, Modal, Nav, Navbar, Row, Table } from 'react-bootstrap';
import addIconColor from "../../images/addColor.svg"
import addIconWhite from "../../images/addWhite.svg"
import editIcon from "../../images/edit.svg"
import viewIcon from "../../images/view.svg"
import delIcon from "../../images/delete.svg"
import attentionIcon from "../../images/attention.svg"
import './question.css'
import { Link, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getAllquestions, removeOneQuestion } from '../../features/questions/questionSlice';
import { AiOutlineSearch, AiOutlineBell } from 'react-icons/ai';
// import './Sidebar.css';
import drMath from "../../images/drMath.svg"
import questionIcon from "../../images/question.svg"
import homeIcon from "../../images/home.svg"
import subIcon from "../../images/subOff.svg"
import searchIcon from "../../images/search.svg"
import notificationIcon from "../../images/notification.svg"
import supportIcon from "../../images/support.svg"
import contactIcon from "../../images/contact.svg"
import studentIcon from "../../images/students.svg"
import trainersIcon from "../../images/trainer.svg"
import tourIcon from "../../images/tour.svg"
import packageIcon from "../../images/package.svg"
import sectionIcon from "../../images/section.svg"
import settingIcon from "../../images/settingIcon.svg"
import profileIcon from "../../images/profile.svg"

import { Accordion } from 'react-bootstrap';





const QuestionsPage = () => {
  // const { id } = useParams();
  const dispatch = useDispatch()
  const getDatQuestion = useSelector((state) => state.question.questionData);
  const isLoading = useSelector((state) => state.question.isLoading);
 

  // if(getDatQuestion && getDatQuestion.data){
  //   console.log(getDatQuestion.data.id)
  // }
 



  const deleteOneQuestion = useSelector((state) => state.question.deleteOne);
  const isLoadingDel = useSelector((state) => state.question.isLoading);
 

 
  console.log(getDatQuestion)
  console.log(getDatQuestion.numbers_count)


  useEffect(() => {
    dispatch(getAllquestions());
  }, [dispatch]);


  const [id, setId] = useState();
  // useEffect(() => {
  //   dispatch(removeOneQuestion(id));

  // }, [dispatch]);
console.log(id);
  const token ="33|x1VvBnDjcHcGrqAjafaXKXSgv9cWtfSWGXxq7mXqc3db5601"



  const OnSubmit = async (e) => {
    // e.preventDefault();
    await dispatch(removeOneQuestion(id))
    window.location.reload()
    
  };


  const [smShow, setSmShow] = useState(false);



  const [clickedItem, setClickedItem] = useState(null);

  const handleClick = (itemName) => {
    setClickedItem(itemName);
  };
    return    <div>

      <div >

      {/* <Navbar style={{background:'#FFFFFF'}}>
      <div>
    
      </div>
      <Container>
      <Navbar.Brand href="#home">  الاسئله </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        
          <Nav className="me-auto">
          <div style={{display:'flex'}}>
       
       <Nav className="mr-auto">
       <Nav.Link href="#profile" style={{display:'flex'}}>
       
  

       <Nav.Link href="#notifications"><AiOutlineSearch size={18}/></Nav.Link>
       <Nav.Link href="#notifications" style={{marginRight:'8px'}}><AiOutlineBell size={18}/></Nav.Link>
       <div style={{display:'flex'}}>
       <div>
       <div className="circle" style={{width:'50px',height:'50px',borderRadius:'50%',display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'#D9D9D9',color:'white',marginLeft:'10px'}}>
           <span className="initials">M</span>
         </div>
       </div>
      

         <div style={{display:'flex', flexDirection:'column'}}>
         <span style={{fontWeight:'600',fontSize:'16px',color:'#000000',lineHeight:'29.98px', textAlign:'start'}}>admin 1</span><br/>
         <span className="text-muted" style={{fontSize:'7px',fontWeight:'400',lineHeight:'12.48px', marginTop:'-15px'}}>اخر تسجيل دخول : 20 مارس  03:25 م</span> 
         </div>
         
         </div>
         
         
  

       </Nav.Link>
     </Nav>
                 </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> */}




      <Navbar expand="md" style={{background:'#FFFFFF'}}  >
      {/* <div>
      <img src={drMath} alt="Your Logo" />
      </div> */}
    
      <Container>
      <div>
      <img src={drMath} alt="Your Logo" />
      </div>
        <Navbar.Brand href="#home">  الاسئله </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav"  className="justify-content-end">
          <Navbar.Text>
          <div style={{display:'flex'}}>
       
          <Nav className="mr-auto">
          <Nav.Link href="#profile" style={{display:'flex'}}>
          
     

          <Nav.Link href="#notifications"> <img src={searchIcon} />  </Nav.Link>
          <Nav.Link href="#notifications" style={{marginRight:'8px'}}><img src={notificationIcon} /></Nav.Link>
          <div style={{display:'flex'}}>
          <div>
          <div className="circle" style={{width:'50px',height:'50px',borderRadius:'50%',display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'#D9D9D9',color:'white',marginLeft:'10px'}}>
              <span className="initials">M</span>
            </div>
          </div>
         

            <div style={{display:'flex', flexDirection:'column'}}>
            <span style={{fontWeight:'600',fontSize:'16px',color:'#000000',lineHeight:'29.98px', textAlign:'start'}}>admin 1</span><br/>
            <span className="text-muted" style={{fontSize:'7px',fontWeight:'400',lineHeight:'12.48px', marginTop:'-15px'}}>اخر تسجيل دخول : 20 مارس  03:25 م</span> 
            </div>
              {/* <span style={{fontWeight:'600',fontSize:'16px',color:'#000000',lineHeight:'29.98px'}}>admin 1</span><br/> */}
            {/* <span className="text-muted" style={{fontSize:'7px',fontWeight:'400',lineHeight:'12.48px'}}>اخر تسجيل دخول : 20 مارس  03:25 م</span>  */}
            </div>
            {/* <div className="circle" style={{width:'50px',height:'50px',borderRadius:'50%',display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'#D9D9D9',color:'white',marginRight:'8px'}}>
              <span className="initials">M</span>
            </div> */}
            
            {/* <Nav.Link href="#notifications" style={{marginRight:'8px'}}><AiOutlineBell size={18}/></Nav.Link>

<Nav.Link href="#notifications"><AiOutlineSearch size={18}/></Nav.Link> */}

          </Nav.Link>
        </Nav>
                    </div>
          </Navbar.Text>
      
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
      </div>
   
     
    <Row style={{maxWidth:'100%'}}>

    
       <Col  sm={2} xs={2} md={3} xl={2}>
           <div>
          <Sidebar />
          
           </div>   
       </Col>
      
      
      

        <Col sm={10} xs={10} md={9} xl={10} >       
        {/* <div className='nav-bar' style={{background:'#FFFFFF' }}>
                <div style={{display:'flex', justifyContent:'space-between', padding:'12px'}}>
                    <p> الاشئله</p>

                    <div style={{display:'flex'}}>
                        <p> admin</p>
                        <p> admin</p>
                        <p> admin</p>
                    </div>
                </div>
        </div> */}

 
   <div style={{paddingRight:'30px', paddingLeft:'30px' , height:'100%'}}>    
   {/* <Navbar className='navbar-card' expand="lg" dir="ltr" style={{backgroundColor:'white'}}>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" style={{marginLeft:'16px'}}>
        <Nav className="mr-auto">
          <Nav.Link href="#profile" style={{display:'flex'}}>
          <div style={{textAlign:'end',marginRight:'8px'}}>
              <span style={{fontWeight:'600',fontSize:'16px',color:'#000000',lineHeight:'29.98px'}}>admin 1</span><br/>
            <span className="text-muted" style={{fontSize:'7px',fontWeight:'400',lineHeight:'12.48px'}}>اخر تسجيل دخول : 20 مارس  03:25 م</span> 
            </div>
            <div className="circle" style={{width:'50px',height:'50px',borderRadius:'50%',display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'#D9D9D9',color:'white',marginRight:'8px'}}>
              <span className="initials">M</span>
            </div>
            
            

          </Nav.Link>
        </Nav>
        <Nav.Link href="#notifications" style={{marginRight:'8px'}}><AiOutlineBell size={18}/></Nav.Link>

        <Nav.Link href="#notifications"><AiOutlineSearch size={18}/></Nav.Link>

      </Navbar.Collapse>
      <Navbar.Brand href="#home">
        <span style={{marginRight:'32px',fontSize:'24px',fontWeight:'400',lineHeight:'42.77px'}}>
        الأسئلة
        </span>
      </Navbar.Brand>
    </Navbar> */}
        <div className='box' style={{background:'#FFFFFF', width:'100%', height:'100%' , borderRadius:'10px', padding:'20px', margin:'20px 15px 20px 15px'}}>  


            <div style={{ display:'flex', justifyContent:'space-around', paddingTop:'30px'}}  className='btn-exl' >


                        <div>
                            <p style={{ display:'flex', fontSize:'18px', marginBottom:'25px'}}>عرض الاسئله</p>
                            
                        </div>

                        <div>
                        <Form.Control
                        className='search-form search-formtxt'
                        type="text"
                        placeholder="البحث ياختيار نوع السؤال او المستوي او القسم الرئيسي او القسم الفرعي اوعدد الارقام "
                        style={{width:'300px', borderRadius:'50px', fontSize:'12px', color:'#181818', marginBottom:'10px', paddingBottom:'12px', paddingTop:'12px'}}
                        />
                        </div>

            <div >

            <Link to='/add-excel-sheet'>
                        <button style={{padding:'8px', fontSize:'15px', background:'linear-gradient(91deg, #FF7300 0.18%, #FFCD4D 99.68%)' ,color:'#FFFFFF',
                            border:'none' , borderRadius:'7px', marginLeft:'7px', marginBottom:'7px'}}>
                            اضافه ملف اكسيل   <img src={addIconWhite} />
                        </button>

            </Link>
            <Link to='/add-excel-sheet'>
                        <button
                         style={{padding:'8px 35px', fontSize:'15px', background:'#FFFFFF' ,color:'rgba(255, 115, 0, 1)',
                            border:'1px solid rgba(255, 115, 0, 1)' , borderRadius:'7px', marginLeft:'7px', marginBottom:'7px'}}>
                           حذف متعدد  
                        </button>

            </Link>
            <Link to='/add-question'>
                        <button style={{padding:'8px', fontSize:'15px', background:'linear-gradient(91deg, #FF7300 0.18%, #FFCD4D 99.68%)' ,color:'#FFFFFF',
                            border:'none' , borderRadius:'7px', marginLeft:'7px', marginBottom:'7px'}}>
                              اضافه سؤال   <img src={addIconWhite} />
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




          {/* <Row  >
          
          <Col xl={1}> 
          <p>#</p>
          
          <div>1</div>
          <div>2</div>
          </Col>
          
          <Col xl={1}> 
          <p  style={{marginRight:'-45px'}}>    السؤال</p>
          <div>( 1 ,2 ,3 ) </div>
          </Col>
          <Col xl={1} > <p>نوع السؤال  </p> <div>  تدريب عام  </div> <div>  تدريب تفصيلي </div> </Col>
          <Col xl={1}>  <p>  القسم الرئيسي - المستوى </p> <div>  رياضيات  </div>  </Col>
          <Col xl={1}>   <p> القسم الفرعي </p>  <div>   تطبيقية   </div>   </Col>
          <Col xl={2}>   <p> عدد الارقام في السؤال </p>  <div>   مسائل رقمين   </div>  </Col>
          <Col xl={1}>   <p> الاجابه الصحيحة  </p> <div>  3  </div>  </Col>
          <Col xl={2}>  <p> الاختيارات  </p> <div> ( 1 ,2 ,3 ) </div>   </Col>
          <Col xl={2}> <p> الإجراءات  </p></Col>
        

          </Row> */}

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
          <p>  هل انت متاكد من حذف هذا السؤال من
          <span style={{color:'#FF8410'}}> الاسئلة  </span> </p>

          <button onClick={(e) => OnSubmit(e)}
          style={{  borderRadius:'10px', color:'#FFFFFF', padding:'8px',
                fontSize:'18px', border:'none', background:'linear-gradient(91deg, #FF7300 0.18%, #FFCD4D 99.68%)', width:'100%'}}>
                حذف </button>


        </div>

        </Modal.Body>
      </Modal>

      <div className="table-responsive">
          <Table  responsive    >
        <thead>
          <tr>
            <th>#</th>
            <th>  السؤال </th>
            <th> نوع السؤال  </th>
            <th>  القسم الرئيسي - المستوى </th>
            <th>  القسم الفرعي </th>
            <th> عدد الارقام في السؤال  </th>
            <th> الاجابه الصحيحة </th>
            <th> الاختيارات  </th>
            <th>  الإجراءات </th>
            
          </tr>
        </thead>

        {
          !isLoading?(
            getDatQuestion.data ? (
            <>
              {getDatQuestion.data && (getDatQuestion.data).map((item, index) => (
                <tbody>
          <tr>
            <td>{item.id}</td>
            <td>( {item.numbers.map(num => num.toString())} ) </td>
            <td> {item.training_type.title} </td>
            <td> {item.type_level.title}</td>
            <td>{item.level_category.title}</td>
            <td> {item.numbers_count}  </td>
            <td>{item.answer}</td>
            <td>{item.choices}</td>
            <td>
            
            <div style={{display:'flex', gap:'8px'}}>
            <Link to={`/edit-question/${item.id}`}>
                <img src={editIcon} />
           </Link>
         
                <img src={delIcon}  
                 onClick={() => {
                  setSmShow(true);
                  setId(item.id);
                }} style={{cursor:'pointer'}} />
                
                <button style={{padding:'8px', fontSize:'15px', background:'#FFFFFF' ,color:'#FF8410',
                            border:'1px solid #FF8410' , borderRadius:'7px'}}>
                            ايقاف  
                             
                        </button> 
             <div style={{marginTop:'8px'}}>
             <Form.Check aria-label="option 1" />
             </div>
                     

            </div></td>
           
          </tr>
          {/* <tr>
            <td>2</td>
            <td> ( 1 ,2 ,3 ) </td>
            <td> تدريب تفصيلي</td>
            <td>رياضيات</td>
            <td>تطبيقيه</td>
            <td>مسائل رقمين</td>
            <td>3</td>
            <td>( 1 ,2 ,3 )</td>
            <td>
            
            <div style={{display:'flex', gap:'8px'}}>
            <Link to='/edit-question'>
                <img src={editIcon} />
           </Link>
          
                <img src={delIcon}  onClick={() => setSmShow(true)} style={{cursor:'pointer'}} />
                
                <button style={{padding:'8px', fontSize:'15px', background:'#FFFFFF' ,color:'#FF8410',
                            border:'1px solid #FF8410' , borderRadius:'7px'}}>
                            ايقاف  
                             
                        </button> 
             <div style={{marginTop:'8px'}}>
             <Form.Check aria-label="option 1" />
             </div>
                     

            </div></td>
           
          </tr>
          */}

          
        </tbody>
              ))}
            </>
          ) :   null
          ):(
            null
            )
        }



      
          </Table>  
     </div>

        </div>
  </div>
       
        </Col>
     
    </Row>

    </div>
}


export default QuestionsPage;