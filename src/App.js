import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomeContainer } from './home/HomeContainer';
import { PageNotFoundContainer } from './page_not_found/PageNotFoundContainer';


function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Routes>
          <Route path="/*" element={<HomeContainer />} />
          <Route path="*" element={<PageNotFoundContainer />} />
        </Routes> 
      </div>
    </BrowserRouter>
  );
}


export default App;
