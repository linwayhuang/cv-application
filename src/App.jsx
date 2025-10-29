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
        <BasicInfo data={basicInfo} onEdit={handleEdit}/>
        {showPopup && (<PopupForm data={basicInfo} onSave={handleSave} onCancel={() => setShowPopup(false)}/>)}
      </div>
  )
}

export default App;
