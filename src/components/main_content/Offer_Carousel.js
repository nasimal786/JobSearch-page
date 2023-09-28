import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Offer_Carousel() {
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
      <h1>Offer for Instant Payment</h1>
      <Carousel responsive={responsive}>
        <div className="offer_carousel">
            <div className="offer_carousel_logo">
                <img src="./images/logo1.jpg" alt="logo" width='59' height='54' />
                <p>AMAZ20%</p>
            </div>
            <div className="offer_carousel_txt">
                <h3>Amazon provide a cupan code for new user</h3>
                <p>Offer valid for Prime User</p>
                <button>Buy on 20%</button>
            </div>
        </div>
        <div className="offer_carousel">
            <div className="offer_carousel_logo">
                <img src="./images/logo2.jpg" alt="logo" width='59' height='54' />
                <p>FLIPN22%</p>
            </div>
            <div className="offer_carousel_txt">
                <h3>Flipkart provide a cupan code for new user</h3>
                <p>Offer valid for Prime User</p>
                <button>Buy on 22%</button>
            </div>
        </div>
        <div className="offer_carousel">
            <div className="offer_carousel_logo">
                <img src="./images/logo1.jpg" alt="logo" width='59' height='54' />
                <p>100 Rs/referral</p>
            </div>
            <div className="offer_carousel_txt">
                <h3>Amazon provide Rs-100 off on referral</h3>
                <p>Offer valid for Prime User</p>
                <button>Buy </button>
            </div>
        </div>
        <div className="offer_carousel">
            <div className="offer_carousel_logo">
                <img src="./images/logo1.jpg" alt="logo" width='59' height='54' />
                <p>200 Rs/referral</p>
            </div>
            <div className="offer_carousel_txt">
                <h3>Amazon provide Rs-200 off on referral</h3>
                <p>Offer valid for Prime User</p>
                <button>Buy</button>
            </div>
        </div>        
      </Carousel>
      ;
    </div>
  );
}

export default Offer_Carousel;
