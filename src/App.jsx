import './App.css'
import Profile from './assets/Sections/Profile/Profile';
import Experiences from './assets/Sections/Experiences/Experiences';
import Skills from './assets/Sections/Skills/Skills';
import Contact from './assets/Sections/Contact/Contact';
import Footer from './assets/Sections/Footer/Footer';
import Page from './assets/Sections/Page/Page';
import { NotFound } from './assets/Sections/Notfound/Notfound';
import { useHashNavigation } from './assets/Hooks/useHashNavigation';


function App() {

  const { page, param } = useHashNavigation();
  const pageContent = getPageContent(page, param)


  return (
    <>
      <Profile />
      <Experiences />
      <Skills />
      <Contact />
      <Footer />
    </>
  );

}

function getPageContent(page, param) {
  if (page === 'home') {
    return <Page />
  }
  if (page === 'contact') {
    return <Page />
  }
  return <NotFound page={page} />
}

export default App