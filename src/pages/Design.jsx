import TabbedSidebar from '../components/TabbedSidebar';

const Design = () => {
  const tabs = [
    { id: 'digital-design', label: 'digital design' },
    { id: 'logos-and-marketing', label: 'logos and marketing' },
    { id: 'painting', label: 'painting' },
    { id: 'digital-drawing', label: 'digital drawing' },
    { id: 'traditional-drawing', label: 'traditional drawing' },
    // { id: 'home-series', label: '"home" series' },
  ];

  const content = {
    'digital-design': (
      <>
        <center><h3 className="designTitle">digital design</h3></center>
        <br />
        <div id="designCont4">
          <div id="leftArt">
            <img src="/images/digital-design/Tree_of_Life_Donor_Campaign_v5.png" alt="tree campaign graphic" loading="lazy" />
            <img src="/images/digital-design/Dermatology Authority_Full Page Ad.png" alt="full page ad" loading="lazy" />
            <img src="/images/digital-design/The Pound_CT Ice Festival UConn Mens Hockey.png" alt="men's hockey graphic" loading="lazy" />
            <img src="/images/digital-design/Thanksgiving Results One Sheet.png" alt="thanksgiving results flyer" loading="lazy" />
          </div>
          <div id="rightArt">
            <img src="/images/digital-design/The Pound_Music Monday 2-3-20.png" alt="music monday graphic" loading="lazy" />
            <img src="/images/digital-design/Older Adults_LearningRx Flyer.jpg" alt="learning rx flyer" loading="lazy" />
            <img src="/images/digital-design/Eva_and_Arie_Halpern_Merit_Award.png" alt="award fliyer" loading="lazy" />
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
            <img src="/images/logos-and-marketing/dot vintage logo.png" alt="dot vintage logo" loading="lazy" />
            <img src="/images/logos-and-marketing/CIA Logo v4.png" alt="careers in aesthetics logo" loading="lazy" />
            <img src="/images/logos-and-marketing/RAE_Logo.png" alt="RAE logo" loading="lazy" />
            <img src="/images/logos-and-marketing/No_More_Jewish_Victims_logo.png" alt="No More Jewish Victims logo" loading="lazy" />
            <img src="/images/logos-and-marketing/together we will win_final blue-01.png" alt="together we will win logo" loading="lazy" />
          </div>
          <div id="rightArt">
            <img src="/images/logos-and-marketing/Feiler's Jerky Logo.png" alt="feiler's jerky logo" loading="lazy" />
            <img src="/images/logos-and-marketing/Strive Sports Logo_No Border.png" alt="strive sports logo" loading="lazy" />
            <img src="/images/logos-and-marketing/BT Medical Innovations_Logo.png" alt="BT Medical Innovations logo" loading="lazy" />
            <img src="/images/logos-and-marketing/Alumni_Newsletter_Cover.png" alt="alumni newsletter cover" loading="lazy" />
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
            <img src="/images/paintings/Susak painting.jpg" alt="susak painting" loading="lazy" />
            <img src="/images/paintings/Acadia Dandelion painting.jpg" alt="dandelion painting" loading="lazy" />
            <img src="/images/paintings/Ireland Cliffs painting.jpg" alt="ireland cliffs painting" loading="lazy" />
            <img src="/images/paintings/FTF painting.jpg" alt="ftf painting" loading="lazy" />
            <img src="/images/paintings/Fire_Dove.png" alt="fire dove painting" loading="lazy" />
            <img src="/images/paintings/For_the_Oceans.png" alt="for oceans painting" loading="lazy" />
            <img src="/images/paintings/One_People.png" alt="one people painting" loading="lazy" />
            <img src="/images/paintings/UTMMT edited.png" alt="mishmish tree painting" loading="lazy" />
          </div>
          <div id="rightArt">
            <img src="/images/paintings/Berry Bush painting.jpg" alt="berry bush painting" loading="lazy" />
            <img src="/images/paintings/Acadia Water painting.jpg" alt="acadia water painting" loading="lazy" />
            <img src="/images/paintings/Acadia Fallen Tree painting.jpg" alt="fallen tree painting" loading="lazy" />
            <img src="/images/paintings/Acadia Beach Trees painting.jpg" alt="beach trees painting" loading="lazy" />
            <img src="/images/paintings/For_the_Lightning.png" alt="for lightning painting" loading="lazy" />
            <img src="/images/paintings/For_the_Rainbows.png" alt="for rainbows painting" loading="lazy" />
            <img src="/images/paintings/You_Are_Not_Alone.png" alt="you are not alone painting" loading="lazy" />
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
            <img src="images/digital-drawing/Omer_Adam_Tribute.png" alt="Omer Adam drawing" loading="lazy" />
            <img src="/images/digital-drawing/Blooming Hands.jpg" alt="colorful hands drawing" loading="lazy" />
            <img src="/images/digital-drawing/Digital Polish Bright.jpg" alt="nail polish drawing" loading="lazy" />
            <img src="/images/digital-drawing/Until the Last Hostage.png" alt="until the last hostage drawing" loading="lazy" />
            <img src='/images/digital-drawing/Home_11x17.png' alt="home drawing" loading="lazy" />
            <img src="/images/digital-drawing/Zioness_Mia_Schem_v2.png" alt="Mia Schem drawing" loading="lazy" />
          </div>
          <div id="rightArt">
            <img src="/images/digital-drawing/Retro Eyes.png" alt="comic eyes" loading="lazy" />
            <img src="/images/digital-drawing/Mobilio_Curly Haired Dailies-04.png" alt="hair design" loading="lazy" />
            <img src="/images/digital-drawing/Yasmine_Mohammed_Tribute.png" alt="Yasmine Mohammed drawing" loading="lazy" />
            <img src="/images/digital-drawing/Mobilio_Orly_ MeAfela L’Ora_8x10.png" alt="meAfela L'Ora drawing" loading="lazy" />
            <img src="/images/digital-drawing/Ori_Danino_ZL.png" alt="Ori Danino drawing" loading="lazy" />
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
            <img src="/images/traditional-drawing/Rocking Horse.jpg" alt="rocking horse drawing" loading="lazy" />
            <img src="/images/traditional-drawing/Polarity.jpg" alt="water droplets drawing" loading="lazy" />
          </div>
          <div id="rightArt">
            <img src="/images/traditional-drawing/Bicycle Sketch.jpg" alt="bicycle drawing" loading="lazy" />
            <img src="/images/traditional-drawing/Edwina.jpg" alt="cat drawing" loading="lazy" />
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

