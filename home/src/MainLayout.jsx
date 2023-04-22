import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";


import Child1Content from "child1/Child1Content";
import HomeContent from "home/HomeContent";


export default function MainLayout() {
  return (
    <Router>
      <div className="text-3xl mx-auto max-w-6xl">
        <p>Header</p>
        <Link id="cart" to="/child1">
            Child 1
          </Link>
        <div className="my-10">
          <Switch>
            <Route exact path="/" component={HomeContent} />
            <Route path="/child1" component={Child1Content} />
          </Switch>
        </div>
        <p>Footer</p>
      </div>
    </Router>
  );
}
