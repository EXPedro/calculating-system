import Buttons from './components/buttons';
import Display from './components/display';
import Container from './components/container';

function App() {
  return (
    <div className="App">
      <Container>  //TODO install styled-components and make container a style
        <Display />
        <Buttons />
      </Container>
    </div>
  );
}

export default App;
