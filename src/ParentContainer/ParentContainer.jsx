import './parent-container.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HeaderContainer } from './header/HeaderContainer';
import { HomeContainer } from './home/HomeContainer';
import { CounterClassContainer } from './counter_class/CounterClassContainer';
import { CounterFunctionalContainer } from './counter_functional/CounterFunctionalContainer';
import { CounterReduxContainer } from './counter_redux/CounterReduxContainer';
import { FooterContainer } from './footer/FooterContainer';

export function ParentContainer(props) {

    return(
        <BrowserRouter>
            <HeaderContainer />
                <Routes>
                    <Route path="/counter-redux" element={<CounterReduxContainer />}/>
                    <Route path="/counter-functional" element={<CounterFunctionalContainer />}/>
                    <Route path="/counter-class" element={<CounterClassContainer />}/>
                    <Route path="/" element={<HomeContainer />}/>
                </Routes>
            <FooterContainer />
        </BrowserRouter>
    )
}