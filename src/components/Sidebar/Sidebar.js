import React, { useState } from 'react';
import './Sidebar.css';
import drMath from "../../images/drMath.svg"
import questionIcon from "../../images/question.svg"
import homeIcon from "../../images/home.svg"
import subIcon from "../../images/subOff.svg"
import notifiIcon from "../../images/notifi.svg"
import supportIcon from "../../images/support.svg"
import contactIcon from "../../images/contact.svg"
import studentIcon from "../../images/students.svg"
import trainersIcon from "../../images/trainer.svg"
import tourIcon from "../../images/tour.svg"
import packageIcon from "../../images/package.svg"
import sectionIcon from "../../images/section.svg"
import settingIcon from "../../images/settingIcon.svg"
import profileIcon from "../../images/profile.svg"
import grayQuestion from "../../images/grayQuestion.svg"
import { Link, useLocation } from 'react-router-dom';
import { Accordion, Container, Navbar, Row } from 'react-bootstrap';

const Sidebar = () => {
  const [clickedItem, setClickedItem] = useState(null);
  const [clicked, setClicked] = useState(false);

  const handleClick = (itemName) => {
    setClickedItem(itemName);
    setClicked(!clicked); // to change icon
  };

  const locationNav = useLocation();
  const [activeLink, setActiveLink] = useState(null);
  React.useEffect(() => {
    setActiveLink(locationNav.pathname);
}, [locationNav]);

const handleClickActive = (link) => {
    setActiveLink(link);
};
  return (

    <>



 
   {/* <Row style={{maxWidth:'100%'}} >
      <Navbar style={{background:'#FFFFFF'}}  >
      <Container>
      <img src={drMath} alt="Your Logo" />
        <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text>
      
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </Row> */}


    <div className="sidebar">
      <div className="sidebar-header">
        {/* <img src={drMath} alt="Your Logo" /> */}
        
      </div>
      <div className="sidebar-menu" style={{marginTop:'-35px'}}>
          <ul>
          <li>
            <a href="#"  onClick={() => handleClick('home')} style={{ backgroundColor: clickedItem === 'home' ? '#FF7300' : '' , color: clickedItem === 'home' ? '#FFFFFF' : '#CACACA' }}>
            <img src={homeIcon} style={{paddingLeft:'2px'}} />
        <span className='txtSide'>    الصفحه الرئيسيه</span>
            </a>
          </li>
          
          <li>
          <Link to='/Sub-official'  onClick={() => handleClick('subadmins')} style={{ backgroundColor: clickedItem === 'subadmins' ? '#FF7300' : '' , color: clickedItem === 'subadmins' ? '#FFFFFF' : '#CACACA'}}  >
          <img src={subIcon} style={{paddingLeft:'4px'}} />
          <span className='txtSide'>     المسؤلين الفرعين</span>
        
            {/* <a href="#" onClick={() => handleClick('subadmins')} style={{ backgroundColor: clickedItem === 'subadmins' ? '#FF7300' : '' , color: clickedItem === 'subadmins' ? '#FFFFFF' : '#CACACA'}}>المسؤلين الفرعين</a> */}
         </Link>
          </li>

          <li>
          <Link to='/personal-page'  onClick={() => handleClick('profile')} style={{ backgroundColor: clickedItem === 'profile' ? '#FF7300' : '' , color: clickedItem === 'profile' ? '#FFFFFF' : '#CACACA'}}  >
          <img src={profileIcon} style={{paddingLeft:'2px'}} />
          <span className='txtSide'>     الصفحة الشخصية</span>
            {/* <a href="#" onClick={() => handleClick('profile')} style={{ backgroundColor: clickedItem === 'profile' ? '#FF7300' : '' , color: clickedItem === 'profile' ? '#FFFFFF' : '#CACACA'}}>الصفحة الشخصيه</a> */}
         </Link>
          </li>


          <li>
          
        
            <a href="/setting" onClick={() => handleClick('settings')} style={{ backgroundColor: clickedItem === 'settings' ? '#FF7300' : '' , color: clickedItem === 'settings' ? '#FFFFFF' : '#CACACA'}}>
            <img src={settingIcon} style={{paddingLeft:'4px'}} />
            <span className='txtSide'>    الإعدادات</span>
            </a>
          
          </li>


          {/* <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header><a href="#" onClick={() => handleClick('settings')} style={{ backgroundColor: clickedItem === 'settings' ? '#FF7300' : '' , color: clickedItem === 'settings' ? '#FFFFFF' : '#CACACA'}}>الإعدادات</a></Accordion.Header>

        <Link to='/introduction-pages' style={{textDecoration:'none'}}>
          <Accordion.Body style={{color:'#FF8410'}}>
          
         الصفحات التعريفيه
          </Accordion.Body>
        </Link>
        <Link to='/slider-picture' style={{textDecoration:'none'}}>
          <Accordion.Body style={{color:'#FF8410'}}>
          صور السلايدر
          </Accordion.Body>
        </Link>
       
      </Accordion.Item>
    </Accordion> */}













          <li>
            <a href="#" onClick={() => handleClick('packages')} style={{ backgroundColor: clickedItem === 'packages' ? '#FF7300' : '' , color: clickedItem === 'packages' ? '#FFFFFF' : '#CACACA'}}>
            <img src={packageIcon} style={{paddingLeft:'4px'}} />
            <span className='txtSide'>  الباقات</span>
            </a>
          </li>
          <li>
          {/* <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header><a href="#" onClick={() => handleClick('sections')} style={{ backgroundColor: clickedItem === 'sections' ? '#FF7300' : '' , color: clickedItem === 'sections' ? '#FFFFFF' : '#CACACA'}}>الأقسام</a></Accordion.Header>

        <Link to='/main-section' style={{textDecoration:'none'}}>
          <Accordion.Body style={{color:'#FF8410'}}>
          
          الاقسام الرئسية
          </Accordion.Body>
        </Link>
        <Link to='/sub-section' style={{textDecoration:'none', marginTop:'-30px'}}>
          <Accordion.Body style={{color:'#FF8410'}}>
          الاقسام الفرعية
          </Accordion.Body>
        </Link>
       
      </Accordion.Item>
    </Accordion> */}


            <a href="#" onClick={() => handleClick('sections')} style={{ backgroundColor: clickedItem === 'sections' ? '#FF7300' : '' , color: clickedItem === 'sections' ? '#FFFFFF' : '#CACACA'}}>
            <img src={sectionIcon} style={{paddingLeft:'4px'}} />
            <span className='txtSide'>     الأقسام</span>
            
            </a>
          </li>


          <li>
  <Link
    to='/Questions'
    onClick={() => handleClick('questions')}
    style={{
      backgroundColor: '#FF7300' ,
      color:  '#FFFFFF' 
    }}
  >
    <img src={clicked ? questionIcon : grayQuestion} style={{ paddingLeft: '4px' }} />
    <span className='txtSide'>    الاسئلة</span>
  </Link>
</li>

          <li>
            <a href="#" onClick={() => handleClick('students')} style={{ backgroundColor: clickedItem === 'students' ? '#FF7300' : '' , color: clickedItem === 'students' ? '#FFFFFF' : '#CACACA'}}>
            <img src={studentIcon} style={{paddingLeft:'4px'}} />
            <span className='txtSide'>    الطلاب المسجلين</span>
            
            </a>
          </li>
        
          <li>
            <a href="#" 
             onClick={() => handleClick('trainers')} style={{fontSize:'15px' , backgroundColor: clickedItem === 'trainers' ? '#FF7300' : '' , color: clickedItem === 'trainers' ? '#FFFFFF' : '#CACACA'}}>
            <img src={trainersIcon} style={{paddingLeft:'1px'}} />
            <span className='txtSide'>       المدربين المسجلين</span>
            </a>
          </li>
          <li>
            <a href="#" onClick={() => handleClick('tournaments')} style={{ backgroundColor: clickedItem === 'tournaments' ? '#FF7300' : '' , color: clickedItem === 'tournaments' ? '#FFFFFF' : '#CACACA'}}> 
            <img src={tourIcon} style={{paddingLeft:'4px'}} />
            <span className='txtSide'>     البطولات
            </span>
            </a>
          </li>
          <li>
            <a href="#" onClick={() => handleClick('notifications')} style={{ backgroundColor: clickedItem === 'notifications' ? '#FF7300' : '', color: clickedItem === 'notifications' ? '#FFFFFF' : '#CACACA'}}>
            <img src={notifiIcon} style={{paddingLeft:'4px'}} />
            <span className='txtSide'>   الاشعارات</span>
            </a>
          </li>
          <li>
            <a href="#" onClick={() => handleClick('support')} style={{ backgroundColor: clickedItem === 'support' ? '#FF7300' : '' , color: clickedItem === 'support' ? '#FFFFFF' : '#CACACA'}}>
            <img src={supportIcon} style={{paddingLeft:'4px'}} />
            <span className='txtSide'>    الدعم الفني</span>
            </a>
          </li>
          <li>
            <a href="#" onClick={() => handleClick('contact')} style={{ backgroundColor: clickedItem === 'contact' ? '#FF7300' : '', color: clickedItem === 'contact' ? '#FFFFFF' : '#CACACA' }}>
            <img src={contactIcon} style={{paddingLeft:'4px'}} />
            <span className='txtSide'>    تواصل معنا</span>
            
            </a>
          </li>
        </ul>
      </div>
    </div>
    </>
  );
};

export default Sidebar;