import { useState } from "react";
import BasicInfo from "./components/BasicInfo";
import Education from "./components/Education";
import PopupForm from "./components/PopupForm";
import "./App.css";

function App() {

  const [basicInfo, setBasicInfo] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
  });
  
  const [education, setEducation] = useState({
    school: "",
    major: "",
    from: "",
    to: "",
  });

  const [showPopup, setShowPopup] = useState(false);
  const [editSection, setEditSection] = useState(null);

  function handleEdit(section) {
    setEditSection(section);
    setShowPopup(true);
  }

  function handleSave(updatedInfo) {
    {editSection === "basicInfo" && setBasicInfo(updatedInfo);}
    {editSection === "education" && setEducation(updatedInfo);}
    
    setShowPopup(false);
  }

  return (
      <div className="app">
        <h1>Resume Builder</h1>
        <div className="resume-container">
          <BasicInfo data={basicInfo} onEdit={() => handleEdit("basicInfo")}/>
          <Education data={education} onEdit={() => handleEdit("education")}/>
        </div>
        {showPopup && (<PopupForm section={editSection} data={editSection === "basicInfo" ? basicInfo : education} onSave={handleSave} onCancel={() => setShowPopup(false)}/>)}
        {showPopup && <div className="overlay"></div>}
      </div>
  )
}

export default App;
