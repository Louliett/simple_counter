import './App.css';
import { Route, Routes, Router } from 'react-router-dom';
import { HomeContainer } from './home/HomeContainer';
import { CounterClassContainer } from './counter_class/CounterClassContainer';
import { CounterFunctionalContainer } from './counter_functional/CounterFunctionalContainer';
import { CounterReduxContainer } from './counter_redux/CounterReduxContainer';


function App() {
  return (
    <Routes>
      <Route path="/" component={HomeContainer}/>
      <Route path="/counter-class" component={CounterClassContainer}/>
      <Route path="/counter-functional" component={CounterFunctionalContainer}/>
      <Route path="/counter-redux" component={CounterReduxContainer}/>
    </Routes>
  );
}

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;
