import React, { useState } from "react";
import { useSelector} from "react-redux";
import EditUser from "../../editUser/container/EditUser";
import UserWorkLogs from "../../userWorkLogs/container/UserWorkLogs";
import Styles from "../css/AllUsersUi.module.css";
export default function AllUsersUi(props) {
  const {
    allUsers,
    prevPage,
    nextPage,
    pageNumber,
    deleteUser,
    user,
    setOperationDone
  
  } = props;
  const loading = useSelector((state) => state.getUsersReducer.loading);
  const [actionBtnTab, setActionBtnTab] = useState("");
  const [userId, setUserId] = useState();

  return (
    <>
      {actionBtnTab === "" ? (
        <div>
          <div className={Styles.listHeading}>
            <h2>All Users List</h2>
            <p> Page:{pageNumber}</p>
          </div>
          {loading !== true ? (
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">FirstName</th>
                  <th scope="col">LastName</th>
                  <th scope="col">Email</th>
                  <th scope="col">Role</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {allUsers?.map((eachUser, index) => {
                  return (
                    <tr key={index}>
                      <td>{eachUser.firstName}</td>

                      <td>{eachUser.lastName}</td>
                      <td>{eachUser.email}</td>
                      <td>{eachUser.roles[0].name}</td>
                      <td>
                        {eachUser.email !== "admin@iplex.com" ? (
                          <div className={Styles.actionBtns}>
                            <button
                              className={Styles.blueBtn}
                              onClick={() =>{setUserId(eachUser);setActionBtnTab("Edit")}}
                            >
                              Edit
                            </button>
                            {user.roles[0].name === "admin" ? (
                              <>
                                {eachUser.roles[0].name !== "manager" ? (
                                  <button
                                    className={Styles.lightBtn}
                                    onClick={() =>{setUserId(eachUser.id);setActionBtnTab("userLog")}}
                                  >
                                    User Logs
                                  </button>
                                ) : (
                                  <button className={Styles.lightBtn} disabled>
                                    User Logs
                                  </button>
                                )}
                              </>
                            ) : (
                              ""
                            )}
                            <button
                              className={Styles.brownBtn}
                              onClick={() => deleteUser(eachUser.id)}
                            >
                              Delete
                            </button>
                          </div>
                        ) : (
                          <div className={Styles.actionBtns}>
                            <button className={Styles.blueBtn} disabled>
                              Edit
                            </button>
                            <button className={Styles.lightBtn} disabled>
                              User Logs
                            </button>
                            <button className={Styles.brownBtn} disabled>
                              Delete
                            </button>
                          </div>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          ) : (
            <div className={Styles.loader}>
              <p>Loading...</p>
            </div>
          )}
          <div className={Styles.paginationBtn}>
            {pageNumber === 1 ? (
              <button className={Styles.disabledBtn} disabled>
                Previous
              </button>
            ) : (
              <button
                onClick={() => {
                  prevPage();
                }}
              >
                Previous
              </button>
            )}

            <button
              onClick={() => {
                nextPage();
              }}
            >
              Next
            </button>
          </div>
        </div>
      ) : (
        <div>
          {actionBtnTab === "Edit" ? (
            <EditUser
              editUser={userId}
              setActionBtnTab={setActionBtnTab}
              setOperationDone={setOperationDone}
            />
          ) : (
            <UserWorkLogs userId={userId} setActionBtnTab={setActionBtnTab} />
          )}
        </div>
      )}
    </>
  );
}
