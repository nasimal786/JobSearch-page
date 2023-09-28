
import Feature from "./Feature";
import Chart from "./main_content/Chart";
import Offer_Carousel from "./main_content/Offer_Carousel";
import Session from "./main_content/Session";
import Stress from "./main_content/Stress";

function Main() {
  return (
    <div className="main">
      <Session />
      <Offer_Carousel />
      <Stress />
      <Chart />
      <Feature />
    </div>
  );
}

export default Main;
