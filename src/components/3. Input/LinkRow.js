import React, { useState } from "react";
import "../../sass/_input.scss";
import "../../sass/_base.scss";

function LinkRow() {
  const [buttonClicked, setButtonCopied] = useState(false);

  const clickButton = () => {
    setButtonCopied(true);
  };

  return (
    <div className="link__row">
      <div className="link__row left-side">
        <p>original link</p>
      </div>
      <div className="link__row right-side">
        <p>shortened link</p>
        <button
          className={buttonClicked ? "link__button-clicked" : "link__button"}
          onClick={clickButton}
        >
          <p className="link__button-text">
            {buttonClicked ? "Copied!" : "Copy"}
          </p>
        </button>
      </div>
    </div>
  );
}

export default LinkRow;
