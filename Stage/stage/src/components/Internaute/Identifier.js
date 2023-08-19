import { useState, useEffect } from "react";
import style from "../../css/index.module.css";
function Identifier() {
  const [profile, setProfile] = useState({});
  const [message, setMessage] = useState({});
  const handleChange = ({ target }) => {
    console.log(message);
    const { name, value } = target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };
  useEffect(() => {
    if (
      typeof profile.email !== "undefined" &&
      typeof profile.password !== "undefined"
    ) {
      if (profile.password.length >= 6) {
        alert(JSON.stringify(profile, "", 2));
        fetch("http://localhost:4200/user/login", {
          method: "POST",

          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(profile, "", 2),
        })
          .then((response) => response.json())
          .then((data) => {
            // Handle the response from the server
            setMessage(data);
            console.log(data);
          })
          .catch((error) => {
            // Handle any error that occurs during the request
            setMessage(error);
            console.error(error);
          });
      }
    }
  }, [profile]);
  return (
    <>
      {typeof message.message !== "undefined" && (
        <div
          style={{
            width: "20rem",
            left: "50px",
          }}
          className={
            message.message ? "alert alert-danger" : "alert alert-success"
          }
          role="alert"
        >
          {message.message === "Paire login/mot de passe incorrecte" &&
            "Paire login/mot de passe incorrecte"}
        </div>
      )}
      <div
        className="card"
        style={{
          width: "23rem",
          height: "16rem",
          left: "26px",
        }}
      >
        <br />
        <br />

        <form>
          <div className={style.group}>
            <input
              type="text"
              onChange={handleChange}
              name="email"
              value={profile.email || ""}
              required
            />
            <span className={style.highlight}></span>
            <span className={style.bar}></span>
            <label>Email</label>
          </div>

          <div className={style.group}>
            <input
              type="Password"
              onChange={handleChange}
              name="password"
              value={profile.password || ""}
              required
            />
            <span className={style.highlight}></span>
            <span className={style.bar}></span>
            <label>Password</label>
          </div>
        </form>
      </div>
    </>
  );
}
export default Identifier;
