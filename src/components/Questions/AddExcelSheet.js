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
import { createLevelCategory, createTrainningType, createTypeLevel } from '../../features/excelSlice/excelSlice';
import toast, { Toaster } from 'react-hot-toast';

const AddExcelSheet = () => {
  let token = Cookies.get("token");
  const navigate = useNavigate();

  useEffect(()=>{
    if (!token) {
      navigate("/login");
    }

  },[token])

  

  const trainTypeData = useSelector((state) => state.excel.trainTypeData);
  const [title, setTitle] = useState('');

  const handleSubmittrainTypeData =async (e) => {
    e.preventDefault();
    const actionResult = await dispatch(createTrainningType({ title }));

    // Check if the action was successful
    if (createTrainningType.fulfilled.match(actionResult)) {
      // Access the id from the response data
      const trainTypeId = actionResult.payload.data.id;
      localStorage.setItem('trainTypeId', trainTypeId);
    }    
   
  };

  const typeLevelData = useSelector((state) => state.excel.typeLevelData);

  const handleSubmittraintypeLevelData =async (e) => {
    e.preventDefault();
    const actionResult =await dispatch(createTypeLevel({ title,training_type_id:localStorage.getItem('trainTypeId') }));
    const trainTypeId = actionResult.payload.data.id;
      localStorage.setItem('typeLevelId', trainTypeId);
  };


  const levelCategoryData = useSelector((state) => state.excel.levelCategoryData);
  const handleSubmittrainLevelCategory =async (e) => {
    e.preventDefault();
    const actionResult =await dispatch(createLevelCategory({ title,type_level_id:localStorage.getItem('trainTypeId') }));
    const trainTypeId = actionResult.payload.data.id;
      localStorage.setItem('levelCategoryId', trainTypeId);
  };

  const isLoadingExcel = useSelector((state) => state.excel.isLoading);



  const [selectedFile, setSelectedFile] = useState(null);
  const [excelData, setExcelData] = useState(null);
  const handleFileChange = (event) => {
    // Get the selected file from the input
    const file = event.target.files[0];
    setSelectedFile(file);
};

const handleUpload = (e) => {
  e.preventDefault();

  if (!selectedFile) {
    return toast.error("من فضلك قم بأضافة ملف Excel")
    return;
  }

  const reader = new FileReader();
  reader.onload = (event) => {
    const binaryString = event.target.result;
    setExcelData(binaryString); // Set the binary string data here
  };
  reader.readAsBinaryString(selectedFile);
  try {
    if (typeof excelData !== 'string') {
return toast.error("من فضلك قم بأضافة ملف Excel")
      // throw new Error('Excel data is not a string');
    }


    // Proceed with processing questionsData or any other logic
  } catch (error) {
    console.error('Error processing Excel data:', error);
    // Handle or display the error as needed
  }
  const workbook = XLSX.read(excelData, { type: 'binary' });
  const worksheet = workbook.Sheets[workbook.SheetNames[0]];
  const data = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
  const headers = data[0];
  const questionsData = data.slice(1);

  toast.success("يتم التحميل الأن")

  // console.log(workbook);
  // console.log(worksheet);
  // console.log(data);
console.log(headers);
  questionsData.forEach(async(questionData) => {
//     const actionTrainType =  dispatch(createTrainningType({ 
//       title: questionData[headers.indexOf("نوع السؤال (تفصيلي - عام )")] 
//     }));
// console.log(actionTrainType);
const headerText = "نوع السؤال (تفصيلي - عام )";
const headerIndex = headers.indexOf(headerText);


const actionTrainType = await dispatch(createTrainningType({
  title: questionData[headers.indexOf(headerText)]
}));

if (!actionTrainType.payload || !actionTrainType.payload.data || !actionTrainType.payload.data.id) {
  console.log('Invalid actionTrainType data');
  return; // Exit or handle the error appropriately
}

const typelevelId = await dispatch(createTypeLevel({  
  title: questionData[headers.indexOf("القسم الرئيسي")] || questionData[headers.indexOf("المستوي ")],
  training_type_id: actionTrainType.payload.data.id
}));

if (!typelevelId.payload || !typelevelId.payload.data || !typelevelId.payload.data.id) {
  console.log('Invalid typelevelId data');
  return; // Exit or handle the error appropriately
}

    const levelCategoryId = await dispatch(createLevelCategory({ title: questionData[headers.indexOf("القسم الفرعي")],type_level_id: typelevelId.payload.data.id }))

    if (!levelCategoryId.payload || !levelCategoryId.payload.data || !levelCategoryId.payload.data.id) {
      console.log('Invalid levelCategoryId data');
      return; // Exit or handle the error appropriately

    }

const formData = {
      answer: questionData[headers.indexOf("الاجابة")],
      choices: questionData[headers.indexOf("الاختيارات")],
      numbers: [
        questionData[headers.indexOf("الرقم الاول")],
        questionData[headers.indexOf("الرقم الثاني")],
        questionData[headers.indexOf("الرقم الثالث")],
        questionData[headers.indexOf("الرقم الرابع")],
        questionData[headers.indexOf("الرقم الخامس")],
        questionData[headers.indexOf("الرقم السادس")],
        questionData[headers.indexOf("الرقم السابع")],
        questionData[headers.indexOf("الرقم الثامن")],
        questionData[headers.indexOf("الرقم التاسع")],
        questionData[headers.indexOf("الرقم العاشر")],
      ],
      training_type_id: actionTrainType.payload.data.id,
      type_level_id: typelevelId.payload.data.id,
      level_category_id: levelCategoryId.payload.data.id,
    };

  await  dispatch(createOneQuestion(formData));
  });
};


  const addOne = useSelector((state) => state.question.createQuestion);
  const isLoading = useSelector((state) => state.question.isLoading);

const dispatch = useDispatch()


const handleAddQuestions = async (e) => {
  e.preventDefault();

  // Fetch training_type_id and store it in localStorage
  // if (createTrainningType.fulfilled.match(actionTrainType)) {
  //   const trainTypeId = actionTrainType.payload.data.id;
  //   localStorage.setItem('trainTypeId', trainTypeId);
  // }

  // Fetch type_level_id using training_type_id from localStorage
  // const actionTypeLevel = await dispatch(createTypeLevel({ title, training_type_id: localStorage.getItem('trainTypeId') }));
  // const typeLevelId = actionTypeLevel.payload.data.id;

  // // Fetch level_category_id using type_level_id from localStorage
  // const actionLevelCategory = await dispatch(createLevelCategory({ title, type_level_id: typeLevelId }));
  // const levelCategoryId = actionLevelCategory.payload.data.id;
  try {
    if (typeof excelData !== 'string') {
      throw new Error('Excel data is not a string');
    }


    // Proceed with processing questionsData or any other logic
  } catch (error) {
    console.error('Error processing Excel data:', error);
    // Handle or display the error as needed
  }
  const workbook = XLSX.read(excelData, { type: 'binary' });
  const worksheet = workbook.Sheets[workbook.SheetNames[0]];
  const data = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
  const headers = data[0];
  const questionsData = data.slice(1);


  // console.log(workbook);
  // console.log(worksheet);
  // console.log(data);
console.log(headers);
  questionsData.forEach(async(questionData) => {
//     const actionTrainType =  dispatch(createTrainningType({ 
//       title: questionData[headers.indexOf("نوع السؤال (تفصيلي - عام )")] 
//     }));
// console.log(actionTrainType);
const headerText = "نوع السؤال (تفصيلي - عام )";
const headerIndex = headers.indexOf(headerText);


const actionTrainType = await dispatch(createTrainningType({
  title: questionData[headers.indexOf(headerText)]
}));

if (!actionTrainType.payload || !actionTrainType.payload.data || !actionTrainType.payload.data.id) {
  console.log('Invalid actionTrainType data');
  return; // Exit or handle the error appropriately
}

const typelevelId = await dispatch(createTypeLevel({  
  title: questionData[headers.indexOf("القسم الرئيسي")] || questionData[headers.indexOf("المستوي ")],
  training_type_id: actionTrainType.payload.data.id
}));

if (!typelevelId.payload || !typelevelId.payload.data || !typelevelId.payload.data.id) {
  console.log('Invalid typelevelId data');
  return; // Exit or handle the error appropriately
}

    const levelCategoryId = await dispatch(createLevelCategory({ title: questionData[headers.indexOf("القسم الفرعي")],type_level_id: typelevelId.payload.data.id }))

    if (!levelCategoryId.payload || !levelCategoryId.payload.data || !levelCategoryId.payload.data.id) {
      console.log('Invalid levelCategoryId data');
      return; // Exit or handle the error appropriately

    }

const formData = {
      answer: questionData[headers.indexOf("الاجابة")],
      choices: questionData[headers.indexOf("الاختيارات")],
      numbers: [
        questionData[headers.indexOf("الرقم الاول")],
        questionData[headers.indexOf("الرقم الثاني")],
        questionData[headers.indexOf("الرقم الثالث")],
        questionData[headers.indexOf("الرقم الرابع")],
        questionData[headers.indexOf("الرقم الخامس")],
        questionData[headers.indexOf("الرقم السادس")],
        questionData[headers.indexOf("الرقم السابع")],
        questionData[headers.indexOf("الرقم الثامن")],
        questionData[headers.indexOf("الرقم التاسع")],
        questionData[headers.indexOf("الرقم العاشر")],
      ],
      training_type_id: actionTrainType.payload.data.id,
      type_level_id: typelevelId.payload.data.id,
      level_category_id: levelCategoryId.payload.data.id,
    };

  await  dispatch(createOneQuestion(formData));
  });
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
            </div>

            {/* <button onClick={handleAddQuestions}>اضافة الاسئلة</button> */}
        </div>

</div>
        </Col>
    
        <Toaster />

    </Row>

    </div>
}



export default AddExcelSheet;