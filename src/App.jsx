import './App.css'
import Profile from './assets/Sections/Profile/Profile';
import Experiences from './assets/Sections/Experiences/Experiences';
import Skills from './assets/Sections/Skills/Skills';
import Contact from './assets/Sections/Contact/Contact';
import Footer from './assets/Sections/Footer/Footer';
import ExperienceDetails from './assets/Sections/Experiences/ExperienceDetails';
import { useState } from 'react';


function App() {
  const [toggleExperience, setToggleExperience] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState(null);

  return (
    <>
      {!toggleExperience ? (
        <>
          <Profile />
          <Experiences
            setToggleExperience={setToggleExperience}
            setSelectedExperience={setSelectedExperience}
          />
          <Skills />
          <Contact />
          <Footer />
        </>
      ) : (
        <ExperienceDetails
          experience={selectedExperience}
          setToggleExperience={setToggleExperience}
        />
      )}
    </>
  );
}

export default App