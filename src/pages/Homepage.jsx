import FavoriteDestination from '../sections/FavoriteDestination';
import FindTour from '../sections/FindTour';
import Jumbotron from '../sections/Jumbotron';
import ReservationGuide from '../sections/ReservationGuide';
import Sponsor from '../sections/Sponsor';

function Homepage() {
    return (
        <main>
            <Jumbotron />
            <Sponsor />
            <FavoriteDestination />
            <ReservationGuide />
            <FindTour />
        </main>
    );
}

export default Homepage;
