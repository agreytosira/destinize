import CallToAction from '../sections/CallToAction'
import FAQSection from '../sections/FAQSection'
import FavoriteDestination from '../sections/FavoriteDestination'
import FindTour from '../sections/FindTour'
import GetToKnow from '../sections/GetToKnow'
import Jumbotron from '../sections/Jumbotron'
import ReservationGuide from '../sections/ReservationGuide'
import Sponsor from '../sections/Sponsor'

function Homepage() {
  return (
    <main>
      <Jumbotron />
      <Sponsor />
      <FavoriteDestination />
      <ReservationGuide />
      <FindTour />
      <GetToKnow />
      <FAQSection />
      <CallToAction />
    </main>
  )
}

export default Homepage
