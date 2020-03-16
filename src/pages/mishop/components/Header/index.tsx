import * as React from "react";
import "../../../../style/normalize.scss";
import "./index.scss";
import {
  navItem,
  infoItem,
  subNavItem,
  searchHot,
  searchList
} from "../../mockData/index";
import downloadCodeImg from "../../img/download.png";
// import projectImgs from "../../img/index";
import imgs from "../../img/82ddffd7562c54f9166fa876c143ff22.webp";

interface IProps {
  getInfo(s: object): void;
  getShow(s: boolean): void;
}

interface IState {
  cartNum: 0;
  itemChild: [];
  isShow: boolean;
}

const ShowContext = React.createContext(false);
class Navbar extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
  }

  subNav = subNavItem.map(item => {
    return (
      <li
        className="item"
        onMouseEnter={() => {
          this.handleMouseOver(item.subNav);
        }}
        onMouseLeave={() => {
          this.handleMouseOut();
        }}
      >
        <a href={item.link}>{item.name}</a>
      </li>
    );
  });

  handleMouseOver = (item: object) => {
    this.props.getShow(true);
    this.props.getInfo(item);
  };

  handleMouseOut = () => {
    this.props.getShow(false);
  };

  render() {
    return (
      <ul>
        <li className="item nav-category">
          <a href="#">
            <span>全部商品分类</span>
          </a>
        </li>
        {this.subNav}
      </ul>
    );
  }
}

export default class MainHeader extends React.Component<object, IState> {
  constructor(props: object) {
    super(props);
  }

  render() {
    return (
      <header className="site-header">
        <TopBar></TopBar>
        <SubHeader></SubHeader>
      </header>
    );
  }
}

class TopBar extends React.Component<object, IState> {
  constructor(props: IProps) {
    super(props);
  }

  readonly state = {
    cartNum: 0 as number
  } as IState;

  render() {
    const topBarNav = () => {
      const nav = navItem.map((item, index) => {
        let isShow = item === "下载app";
        const show = () => {
          if (isShow == true) return "topbar-download";
        };
        return (
          <React.Fragment key={index}>
            <a href="#" className={show()}>
              <span>{item}</span>
              {item === "下载app" && (
                <span className="menu">
                  <img src={downloadCodeImg} alt="" />
                  小米商城APP
                </span>
              )}
            </a>
            {index != navItem.length - 1 && <span className="sep">|</span>}
          </React.Fragment>
        );
      });
      return <div>{nav}</div>;
    };
    const topBarCart = () => {
      return (
        <div className="topbar-cart">
          <a href="" className="cart">
            <i className="iconfont icon-gouwuche"></i>
            购物车
            <span>{"(" + this.state.cartNum.toString() + ")"}</span>
          </a>
          <div className="cart-submenu">
            {this.state.cartNum === 0 && (
              <span>购物车中还没有商品，赶紧选购吧！</span>
            )}
          </div>
        </div>
      );
    };
    const topBarInfo = () => {
      const info = infoItem.map((item, index) => {
        return (
          <React.Fragment key={index}>
            <a href="">
              <span>{item}</span>
            </a>
            {index != navItem.length - 1 && <span className="sep">|</span>}
          </React.Fragment>
        );
      });
      return <div className="topbar-info">{info}</div>;
    };

    return (
      <nav className="site-topbar">
        <div className="container">
          {topBarNav()}
          <nav>
            {topBarInfo()}
            {topBarCart()}
          </nav>
        </div>
      </nav>
    );
  }
}

class SubHeader extends React.Component<object, IState> {
  constructor(props: object) {
    super(props);
    this.state = {
      itemChild: [],
      isShow: true
    } as IState;
  }

  getInfo = (props: []) => {
    this.setState({
      itemChild: props
    });
  };

  getShow = (props: boolean) => {
    // console.log(props);
    this.setState({
      isShow: props
    });
  };

  render() {
    const logo = () => {
      return (
        <a href="#" className="logo">
          小米官网
        </a>
      );
    };

    const itemChild = (isShow: boolean, item: []) => {
      if (item.length == 0) {
        isShow = false;
      }
      return (
        <div
          ref="child"
          className="item-child"
          style={{ height: isShow ? "229px" : 0 }}
        >
          <div className="container">
            <ul>
              {item.map(it => {
                return (
                  <li>
                    <a href="#">
                      <div className="pic">
                        {/* <img src={require((it as any).link)} alt="" /> */}
                        <img src={imgs} alt="" />
                      </div>
                      <div className="title">{(it as any).title}</div>
                      <div className="price">{(it as any).price}</div>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      );
    };

    const navbar = () => {};

    const search = () => {
      const hot = searchHot.map(item => {
        return (
          <a href={item.link} className="hot-item">
            {item.name}
          </a>
        );
      });
      return (
        <div className="header-search">
          <form action="" className="search-form">
            <label htmlFor="" style={{ display: "none" }}>
              站内搜索
            </label>
            <input type="search" name="" id="" className="search-text" />
            <div className="search-icon iconfont icon-fangdajing"></div>
            <div className="search-hot">{hot}</div>
            <div className="search-list">
              <ul className="result-list">
                {searchList.map(item => {
                  return (
                    <li className="resultItem">
                      <a href={item.link}>
                        <span>{item.name}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </form>
        </div>
      );
    };

    return (
      <nav className="sub-nav">
        <div className="container">
          <div className="header-logo">{logo()}</div>
          <div className="header-pills">
            <Navbar getInfo={this.getInfo} getShow={this.getShow}></Navbar>
          </div>
          {search()}
        </div>
        {itemChild(this.state.isShow, this.state.itemChild)}
      </nav>
    );
  }
}
