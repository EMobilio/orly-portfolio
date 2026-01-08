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
            <img src="/images/photography/landscape/DSC_0373 edited.png" alt="acadia" loading="lazy" />
            <img src="/images/photography/landscape/Poland Grass House.jpg" alt="house in grass" loading="lazy" />
            <img src="/images/photography/landscape/DSC_0317.png" alt="acadia" loading="lazy" />
          </div>
          <div id="rightPhoto">
            <img src="/images/photography/landscape/DSC_0309 copy.png" alt="acadia" loading="lazy" />
            <img src="/images/photography/landscape/Mountains Israel.jpg" alt="mountains" loading="lazy" />
            <img src="/images/photography/landscape/DSC_0434.JPG" alt="arizona fire" loading="lazy" />
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
            <img src="/images/photography/still-life/Acadian Seagull 1.jpg" alt="seagull at acadia" loading="lazy" />
            <img src="/images/photography/still-life/DSC_0215.JPG" alt="chipmunk" loading="lazy" />
            <img src="/images/photography/still-life/DSC_0806_cropped.png" alt="bird" loading="lazy" />
            <img src="/images/photography/still-life/Rainbow Shadow.jpg" alt="rainbow shadow" loading="lazy" />
          </div>
          <div id="rightPhoto">
            <img src="/images/photography/still-life/DSC_0409.png" alt="sea lions" loading="lazy" />
            <img src="/images/photography/still-life/Flowers and Water.jpg" alt="flowers and water" loading="lazy" />
            <img src="/images/photography/still-life/Deer drinking edited.png" alt="deer drinking water" loading="lazy" />
            <img src="/images/photography/still-life/Trees Green.jpg" alt="tree" loading="lazy" />
            <img src="/images/photography/still-life/Bench Leaves.jpg" alt="autumn bench" loading="lazy" />
            <img src="/images/photography/still-life/Cat Whiskers.jpg" alt="cat whiskers" loading="lazy" />
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
            <img src="/images/photography/portrait/DSC_0205 copy v1.png" alt="engagement photo" loading="lazy" />
            <img src="/images/photography/portrait/DSC_0160 copy V1.png" alt="engagement photo" loading="lazy" />
            <img src="/images/photography/portrait/DSC_0239 copy v1.png" alt="engagement photo" loading="lazy" />
          </div>
          <div id="rightPhoto">
            <img src="/images/photography/portrait/DSC_0206 copy v1.png" alt="engagement photo" loading="lazy" />
            <img src="/images/photography/portrait/DSC_0448 copy v1.png" alt="engagement photo" loading="lazy" />
            <img src="/images/photography/portrait/DSC_0351-2 copy V1.png" alt="engagement photo" loading="lazy" />
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

