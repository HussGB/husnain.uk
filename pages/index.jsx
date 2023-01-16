import HomePage from '../components/pages/HomePage.jsx';
import ShowcasePage from '../components/pages/Showcase.jsx';
import ContactPage from '../components/pages/Contact.jsx';
import ColleaguesPage from '../components/pages/Colleagues.jsx';
import AchievementsPage from '../components/pages/Achievements.jsx';

export default function IndexPage() {
  return (
    <>
      <HomePage />
      <ShowcasePage />
      <AchievementsPage />
      <ColleaguesPage />
      <ContactPage />
    </>
  )
}