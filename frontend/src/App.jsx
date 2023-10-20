import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import { Container } from 'react-bootstrap';

const App = () => {
  return ( 
    <>
      <Header />
      <main>
        <Container>
          <HomeScreen />
        </Container>
      </main>
    </>
   );
}
 
export default App;
