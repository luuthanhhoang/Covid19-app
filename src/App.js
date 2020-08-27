import React, { Component } from 'react';

//import component
import { Cards, Chart, CountryPicker } from './components';
import { fetchData } from './api';

//import Css
import styles from './App.module.css';

//import images
import coronaImage from './images/image.png'

class App extends Component {

  constructor() {
    super();
    this.state = ({
      data: {},
      country: '',
    });
  }

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({
      data: fetchedData
    });
  }

  handleCountryChange = async (country) => {
    //fetch the data
    const fetchedData = await fetchData(country);
    //set the state
    this.setState({
      data: fetchedData,
      country: country
    });
  }

  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img className={styles.image} src={coronaImage} alt="Covid-19"/>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    )
  }
}

export default App;