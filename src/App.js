import React, { useCallback, useEffect } from "react";
// import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";

function App() {
  const params = new URLSearchParams(window.location.search);
  let url = params.get("url");

  // const deeplink = "pangaia://" + url;
  useEffect(() => {
    exeDeepLink();
  }, []);

  const redireactApp = () => {
    exeDeepLink();
    // checkInstallApp();
  };

  // function checkInstallApp() {
  //   function clearTimers() {
  //     clearInterval(check);
  //     clearTimeout(timer);
  //   }

  //   function isHideWeb() {
  //     if (document.webkitHidden || document.hidden) {
  //       clearTimers();
  //     }
  //   }
  //   const check = setInterval(isHideWeb, 200);

  //   const timer = setTimeout(function () {
  //     redirectStore();
  //   }, 500);
  // }

  // const redirectStore = () => {
  //   const ua = navigator.userAgent.toLowerCase();

  //   if (window.confirm("스토어로 이동하시겠습니까?")) {
  //     window.location.href =
  //       ua.indexOf("android") > -1
  //         ? "https://play.google.com/store/apps/details?id=xxx"
  //         : "https://apps.apple.com/kr/app/xxx";
  //   }
  // };

  const exeDeepLink = useCallback(() => {
    let link = "pangaia://" + url;
    window.location.href = link;
  }, [url]);

  return (
    <DeepLinkBlock>
      <div className="modal">
        <p className="title">Do you want to open Pangaia App?</p>
        <div className="button-group">
          <button className="open btn" onClick={redireactApp}>
            Sure
          </button>
        </div>
      </div>
    </DeepLinkBlock>
  );
}

const DeepLinkBlock = styled.div`
  background: #d1d1d1;
  position: fixed;
  overflow: hidden;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  .modal {
    width: 278px;
    height: 171px;
    padding: 26px 14px 14px;
    background: #ffffff;
    // box-shadow: 0px 4px 4px rgba(192, 192, 192, 0.25);
    border-radius: 8px;
    position: relative;
    bottom: 50px;
    .title {
      font-weight: bold;
      font-size: 17px;
      margin-bottom: 12px;
      text-align: center;
      align-items: center;
    }
    .desc {
      font-size: 12px;
      color: #777777;
    }
    .button-group {
      display: flex;
      justify-content: space-around;
      margin-top: 38px;
      .btn {
        height: 40px;
        width: 120px;
        background: #eeeeee;

        font-size: 14px;
        letter-spacing: -1px;
        border-radius: 6px;
      }
      .open {
        background: orange;
        color: #ffffff;
      }
    }
  }
`;

export default App;
