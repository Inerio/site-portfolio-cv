import './App.css'
import Profile from './components/Profile/Profile';
import Experiences from './components/Experiences/Experiences';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import Footer from './components/Layout/Footer';
import ExperienceDetails from './components/Experiences/ExperienceDetails';
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