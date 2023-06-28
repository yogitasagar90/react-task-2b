import React, { useState } from 'react'
import './MyForm.css'

function MyForm() {

    const [formData, setFormData] = useState({
        FirstName: "",
        LastName: "",
    })

    const [data, setData] = useState([])

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setData([...data, formData])
    }

    const [selected, setSelected] = useState("")
    const handleRadioChange = (e) => {
        setSelected(e.target.value)
    }
    console.log("radio", selected);

    return (
        <>
            <div className='container'>
                <form onSubmit={handleSubmit}>
                    <label className='fn'>
                        First Name
                        <input name='FirstName' value={formData.FirstName} type='text' onChange={handleChange} />
                    </label>
                    <label>
                        Last Name
                        <input name='LastName' value={formData.LastName} type='email' onChange={handleChange} />
                    </label>
                    <h4>How should we contact you?</h4>
                    <label className='oo'>
                        <input
                            type='radio'
                            value="phone"
                            onChange={handleRadioChange}
                            checked={selected === "phone"}
                        />Phone
                        <input
                            type='radio'
                            value="email"
                            onChange={handleRadioChange}
                            checked={selected === "email"}
                        />Email
                    </label>
                    <div style={{ display: selected ? " " : "none" }}>
                        {selected === "phone" ? <label className='pn'>
                            Phone Number
                            <input name='PhoneNumber' value={formData.PhoneNumber} type='text' onChange={handleChange} />
                        </label> : <label className='ea'>
                            Email Address
                            <input name='PhoneNumber' value={formData.PhoneNumber} type='text' onChange={handleChange} />
                        </label>}
                    </div>
                </form>
            </div>
        </>
    )
}

export default MyForm
