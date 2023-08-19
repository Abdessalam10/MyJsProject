import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import CustomerMenu from "./CustomerMenu";
import ProductForSel from "./ProductForSel";
import PurchasePage from "./PurchasePage";
import ReturnRequestPage from "./ReturnRequestPage";
import TransactionPage from "./Admin/TransactionPage";

const App = () => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <Router>
          <nav>
            <link to="/">test1</link>
            <link to="/ProductForSel">test2</link>
            <link to="/ReturnRequestPage">test3</link>
          </nav>
          <Routes>
            <Route exact path="/" element={<ProductForSel />} />
            <Route path="/ProductForSel" component={<ProductForSel />} />
            <Route
              path="/ReturnRequestPage"
              component={<ReturnRequestPage />}
            />
          </Routes>
        </Router>
      </div>
    </>
  );
};

export default App;
