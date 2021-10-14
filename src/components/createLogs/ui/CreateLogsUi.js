import React from "react";
import Styles from "../css/CreateLogsUi.module.css";
export default function CreateLogsUi(props) {
  const { handleChange, logData,handleAddLog,handleEditLog,handleEditChange,editLogData,showItem,setEditLogAction } = props;
 

  return (
    <>{showItem=== "createlogs"?
    <div className={Styles.createlogWrapper}>
    <h2>Create a new log</h2>
  <div className={Styles.form}>
    
   <div className={Styles.flexRow}>
    <p>Hours</p><input
      type="number"
      name="hours"
      placeholder={"no of hours"}
      value={logData.hours}
      onChange={handleChange}
    />
    <p>Date</p><input
    type="date"
    name="logDate"
    placeholder={"Date"}
    value={logData.logDate}
    onChange={handleChange}
    />
    </div>
    <p>Log Description</p> <textarea
      type="text"
      name="description"
      placeholder={"Description"}
      value={logData.description}
      onChange={handleChange}
    />
    <button type="submit" onClick={handleAddLog}>
      Create Log
    </button>
  </div>
</div>:
//edit log form........................
<div className={Styles.createlogWrapper}>
    <div className={Styles.heading}><h2>Edit log</h2>
    <button onClick={()=>setEditLogAction(false)}>Back</button></div>
  <div className={Styles.form}>
    
   <div className={Styles.flexRow}>
    <p>Hours</p><input
      type="number"
      name="hours"
      placeholder={"no of hours"}
      value={editLogData.hours}
      onChange={handleEditChange}
    />
    <p>Date</p><input
    type="date"
    name="logDate"
    placeholder={"Date"}
    value={editLogData.logDate}
    onChange={handleEditChange}
    />
    </div>
    <p>Log Description</p> <textarea
      type="text"
      name="description"
      placeholder={"Description"}
      value={editLogData.description}
      onChange={handleEditChange}
    />
    <button type="submit" onClick={handleEditLog}>
      Update Log
    </button>
  </div>
  </div>
  }</>
   
  );
}

