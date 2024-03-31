import React, { useEffect } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { Col, Container, Form, Modal, Nav, Navbar, Row, Table } from 'react-bootstrap';
import './question.css'
import downloadIcon from "../../images/download.svg"
import drMath from "../../images/drMath.svg"
import searchIcon from "../../images/search.svg"
import notificationIcon from "../../images/notification.svg"
import Cookies from "js-cookie";
import { Link ,useNavigate} from "react-router-dom";

const AddExcelSheet = () => {
  let token = Cookies.get("token");
  const navigate = useNavigate();

  useEffect(()=>{
    if (!token) {
      navigate("/login");
    }

  },[token])
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


        <div className='box'  style={{background:'#FFFFFF', width:'100%', height:'100%' , borderRadius:'10px' , padding:'20px', margin:'20px 15px 20px 15px'}}>      
             <p style={{ display:'flex', fontSize:'18px'}}>اضافه ملف اكسيل بلاسئلة</p>


             <div style={{display:'flex' , flexDirection:'column' , justifyContent:'center', alignItems:'center', textAlign:'center'}}>

                <div style={{border:'1px solid rgb(31 31 31 / 15%)', borderRadius:'10px', padding:'10px 20px', marginBottom:'25px'}}>
                    <label for="myfile" style={{fontSize:'15px',cursor:'pointer'}}>  <img src={downloadIcon} />   ارفاق شيت الاكسل     </label>
                        <input type="file" id="myfile" name="myfile" />

                </div>
                        

                        <button style={{  borderRadius:'10px', color:'#FFFFFF', padding:'8px',
                            fontSize:'18px', border:'none', background:'linear-gradient(91deg, #FF7300 0.18%, #FFCD4D 99.68%)', width:'30%'}}>
                            اضافه</button>
             </div>
         
                </div>
</div>
        </Col>
    
     
    </Row>

    </div>
}



export default AddExcelSheet;