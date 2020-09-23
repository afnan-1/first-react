import React from 'react';
import './App.css'
import Footer from './components/footer'
class Header extends React.Component{
  render(){
    return (
      <div className="header">
        <h2> Header </h2>
      </div>
    )
  }
}


class App extends React.Component {
  render() {
    return (
      <div>
         <Header />
      <h1 style={{backgroundColor:'red'}}>Main component</h1>
      
      <Footer/>
     
      </div>
    )
  }
}

export default App;
