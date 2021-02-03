import React from "react";
import { Grid } from "semantic-ui-react";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import TopBar from "./components/TopBar";
import Home from "./components/Home";

import './App.scss';

function App() {
  return (
    <>
      <Router>
        <Grid className="logged-layout">
          <Grid.Row>
            <Grid.Column className="content" width={16}>
              <TopBar />
              <Home />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Router>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        puaseOnVisibilityChange
        draggable
        pauseOnHover={false}
      />
    </>
  );
}

export default App;
