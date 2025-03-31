//import React from 'react';
import '../Home.css'; // Importiere die CSS-Datei für die Header-Komponente


//const openMenu = () => {
 //   document.getElementById('sidemenu')!.classList.remove('hidden');
 // };

  //const closeMenu = () => {
  //  document.getElementById('sidemenu')!.classList.add('hidden');
  //};

export function Home() {

  return (
    <div id="home" className="hidden">
      <div className="container">
        <div className="header-text"> 
          <p><u>Angehender Medieninformatiker</u></p>
          <h1>Guten Tag, mein Name ist <br /> <span><u>Martin</u></span> Sigmundzik</h1>
        </div>
      </div>
    </div>
  );
}

export default Home;