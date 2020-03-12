import React from "react";
import ReactDOM from "react-dom";
import NameForm from "./components/NameForm/index";
import Waterfall from "./components/waterfall/index";
import Magnifier from "./components/Magnifier/index";
import Game from "./components/Game/index";
import TsDemo from "./components/TsDemo/index";
import Trip from "./pages/trip/index";

// -------------------------------------

ReactDOM.render(
  // <Game />,
  // <Magnifier />,
  // <Waterfall />,
  // <TsDemo />,
  <Trip />,
  document.getElementById("root") as HTMLElement
);
