import React, { useState } from 'react';
import './User.css';
import img from '../assets/back.png'
function UserForm({ onUserAdded }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const onSubmitHandler=async(e) => {
        e.preventDefault();
        if (!name || !email) {
            alert("Enter all the entries!");
            return;
        }

        try {
            const response = await fetch('http://localhost:3000/createuser?age=19', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email }),
            });

            const data = await response.json();

            if (response.ok) {
                alert("User added successfully!");
                setEmail("");
                setName("");
                onUserAdded(); 
            } else {
                alert(data.msg || "Some error occurred!");
            }
        } catch (error) {
            console.error("Error adding user:", error); 
            alert("Failed to add user! Check console for details.");
        }
    };

    return (
        <div>
            <form onSubmit={onSubmitHandler} className="mainform">
                <div className="main-heading">Add New Users 👾</div>
                <img src={img} alt="" className='form-img' />
                <div className="form-items">
                    <label>Name:</label>
                    <input 
                        type="text" 
                        placeholder="Enter Your Name" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        required 
                    />
                </div>
                <div className="form-items">
                    <label>Email:</label>
                    <input 
                        type="email" 
                        placeholder="Enter Your Email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit" className="btn">Add User 😶‍🌫️</button>
            </form>
        </div>
    );
}

export default UserForm;
