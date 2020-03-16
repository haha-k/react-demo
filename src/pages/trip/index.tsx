import * as React from "react";
import "./index.scss";
import "../../style/normalize.scss";
import bannerImg from "./img/focus.jpg";
import { navItem, subNavItem, link } from "./mockData/data";
import projectImgs from "./img/index";

interface IProps {}
interface IState {}

export default class Trip extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    return (
      <div>
        <Search></Search>
        <Focus></Focus>
        <LocalNav></LocalNav>
        <Nav></Nav>
        <SubSection></SubSection>
        <SaleBox></SaleBox>
      </div>
    );
  }
}

//高度大多定死

function Search(props: IProps) {
  return (
    <header className="search-index">
      <div className="search">
        <span>搜索:目的地/酒店/景点/航班号</span>
      </div>
      <a href="#" className="user">
        我 的
      </a>
    </header>
  );
}

function Focus(props: IProps) {
  return (
    <nav className="focus">
      <img src={bannerImg} alt="" />
    </nav>
  );
}

class LocalNav extends React.Component<IProps, IState> {
  renderItem() {}

  componentDidMount() {
    this.renderItem();
  }

  render() {
    const m = [1, 2, 3, 4, 5].map(item => {
      return (
        <li>
          <a href="#" title="攻略·景点">
            <span className="icon-local-scenic"></span>
            <span>攻略·景点</span>
          </a>
        </li>
      );
    });

    return <ul className="local-nav">{m}</ul>;
  }
}

class Nav extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
  }

  renderNavItem() {}

  render() {
    const data = navItem.map((item, index) => {
      console.log(item);
      const subNav = item.map((value, i) => {
        return (
          <a key="i" href="#" title={value.name} className="nav-item">
            <span>{value.name}</span>
          </a>
        );
      });
      return (
        <div key="index" className="sub-nav">
          {subNav}
        </div>
      );
    });
    return <nav className="nav-entry">{data}</nav>;
  }
}

class SubSection extends React.Component<IProps, IState> {
  render() {
    const subNav = subNavItem.map(item => {
      return (
        <li className="section-item">
          <a href="#" title={item.name}>
            <span className="subnav-icon"></span>
            <span>{item.name}</span>
          </a>
        </li>
      );
    });
    return <ul className="sub-section">{subNav}</ul>;
  }
}

declare function require(img: string): string;

class SaleBox extends React.Component<IProps, IState> {
  renderHead() {
    return (
      <section className="sale-box__head">
        <h2>热门活动</h2>
        <a className="more" href="">
          获取更多福利
        </a>
      </section>
    );
  }

  renderBody() {
    const row = link.map((item, cnt) => {
      // 0 1 2
      // 0 1
      // 01 23 45
      // const requireContext = require.context(
      //   "./sales",
      //   false,
      //   /^\.\/.*\.(png|jpg|jpeg)$/
      // );
      // const projectImgs = requireContext.keys().map(requireContext);
      const box = item.map((i: string, index: number) => {
        let ImgPath;
        ImgPath = projectImgs[cnt * 2 + index];
        // console.log(ImgPath);
        return (
          <div>
            {<img src={ImgPath} alt="" />}
            {/* <img src={require("./img/sales/s1.png")} alt="" /> */}
          </div>
        );
      });
      return <div className="row">{box}</div>;
    });
    return <div className="sale-box__body">{row}</div>;
  }

  render() {
    return (
      <div className="sales-box">
        {this.renderHead()}
        {this.renderBody()}
      </div>
    );
  }
}
