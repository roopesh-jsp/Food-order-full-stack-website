import React from "react";
import { assets } from "../assets/assets";

export default function AppDownload() {
  return (
    <div id="appDownload">
      <h1>For better exprience download our app</h1>
      <div className="app_download_img">
        <img src={assets.play_store} alt="" />
        <img src={assets.app_store} alt="" />
      </div>
    </div>
  );
}
