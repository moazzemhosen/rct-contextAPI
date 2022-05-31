import React, { useContext } from 'react'
// import Theme from './Theme'
import Wishlist from './Wishlist'
import styles from './navbar.module.css'
import { ThemeContext } from '../context/ThemeContext'
import { AuthContext } from '../context/AuthContext'

const Navbar = () => {
  const { theme, toggle } = useContext(ThemeContext);
  const { isAuth, login, logout } = useContext(AuthContext);
  return (
    <div className={styles.Flex}>
      <p>Home</p>
      <p>Page</p>
      <p>
        {/* <Theme value={{theme, toggle}} /> */}
        <button onClick={toggle}>{theme ? "White" : "Dark"}</button>
      </p>
      <p>
              <button onClick={() => {
                  if (isAuth) logout();
                   else 
                      login("A", "B")
                  
              }}>{isAuth ? "Logout": "Login" }</button>
          </p>
      <p>
        <Wishlist />
      </p>
    </div>
  );
}

export default Navbar