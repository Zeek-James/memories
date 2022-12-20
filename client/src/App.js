import React from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";

// import PostDetails from "./components/PostDetails/PostDetails";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
// import CreatorOrTag from "./components/CreatorOrTag/CreatorOrTag";

const App = () => {
  const user = JSON.parse(localStorage.getItem("profile"));

  return (
    <BrowserRouter>
      <Container maxWidth="xl">
        <Navbar />
        <Routes>
          {/* <Route path="/" exact component={() => <Navigate to="/posts" />} /> */}
          <Route path="/" exact element={<Home />} />
          <Route path="/auth" exact element={<Auth />} />
          {/* <Route path="/posts/search" exact component={Home} /> */}
          {/* <Route path="/posts/:id" exact component={PostDetails} /> */}
          {/* <Route
            path={["/creators/:name", "/tags/:name"]}
            component={CreatorOrTag}
          /> */}
          {/* <Route
            path="/auth"
            exact
            element={() => (!user ? <Auth /> : <Navigate to="/posts" />)}
          /> */}
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;
