
import Feature from "./main_content/Feature";

import RemoteJobs from "./main_content/RemoteJob";
import SearchBar from "./main_content/SearchBar";
import Session from "./main_content/Session";
import Stress from "./main_content/Stress";
import WalkingJob from "./main_content/WalkingJob";

function Main() {
  return (
    <div className="main">
      <SearchBar />
      <Session />
      <RemoteJobs />
      <WalkingJob />
      <Stress />
      
      <Feature />
    </div>
  );
}

export default Main;
