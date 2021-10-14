import React,{useState} from "react";
import Styles from "../css/UserWorkLogsUi.module.css";
import CreateLogs from '../../createLogs/container/CreateLogs.js'
export default function UserWorkLogsUi(props) {
  const { userWorkLogs, handleBack, user, setEditLogAction,editLogAction,setChangeWorkHour,changeWorkHour,changeHour,workHour,setWorkHour} = props;
  const [editLog,setEditLog] = useState()
  console.log("logsss", userWorkLogs.data);
  return (
    <>{editLogAction===true?
    <CreateLogs editLog={editLog} setEditLogAction={setEditLogAction} />:
    <div className="row">
    <div className="col-12">
      <div className={Styles.heading}>
        <h2>User All work Logs</h2>
        {user.roles[0].name === "admin" ? (
          <button onClick={handleBack}>Back</button>
        ) : (
          ""
        )}
      </div>
    </div>
    <div className={`col-12 ${Styles.logRow}`}>
      <div className="row">
        <button onClick={()=>setChangeWorkHour(true)}>change working hour</button>
        {changeWorkHour===true?
        <div className={Styles.workHourDiv}>
        <input
      type="number"
      name="workingHours"
      placeholder={"working hours"}
      value={workHour}
      onChange={(e)=>setWorkHour(e.target.value)}
    />
    <button onClick={changeHour}>Done</button>
        </div>:""}
        {userWorkLogs?.data?.map((eachlog, index) => {
          return (
            <div className={`col-md-6 ${Styles.mrgnBtm}`}>
              <div className={Styles.logCard}>
                <p>
                  <span className="mx-3">hours:</span>
                  <span>{eachlog.hours}</span>
                </p>
                <p>
                  <span className="mx-3">date:</span>
                  <span>{eachlog.log_date}</span>
                </p>
                <p>
                  <span className="mx-3">description:</span>
                  <span>{eachlog.description}</span>
                </p>
                <p>
                  {eachlog.hours<user.working_hours?
                  <span className={Styles.redLine}>.</span>:
                  <span className={Styles.greenLine}></span>         
        }</p>
                <button className={`mx-3 ${Styles.editBtn}`}onClick={()=>{setEditLog(eachlog);setEditLogAction(true)}}>Edit log</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </div>
    }</>
   
  );
}
