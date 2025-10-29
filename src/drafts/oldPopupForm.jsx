import { useState } from "react";

function PopupForm({ section, data, onSave, onClose }) {
  const [formData, setFormData] = useState(data);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(section, formData);
  };

  const renderFields = () => {
    return Object.keys(formData).map((key) => (
      <label key={key}>
        {key.charAt(0).toUpperCase() + key.slice(1)}:
        <input
          name={key}
          value={formData[key]}
          onChange={handleChange}
          type="text"
        />
      </label>
    ));
  };

  return (
    <div className="popup">
      <form onSubmit={handleSubmit} className="popup-form">
        <h2>Edit {section}</h2>
        {renderFields()}
        <div className="popup-buttons">
          <button type="submit">Save</button>
          <button type="button" onClick={onClose}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

// export default PopupForm;
