import React from "react";
import { useState, useEffect } from "react";
import "./display.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faKey,
  faUser,
  faList,
  faSquare,
  faTasks,
  faCheck,
  faChartLine,
  faUserTie,
  faProjectDiagram,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const Display = (props) => {
  // const [data, setdata] = useState({});
  const [newData, setnewData] = useState({});

  console.log(props);

  // debugger;

  const data = [
    {
      taskTitle: "Task1",
      assignee: "Astral",
      status: "DOB",
      dueDate: "duedate",
      priority: "high",
    },
    {
      taskTitle: "Task2",
      assignee: "Astral",
      status: "DOB",
      dueDate: "duedate",
      priority: "high",
    },
    {
      taskTitle: "Tassk3",
      assignee: "Astral",
      status: "In progress",
      dueDate: "duedate",
      priority: "high",
    },
    {
      taskTitle: "Task4",
      assignee: "Anurag",
      status: "In progress",
      dueDate: "duedate",
      priority: "high",
    },
    {
      taskTitle: "Task5",
      assignee: "Anurag",
      status: "In progress",
      dueDate: "duedate",
      priority: "low",
    },
    {
      taskTitle: "Task6",
      assignee: "Bittu",
      status: "In progress",
      dueDate: "duedate",
      priority: "low",
    },
    {
      taskTitle: "Task7",
      assignee: "Bittu",
      status: "completed",
      dueDate: "duedate",
      priority: "low",
    },
    {
      taskTitle: "Task8",
      assignee: "Bittu",
      status: "critical",
      dueDate: "duedate",
      priority: "medium",
    },
    {
      taskTitle: "Task9",
      assignee: "Bittu",
      status: "critical",
      dueDate: "duedate",
      priority: "medium",
    },
    {
      taskTitle: "Task10",
      assignee: "Nitesh",
      status: "completed",
      dueDate: "duedate",
      priority: "medium",
    },
    {
      taskTitle: "Task11",
      assignee: "Nitesh",
      status: "completed",
      dueDate: "duedate",
      priority: "medium",
    },
  ];

//   useEffect(()=>{
//       const fetchdata = async()=>{
//       await axios
//               .get('http://localhost:4800/')
//               .then(res => {
//                   console.log(res.data)
//                   setdata(res.data);
//                   console.log("1");
//               })
//               .catch(err => {
//                   return err;
//               });
//       };
//       fetchdata();
//   }, []);

  const groupBy = (key) => (array) =>
    array.reduce((objectsByKeyValue, obj) => {
      const value = obj[key];
      objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
      return objectsByKeyValue;
    }, {});

  // debugger;

  useEffect(() => {
    console.log("2");
    const newDatafn = groupBy(props.groupselect);
    const Dataview = newDatafn(data);
    setnewData(Dataview);
  }, [data, props.groupselect]);

  useEffect(() => {
    const newDatafn = groupBy(props.groupselect);
    const Dataview = newDatafn(data);
    setnewData(Dataview);
  }, [data, props.board]);

  return (
    <div className="displaymain">
      <div>
        <div>
          {props.board === "board" ? (
            <div>
              <div>
                <div className="row tablestart">
                  {Object.keys(newData).map(function (keyName, keyIndex) {
                    return (
                      <div className="col-sm-4 tablecontent">
                        <div>
                          <div key={keyName}>
                            <div className="groupmain commonnav">
                              <FontAwesomeIcon
                                icon={faSquare}
                                className="metroicon"
                              />
                              <h4>{keyName}</h4>
                              <p className="tasknos">
                                ({newData[keyName].length} Tasks)
                              </p>
                            </div>
                            {newData[keyName].map((elem) => {
                              return (
                                <div>
                                  <div className="row tablemain">
                                    <div className="col-sm-12">
                                      <div className="commonnav">
                                        <FontAwesomeIcon
                                          icon={faTasks}
                                          className="metroicon"
                                        />
                                        <h5>
                                          <i>
                                            <b>{elem.taskTitle}</b>
                                          </i>
                                        </h5>
                                      </div>
                                    </div>

                                    <div className="col-sm-5">
                                      <div className="commonnav">
                                        <FontAwesomeIcon
                                          icon={faChartLine}
                                          className="metroicon"
                                        />
                                        <h6>{elem.status}</h6>
                                      </div>
                                    </div>
                                    <div className="col-sm-3">
                                      <div className="commonnav">
                                        <FontAwesomeIcon
                                          icon={faUserTie}
                                          className="metroicon"
                                        />
                                        <h6>{elem.assignee}</h6>
                                      </div>
                                    </div>
                                    <div className="col-sm-4">
                                      <div className="commonnav">
                                        <FontAwesomeIcon
                                          icon={faProjectDiagram}
                                          className="metroicon"
                                        />
                                        <h6>{elem.priority}</h6>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div>
                {Object.keys(newData).map(function (keyName, keyIndex) {
                  return (
                    <div key={keyName} className=" listviewtable">
                      <div className="commonnavlist">
                        <div className="title ">
                          <FontAwesomeIcon
                            icon={faSquare}
                            className="metroicon"
                          />
                          <h4>{keyName}</h4>
                        </div>
                        <div className="taskno">
                          <p>{newData[keyName].length} Tasks </p>
                        </div>
                      </div>

                      <div className="nthchilds">
                        {newData[keyName].map((elem) => {
                          return (
                            <div className="nthchild">
                              <div className="row">
                                <div className="col-sm-5">
                                  <div className="commonnavlist">
                                    <FontAwesomeIcon
                                      icon={faTasks}
                                      className="metroicon"
                                    />
                                    <h6>{elem.taskTitle}</h6>
                                  </div>
                                </div>

                                <div className="col-sm-3">
                                  <div className="commonnavlist">
                                    <FontAwesomeIcon
                                      icon={faChartLine}
                                      className="metroicon"
                                    />
                                    <h6>{elem.status}</h6>
                                  </div>
                                </div>
                                <div className="col-sm-2">
                                  <div className="commonnavlist">
                                    <FontAwesomeIcon
                                      icon={faUserTie}
                                      className="metroicon"
                                    />
                                    <h6>{elem.assignee}</h6>
                                  </div>
                                </div>
                                <div className="col-sm-2">
                                  <div className="commonnavlist">
                                    <FontAwesomeIcon
                                      icon={faProjectDiagram}
                                      className="metroicon"
                                    />
                                    <h6>{elem.priority}</h6>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Display;
