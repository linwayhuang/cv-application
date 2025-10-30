import { useState } from "react";

function PopupForm({ section, data, onSave, onCancel}) {
    const [info, setInfo] = useState(data);
    
    function handleChange(e) {
        const {name, value} = e.target;
        setInfo((prev) => ({...prev, [name]: value}));
    }

    function handleSubmit(e) {
        e.preventDefault();
        onSave(info);
    }

    return (
        <div className="popup">
            <form onSubmit={handleSubmit} className="popup-form">
                <h2>Edit {section === "basicInfo" ? "Basic Info" : "Education"}</h2>
                {section === "basicInfo" && 
                    <section>
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
                    </section>
                }
                {section === "education" && 
                    <section>
                        <label htmlFor="school">
                            School:
                        </label>
                            <input type="text" id="school" name="school" value={info.school} onChange={handleChange} />
                        <br></br>
                        <label htmlFor="major">
                            Major:
                        </label>
                            <input type="text" id="major" name="major" value={info.major} onChange={handleChange} />
                        <br></br>
                        <label htmlFor="from">
                            From:
                        </label>
                            <input type="text" id="from" name="from" value={info.from} onChange={handleChange} />
                        <br></br>
                        <label htmlFor="to">
                            To:
                        </label>
                            <input type="text" id="to" name="to" value={info.to} onChange={handleChange} />
                        <br></br>
                    </section>
                }
                <div className="popup-buttons">
                    <button type="submit">Save</button>
                    <button type="button" onClick={onCancel}>Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default PopupForm;