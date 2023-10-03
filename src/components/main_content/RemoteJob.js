import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function RemoteJobs() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="offer">
      <h1>Remote Jobs</h1>

      <Carousel responsive={responsive}>
        <div className="offer_carousel">
          <div className="offer_carousel_logo">
            <img src="./images/logo1.jpg" alt="logo" width="50" height="45" />
            <p>4 days ago</p>
          </div>
          <div className="offer_carousel_txt">
            <h3>Data Entery Operator</h3>
            <p>Apex data solutions</p>
            <i class="fa-solid fa-location-dot fa-lg"></i>
            <span> Noida, Uttar Pradesh</span>
          </div>
        </div>
        <div className="offer_carousel">
          <div className="offer_carousel_logo">
            <img src="./images/logo2.jpg" alt="logo" width="50" height="45" />
            <p>7 days ago</p>
          </div>
          <div className="offer_carousel_txt">
            <h3>React.js developer</h3>
            <p>Hero Software Solutions</p>
            <i class="fa-solid fa-location-dot fa-lg"></i>
            <span> Noida, Uttar Pradesh</span>
          </div>
        </div>
        <div className="offer_carousel">
          <div className="offer_carousel_logo">
            <img src="./images/logo1.jpg" alt="logo" width="50" height="45" />
            <p>9 days ago</p>
          </div>
          <div className="offer_carousel_txt">
            <h3>Full Stack developer</h3>
            <p>Helson Software Solutions</p>
            <i class="fa-solid fa-location-dot fa-lg"></i>
            <span> Hydrabad, Telangana</span>
          </div>
        </div>
        <div className="offer_carousel">
          <div className="offer_carousel_logo">
            <img src="./images/logo1.jpg" alt="logo" width="50" height="45" />
            <p>11 days ago</p>
          </div>
          <div className="offer_carousel_txt">
            <h3>Java Developer</h3>
            <p>Apex Software Solutions</p>
            <i class="fa-solid fa-location-dot fa-lg"></i>
            <span> Noida, Uttar Pradesh</span>
          </div>
        </div>
        <div className="offer_carousel">
          <div className="offer_carousel_logo">
            <img src="./images/logo1.jpg" alt="logo" width="50" height="45" />
            <p>18 days ago</p>
          </div>
          <div className="offer_carousel_txt">
            <h3>Data Entery Operator</h3>
            <p>Apex data solutions</p>
            <i class="fa-solid fa-location-dot fa-lg"></i>
            <span> Noida, Uttar Pradesh</span>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default RemoteJobs;
