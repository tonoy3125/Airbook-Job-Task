import Airlines from "../Airlines/Airlines";
import Banner from "../Banner/Banner";
import Offers from "../Deals And Offers/Offers";
import Destinations from "../Destinations/Destinations";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Destinations />
            <Offers />
            <Airlines />
        </div>
    );
};

export default Home;