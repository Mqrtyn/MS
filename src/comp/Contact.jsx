import React from 'react';
import '../Contact.css'; // Importiere die CSS-Datei für die Header-Komponente
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faAddressBook} from '@fortawesome/free-solid-svg-icons';


export function Contact() {

  return (
    <div id="contact" class="hidden">
    <div class="container">
        <div class="row">
            <div class="contact-left">
                <h1 class="sub-title2"> <FontAwesomeIcon icon={faAddressBook} /><u>Contect Me:</u></h1>
                <p><FontAwesomeIcon icon={faEnvelope} /> <b>E-Mail:</b> <a>Sig.maartin@gmail.com</a></p>
                <p><FontAwesomeIcon icon={faPhone} /><b>Tel.:</b> <a>017634252678</a></p>
                <div class="social-icons">
                    <a href="https://www.instagram.com/m.ar.tin/"><i class="fa-brands fa-instagram"></i></a>
                    <a href="https://twitter.com/Mqrtiyn"><i class="fa-brands fa-square-x-twitter"></i></a>
                    <a href="https://www.tiktok.com/@m.ar.tin"><i class="fa-brands fa-tiktok"></i></a>
                </div>
            </div>
        </div>
    </div>
    <div class="copyright">
        <p>Danke! <i><i class="fa-solid fa-shield-halved"></i></i></p>
    </div>
    </div>
  );
}

export default Contact;
//Überarbeiten weil viel Code ist sinnlos erstmal und für alle bildschirme anpassen. Mit express noch Updaten