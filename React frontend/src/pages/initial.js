import React, { useState } from 'react';

import axios from 'axios';

const Initial = () => {
  

  return (
    <div className="page-container teampage">
      <br/> <br/> <br/><br/> <br/> <br/> 
    <h3>Who did What? </h3> <br/> <br/> <br/> <br/> <br/> <br/><br/> <br/> <br/> <br/><br/> <br/> <br/> <br/> <br/>
    <table>
     <thead>
    <tr><th>Persons Assigned </th>
        <th>Tasks</th></tr>
     </thead>
     <tbody>
    <tr><td>Klea and Monica</td>
        <td>Front-end</td></tr>
    <tr><td>Binit and Krishna</td>
        <td>Cluster</td></tr>
    <tr><td>Alberto</td>
        <td>Model Training</td></tr>
    <tr><td>Binyam</td>
        <td>API</td></tr>
    <tr><td>Binit</td>
        <td>Storage</td></tr>
    <tr><td>All</td>
        <td>Hardware Setup</td></tr>
    <tr><td>All</td>
        <td>Report Writing</td></tr>
    </tbody>
    </table>
    <br/> <br/> <br/> <br/> <br/> <br/><br/> <br/> <br/> <br/><br/> <br/> 
        <br/> <br/> <br/><br/> <br/> <br/> <br/> <br/> <br/><br/> <br/> <br/> 
        <br/><br/> <br/> <br/> <br/> <br/>
    <p>Note: All of us have helped each-other and worked stimultaneously through all the tasks in order to get better results. &#128522;</p>
    </div>
  );
};

export default Initial;
