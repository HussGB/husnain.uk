import HomePage from '../components/pages/HomePage.jsx';
import LoginBtn from '../components/login-btn.jsx';
import ContactPage from '../components/pages/Contact.jsx';
import ProjectsPage from '../components/pages/Projects.jsx';
import KoFiWidget from '../components/ko-fi-widget.jsx'

export default function IndexPage() {
  return (
    <>
    <LoginBtn />
      <HomePage />
      <ProjectsPage />
      <ContactPage />
      <KoFiWidget />
    </>
  )
}