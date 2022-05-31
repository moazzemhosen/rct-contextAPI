
import { useContext } from 'react';
import './App.css';
import Body from './components/Body';
import Navbar from './components/Navbar';
import { ThemeContext } from './context/ThemeContext';
import styles from './components/navbar.module.css'
import { AuthContext } from './context/AuthContext';


function App() {
  const { theme } = useContext(ThemeContext)
   const { isAuth } = useContext(AuthContext);
  return (
    <div className={theme ? styles.dark: styles.light}>
      <Navbar />
      {isAuth ? <Body/> : null }
      
    </div>
  );
}

export default App;
