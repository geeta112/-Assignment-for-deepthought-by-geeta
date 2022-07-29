import React from "react";
import { useState } from "react";
import "./TbAssest.css";

const TbAssest = () => {
  const [tbshow, setTbshow] = useState(true);

  return (
    <div className="tb_container">
      <div className="tb_heading">
        <button onClick={() => setTbshow(!tbshow)}>
          {tbshow === true ? (
            <i className="fa-solid fa-angle-down"></i>
          ) : (
            <i className="fa-solid fa-angle-up"></i>
          )}
        </button>

        <h5>Thread A</h5>
      </div>
      {tbshow === true ? (
        <form>
          <div className="tb_sub">
            <div className="tb_sub1">
              <label htmlFor="input">Sub Thread 1</label>
              <input
                className="tb_input"
                type="text"
                placeholder="Enter Text Here"
              />
            </div>
            <div className="tb_sub2">
              <label htmlFor="input">Sub Interpretation 2</label>

              <input
                className="tb_input"
                type="text"
                placeholder="Enter Text Here"
              />
            </div>
          </div>
          <div className="tb_select">
            <i id="1" className="fa-solid fa-lightbulb"></i>
            <i id="2" className="fa-solid fa-message"></i>
            <select name="select" id="select">
              <option value="default" defaultValue>
                Select Category
              </option>
            </select>
            <select name="select" id="select">
              <option value="default" defaultValue>
                Select Process
              </option>
            </select>
          </div>
          <button className="btn_select btn btn-primary">+ Sub Thread</button>
          <div className="tb_sum">
            <label htmlFor="input">Summary For Thread A</label>
            <input
              className="tb_input"
              type="text"
              placeholder="Enter Text Here"
            />
          </div>
          <div className="tb_last">
            <div className="tb_credit">
              <i class="fa-solid fa-link"></i> Thread Credit &nbsp;&nbsp;
              <a href="/">
                <i class="fa-solid fa-pen-to-square"></i>
              </a>
            </div>
            <div className="tb_credit2">
              <select name="select" id="select">
                <option value="default" defaultValue>
                  Select Emotion
                </option>
              </select>
              <button className="btn btn-primary">+ New Thread</button>
              <br />
              <i class="fa-solid fa-floppy-disk"></i>
            </div>
          </div>
        </form>
      ) : (
        ""
      )}
    </div>
  );
};

export default TbAssest;
