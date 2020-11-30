import axios from "axios";

const baseURL = "/api";

export const fetchData = async (country) => {
  let changableURL = baseURL;

  if (country) {
    changableURL = `${baseURL}/countries/${country}`;
  }

  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(changableURL);

    return {
      confirmed,
      recovered,
      deaths,
      lastUpdate,
      //  lastUpdate: lastUpdate
    };
  } catch (error) {
    console.log(error);
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${baseURL}/daily`);

    const modifiedData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));

    return modifiedData;
  } catch (error) {
    console.log(error);
  }
};

export const fetchCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${baseURL}/countries`);
    return countries.map((country) => country.name);
  } catch (error) {
    console.log(error);
  }
};
