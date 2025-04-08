
import React from 'react';
import '../About.css'; // Importiere die CSS-Datei für die Header-Komponente
import Image from '../images/IMG_3595.PNG';
import {motion} from 'framer-motion';

const text = "About Me";

export function About() {
    const [aktiv,setAktiv] = React.useState('skills');
    const openTab = (tabName) => {
        setAktiv(tabName);
      };

  return (
    <div id="about" class="hidden">
    <div class="container">
        <div class="row">
            <div class="about-col-1">
                <img src={Image}/>
            </div>
                <div class="about-col-2">
                <h1 className="tx">
                  {text.split("").map((char, index) => (
                  <motion.span
                  key={index}
                  initial={{color:"white"}}
                  animate={{color: "#696969", }}
                  transition={{duration: 0.2, repeat: Infinity, repeatType: "loop", delay: 1 + index * 0.1}}
                    >
                    {char}
                  </motion.span>
                ))}
                </h1>
                <p class="p">
                    Mein Name ist Martin Sigmundzik. Ich wurde am 07. November 2001 in Kędzierzyn-Koźle (Heydebreck), Polen, geboren. <br/> Im Jahr 2010 zog ich im Alter von neun Jahren gemeinsam mit meiner Mutter und meinen Geschwistern nach Deutschland. <br/>
                    Hier schloss ich meine Schulzeit ab und befinde mich derzeit auf dem Weg, meinen Bachelor-Abschluss zu erlangen.
                </p>
                <div>
      <div className="tab-titles">
        <p
          className={`tab-links ${aktiv === 'skills' ? 'active-link' : ''}`}
          onClick={() => openTab('skills')}
        >
          Skills
        </p>
        <p
          className={`tab-links ${aktiv === 'hobby' ? 'active-link' : ''}`}
          onClick={() => openTab('hobby')}
        >
          Hobby
        </p>
        <p
          className={`tab-links ${aktiv === 'lebenslauf' ? 'active-link' : ''}`}
          onClick={() => openTab('lebenslauf')}
        >
          Schule
        </p>
        <p
          className={`tab-links ${aktiv === 'lebenslauf1' ? 'active-link' : ''}`}
          onClick={() => openTab('lebenslauf1')}
        >
          Jobs/Praktika
        </p>
      </div>

      <div className="tab-content">
        {aktiv === 'skills' && <div class="tab-contents active-tab" id="skills">
                    <ul>
                        <li><span>UI/UX Design</span><br/>HTML, CSS, React, Bootstrap, Prototyping(Figma)</li>
                        <li><span>Web Development</span><br/>JavaScript/TypeScript, Python</li>
                        <li><span>Vertiefung in der Webentwicklung</span><br/>Express.js, MongoDB, Mongoose, SQLite, Django, RESTful APIs, JWT</li>
                    </ul>
                </div>}
        {aktiv === 'hobby' && <div class="tab-contents active-tab" id="hobby">
                    <ul>
                        <li><span>Sport</span><br/>Insbesondere interessiere ich mich für Fußball und Kampfsport (MMA, Boxen), schätze aber generell jede Sportart als Sehenswert, überweigend jedoch nur als Konsument.
                        Selbst trainiere ich regelmäßig Calisthenics.</li>
                        <li><span>Angeln</span><br/>Regelmäßig gehe ich mit meinen Kollegen und meinem Bruder angeln. Dabei genieße ich es viel Zeit in der Natur zu verbringen, denn sie ist für mich der perfekte Ort zur Entspannung und Erholung.</li>
                        <li><span>Web-Engineering</span><br/>Erstellung von Webseiten oder Webanwendungen interessiert mich sehr. In diesem Bereich möchte ich meine Fähigkeiten kontinuierlich erweitern und mich noch mehr verbessern.</li>
                    </ul>
                </div>}
        {aktiv === 'lebenslauf' && <div class="tab-contents active-tab" id="lebenslauf">
                    <ul>
                        <li><span>Schule</span><br/>
                            04/2022 - Jetzt: Berliner Hochschule für Technik.
                            <br/>•   Angehender Abschluss: Bachelor of Science, Medieninformatik.
                            <br/><br/>08/2019 - 08/2021: Emil-Fischer-Schule, Berlin Oberstufenzentrum.                            
                            <br/>•   Abschluss: Fachabitur in Ernährung und Lebensmitteltechnik.
                            <br/><br />08/2014 – 06/2019: Bettina-von-Arnim-Schule, Berlin.
			                      <br/>•   Abschluss: Mittlerer Schulabschluss.
                            <br/><br />08/2011 - 06/2014: Hannah-Höch-Grundschule, Berlin.
                            <br/>•   Abschluss: Grundschule.
                            <br/><br />08/2010 - 06/2011: Scharmützelsee-Grundschule, Berlin.
			                      <br/>•   Deutschkurs.
                            <br/><br />09/2006 - 06/2010: Publiczna Szkola Podstawowa, Polska Cerekiew (Polen).
                            <br/>•   Abschluss: Grundschule.
                        </li>
                  
                    </ul>
                </div>}
        {aktiv === 'lebenslauf1' && <div class="tab-contents active-tab" id="lebenslauf1">
                    <ul>
                        <li><span>Jobs/Praktika</span><br/>
                            
                            <br/>08/2022 - Jetzt: MezgerBau als Trockenbauer. 
                            <br/>    •   Aushilfe in der Firma vom Kollegen.
                            <br/><br />08/2021-04/2022: Corona Testzentrum als Coronatester.
                            <br/>    •   Wichtige Tätigkeit für die Gesellschaft.
                            <br/><br />08/2019 – 03/2020: MV Pizza & Pasta (Betriebspraktikum).
                            <br/>    •	Allgemeine Küchentätigkeiten.
                            <br/>    •	Kommunikation mit Mitarbeitern und Kunden.
                            <br/><br />02/2017: KME Brass Germany GmbH (Industriemechaniker) Zweiwöchiges Oberschulpraktikum
                            <br/>    •	Handwerkliche Arbeit mit Metall.
                        </li>
                        <li><span>Weiteres Ziel: Web-Entwicklung</span><br/></li>
                    </ul>
                </div>}
      </div>
    </div>
                
            </div>
        </div>
    </div>
</div>
  );
}

export default About;