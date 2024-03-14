import FavoriteDestination from '../sections/FavoriteDestination';
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
        </main>
    );
}

export default Homepage;
