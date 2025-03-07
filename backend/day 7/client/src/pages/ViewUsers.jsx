import React, { useEffect, useState } from "react";
import UserForm from "./UserForm";
import './Edit.css'
const ViewUsers = () => {
    const [users, setUsers] = useState([]);
    const [editingUser, setEditingUser] = useState(null); // Track the user being edited
    const [showModal, setShowModal] = useState(false); // Modal visibility state

    const fetchUser = async () => {
        try {
            const response = await fetch("http://localhost:3000/users");
            if (!response.ok) throw new Error("Failed to fetch users");
            const userJson = await response.json();
            setUsers(userJson);
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };

    useEffect(() => {
        fetchUser();
    }, []);

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`http://localhost:3000/deleteuser/${id}`, { method: 'DELETE' });
            if (!response.ok) throw new Error("Failed to delete user");
            alert("User deleted successfully");
            fetchUser();
        } catch (error) {
            console.error("Error deleting user:", error);
        }
    };

    const handleEditClick = (user) => {
        setEditingUser(user); // Set the selected user
        setShowModal(true); // Open the modal
    };

    const handleUpdateUser = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:3000/edituser/${editingUser.id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(editingUser),
            });

            if (!response.ok) throw new Error("Failed to update user");

            alert("User updated successfully");
            setShowModal(false); // Close modal
            fetchUser(); // Refresh list
        } catch (error) {
            console.error("Error updating user:", error);
        }
    };

    return (
        <div>
            <UserForm onUserAdded={fetchUser} />
            <h1 style={{ display: "flex", justifyContent: "center" }}>List Of Users</h1>
            <center>
                <table border="1" cellPadding="10">
                    <thead>
                        <tr>
                            <th>Sr. No</th>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={user.id}>
                                <td>{index + 1}</td>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    <button onClick={() => handleEditClick(user)}>Edit</button>
                                    <button onClick={() => handleDelete(user.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </center>

            {/* Modal for editing */}
            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>Edit User</h2>
                        <form onSubmit={handleUpdateUser}>
                            <label>Name:</label>
                            <input
                                type="text"
                                value={editingUser.name}
                                onChange={(e) => setEditingUser({ ...editingUser, name: e.target.value })}
                            />

                            <label>Email:</label>
                            <input
                                type="email"
                                value={editingUser.email}
                                onChange={(e) => setEditingUser({ ...editingUser, email: e.target.value })}
                            />

                            <button type="submit">Update</button>
                            <button onClick={() => setShowModal(false)}>Cancel</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ViewUsers;
