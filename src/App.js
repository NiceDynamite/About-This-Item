import React from 'react';
import './App.css'
import Header from "./components/Header";
import Shipping from './components/Shipping';
import Loading from './components/Loading';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Details from './components/Details';
import Labelinfo from './components/Labelinfo';
import Questions from './components/Questions';

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
    fetch('http://localhost:5002/api/shipping')
    .then((response) => response.json())
    .then((data) => this.setState({data: data, loading: false}))
  }
  

  render() {

    if (this.state.loading) {
      return <Loading loadingMessage={this.state.loadingMessage}/>
    }

    return (
      <Router>
        <div className="Beginning">
          <header className="App-header">
            <h2 className="about">
              About this item
            </h2>
            <Header />
            <Routes>

              <Route exact path="/" element={
                <Shipping data={this.state.data}/>
              }>
              </Route>

              <Route exact path="/Details" element={
                <Details />
              }></Route>

              <Route exact path="/Label" element={
                <Labelinfo />
              }></Route>

              <Route exact path="/Questions" element={
                <Questions />
              }></Route>
            </Routes>
            
          </header>
        </div>
      </Router>
    );
  }

}

export default App;
