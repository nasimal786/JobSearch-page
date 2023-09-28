
import Feature from "./Feature";
import Chart from "./main_content/Chart";
import OfferCarousel from "./main_content/OfferCarousel";
import Session from "./main_content/Session";
import Stress from "./main_content/Stress";

function Main() {
  return (
    <div className="main">
      <Session />
      <OfferCarousel />
      <Stress />
      <Chart />
      <Feature />
    </div>
  );
}

export default Main;
