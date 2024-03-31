import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { Col, Container, Form, Modal, Nav, Navbar, Row, Table } from 'react-bootstrap';
import './question.css'
import { useDispatch, useSelector } from 'react-redux';
import { EditOneQuestion, getTrainingTypes, getTypeCategory, getTypeLevels } from '../../features/questions/questionSlice';
import toast, { Toaster } from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import { Link ,useNavigate} from "react-router-dom";

import drMath from "../../images/drMath.svg"
import searchIcon from "../../images/search.svg"
import notificationIcon from "../../images/notification.svg"
import Cookies from "js-cookie";

const EditQuestion = () => {
  let token = Cookies.get("token");
  const navigate = useNavigate();

  useEffect(()=>{
    if (!token) {
      navigate("/login");
    }

  },[token])
const {idPage}= useParams()
    const dispatch = useDispatch()
    const editOne = useSelector((state) => state.question.editQuestion);
    const isLoading = useSelector((state) => state.question.isLoading);
   
    console.log(editOne)
console.log(idPage);

    const [numbers_count, setNumbers_count] = useState(""); //عدد الارقام في السوال
    const [answer, setAnswer] = useState(""); //الاجابه الصحيجه
    const [choices, setChoices] = useState(""); // ادخل الاختيارات
    const [numbers, setNumbers] = useState([]); // ادخل السوال
    
    //const [training_type_id, SetTraining_type_id] = useState(); // ادخل  نوع السوال
    
    const getTraingTypes = useSelector((state) => state.question.traingTypes);
    const getTraingTypesLoading = useSelector((state) => state.question.isLoadingTrainingTypes)

    useEffect(() => {
        dispatch(getTrainingTypes());
      }, [dispatch]);

      const [numbersInput, setNumbersInput] = useState('');

    const getAlllevelType = useSelector((state) => state.question.levelType);

    useEffect(() => {
        dispatch(getTypeLevels());
      }, [dispatch]);
      const [numbersArray, setNumbersArray] = useState([]);


    const getAlllevelCat = useSelector((state) => state.question.levelCat);

    useEffect(() => {
        dispatch(getTypeCategory());
      }, [dispatch]);

    //نوع السوال
    const [id, setId] = useState(); 

    

    //للقسم الرئيسي
    const [idMain, setIdmain] = useState(); 

    


    //للقسم الفرعي
    const [idSub, setIdSub] = useState(); 

    





    const handleChangeNumbersCount = (e) => {
        const inputValue = e.target.value.trim(); // Remove leading/trailing spaces
        setNumbersInput(inputValue);
    
        // Split the input into individual numbers and operators
        const parts = inputValue.split(/\s*,\s*/);
        const numbers = parts.map(part => {
          const num = parseInt(part, 10); // Parse the number part
          return isNaN(num) ? 0 : num;    // Default to 0 for non-numeric parts
        });
    
        setNumbersArray(numbers);
      };
    
    const handleChangeAnswer = (e) => {
        setAnswer(e.target.value);
    };
    
    const handleChangeChoices = (e) => {
        // Split the input value by comma to get individual choices
        // const newChoices = .split(",");
        setChoices(e.target.value);
      };
     
      const [expressionArray, setExpressionArray] = useState([]);

      const handleChangeNumbers = (e) => {
        const inputString = e.target.value;
        const parsedArray = parseExpression(inputString);
        setExpressionArray(parsedArray);
      };
    
      const parseExpression = (expressionString) => {
        // Using a regular expression to split the string into digits and operators
        const parsedArray = expressionString.split(/(\+|\-|\*|\/)/g).map(item => item.trim());
        // Filter out any empty strings or spaces
        return parsedArray.filter(item => item !== '' && item !== ' ');
      };
      
      
      
      
      
      

    const handleChangeTraingType = (e) => {
        setId(e.target.value);
    };

    const handleChangeMain = (e) => {
        setIdmain(e.target.value);
    };

    const handleChangeSub = (e) => {
        setIdSub(e.target.value);
    };


     
    const handleSubmit = (e) => {
      e.preventDefault();
      const formData = {
        // numbers_count: numbers_count,
        answer: answer,
        choices: choices,
        numbers: expressionArray,
        training_type_id: id,
        type_level_id:idMain,
        level_category_id : idSub
      };
      if (expressionArray.length <=0) {
        console.log(expressionArray);
        return toast.error("حدث خطأ في اضافة السؤال مثال للسؤال 4+5: ")
        
      }
      
      if (numbersInput.length <=0) {
        return toast.error("عدد الارقام في السوال مطلوب")

      }
    
      if (choices.length <=0) {

        return toast.error("حدث خطأ في اضافة الاختيارات مثال 4,5 ")

      }
    
      if (answer.length <=0) {
        console.error('الاجابة الصحيحة مطلوبة');
        return; // Prevent further action
      }
    
      if (!id) {
        return toast.error("نوع السؤال مطلوب")// Prevent further action
      }
    
      if (!idMain) {
        return toast.error("القسم الرئيسي مطلوب")// Prevent further action
        // Prevent further action
      }
    
      if (!idSub) {
        return toast.error("القسم الفرعي مطلوب")// Prevent further action
        // Prevent further action
      }
    //   if (answer.length>0) {
    //     toast.error("حدث خطأ في اضافة السؤال مثال للسؤال 4,+5: ")
    //     return; // Prevent further action
    //   }
    
    //   if (!choices) {
    //     console.error('Choices are required.');
    //     return; // Prevent further action
    //   }
    
    //   if (!numbers) {
    //     console.error('Numbers are required.');
    //     return; // Prevent further action
    //   }
    
    //   if (!id) {
    //     console.error('ID is required.');
    //     return; // Prevent further action
    //   }
    
    //   if (!idMain) {
    //     console.error('Main ID is required.');
    //     return; // Prevent further action
    //   }
    
    //   if (!idSub) {
    //     console.error('Sub ID is required.');
    //     return; // Prevent further action
    //   }
      dispatch(EditOneQuestion( {formData,id: idPage} ));

  if (editOne && editOne.status === 200) {
    toast.success("تمت تعديل سؤال بنجاح")
  } else if(editOne && editOne.message === 'Request failed with status code 422'){
    toast.error("حدث خطأ في التعديل")

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
        {/* <div style={{background:'#FFFFFF' }}>
                <div style={{display:'flex', justifyContent:'space-between'}}>
                    <p> الاشئله</p>

                    <div style={{display:'flex'}}>
                        <p> admin</p>
                        <p> admin</p>
                        <p> admin</p>
                    </div>
                </div>
        </div> */}

<div style={{paddingRight:'30px', paddingLeft:'30px' , height:'100%'}}>


        <div className='box' style={{background:'#FFFFFF', width:'100%', height:'100%' , borderRadius:'10px' , padding:'20px', margin:'20px 15px 20px 15px'}}>      
             <p style={{ display:'flex', fontSize:'18px', marginBottom:'20px'}}>تعديل الاسئلة   </p>

             <Row>
               <Col sm={6}>
               <Form>
               <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label style={{display:'flex', marginBottom:'15px'}} >  السؤال* </Form.Label>
                    <Form.Control
  value={Array.isArray(expressionArray) ? expressionArray.join('') : expressionArray}
  onChange={handleChangeNumbers}
      type="text"
      placeholder="4+5+9"
      className='custom-input'
      style={{
        borderRadius: '8px',
        background: 'rgb(245 245 245 / 43%)',
        border: 'none',
        padding: '18px',
        marginBottom: '25px'
      }}
      required
    />
                </Form.Group>



                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label style={{display:'flex', marginBottom:'15px'}} > نوع السؤال* </Form.Label>
                    <Form.Control
        as="select"
        value={id}  
        onChange={(e)=>handleChangeTraingType(e)}
        className="custom-input"
        style={{
          borderRadius: '8px',
          background: 'rgb(245 245 245 / 43%)',
          border: 'none',
          padding: '18px',
          marginBottom: '25px',
        }}
      >
        <option value="">اختر نوع التدريب</option>

        {
        !isLoading ? (
            getTraingTypes && getTraingTypes.data ?(
        getTraingTypes.data.map((type) => (
          <option key={type.id} value={type.id}>
            {type.title}
          </option>
        ))
        ):null
        ): null
        }
      </Form.Control>
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label style={{display:'flex', marginBottom:'15px'}}>  القسم الفرعي* </Form.Label>
                    <Form.Control
        as="select"
        value={idSub}
        onChange={(e)=>handleChangeSub(e)}
        className="custom-input"
        style={{
          borderRadius: '8px',
          background: 'rgb(245 245 245 / 43%)',
          border: 'none',
          padding: '18px',
        }}
        required  >
        <option value="">اختر القسم الفرعي</option>
        {
        !isLoading ? (
            getAlllevelCat && getAlllevelCat.data ?(
        getAlllevelCat.data.map((type) => (
          <option key={type.id} value={type.id}>
            {type.title}
          </option>
        ))
        ):null
        ): null
        }
      </Form.Control>
                </Form.Group>

              

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label style={{ display: 'flex', marginBottom: '15px' }}>الاختيارات *</Form.Label>
      <Form.Control
  value={Array.isArray(choices) ? choices.join(",") : choices}
  onChange={(e) => handleChangeChoices(e)}
        type="text"
        placeholder="أدخل الاختيارات"
        className='custom-input'
        style={{ borderRadius: '8px', background: 'rgb(245 245 245 / 43%)', border: 'none', padding: '18px' }}
        required  />
    </Form.Group>

              

               
               
               
            </Form>
                 </Col>

                 <Col sm={6}>
                 <Form>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label style={{display:'flex', marginBottom:'15px'}}> القسم الرئيسي* </Form.Label>
                    <Form.Control
        as="select"
        value={idMain}
        onChange={(e)=>handleChangeMain(e)}
        className="custom-input"
        style={{
          borderRadius: '8px',
          background: 'rgb(245 245 245 / 43%)',
          border: 'none',
          padding: '18px',
        }}
        required  >
        <option value="">اختر القسم الرئيسي</option>
        {
        !isLoading ? (
            getAlllevelType && getAlllevelType.data ?(
        getAlllevelType.data.map((type) => (
          <option key={type.id} value={type.id}>
            {type.title}
          </option>
        ))
        ):null
        ): null
        }
      </Form.Control>
                </Form.Group>


                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label style={{display:'flex', marginBottom:'15px'}}>  عدد الارقام في السوال* </Form.Label>

                    <Form.Control
        value={numbersInput}
        onChange={(e) => handleChangeNumbersCount(e)}
        type="text"
        placeholder="مثال لأضافة الارقام (5, +4, +2, -1,*2,/1)"
        className='custom-input'
        style={{
          borderRadius: '8px',
          background: 'rgb(245 245 245 / 43%)',
          border: 'none',
          padding: '18px'
        }}
        required  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label style={{display:'flex', marginBottom:'15px'}}>  الاجابه الصحيحه* </Form.Label>
                    <Form.Control  value={answer}    onChange={(e)=>handleChangeAnswer(e)}
                    type="text" placeholder="أدخل الاجابه الصحيحه      " className='custom-input'
                    style={{borderRadius:'8px', background:'rgb(245 245 245 / 43%)', border:'none', padding:'18px'}}
                    required
                    />
                </Form.Group>

            </Form>

           
                 </Col>
              <div style={{display:'flex', justifyContent:'end'}}>
                      <button onClick={handleSubmit}
                      style={{padding:'8px 30px', fontSize:'15px', background:'linear-gradient(91deg, #FF7300 0.18%, #FFCD4D 99.68%)' ,color:'#FFFFFF',
                            border:'none' , borderRadius:'7px'}} >
                          تعديل
                        </button>
              </div>   
              

            </Row>
                        
            
         
      </div>
</div>
        </Col>
    
     
    </Row>
    <Toaster />

    </div>
}


export default EditQuestion;