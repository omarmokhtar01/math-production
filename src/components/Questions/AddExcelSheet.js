import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { Col, Container, Form, Modal, Nav, Navbar, Row, Table } from 'react-bootstrap';
import './question.css'
import downloadIcon from "../../images/download.svg"
import drMath from "../../images/drMath.svg"
import searchIcon from "../../images/search.svg"
import notificationIcon from "../../images/notification.svg"
import Cookies from "js-cookie";
import { Link ,useNavigate} from "react-router-dom";
import * as XLSX from 'xlsx'; // Import all functions/objects from xlsx library
import { createOneQuestion } from '../../features/questions/questionSlice';
import { useSelector, useDispatch } from 'react-redux';

const AddExcelSheet = () => {
  let token = Cookies.get("token");
  const navigate = useNavigate();

  useEffect(()=>{
    if (!token) {
      navigate("/login");
    }

  },[token])




  const [selectedFile, setSelectedFile] = useState(null);
  const [excelData, setExcelData] = useState([]);

  const handleFileChange = (event) => {
      // Get the selected file from the input
      const file = event.target.files[0];
      setSelectedFile(file);
  };

  const handleUpload = () => {
      if (!selectedFile) {
          alert('Please select a file to upload.');
          return;
      }

      const reader = new FileReader();
      reader.onload = (event) => {
          const binaryString = event.target.result;
          const workbook = XLSX.read(binaryString, { type: 'binary' });
          const sheetName = workbook.SheetNames[0]; // Assuming data is in the first sheet
          const worksheet = workbook.Sheets[sheetName];
          const data = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
          setExcelData(data);
      };
      reader.readAsBinaryString(selectedFile);
  };

  const addOne = useSelector((state) => state.question.createQuestion);
  const isLoading = useSelector((state) => state.question.isLoading);

console.log(addOne);
const dispatch = useDispatch()

const handleAddQuestions = async () => {

      const data = [
          [
              "التسلسل",
              "الرقم الاول",
              "الرقم الثاني",
              "الرقم الثالث",
              "الرقم الرابع",
              "الرقم الخامس",
              "الرقم السادس",
              "الرقم السابع",
              "الرقم الثامن",
              "الرقم التاسع",
              "الرقم العاشر",
              "نوع السؤال (تفصيلي - عام )",
              "المستوي ",
              "القسم الرئيسي",
              "القسم الفرعي",
              "عدد الارقام",
              "الاجابة",
              "الاختيارات"
          ],
          [
              1,
              5,
              -10,
              "*8",
              "/7",
              -3,
              9,
              -100,
              200,
              null,
              null,
              "تفصيلي",
              "الاول",
              null,
              "مسائل منفصلة",
              8,
              10,
              "10,20"
          ],
          [
              2,
              100,
              "*10",
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              "عام",
              null,
              "الضرب",
              "من 1 ل 9",
              2,
              5,
              "5,15"
          ],
          [
              3
          ],
          [],
          [],
          []
      ];

      // Assuming excelData contains the data you want to add to the API
      for (let i = 1; i < data.length; i++) {
          const rowData = data[i];
          const formData = {
              first_number: rowData[1],
              second_number: rowData[2],
              third_number: rowData[3],
              fourth_number: rowData[4],
              fifth_number: rowData[5],
              sixth_number: rowData[6],
              seventh_number: rowData[7],
              eighth_number: rowData[8],
              ninth_number: rowData[9],
              tenth_number: rowData[10],
              question_type: rowData[11],
              level: rowData[12],
              main_section: rowData[13],
              sub_section: rowData[14],
              number_count: rowData[15],
              answer: rowData[16],
              choices: rowData[17]
          };
          await dispatch( createOneQuestion(formData)); // Assuming createOneQuestion is a function to make API request
      }
 
   
  
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
  <Link to={'/'}>
<img src={drMath} alt="Your Logo" />
</Link>
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


<div className='box' style={{ background:'#FFFFFF', width:'100%', height:'100%', borderRadius:'10px', padding:'20px', margin:'20px 15px 20px 15px' }}>
            <p style={{ display:'flex', fontSize:'18px' }}>اضافه ملف اكسيل بلاسئلة</p>

            <div style={{ display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', textAlign:'center' }}>
                <div style={{ border:'1px solid rgb(31 31 31 / 15%)', borderRadius:'10px', padding:'10px 20px', marginBottom:'25px' }}>
                    <label htmlFor="myfile" style={{ fontSize:'15px', cursor:'pointer' }}>
                        <img src={downloadIcon} alt="Download Icon" /> ارفاق شيت الاكسل
                    </label>
                    <input type="file" id="myfile" name="myfile" onChange={handleFileChange} />
                </div>

                <button onClick={handleUpload} style={{ borderRadius:'10px', color:'#FFFFFF', padding:'8px', fontSize:'18px', border:'none', background:'linear-gradient(91deg, #FF7300 0.18%, #FFCD4D 99.68%)', width:'30%' }}>
                    اضافه
                </button>
{/*
                <button onClick={handleAddQuestions} disabled={excelData.length === 0 || isLoading} style={{ marginTop: '20px', borderRadius:'10px', color:'#FFFFFF', padding:'8px', fontSize:'18px', border:'none', background:'linear-gradient(91deg, #FF7300 0.18%, #FFCD4D 99.68%)', width:'30%' }}>
                    {isLoading ? 'Adding...' : 'Add Questions'}
                </button>
                 */}
            </div>

        </div>
</div>
        </Col>
    
     
    </Row>

    </div>
}



export default AddExcelSheet;