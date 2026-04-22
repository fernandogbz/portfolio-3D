import { BrowserRouter } from "react-router-dom";
import videoGrid from "./assets/video-grid.webm";
import videoLine from "./assets/video-line.webm";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <div className="bg-about-pattern bg-[length:100%_auto] bg-no-repeat bg-[position:50%_93%]">
          <About />
        </div>
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-experience-pattern bg-[length:100%_95%] bg-no-repeat bg-center scale-100 scale-x-[-1]" />
          <div className="relative z-10">
            <Experience />
          </div>
        </div>
        <div className="relative z-0 w-full h-[100px] overflow-hidden bg-primary p-0">
          <video
            className="absolute inset-0 h-full w-full object-cover scale-155"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          >
            <source src={videoLine} type="video/webm" />
          </video>
          {/* <div className="absolute inset-0 bg-gradient-to-r from-primary via-transparent to-primary pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary from-10% via-transparent via-50% to-primary to-90% pointer-events-none" /> */}
          <div className="relative z-10 w-full h-full" />
        </div>
        <div className="relative w-full min-h-[clamp(52rem,120svh,72rem)] sm:min-h-0 sm:h-[520px] overflow-hidden bg-primary">
          <video
            className="absolute inset-0 h-full w-full object-contain scale-100"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={videoGrid} type="video/webm" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-transparent to-primary pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary from-5% via-transparent via-50% to-primary to-95% pointer-events-none" />
          <div className="relative z-10 w-full pb-0">
            <div className="max-w-7xl mx-auto">
              <Tech />
            </div>
          </div>
        </div>
        <div className="bg-works-pattern bg-[length:170%_100%] bg-no-repeat bg-center">
          <Works />
        </div>
        <div className="relative z-0 w-full h-[200px] overflow-hidden bg-primary p-0">
          <video
            className="absolute inset-0 h-full w-full object-cover scale-155"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          >
            <source src={videoLine} type="video/webm" />
          </video>
          {/* <div className="absolute inset-0 bg-gradient-to-r from-primary via-transparent to-primary pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary from-10% via-transparent via-50% to-primary to-90% pointer-events-none" /> */}
          <div className="relative z-10 w-full h-full" />
        </div>
        {/* <Feedbacks /> */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
