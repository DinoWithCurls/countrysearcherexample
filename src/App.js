import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
const url = require("../node_modules/country-json/src/country-by-capital-city.json");

const App = () => {
  const [myOptions, setMyOptions] = useState([]);
  const getDataFromAPI = async () => {
    console.log("Options Fetched from API");
    for (var i = 0; i < url.length; i++) {
      myOptions.push(url[i].country);
    }
    setMyOptions(myOptions);
  };

  return (
    <>
      <h1>Hello</h1>
      <div style={{ marginLeft: "40%", marginTop: "60px" }}>
        <Autocomplete
          style={{ width: 500 }}
          freeSolo
          autoComplete
          autoHighlight
          options={myOptions}
          renderInput={(params) => (
            <TextField
              {...params}
              onChange={getDataFromAPI}
              variant="outlined"
              label="Search Box"
            />
          )}
        />
      </div>
    </>
  );
};

export default App;
