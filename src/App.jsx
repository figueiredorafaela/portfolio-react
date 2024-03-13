/* eslint-disable no-unused-vars */

import styles from'./App.module.css'

import i18n from "./i18n/i18n";
import { Suspense, useState } from 'react';
import LocaleContext from './i18n/LocaleContext';

import { Navbar } from './components/Navbar/navbar';
import { Hero } from './components/Hero/hero';
import { Contact } from './components/Contact/contact';
import { About } from './components/About/About';
import { Experience } from './components/Experience/experience';
import { Project } from './components/Projects/projects';
import { useTranslation } from 'react-i18next';


function App() {
  const {t} = useTranslation();

  const[locale, setLocale] = useState(i18n.language)

    i18n.on('languageChanged', (lng)=> setLocale(i18n.language));

    const handleChange = (event) => {
        i18n.changeLanguage(event.target.value);
    }

  return (
      <div className={styles.App}>
        <LocaleContext.Provider value={{locale, setLocale}}> 
          <Suspense fallback={<Loading />}>
            <div className={styles.container}>
              <select value={locale} onChange={handleChange}>
                <option value='en'>English</option>
                <option value ='pt'>Português</option>
              </select>
            </div>
            <Navbar />
            <Hero />
            <About />
            <Experience />
            <Project />
            <Contact />
          </Suspense>
        </LocaleContext.Provider>
        
      </div>
  );
}

function Loading(){
  return (
    <>Loading...</>
  );
}
  

export default App
