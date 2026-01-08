// Landscape Images
import acadia1 from '../assets/images/photography/landscape/DSC_0373 edited.png';
import grassHouse from '../assets/images/photography/landscape/Poland Grass House.jpg';
import acadia2 from '../assets/images/photography/landscape/DSC_0317.png';
import acadia3 from '../assets/images/photography/landscape/DSC_0309 copy.png';
import mountains from '../assets/images/photography/landscape/Mountains Israel.jpg';
import arizonaFire from '../assets/images/photography/landscape/DSC_0434.JPG';

// Still Life Images
import seagull from '../assets/images/photography/still-life/Acadian Seagull 1.jpg';
import chipmunk from '../assets/images/photography/still-life/DSC_0215.JPG';
import bird from '../assets/images/photography/still-life/DSC_0806_cropped.png';
import rainbowShadow from '../assets/images/photography/still-life/Rainbow Shadow.jpg';
import seaLions from '../assets/images/photography/still-life/DSC_0409.png';
import flowersWater from '../assets/images/photography/still-life/Flowers and Water.jpg';
import deer from '../assets/images/photography/still-life/Deer Drinking edited.png';
import treesGreen from '../assets/images/photography/still-life/Trees Green.jpg';
import benchLeaves from '../assets/images/photography/still-life/Bench Leaves.jpg';
import catWhiskers from '../assets/images/photography/still-life/Cat Whiskers.jpg';

// // Food Images
// import gnocchi from '../assets/images/photography/food/IMG_4504_edited.png';
// import frenchToast from '../assets/images/photography/food/IMG_2567_edited.png';
// import sandwich from '../assets/images/photography/food/IMG_3836_edited v2.png';
// import spaghetti from '../assets/images/photography/food/IMG_5975_edited.png';

// Portrait Images
import engagement1 from '../assets/images/photography/portrait/DSC_0205 copy v1.png';
import engagement2 from '../assets/images/photography/portrait/DSC_0160 copy V1.png';
import engagement3 from '../assets/images/photography/portrait/DSC_0239 copy v1.png';
import engagement4 from '../assets/images/photography/portrait/DSC_0206 copy v1.png';
import engagement5 from '../assets/images/photography/portrait/DSC_0448 copy v1.png';
import engagement6 from '../assets/images/photography/portrait/DSC_0351-2 copy V1.png';
import TabbedSidebar from '../components/TabbedSidebar';

const Photography = () => {
  const tabs = [
    { id: 'landscape', label: 'landscape' },
    { id: 'still-life', label: 'still life' },
    { id: 'wedding-and-engagement', label: 'wedding and engagement' },
  ];

  const content = {
    'landscape': (
      <>
        <center><h3 className="designTitle">landscape</h3></center>
        <br />
        <div id="designCont1">
          <div id="leftPhoto">
            <img src={acadia1} alt="acadia" />
            <img src={grassHouse} alt="house in grass" />
            <img src={acadia2} alt="acadia" />
          </div>
          <div id="rightPhoto">
            <img src={acadia3} alt="acadia" />
            <img src={mountains} alt="mountains" />
            <img src={arizonaFire} alt="arizona fire" />
          </div>
        </div>
      </>
    ),
    'still-life': (
      <>
        <center><h3 className="designTitle">still life</h3></center>
        <br />
        <div id="designCont1">
          <div id="leftPhoto">
            <img src={seagull} alt="seagull at acadia" />
            <img src={chipmunk} alt="chipmunk" />
            <img src={bird} alt="bird" />
            <img src={rainbowShadow} alt="rainbow shadow" />
          </div>
          <div id="rightPhoto">
            <img src={seaLions} alt="sea lions" />
            <img src={flowersWater} alt="flowers and water" />
            <img src={deer} alt="deer drinking water" />
            <img src={treesGreen} alt="tree" />
            <img src={benchLeaves} alt="autumn bench" />
            <img src={catWhiskers} alt="cat whiskers" />
          </div>
        </div>
      </>
    ),
    'wedding-and-engagement': (
      <>
        <center><h3 className="designTitle">wedding and engagement</h3></center>
        <br />
        <div id="designCont1">
          <div id="leftPhoto">
            <img src={engagement1} alt="engagement photo" />
            <img src={engagement2} alt="engagement photo" />
            <img src={engagement3} alt="engagement photo" />
          </div>
          <div id="rightPhoto">
            <img src={engagement4} alt="engagement photo" />
            <img src={engagement5} alt="engagement photo" />
            <img src={engagement6} alt="engagement photo" />
          </div>
        </div>
      </>
    ),
  }
  
  return (
    <TabbedSidebar
      tabs={tabs}
      defaultTab="landscape"
      content={content}
    />
  );
};

export default Photography;

