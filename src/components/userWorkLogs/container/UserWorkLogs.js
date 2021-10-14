import React, { useEffect,useState } from "react";
import UserWorkLogsUi from "../ui/UserWorkLogsUi";
import action from "../../../redux/actions/workLogAction";
import { useSelector, useDispatch } from "react-redux";
export default function UserWorkLogs(props) {
  const { userId, setActionBtnTab } = props;
  const [editLogAction, setEditLogAction] = useState(false);
  const [changeWorkHour,setChangeWorkHour] = useState(false);

  console.log("id in wrklog=", userId);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authenticateUserReducer.user);
  const [workHour,setWorkHour] = useState(user.working_hours)
  console.log(workHour)
  //function to go back to user list from logs
  const handleBack = () => {
    setActionBtnTab("");
  };
  useEffect(() => {
    if (userId) dispatch(action.getWorkLog(userId));
    else dispatch(action.getWorkLog(user.id));
  }, [dispatch, userId, user.id, workHour]);
  const userWorkLogs = useSelector(
    (state) => state.workLogReducer.userWorkLogs
  );
  console.log("change hour",changeWorkHour)
  const changeHour =()=>{
      dispatch(action.updateWorkingHour(workHour,userId))
  }
  return (
    <UserWorkLogsUi
      userWorkLogs={userWorkLogs}
      handleBack={handleBack}
      user={user}
      setEditLogAction={setEditLogAction}
      editLogAction={editLogAction}
      setChangeWorkHour={setChangeWorkHour}
      changeWorkHour={changeWorkHour}
      workHour={workHour}
      setWorkHour={setWorkHour}
    />
  );
}
