import './App.scss';
import 'boxicons/css/boxicons.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import Blank from './pages/Blank';
import Managers from './pages/Managers';
import Cashupgrades from './pages/Cashupgrades';
import Angelupgrades from './pages/Angelupgrades';
import Investors from './pages/Investors';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<AppLayout />}>
                    <Route index element={<Blank />} />
                    <Route path='/cashupgrades' element={<Cashupgrades />} />
                    <Route path='/angelupgrades' element={<Angelupgrades />} />
                    <Route path='/managers' element={<Managers />} />
                    <Route path='/investors' element={<Investors />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;