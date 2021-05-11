import {Container} from 'react-bootstrap';
import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import HomeScreen from './screens/homeScreen';

function App() {
  return (
    <>
    <Header />
    <main className="my-3">
      <Container>
        <h1>
          Hello, Sahaya Cyril
        </h1>
        <HomeScreen />
      </Container>
    </main>
    <Footer />
    </>
  );
}

export default App;
