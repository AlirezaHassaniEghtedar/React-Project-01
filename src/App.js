import './App.css';
import { Header } from './components/Header/Header';
import { MainContent } from './components/MainContent/mainContent';
import { Footer } from './components/Footer/Footer';

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
