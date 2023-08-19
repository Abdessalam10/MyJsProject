import React, { useState } from "react";
const TopMenu = () => (
  <div style={styles.topMenu} className="fixed-top">
    {" "}
    {/* Added className="fixed-top" */}
    <div style={styles.logoContainer}>
      <img
        src="Badiaa.png"
        alt="Logo"
        width="50"
        height="50"
        style={styles.logo}
      />
    </div>
    <form style={styles.searchForm}>
      <input type="text" placeholder="Search" style={styles.searchInput} />
      <button type="submit" style={styles.searchButton}>
        Search
      </button>
    </form>
    <div style={styles.menuRight}>
      <button style={styles.logoutButton}>Logout</button>
    </div>
  </div>
);
const styles = {
  button: {
    padding: "6px 12px",
    backgroundColor: "#333",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  cardContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  topMenu: {
    backgroundColor: "#e6e6e6",
    padding: "20px",
    boxSizing: "border-box",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logoContainer: {
    marginRight: "auto",
  },

  mainContent: {
    flex: 1,
    display: "flex",
  },
  content: {
    padding: "20px",
    boxSizing: "border-box",
    flex: 1,
    marginLeft: "20px",
    marginRight: "20px",
    position: "relative",
  },

  sideMenu: {
    width: "250px",
    backgroundColor: "#f2f2f2",
    padding: "20px",
    boxSizing: "border-box",
    position: "fixed",
    top: 0,
    right: 0,
    bottom: 0,
  },
  menuItem: {
    backgroundColor: "inherit",

    margin: "5px 0",
    borderRadius: "4px",
    cursor: "pointer",
    padding: "10px 0",
  },

  subMenu: {
    backgroundColor: "inherit",
    padding: "10px",
    margin: "5px 0",
    borderRadius: "4px",
    cursor: "pointer",
  },

  activeItem: {
    backgroundColor: "#333",
    color: "#fff",
  },
  searchForm: {
    display: "flex",
    alignItems: "center",
  },
  searchInput: {
    padding: "6px",
    border: "none",
    borderRadius: "4px 0 0 4px",
    outline: "none",
    marginRight: "10px", // Add this line
  },
  searchButton: {
    padding: "6px 12px",
    backgroundColor: "#333",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  menuRight: {
    marginLeft: "auto",
  },
  subItems: {
    listStyle: "none",
    padding: 0,
    marginLeft: "10px",
  },
  logoutButton: {
    padding: "6px 12px",
    backgroundColor: "#333",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    marginLeft: "auto",
  },
};

export default TopMenu;
