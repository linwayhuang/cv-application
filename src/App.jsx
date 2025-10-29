import { useState } from "react";
import BasicInfo from "./components/BasicInfo";
import PopupForm from "./components/PopupForm";
import "./App.css";

function App() {

  const [basicInfo, setBasicInfo] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
  });

  const [showPopup, setShowPopup] = useState(false);

  function handleEdit() {
    setShowPopup(true);
  }

  function handleSave(updatedInfo) {
    setBasicInfo(updatedInfo);
    setShowPopup(false);
  }

  return (
    <div>
      <p>Hello</p>
      <div>
        <BasicInfo data={basicInfo} onEdit={handleEdit}/>
        {showPopup && (<PopupForm data={basicInfo} onSave={handleSave} onClose={() => setShowPopup(false)}/>)}
      </div>
    </div>
  )
}

export default App;
