import { useState } from "react";
import BasicInfo from "./components/BasicInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";
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

  const [experience, setExperience] = useState({
    company: "",
    title: "",
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
    {editSection === "experience" && setExperience(updatedInfo);}
    
    setShowPopup(false);
  }

  return (
      <div className="app">
        <h1>Resume Builder</h1>
        <div className="resume-container">
          <BasicInfo data={basicInfo} onEdit={() => handleEdit("basicInfo")}/>
          <Education data={education} onEdit={() => handleEdit("education")}/>
          <Experience data={experience} onEdit={() => handleEdit("experience")} />
        </div>
        {showPopup && (<PopupForm section={editSection} data={editSection === "basicInfo" ? basicInfo : editSection === "education" ? education : experience} onSave={handleSave} onCancel={() => setShowPopup(false)}/>)}
        {showPopup && <div className="overlay"></div>}
      </div>
  )
}

export default App;
