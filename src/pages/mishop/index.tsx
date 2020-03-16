import * as React from "react";
import "./index.scss";
import MainHeader from "./components/Header/index";

interface IState {}

export default class MiShop extends React.Component<object, IState> {
  render() {
    return (
      <div>
        <MainHeader></MainHeader>
      </div>
    );
  }
}
