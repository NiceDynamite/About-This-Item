import React from 'react';
import './App.css'
import Header from "./components/Header";
import Shipping from './components/Shipping';
import Loading from './components/Loading';

class App extends React.Component {



  constructor(props) {
    super(props)
    this.state = {
      data: null,
      loading: true,
      loadingMessage: "Getting item info..."
    }
  }

  componentDidMount() {
    fetch('http://localhost:8000/api/shipping')
    .then((response) => response.json())
    .then((data) => this.setState({data: data, loading: false}))
  }
  

  render() {

    if (this.state.loading) {
      return <Loading loadingMessage={this.state.loadingMessage}/>
    }

    return (
      <div className="App">
        <header className="App-header">
        <h2 className="about">
                    About this item
                </h2>
          <Header />
          <Shipping data={this.state.data}/>
        </header>
      </div>
    );
  }

}

export default App;
