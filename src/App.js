import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './plugin/font-awesome/css/all.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import WingTipSkull1 from './pages/SelectOption/Wingtip-Skull-Black1';
import WingtipCluth1 from './pages/SelectOption/Wingtip-cluth2';
import WingtipPinWhite from './pages/SelectOption/Wingtip-pinWhite';
import WingtipPinBlack from './pages/SelectOption/Wingtif-pinBlack';
import WingtipFontWhite from './pages/SelectOption/Wingtif-FontWhite';
import WingtipFontBlack from './pages/SelectOption/Wingtif-FontBlack';
import WingtipCrossWhite from './pages/SelectOption/Wingtif-CroosWhite';
import WingtipCrossBlack from './pages/SelectOption/Wingtif-CrossBlack';
import TidakAda from './components/TidakAda';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<><Navbar/> <Home/></>} />
        <Route path='/product/t-shirt-kids-wingtip-skull-black' element={<WingTipSkull1/>} />
        <Route path='/product/t-shirt-kids-suicide-clutch-black' element={<WingtipCluth1/>} />
        <Route path='/product/t-shirt-kids-nk-logo-pin-white' element={<WingtipPinWhite/>} />
        <Route path='/product/t-shirt-kids-nk-logo-pin-black' element={<WingtipPinBlack/>} />
        <Route path='/product/t-shirt-kids-nk13-font-white' element={<WingtipFontWhite/>} />
        <Route path='/product/t-shirt-kids-nk13-font-Black' element={<WingtipFontBlack/>} />
        <Route path='/product/t-shirt-kids-cross-font-white' element={<WingtipCrossWhite/>} />
        <Route path='/product/t-shirt-kids-cross-font-black' element={<WingtipCrossBlack/>} />
        <Route path="*" element={<TidakAda />} />
      </Routes>
    </Router>
  );
}

export default App;
