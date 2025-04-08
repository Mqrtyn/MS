//import React from 'react';
import '../Home.css'; // Importiere die CSS-Datei für die Header-Komponente
import {motion} from 'framer-motion';
import Image from '../images/Logo.png';


//const openMenu = () => {
 //   document.getElementById('sidemenu')!.classList.remove('hidden');
 // };

  //const closeMenu = () => {
  //  document.getElementById('sidemenu')!.classList.add('hidden');
  //};

const text = "Guten Tag, mein Name ist Martin Sigmundzik";

export function Home() {

  return (
    <div id="home" className="hidden">
      <div className="container">
        <div className="header-text"> 
          <p><u>Angehender Medieninformatiker</u></p>
          <h1>
            {text.split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{color:"white"}}
                animate={{color: "#696969", }}
                transition={{duration: 0.2, repeat: Infinity, repeatType: "loop", delay: 2 + index * 0.1}}
                >
                  {char}
                </motion.span>
            ))}
          </h1>
        </div>
      </div>
      <motion.img
          src={Image}
          alt='bild'
          className='abild'
          //initial={{x:10, y: -605, scale: 0.5, rotate:0}}
          initial={{x: 680, scale: 7, rotate: 0}}
          animate={{x:10, y: -548, scale: 0.5, rotate:360}}
          transition={{duration: 3}}
          />
    </div>
  );
}

export default Home;