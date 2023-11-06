import React from "react";
import axios from "axios";

import ListResults from "./ListResults.js";
import { useState, useEffect } from "react";

function Industries() {
  const [industryOptionsData, setindustryOptionsData] = useState(null);
  const [industryData, setIndustryData] = useState(null);
  const [isLoadingOptions, setIsLoadingOptions] = useState(true);
  const [isIndustryDataLoading, setIsIndustryDataLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isBtnClicked, setBtnClicked] = useState(false);
  const [isBtnDisabled, setBtnDisabled] = useState(true);
  const [selectedOptionChange, setOptionChange] = useState("");
  const [currentOption, setCurrentOption] = useState("");

  // fetch
  const fetchData = async (url) => {
    try {
      const response = await axios.get(url);
      return response;
    } catch (error) {
      console.log(`Error: ${error}`);
      setError(error);
    }
  };

  // on submit btn click
  const handleBtnClick = () => {
    setBtnClicked(true);
    setCurrentOption(selectedOptionChange);
    setIsIndustryDataLoading(true);
  };

  // when option selection changes, update
  const handleOptionChange = (event) => {
    setOptionChange(event.target.value);
  };

  // get industry options
  useEffect(() => {
    const url = `http://localhost:7592/industries`;
    fetchData(url).then((response) => {
      setindustryOptionsData(response.data);
      setIsLoadingOptions(false);
    });
  }, []);

  // disable btn when no option selected
  useEffect(() => {
    setBtnDisabled(selectedOptionChange === "");
  }, [selectedOptionChange]);


  // get industry id for data fetch
  useEffect(() => {
    if (isBtnClicked) {
      setIsIndustryDataLoading(true);
      const options = document.querySelectorAll("option");

      var optionId = null;
      for (let i = 0; i < options.length; i++) {
        if (options[i].innerHTML === selectedOptionChange) {
          optionId = options[i].id;
          break;
        }
      }

      const url = `http://localhost:7592/industries/${optionId}/sentiment/daily`;

      fetchData(url).then((response) => {
        setIndustryData(Object.values(response.data));
        setCurrentOption(selectedOptionChange);
        setIsIndustryDataLoading(false);
      });
    }

    setBtnClicked(false);
  }, [isBtnClicked]);


  if (isLoadingOptions) {
    return <div>Loading Options...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {industryOptionsData && (
        <div>
          <select value={selectedOptionChange} onChange={handleOptionChange}>
            <option value="">Select an option</option>
            {Object.entries(industryOptionsData).map(([key, value]) => (
              <option key={key} id={key}>
                {value}
              </option>
            ))}
          </select>
          <button onClick={handleBtnClick} disabled={isBtnDisabled}>
            Search
          </button>
        </div>
      )}

      {industryData && (
        <ListResults
          title={currentOption}
          response={industryData}
          isLoading={isIndustryDataLoading}
        />
      )}
    </div>
  );
}

export default Industries;
