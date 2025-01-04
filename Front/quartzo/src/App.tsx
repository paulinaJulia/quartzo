import React from "react";
import "./App.css";
import { Signin } from "./components/Signin";
import { Signup } from "./components/Signup";

function App() {
    return (
        <div>
            <Signin />
            <Signup />
        </div>
    );
}
export default App;