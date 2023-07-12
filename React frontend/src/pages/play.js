import React, { useState } from 'react';

import axios from 'axios';

const Play = () => {
  const [inputValue, setInputValue] = useState('');
  const [dispaly, setDisplay] = useState('');
  const [apiResponse, setApiResponse] = useState({
    "time": '',
    "image": {
      "width": '',
      "height": ''
    },
    "predictions": [
      {
        "x": '',
        "y": '',
        "width": '',
        "height": '',
        "confidence": '',
        "class": ""
      }
    ]
  });

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    axios({
        method: "POST",
        url: "https://detect.roboflow.com/oxford-pets/3",
        params: {
            api_key: "sMH0j7iqNy6umQ5e7wLY",
            image: inputValue
        }
    })
    .then(function(response) {
        setApiResponse(response.data);
        setDisplay(inputValue)
    })
    .catch(function(error) {
        console.log(error.message);
        setApiResponse({});
    });
   
  };

  return (
    <div className="page-container">
      <h2>Play Ground</h2>
      <form  className="form-container" id="form-container"onSubmit={handleFormSubmit}>
        <input className="form-input"  type="text" value={inputValue} placeholder='Enter Image URL' onChange={handleInputChange} />
        <button className="form-submit" type="submit">Submit</button>
      </form>
      <div className="api-response">
            <div className="image-item-box">
             <img className='imag' src={dispaly||'https://i0.wp.com/theperfectroundgolf.com/wp-content/uploads/2022/04/placeholder.png?w=1200&ssl=1'} alt={inputValue} />
            </div>
            <pre class='txt'>{JSON.stringify(apiResponse,null,2)}</pre>
        </div>
    </div>
  );
};

export default Play;
