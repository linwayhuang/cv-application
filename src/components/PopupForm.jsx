import { useState } from "react";

function PopupForm({data, onSave, onClose}) {
    const [info, setInfo] = useState(data);
    
    function handleChange(e) {
        setInfo({...info, [e.target.name]: e.target.value})
    }

    function handleSubmit(e) {
        e.preventDefault();
        onSave(info);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" name="name" value={info.name} onChange={handleChange} />
            </label>
            <label>
                Address:
                <input type="text" name="address" value={info.address} onChange={handleChange} />
            </label>
            <label>
                Phone:
                <input type="text" name="phone" value={info.phone} onChange={handleChange} />
            </label>
            <label>
                Email:
                <input type="email" name="email" value={info.email} onChange={handleChange} />
            </label>
            <button type="submit">Save</button>
            <button type="button" onClick={onClose}>Close</button>
        </form>
    )
}

export default PopupForm;