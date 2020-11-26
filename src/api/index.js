import axios from "axios";

const baseURL = "/api";

export const fetchData = async () => {
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(baseURL);

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
