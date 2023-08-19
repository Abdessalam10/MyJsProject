import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function UserButton({ user }) {
  const [isBlocked, setIsBlocked] = useState(user.isBlocked);

  const handleBlockClick = () => {
    setIsBlocked(!isBlocked);

    fetch(`http://localhost:4200/user/${user._id.$oid}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isBlocked: !isBlocked }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the server, if needed
      })
      .catch((error) => {
        console.error(error);
        toast.success("test");
      });
  };

  return (
    <button
      onClick={handleBlockClick}
      className={`btn ${isBlocked ? "btn-danger" : "btn-success"}`}
    >
      {isBlocked ? "Unblock" : "Block"}
    </button>
  );
}

function UserList(props) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (props.page === "Users") {
      fetch("http://localhost:4200/user", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setUsers(data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [props.page]);

  return (
    <>
      <div className="row">
        <div className="col-9">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Profile</th>
                <th scope="col">Username</th>
                <th scope="col">Email</th>
                <th scope="col">Number</th>
                <th scope="col">Role</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user._id.$oid}>
                  <th scope="row">{index + 1}</th>
                  <td>
                    <img src="Badiaa.png" alt={`Profile of ${user.username}`} />
                  </td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.number}</td>
                  <td>{user.role}</td>
                  <td>
                    <UserButton user={user} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

const styles = {
  cardContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
  },
};

export default UserList;
