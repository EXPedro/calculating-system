import Buttons from './components/buttons';
import Display from './components/display';
import Container from './components/container';
import { Reset } from 'styled-reset';

function App() {
  return (
    <div className="App">
      <Reset />
        <Container>        
          <Display />
          <Buttons />
        </Container>
    </div>
  );
}

export default App;
