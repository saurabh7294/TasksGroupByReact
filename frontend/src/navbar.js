import React from "react";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faKey,
  faUser,
  faList,
  faSquare,
  faShare,
  faSearchPlus,
  faLaptop,
  faExclamationCircle,
} from "@fortawesome/free-solid-svg-icons";
import "./navbar.css";

const Navbar = (props) => {
  const [search, setSearch] = useState("");

  return (
    <div>
      <div className="navbar-main">
        <div className="row align-items-center">
          <div className="col-lg-5 metroprojects commonnav">
            <FontAwesomeIcon icon={faKey} className="metroicon" />
            <p>
              <b> METRO DESIGN PROJECTS (OLD)</b>
            </p>
          </div>
          <div className="col-lg-3">
            <div>
              <div className="commondiv">
                <div className="commonnav">
                  <p onClick={() => props.setboard("list")}>{(props.board=="list")?(<div className = "viewborder">
                  <FontAwesomeIcon icon={faList} className="listicon boardicon" />

                  List</div>):(<div>
                    <FontAwesomeIcon icon={faList} className="listicon boardicon" />

                    List</div>)}</p>
                </div>

                <div className="board commonnav">
                  <p onClick={() => props.setboard("board")}>
                    <a>{(props.board=="board")?(<div className = "viewborder">
                    <FontAwesomeIcon icon={faSquare} className="boardicon boardicon" />
                    Board</div>):(<div>
                        <FontAwesomeIcon icon={faSquare} className="boardicon boardicon" />

                        Board</div>)}</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="commondiv automate-section">
              <div className="automate commonnav">
                <FontAwesomeIcon icon={faLaptop} className="automateicon" />
                <p>Automate</p>
              </div>
              <div className="share commonnav">
                <FontAwesomeIcon icon={faShare} className="shareicon" />
                <p>Share</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="msgheadermain">
        <div className="msgheader">
          <FontAwesomeIcon
            icon={faExclamationCircle}
            className="automateicon"
          />
          <p>This view is shared publicly with a link.</p>
        </div>
      </div>
      <div className="searchheadermain row">
        <div className="searchheader col-lg-7">
          <FontAwesomeIcon icon={faSearchPlus} className="automateicon" />
          <input
            className="input-class"
            type="text"
            name="search"
            placeholder="Search Tasks"
            value={search}
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          ></input>
        </div>
        <div className="selectheader col-lg-2">
          <FontAwesomeIcon icon={faList} className="automateicon" />
          <select
            className="select-class"
            name="groupby"
            id="device_type"
            onChange={(e) => props.setgroupselect(e.target.value)}
            value={props.groupselect}
          >
            <option value="status">Group By Status</option>
            <option value="assignee">Group By Assignee</option>
            <option value="priority">Group By Priority</option>
          </select>
        </div>
        <div className="selectheader col-lg-3 row">
          <div className="col-lg-4">
            <div className="commondiv automate-section">
              <div className="automate commonnav">
                <FontAwesomeIcon icon={faList} className="automateicon" />
                <p>Show</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="commondiv automate-section">
              <div className="automate commonnav">
                <FontAwesomeIcon icon={faShare} className="automateicon" />
                <p>Share</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="commondiv automate-section">
              <div className="automate commonnav">
                <FontAwesomeIcon icon={faUser} className="automateicon" />
                <p>Me</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
