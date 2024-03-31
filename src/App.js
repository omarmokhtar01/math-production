import logo from './logo.svg';
import './App.css';
import Login from './components/Auth/Login';
import ForgetPassword from './components/Auth/ForgetPassword';
import ConfirmEmail from './components/Auth/ConfirmEmail';
import NewPassword from './components/Auth/NewPassword';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Sidebar from './components/Sidebar/Sidebar';
import Questions from './components/Questions/QuestionsPage';
import AddExcelSheet from './components/Questions/AddExcelSheet';
import EditQuestion from './components/Questions/EditQuestion';
import MainSection from './components/Sections/MainSection';
import EditMainSection from './components/Sections/EditMainSection';
import AddMainSection from './components/Sections/AddMainSection';
import SubSection from './components/Sections/SubSection';
import EditSubSection from './components/Sections/EditSubSection';
import AddSubSection from './components/Sections/AddSubSection';
import SubOfficials from './components/SubOfficials/SubOfficials';
import AddSubOfficials from './components/SubOfficials/AddSubOfficials';
import PersonalPage from './components/PersonalPage/PersonalPage';
import EditSubOfficialDetails from './components/SubOfficials/EditSubOfficialDetails';
import ViewMainSection from './components/Sections/ViewMainSection';
import IntroductionPages from './components/Setting/IntroductionPages';
import EditSliderPictures from './components/Setting/EditSliderPicturesStudent';
import EditSliderPicturesStudent from './components/Setting/EditSliderPicturesStudent';

import AddSliderPictureStudent from './components/Setting/AddSliderPictureStudent';
import SliderPictures from './components/Setting/SliderPicture';
import SliderPicturesStudent from './components/Setting/SliderPicturesStudent';
import AddQuestion from './components/Questions/AddQuestion';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
        <Routes>
          {/* <Route index element={<Home />} /> */}
          <Route index element={<Questions />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/confirm-email" element={<ConfirmEmail /> } />
          <Route path="/new-password" element={<NewPassword /> } />
          <Route path="/sidebar" element={<Sidebar /> } />

          <Route path="/Questions" element={<Questions /> } />
          <Route path="/add-excel-sheet" element={<AddExcelSheet /> } />
          <Route path="/edit-question/:idPage" element={<EditQuestion/> } />
          <Route path="/add-question" element={<AddQuestion/> } />
         

          <Route path="/main-section" element={ <MainSection /> } />
          <Route path="/edit-main-section" element={ <EditMainSection /> } />
          <Route path="/add-main-section" element={ <AddMainSection /> } />
          <Route path="/view-main-section" element={ <ViewMainSection/> } />
          <Route path="/sub-section" element={ <SubSection /> } />
          <Route path="/edit-sub-section" element={ <EditSubSection /> } />
          <Route path="/add-sub-section" element={ <AddSubSection/> } />

          {/* <Route path="/Sub-official" element={ <SubOfficials/> } />
          <Route path="/add-sub-official" element={ <AddSubOfficials/> } />
          <Route path="/edit-sub-official-details" element={ <EditSubOfficialDetails/> } /> */}

          {/* <Route path="/personal-page" element={ <PersonalPage/> } /> */}
{/* 
          <Route path="/introduction-pages" element={ <IntroductionPages/> } />
          <Route path="/slider-picture" element={ <SliderPictures/> } />

          <Route path="/slider-pictures-student" element={ <SliderPicturesStudent/> } />
          <Route path="/edit-slider-pictures-student" element={ <EditSliderPicturesStudent/> } />
          <Route path="/add-slider-pictures-student" element={ <AddSliderPictureStudent/> } /> */}
        

          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
