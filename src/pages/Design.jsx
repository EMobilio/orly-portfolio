import TabbedSidebar from '../components/TabbedSidebar';

// Digital Drawing Images
import bloomingHands from '../assets/images/digital-drawing/Blooming Hands.jpg';
import digitalPolish from '../assets/images/digital-drawing/Digital Polish Bright.jpg';
import retroEyes from '../assets/images/digital-drawing/Retro Eyes.png';
import curlyHair from '../assets/images/digital-drawing/Mobilio_Curly Haired Dailies-04.png';
import lastHostage from '../assets/images/digital-drawing/Until the Last Hostage.png';
import meafelaLora from '../assets/images/digital-drawing/Mobilio_Orly_ MeAfela L’Ora_8x10.png';

// Logos and Marketing Images
import dotVintageLogo from '../assets/images/logos-and-marketing/dot vintage logo.png';
import ciaLogo from '../assets/images/logos-and-marketing/CIA Logo v4.png';
import feilersJerky from '../assets/images/logos-and-marketing/Feiler\'s Jerky Logo.png';
import striveSports from '../assets/images/logos-and-marketing/Strive Sports Logo_No Border.png';
import btMedical from '../assets/images/logos-and-marketing/BT Medical Innovations_Logo.png';
import raeLogo from '../assets/images/logos-and-marketing/RAE_Logo.png';
import noJewishVictimsLogo from '../assets/images/logos-and-marketing/No_More_Jewish_Victims_logo.png';
import alumniNewsletter from '../assets/images/logos-and-marketing/Alumni_Newsletter_Cover.png';
import yachadLogo from '../assets/images/logos-and-marketing/together we will win_final blue-01.png';

// Digital Design Images
import hockeyGraphic from '../assets/images/digital-design/The Pound_CT Ice Festival UConn Mens Hockey.png';
import dermatologyAd from '../assets/images/digital-design/Dermatology Authority_Full Page Ad.png';
import musicMonday from '../assets/images/digital-design/The Pound_Music Monday 2-3-20.png';
import learningRx from '../assets/images/digital-design/Older Adults_LearningRx Flyer.jpg';
// import earthDay from '../assets/images/digital-design/Dot Vintage Earth Day Facts_day 2-01.png';
// import fifty from '../assets/images/digital-design/Shira_50_v3.png';
import treeGraphic from "../assets/images/digital-design/Tree_of_Life_Donor_Campaign_v5.png";
import awardFlyer from "../assets/images/digital-design/Eva_and_Arie_Halpern_Merit_Award.png";
import thanksgivingResults from "../assets/images/digital-design/Thanksgiving Results One Sheet.png";

// Painting Images
import susak from '../assets/images/paintings/Susak painting.jpg';
import dandelion from '../assets/images/paintings/Acadia Dandelion painting.jpg';
import cliffs from '../assets/images/paintings/Ireland Cliffs painting.jpg';
import ftf from '../assets/images/paintings/FTF painting.jpg';
import berryBush from '../assets/images/paintings/Berry Bush painting.jpg';
import water from '../assets/images/paintings/Acadia Water painting.jpg';
import fallenTree from '../assets/images/paintings/Acadia Fallen Tree painting.jpg';
import beachTrees from '../assets/images/paintings/Acadia Beach Trees painting.jpg';
import fireDove from '../assets/images/paintings/Fire_Dove.png';
import forLighting from '../assets/images/paintings/For_the_Lightning.png';
import forOceans from '../assets/images/paintings/For_the_Oceans.png';
import forRainbows from '../assets/images/paintings/For_the_Rainbows.png';
import home11x17 from '../assets/images/paintings/Home_11x17.png';
import omerAdam from '../assets/images/paintings/Omer_Adam_Tribute.png';
import onePeople from '../assets/images/paintings/One_People.png';
import oriDanino from '../assets/images/paintings/Ori_Danino_ZL.png';
import yasmineMohammed from '../assets/images/paintings/Yasmine_Mohammed_Tribute.png';
import notAlone from '../assets/images/paintings/You_Are_Not_Alone.png';
import miaSchem from '../assets/images/paintings/Zioness_Mia_Schem_v2.png';
import utmmt from '../assets/images/paintings/UTMMT edited.png';

// Traditional Drawing Images
import rockingHorse from '../assets/images/traditional-drawing/Rocking Horse.jpg';
import polarity from '../assets/images/traditional-drawing/Polarity.jpg';
// import iphone from '../assets/images/traditional-drawing/iPhone.jpg';
import bicycle from '../assets/images/traditional-drawing/Bicycle Sketch.jpg';
// import doorHandle from '../assets/images/traditional-drawing/Door Handle.jpg';
import edwina from '../assets/images/traditional-drawing/Edwina.jpg';

// // 3D Art Images
// import teacup from '../../img/portfolio-art/Teacup view 1 Final.png';
// import waterLilies from '../../img/portfolio-art/Water Lilies 4.png';
// import catDiner from '../../img/portfolio-art/Mobilio_Cat Retro Diner Scene View 1.png';
// import raccoon1 from '../../img/portfolio-art/Mobilio_Trenchcoat Raccoon 1.png';
// import raccoonHead from '../../img/portfolio-art/Raccoon Head.jpg';
// import psychedelic from '../../img/portfolio-art/Psychedelic Sketch Toon view 1.png';
// import alienBotany from '../../img/portfolio-art/Alien Botany still GI.png';
// import radAnt from '../../img/portfolio-art/Rad Ant view 1.jpg';
// import raccoon5 from '../../img/portfolio-art/Mobilio_Trenchcoat Raccoon 5.png';

const Design = () => {
  const tabs = [
    { id: 'digital-design', label: 'digital design' },
    { id: 'logos-and-marketing', label: 'logos and marketing' },
    { id: 'painting', label: 'painting' },
    { id: 'digital-drawing', label: 'digital drawing' },
    { id: 'traditional-drawing', label: 'traditional drawing' },
    // { id: 'home-series', label: '"home" series' },
    //{ id: '3d-art', label: '3D art' }
  ];

  const content = {
    'digital-design': (
      <>
        <center><h3 className="designTitle">digital design</h3></center>
        <br />
        <div id="designCont4">
          <div id="leftArt">
            <img src={treeGraphic} alt="tree campaign graphic" />
            <img src={dermatologyAd} alt="full page ad" />
            <img src={hockeyGraphic} alt="men's hockey graphic" />
            <img src={thanksgivingResults} alt="thanksgiving results flyer" />
          </div>
          <div id="rightArt">
            <img src={musicMonday} alt="music monday graphic" />
            <img src={learningRx} alt="learning rx flyer" />
            <img src={awardFlyer} alt="award fliyer" />
          </div>
        </div>
      </>
    ),
    'logos-and-marketing': (
      <>
        <center><h3 className="designTitle">logos and marketing</h3></center>
        <br />
        <div id="designCont3">
          <div id="leftArt">
            <img src={dotVintageLogo} alt="dot vintage logo" />
            <img src={ciaLogo} alt="careers in aesthetics logo" />
            <img src={raeLogo} alt="RAE logo" />
            <img src={noJewishVictimsLogo} alt="No More Jewish Victims logo" />
            <img src={yachadLogo} alt="together we will win logo" />
          </div>
          <div id="rightArt">
            <img src={feilersJerky} alt="feiler's jerky logo" />
            <img src={striveSports} alt="strive sports logo" />
            <img src={btMedical} alt="BT Medical Innovations logo" />
            <img src={alumniNewsletter} alt="alumni newsletter cover" />
          </div>
        </div>
      </>
    ),
    'painting': (
      <>
        <center><h3 className="designTitle">painting</h3></center>
        <br />
        <div id="designCont5">
          <div id="leftArt">
            <img src={susak} alt="susak painting" />
            <img src={dandelion} alt="dandelion painting" />
            <img src={cliffs} alt="ireland cliffs painting" />
            <img src={ftf} alt="ftf painting" />
            <img src={fireDove} alt="fire dove painting" />
            <img src={forOceans} alt="for oceans painting" />
            <img src={onePeople} alt="one people painting" />
            <img src={miaSchem} alt="Mia Schem painting" />
          </div>
          <div id="rightArt">
            <img src={berryBush} alt="berry bush painting" />
            <img src={water} alt="acadia water painting" />
            <img src={fallenTree} alt="fallen tree painting" />
            <img src={beachTrees} alt="beach trees painting" />
            <img src={forLighting} alt="for lightning painting" />
            <img src={forRainbows} alt="for rainbows painting" />
            <img src={notAlone} alt="you are not alone painting" />
            <img src={utmmt} alt="mishmish tree painting" />
          </div>
        </div>
      </>
    ),
    'digital-drawing': (
      <>
        <center><h3 className="designTitle">digital drawing</h3></center>
        <br />
        <div id="designCont1">
          <div id="leftArt">
            <img src={omerAdam} alt="Omer Adam drawing" />
            <img src={bloomingHands} alt="colorful hands drawing" />
            <img src={digitalPolish} alt="nail polish drawing" />
            <img src={lastHostage} alt="until the last hostage drawing" />
            <img src={home11x17} alt="home drawing" />
          </div>
          <div id="rightArt">
            <img src={retroEyes} alt="comic eyes" />
            <img src={curlyHair} alt="hair design" />
            <img src={yasmineMohammed} alt="Yasmine Mohammed drawing" />
            <img src={meafelaLora} alt="meAfela L'Ora drawing" />
            <img src={oriDanino} alt="Ori Danino drawing" />
          </div>
        </div>
      </>
    ),
    'traditional-drawing': (
      <>
        <center><h3 className="designTitle">traditional drawing</h3></center>
        <br />
        <div id="designCont5">
          <div id="leftArt">
            <img src={rockingHorse} alt="rocking horse drawing" />
            <img src={polarity} alt="water droplets drawing" />
          </div>
          <div id="rightArt">
            <img src={bicycle} alt="bicycle drawing" />
            <img src={edwina} alt="cat drawing" />
          </div>
        </div>
      </>
    ),
    // '3d-art': (
    //   <>
    //     <center><h3 className="designTitle">3D art</h3></center>
    //     <br />
    //     <div id="designCont2">
    //       <div id="leftArt">
    //         <img src={teacup} alt="floral teacup" />
    //         <img src={waterLilies} alt="water lilies 3d" />
    //         <img src={catDiner} alt="cat in a diner" />
    //         <img src={raccoon1} alt="figure in a trenchcoat" />
    //         <img src={raccoonHead} alt="raccoon" />
    //       </div>
    //       <div id="rightArt">
    //         <img src={psychedelic} alt="psychedelic 3d art" />
    //         <img src={alienBotany} alt="alien botany 3d art" />
    //         <img src={radAnt} alt="3d ant" />
    //         <img src={raccoon5} alt="raccoon" />
    //       </div>
    //     </div>
    //   </>
    // )
  };

  return (
    <TabbedSidebar 
      tabs={tabs} 
      defaultTab="digital-design"
      content={content}
    />
  );
};

export default Design;

