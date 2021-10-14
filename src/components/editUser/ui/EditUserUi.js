import React from 'react'
import Styles from '../css/EditUserUi.module.css';
export default function EditUserUi(props) {
    const {setActionBtnTab,handleChange,handleEdit,User,editMessage} = props;
    console.log("editmessage",editMessage)
    return (
        <div className={Styles.editFormWrapper}>
        <div className={Styles.heading}>
            <h3>Edit User</h3>
            <button  onClick={()=>{setActionBtnTab("")}}>Back</button>
        </div>
        <div>{editMessage===true?
        <div className={Styles.editMessage}>
           <h2>User Updated Successfully</h2>
           <button  onClick={()=>{setActionBtnTab("")}}>Back to User List</button>
        </div>:
        <div className={Styles.editForm}>
        <input
          type="text"
          name="firstName"
          placeholder={"Enter first name"}
          value={User.firstName}
          onChange={handleChange}
        
        />
        <input
          type="text"
          name="lastName"
          placeholder={"Enter last name"}
          value={User.lastName}
          onChange={handleChange}
         
        />
        <input
          type="email"
          name="email"
          placeholder={"Enter Email"}
          value={User.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder={"Password"}
          value={User.password}
          onChange={handleChange}
        
        />
        <input
          type="password"
          name="password_confirmation"
          placeholder={"Confirm password"}
          value={User.password_confirmation}
          onChange={handleChange}
        />
        <button type="submit" onClick={handleEdit}>
          Edit
        </button>
        </div>}
        </div>
        </div>
    )
}
