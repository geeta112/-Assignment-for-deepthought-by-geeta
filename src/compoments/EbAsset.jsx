import React from "react";
import { useState } from "react";
import "./EbAsset.css";

const EbAsset = () => {
  const [ebshowIntro, setEbshowIntro] = useState(true);
  const [showThread, setShowThread] = useState(true);
  const [showConclusion, setShowConclusion] = useState(true);

  return (
    <div className="eb_container">
      <div className="eb_heading">
        <button onClick={() => setEbshowIntro(!ebshowIntro)}>
          {ebshowIntro === true ? (
            <i className="fa-solid fa-angle-down"></i>
          ) : (
            <i className="fa-solid fa-angle-up"></i>
          )}
        </button>

        <h5>Introduction</h5>
      </div>
      {ebshowIntro === true ? (
        <div className="eb_sum">
          <textarea
            className="eb_input"
            type="text"
            placeholder="Enter Introduction"
          />
        </div>
      ) : (
        ""
      )}
      <div className="eb_heading">
        <button onClick={() => setShowThread(!showThread)}>
          {showThread === true ? (
            <i className="fa-solid fa-angle-down"></i>
          ) : (
            <i className="fa-solid fa-angle-up"></i>
          )}
        </button>

        <h5>Thread A</h5>
      </div>
      {showThread === true ? (
        <form>
          <div className="eb_sub">
            <div className="eb_sub1">
              <label htmlFor="input">Example 1</label>
              <input
                className="eb_input"
                type="text"
                placeholder="Enter Text Here"
              />
            </div>
            <div className="btn_thread1">
              <button className="btn btn-primary"> + Example </button>
            </div>
            <div className="eb_sub2">
              <label htmlFor="input">Argument for Thread A</label>

              <input
                className="eb_input"
                type="text"
                placeholder="Enter Text Here"
              />
            </div>
            <div className="btn_thread2">
              <button className="btn btn-primary"> + New Thread </button>
            </div>
          </div>
        </form>
      ) : (
        ""
      )}
      <div className="eb_heading">
        <button onClick={() => setShowConclusion(!showConclusion)}>
          {showConclusion === true ? (
            <i className="fa-solid fa-angle-down"></i>
          ) : (
            <i className="fa-solid fa-angle-up"></i>
          )}
        </button>

        <h5>Conclusion</h5>
      </div>
      {showConclusion === true ? (
        <div className="eb_con">
          <div className="eb_conclusion">
            <textarea
              className="eb_input"
              type="text"
              placeholder="Enter Conclusion"
            />
          </div>

          <i class="fa-solid fa-floppy-disk"></i>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default EbAsset;
