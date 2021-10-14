import React, { useState } from "react";
import CreateLogsUi from "../ui/CreateLogsUi";
import action from "../../../redux/actions/workLogAction";
import { useDispatch } from "react-redux";
export default function CreateLogs(props) {
  const { editLog,showItem,setEditLogAction} = props;
  // const [editLogData, setEditLogData] = useState(editLog);
  console.log("editLog", editLog);
  const dispatch = useDispatch();
  const [logData, setLogData] = useState({
    logDate: "",
    hours: "",
    description: "",
    
  });
  const [editLogData, setEditLogData] = useState({
    logDate: editLog?.log_date,
    hours:editLog?.hours,
    description:editLog?.description,
    id:editLog?.id
  });
  // const createLogSuccess = useSelector(
  //   (state) => state.workLogReducer.successMessage
  // );
  // const updateMessage = useSelector(
  //   (state) => state.workLogReducer.updateLogMessage
  // );
  // console.log("update log", updateMessage);
  //function to set log data
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogData({
      ...logData,
      [name]: value,
    });
  };

  const handleAddLog = () => {
    console.log(logData);
    dispatch(action.createWorkLog(logData));
  };
  //edit log funs
  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditLogData({
      ...editLogData,
      [name]: value,
    });
  };
  const handleEditLog = () => {
     console.log("here log edit",editLogData);
    dispatch(action.updateWorkLog(editLogData));
  };

  return (
    <CreateLogsUi
      handleChange={handleChange}
      logData={logData}
      handleAddLog={handleAddLog}
      handleEditLog={handleEditLog}
      handleEditChange={handleEditChange}
      editLogData={editLogData}
      showItem={showItem}
      setEditLogAction={setEditLogAction}
    />
  );
}
