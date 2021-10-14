import React, { useState, useEffect } from "react";
import EditUserUi from "../ui/EditUserUi";
import action from "../../../redux/actions/crudUserAction";
import { useDispatch, useSelector } from "react-redux";
export default function EditUser(props) {
  const { setActionBtnTab, editUser, setOperationDone } = props;
  const dispatch = useDispatch();
  const [user, setUser] = useState(editUser);
  console.log("editUser =", editUser);
  useEffect(() => {
    dispatch(action.editMessageFalse());
  }, [dispatch]);
  const editMessage = useSelector((state) => state.crudUserReducer.editMessage);

  //function to change user data
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  //function to submit edited data
  const handleEdit = () => {
    console.log("updated user", user);
    dispatch(action.updateUser(user));
    setOperationDone(true);
  };
  console.log("msg", editMessage);
  return (
    <EditUserUi
      setActionBtnTab={setActionBtnTab}
      User={user}
      handleChange={handleChange}
      handleEdit={handleEdit}
      editMessage={editMessage}
    />
  );
}
