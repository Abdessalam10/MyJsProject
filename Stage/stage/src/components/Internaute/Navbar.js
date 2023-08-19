function Navbar(props) {
  var stylebtni;
  var stylebtnin;
  if (props.page == "identifier") {
    stylebtni = "btn btn-primary";
  } else {
    stylebtni = "btn btn-outline-primary";
  }
  if (props.page == "inscrire") {
    stylebtnin = "btn btn-primary";
  } else {
    stylebtnin = "btn btn-outline-primary";
  }

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light "
        style={{
          position: "fixed",
          top: "-10px",
          width: "100%",
          transition: "top 0.3s",
          background: "#DCDCDC",
          boxShadow:
            "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
        }}
      >
        <a className="navbar-brand">
          <img src="Badiaa.png" width="70" height="70" />
        </a>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-4 mb-lg-0">
            <li className="nav-item">
              {props.page == "Acceuil" ? (
                <a
                  className="navbar-brand"
                  style={{ color: "blue" }}
                  href=""
                  onClick={() => props.onclick("Acceuil")}
                >
                  Accueil
                </a>
              ) : (
                <a
                  className="navbar-brand"
                  href=""
                  onClick={() => props.onclick("Acceuil")}
                >
                  Accueil
                </a>
              )}
            </li>

            <li className="nav-item">
              <a
                className="navbar-brand"
                style={{ color: "blue" }}
                href="{{path('input')}}"
              >
                TEST
              </a>
            </li>

            <li className="nav-item">
              <a
                className="navbar-brand"
                style={{ color: "blue" }}
                href="{{path('input')}}"
              >
                TEST
              </a>
            </li>

            <li className="nav-item">
              <a
                className="navbar-brand"
                style={{ color: "blue" }}
                href="{{path('input')}}"
              >
                TEST
              </a>
            </li>
          </ul>
          <form className="d-flex">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <button
                  type="button"
                  className={stylebtni}
                  id="b1"
                  onClick={() => props.onclick("identifier")}
                >
                  S'identifier
                </button>
              </li>
              <li className="nav-item">
                <button
                  type="button"
                  className={stylebtnin}
                  id="b2"
                  onClick={() => props.onclick("inscrire")}
                >
                  S'inscrire
                </button>
              </li>
            </ul>
          </form>
        </div>
      </nav>
      <br />
      <br />
      <br />
    </>
  );
}
export default Navbar;
