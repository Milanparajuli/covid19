import React from "react";
import { Cards, Charts, CountryPicker } from "./components";

import styles from "./App.module.css";
import { fetchData } from "./api";

class App extends React.Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const featchedData = await fetchData();
    this.setState({
      data: featchedData,
    });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  };

  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <h2>Covid-19</h2>
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Cards data={data} />        
        <Charts data={data} country={country} />
      </div>
    );
  }
}

export default App;
