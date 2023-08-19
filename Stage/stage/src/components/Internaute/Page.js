import Inscrire from "./Inscrire";
import Identifier from "./Identifier";
import style from "../../css/index.module.css";
function Page(props) {
  return (
    <>
      <div className="row"></div>
      <div className="row">
        <br />
        <br />
      </div>
      <div className="row">
        <br />
        <br />
        <br />
        <div className="col col-lg-8">
          <a>
            <center>
              <img
                src="Badiaa.png"
                width="300"
                height="300"
                className={style.rotate}
              />
            </center>
          </a>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <div
          className="col col-lg-4"
          style={{
            background: "#DCDCDC",
            borderTopLeftRadius: "300px",
            borderBottomLeftRadius: "300px",
            boxShadow:
              "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
          }}
        >
          <center>
            <br />
            <br />
            <br />
            {props.page == "identifier" ? <Identifier /> : <Inscrire />}
            <br />
            <br />
            <br />
            <br />
          </center>
        </div>
      </div>
    </>
  );
}

export default Page;
