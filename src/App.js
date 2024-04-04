import './App.css';
import Footer from './components/Footer/footer';
import { Header } from './components/Header/header';
import { MainContent } from './components/MainContent/mainContent';

function App() {
  return (
    <div className='app'>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
