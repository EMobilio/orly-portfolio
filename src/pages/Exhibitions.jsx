// Using placeholder images from photography for now - these should be replaced with actual exhibition images
import acadia1 from '../assets/images/photography/landscape/DSC_0373 edited.png';
import grassHouse from '../assets/images/photography/landscape/Poland Grass House.jpg';
import acadia3 from '../assets/images/photography/landscape/DSC_0309 copy.png';
import mountains from '../assets/images/photography/landscape/Mountains Israel.jpg';

const Exhibitions = () => {
  return (
    <>
      <div id="workContainer">
        <center><h3 className="designTitle">stars in the arts: chai exhibition</h3></center>
        <br />
        <div id="designCont1">
          <div id="leftPhoto">
            <img src={acadia1} alt="exhibition image" />
            <img src={grassHouse} alt="exhibition image" />
          </div>
          <div id="rightPhoto">
            <img src={acadia3} alt="exhibition image" />
            <img src={mountains} alt="exhibition image" />
          </div>
        </div>

        <br />
        <center><h3 className="designTitle">stars in the arts: resilience exhibition</h3></center>
        <br />
        <div id="designCont1">
          <div id="leftPhoto">
            <img src={acadia1} alt="exhibition image" />
            <img src={grassHouse} alt="exhibition image" />
          </div>
          <div id="rightPhoto">
            <img src={acadia3} alt="exhibition image" />
            <img src={mountains} alt="exhibition image" />
          </div>
        </div>

        <br />
        <center><h3 className="designTitle">the bushnell 90th anniversary animation showcase</h3></center>
      </div>
    </>
  );
};

export default Exhibitions;

