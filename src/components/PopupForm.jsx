import { useState } from "react";

function PopupForm({data, onSave, onCancel}) {
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
            <label htmlFor="name">
                Name:
            </label>
                <input type="text" id="name" name="name" value={info.name} onChange={handleChange} />
            <br></br>
            <label htmlFor="address">
                Address:
            </label>
                <input type="text" id="address" name="address" value={info.address} onChange={handleChange} />
            <br></br>
            <label htmlFor="phone">
                Phone:
            </label>
                <input type="text" id="phone" name="phone" value={info.phone} onChange={handleChange} />
            <br></br>
            <label htmlFor="email">
                Email:
            </label>
                <input type="email" id="email" name="email" value={info.email} onChange={handleChange} />
            <br></br>
            <button type="submit">Save</button>
            <br></br>
            <button type="button" onClick={onCancel}>Cancel</button>
        </form>
    )
}

export default PopupForm;