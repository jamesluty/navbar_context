import './App.css';
import FormWrapper from './Components/FormWrapper';
import Navbar from './Components/Navbar';
import Wrapper from './Components/Wrapper';

function App() {
  return (
    <div>
      <Wrapper>
        <Navbar/>
        <FormWrapper/>
      </Wrapper>
    </div>
  );
}

export default App;
