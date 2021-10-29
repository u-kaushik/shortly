import React from "react";
import "../../sass/_input.scss";
import "../../sass/_base.scss";
import LinkRow from "./LinkRow";

function Input() {
  return (
    <div className="Input">
      <div className="link__creator-div">
        <form className="link__creator">
          <input type="text" placeholder="Shorten a link here..." />
          <button className="link__creator-button" type="submit">
            Shortern It!
          </button>
        </form>
      </div>
      <div className="link__row-div">
        <LinkRow />
      </div>
      <div className="link__row-div">
        <LinkRow />
      </div>
    </div>
  );
}

export default Input;
