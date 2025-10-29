import { useState } from "react";
import BasicInfo from "./components/BasicInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Socials from "./components/Socials.jsx";
import ExtraActivities from "./components/ExtraActivities";
import PopupForm from "./components/PopupForm";
import "./App.css";

function App() {
  const [resumeData, setResumeData] = useState({
    basicInfo: { name: "John Doe", address: "123 Main St", phone: "555-5555", email: "john@example.com" },
    education: { school: "University of Texas", major: "Civil Engineering", from: "2015", to: "2019" },
    experience: { company: "ABC Corp", title: "Engineer", from: "2020", to: "2024" },
    socials: { linkedin: "linkedin.com/in/johndoe", github: "github.com/johndoe" },
    activities: { hobby: "Volunteering, Photography" }
  });

  const [showPopup, setShowPopup] = useState(false);
  const [editSection, setEditSection] = useState(null);

  const handleEdit = (section) => {
    setEditSection(section);
    setShowPopup(true);
  };

  const handleSave = (section, updatedData) => {
    setResumeData(prev => ({ ...prev, [section]: updatedData }));
    setShowPopup(false);
  };

  return (
    <div className="app">
      <h1>My Resume</h1>
      <div className="resume-container">
        <BasicInfo data={resumeData.basicInfo} onEdit={() => handleEdit("basicInfo")} />
        <Education data={resumeData.education} onEdit={() => handleEdit("education")} />
        <Experience data={resumeData.experience} onEdit={() => handleEdit("experience")} />
        <Socials data={resumeData.socials} onEdit={() => handleEdit("socials")} />
        <ExtraActivities data={resumeData.activities} onEdit={() => handleEdit("activities")} />
      </div>

      {showPopup && (
        <PopupForm
          section={editSection}
          data={resumeData[editSection]}
          onSave={handleSave}
          onClose={() => setShowPopup(false)}
        />
      )}

      {showPopup && <div className="overlay"></div>}
    </div>
  );
}

// export default App;
