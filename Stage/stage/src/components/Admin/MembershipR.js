import React, { useState, useEffect } from "react";

function MembershipR(props) {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    if (props.page === "membership") {
      fetch("http://localhost:4200/MembershipRequest", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          // Handle the response from the server
          setUsers(data);
          console.log(data);
        })
        .catch((error) => {
          // Handle any error that occurs during the request
          console.error(error);
        });
    }
  }, props);
  return (
    <div style={styles.cardContainer}>
      {users.map((user, index) => (
        <div className="card" style={{ width: "15rem" }} key={index}>
          <h1>{index + 1}</h1>
          <center>
            {" "}
            <img
              className="card-img-top"
              style={{ height: "10rem", width: "10rem" }}
              src="badiaa.png"
              alt="Card image cap"
            />
          </center>
          <div className="card-body">
            <h5 className="card-title">{user.username}</h5>
            <p className="card-text">{user.name}</p>
            <p className="card-text">{user.email}</p>
            <p className="card-text">{user.role}</p>
            <p className="card-text">{user.request_date}</p>

            <a href="#" className="btn btn-primary">
              Accepter
            </a>
            <a href="#" className="btn btn-danger">
              refuser
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

const styles = {
  cardContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
  },
};

export default MembershipR;
