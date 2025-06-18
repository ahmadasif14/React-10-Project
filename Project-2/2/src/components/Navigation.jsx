import styles from "./Navigation.module.css";

const Navigation = () => {

// console.log (styles); *2 { Navigation: '_navigation_1nb3008_1' } 

  return (
     <nav className={`${styles.navigation} container`}>
      <div className="logo">
        <img src="public/images/logo.png" alt="logo" />
      </div>

      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav> 
 );
}

export default Navigation;