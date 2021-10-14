import React, { useState, useEffect } from "react";
import AllUsersUi from "../ui/AllUsersUi";
import action from "../../../redux/actions/getUsersAction";
import { useSelector, useDispatch } from "react-redux";

export default function AllUsers() {
  const [pageNumber, setPageNumber] = useState(1);
  const [operationDone, setOperationDone] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(action.getAllUsers(pageNumber));
  }, [pageNumber, operationDone, dispatch]);

  const user = useSelector((state) => state.authenticateUserReducer.user);
  const allUsers = useSelector((state) => state.getUsersReducer.allUsers);
  console.log("all users", allUsers.data);

  const prevPage = () => {
    setPageNumber(pageNumber - 1);
  };
  const nextPage = () => {
    setPageNumber(pageNumber + 1);
  };

  //delete user
  const deleteUser = (id) => {
    dispatch(action.deleteUser(id));
    if (operationDone === false) 
    setOperationDone(true);
    else setOperationDone(false);
  };

  return (
    <AllUsersUi
      allUsers={allUsers.data}
      prevPage={prevPage}
      nextPage={nextPage}
      pageNumber={pageNumber}
      deleteUser={deleteUser}
      user={user}
      setOperationDone={setOperationDone}
    />
  );
}
