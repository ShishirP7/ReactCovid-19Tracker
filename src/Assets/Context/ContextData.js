import { createContext, useState } from "react";
import axios from "axios";

export const DataContext = createContext({});

const url = "https://disease.sh/v3/covid-19/countries";
const DataProvider = ({ children }) => {
  const [Data, setData] = useState([]);
  axios.get("https://disease.sh/v3/covid-19/countries").then((data) => {
    setData(data.data);
  });

  return (
    <DataContext.Provider value={{ Data, setData }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
