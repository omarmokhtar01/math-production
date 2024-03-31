import React, { useEffect, useState } from 'react';
import { Row,Col , Container, Form} from 'react-bootstrap'
import imgForm from "../../images/imgform.png";
import './Auth.css'
import { Link ,useNavigate} from "react-router-dom";
import { createLoginUser } from '../../features/auth/authSlice';
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {
    const dispatch = useDispatch();
    let token = Cookies.get("token");
    const navigate = useNavigate();
    const [state, setState] = useState({
      email: "",
      password: "",
    });
  
    // Destructure state object for easier access
    const { email, password } = state;
  
    // Function to handle input changes
    const handleInputChange = (fieldName) => (e) => {
      setState((prevState) => ({ ...prevState, [fieldName]: e.target.value }));
    };
    const res = useSelector((state) => state.auth.userLogin);
  
    const isLoading = useSelector((state) => state.auth.isLoading);
    const error = useSelector((state) => state.auth.error);

    
  

    // console.log(res);
    //  console.log(res.data.token)
    // if (res && res.data) {
    //   console.log(res.data.token);
    // }
    // console.log(res.message);
    // console.log(res.success);
  
    //save data
    const OnSubmit = async (e) => {
      e.preventDefault();
      await dispatch(
        createLoginUser({
          formData: {
            email,
            password,
          },
          
        })
      );

      
      // Handle success or error responses here (redirect or show error message)
    };



    // setTimeout(() => {
    //   navigate("/Questions")
    // }, 1000);


    useEffect(()=>{
      if (!isLoading) {
        if (res&&res.data) {
          if ( res.message==="User retrieved successfully.") {
            const expirationTime = 7; // in days
              const expirationDate = new Date();
              expirationDate.setDate(expirationDate.getDate() + expirationTime);
              Cookies.set("token", res.data.token, { expires: expirationDate });
               setTimeout(() => {
      navigate("/Questions")
    }, 1000);
          }
        }
      }
    },[isLoading])
    

    const [selectedOption, setSelectedOption] = useState('option1');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

    return <>

    <div>

     <Row style={{maxWidth:'100%'}}>
        <Col  sm={12} xs={12} md={5} xl={6}>
            <div>
            <img  src={imgForm} alt="" style={{ width:'100%', height: "1024px" }} className='img-login'/>
            </div>   
        </Col>
       
        <Col  sm={12} xs={12} md={7} xl={6} style={{display:'flex', justifyContent:'center',alignItems:'center', marginTop:'-100px', flexDirection:'column'}}>       
      
            <p className='color-txt' style={{color:'#111' , fontSize:'36px', fontWeight:'700'}}> تسجيل الدخول المشرف</p>
            <p className='color-txt' style={{color:'rgba(17, 17, 17, 0.40)', fontSize:'16px', marginBottom:'25px'}}> مرحبا بك مرة اخري,قم بتسجيل الدخول الي لوحة التحكم الخاصة بك </p>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label style={{display:'flex'}} >بريدك الإلكتروني</Form.Label>
                    <Form.Control type="email" placeholder="أدخل بريدك الالكتروني الخاص بك" className='custom-input  meduim-screen'
                        style={{borderRadius:'8px', background:'rgba(245, 245, 245, 0.25)', border:'none', padding:'18px', width:'507px'}}
                        onChange={handleInputChange("email")}
                    value={email}
            />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                    <Form.Label style={{display:'flex'}}>كلمه المرور </Form.Label>

                    <Form.Control type="password" placeholder="أدخل كلمة المرور" className='custom-input meduim-screen ' 
                    style={{borderRadius:'8px', background:'rgba(245, 245, 245, 0.25)', border:'none', padding:'18px', width:'507px'  }}
                    onChange={handleInputChange("password")}
                    value={password}
                    />
                </Form.Group>

                <Form.Group className=" d-flex" >
                <input   checked={selectedOption === "admin"}
                 onChange={handleOptionChange}
                 type="radio" id="contactChoice1" name="contact"   value="admin" className="custom-radio"/>
               
                    <p style={{color:'linear-gradient(91deg, #FF7300 0.18%, #FFCD4D 99.68%)' , marginRight:'10px'}}> أدمن</p>
                </Form.Group>
                <Form.Group className="mb-3 d-flex" >
                <input checked={selectedOption === "user"}
                 onChange={handleOptionChange}
                type="radio" id="contactChoice2" name="contact"   value="user" className="custom-radio"/>
             
                    <p style={{color:'#BFBFBF', marginRight:'10px'}}> مسؤال فرعي</p>
                </Form.Group>

                <button className='meduim-screen'
                onClick={(e) => OnSubmit(e)}
                 style={{  borderRadius:'16px', color:'#FFFFFF', padding:'18px',
                fontSize:'18px', border:'none', background:'linear-gradient(91deg, #FF7300 0.18%, #FFCD4D 99.68%)', width:'507px'}}>
                تسجيل الدخول</button>

            <Link to='/forget-password' style={{textDecoration:'none'}}>
                <div><p style={{color:'linear-gradient(91deg, #FF7300 0.18%, #FFCD4D 99.68%)', marginTop:'40px',color:'#FF7300' }}> 
                    هل نسيت كلمه المرور ؟ </p></div>
            </Link>
               
            </Form>
          
       </Col>
       {/* onClick={(e) => OnSubmit(e)} */}
     </Row>
     <Toaster />

     </div>
    </>;
}



export default Login;