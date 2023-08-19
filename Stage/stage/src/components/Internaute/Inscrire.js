import { useState } from "react";
import style from "../../css/index.module.css";
function Inscrire() {
  const [profile, setProfile] = useState({});
  const [message, setMessage] = useState({});
  const handleChange = ({ target }) => {
    const { name, value, type, checked } = target;
    const newValue = type === "checkbox" ? (checked ? "admin" : "user") : value;

    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: newValue,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(profile, "", 2));
    let request = "user";
    profile.role === "Employé"
      ? (request = "MembershipRequest")
      : (request = "user");
    fetch("http://localhost:4200/" + request, {
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
  };
  return (
    <>
      {typeof message.message !== "undefined" && (
        <div
          style={{
            width: "20rem",
            left: "50px",
          }}
          className={
            message.message === "error"
              ? "alert alert-danger"
              : "alert alert-success"
          }
          role="alert"
        >
          {message.message === "error"
            ? "Quelque chose ne va pas"
            : profile.role === "Client"
            ? "Vous avez un profil maintenant"
            : "Attendez que votre demande soit approuvée."}
        </div>
      )}

      <div
        className="card"
        style={{
          width: "25rem",
          height: "30rem",
          left: "50px",
        }}
      >
        <form onSubmit={handleSubmit}>
          <div className={style.group}>
            <input
              type="text"
              name="username"
              value={profile.username || ""}
              onChange={handleChange}
              required
            />
            <span className={style.highlight}></span>
            <span className={style.bar}></span>
            <label>Name</label>
          </div>
          <div className={style.group}>
            <input
              type="Email"
              name="email"
              value={profile.email || ""}
              onChange={handleChange}
              required
            />
            <span className={style.highlight}></span>
            <span className={style.bar}></span>
            <label>Email</label>
          </div>
          <div className={style.group}>
            <input
              type="Password"
              name="password"
              value={profile.password || ""}
              onChange={handleChange}
              placeholder="                 six caractères"
              required
            />
            <span className={style.highlight}></span>
            <span className={style.bar}></span>
            <label>Password</label>
          </div>

          <div className={style.group}>
            <input
              type="tel"
              pattern="[0-9]{8}"
              name="number"
              value={profile.number || ""}
              onChange={handleChange}
              placeholder="                  8 chiffres"
              required
            />
            <span className={style.highlight}></span>
            <span className={style.bar}></span>
            <label>Phone</label>
          </div>

          <input
            className="form-control"
            list="datalistOptions"
            id="exampleDataList"
            placeholder="Qui vous êtes ?"
            name="role"
            onChange={handleChange}
          />
          <datalist id="datalistOptions">
            <option value="Client" />
            <option value="Employé" />
          </datalist>

          <button type="submit" className="btn btn-primary">
            S'authentifier
          </button>
        </form>

        <center></center>
      </div>
    </>
  );
}
export default Inscrire;
