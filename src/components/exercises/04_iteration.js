import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";

const Demo = (props) => {
  const modules = props.modules
  const tableRows = modules.map((c, index) =>
    <tr key={index}>
      <td>{c.name}</td>
      <td>{c.noLectures}</td>
      <td>{c.noPracticals}</td>
    </tr>
  );
  return (
    <div>
      <h2>{props.course}</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>No lectures</th>
            <th>No practicals</th>
          </tr>
        </thead>
        <tbody >
          {tableRows}
        </tbody >
      </table>
    </div>
  );
};

export default Demo;
