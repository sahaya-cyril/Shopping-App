import React from 'react';
import {Container} from 'react-bootstrap';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import HomeScreen from './screens/homeScreen';

function App() {
  return (
    <Router>
    <Header />
    <main className="my-3">
      <Container>
        <h1>
          Hello, Sahaya Cyril
        </h1>
        <Route path="/" component={HomeScreen} exact />
      </Container>
    </main>
    <Footer />
    </Router>
  );
}

export default App;
