import React from "react";

function Session() {
  return (
    <div className="session">
      <div className="session_txt">
        <h3>
          Already have a resume? Get help making it stand out to employers.
        </h3>
        <p>
          Match with a career coach who knows your industry for an expert resume
          review
        </p>
        <button>Get Resume Help</button>
        <p >A service of <a href="#">indeed</a></p>
      </div>
      <div className="session_img">
        <img src="./images/resume.jpg" alt=" session" />
      </div>
    </div>
  );
}

export default Session;
