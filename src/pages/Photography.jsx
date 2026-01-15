import { useState } from 'react';
import TabbedSidebar from '../components/TabbedSidebar/TabbedSidebar.jsx';
import ImageModal from '../components/ImageModal/ImageModal.jsx';

const Photography = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentCategory, setCurrentCategory] = useState('');


  const tabs = [
    { id: 'landscape', label: 'landscape' },
    { id: 'still-life', label: 'still life' },
    { id: 'wedding-and-engagement', label: 'wedding and engagement' },
  ];

  const images = {
    'landscape': [
      { src: "/images/photography/landscape/DSC_0373 edited.png", alt: "acadia", title: "", description: "" },
      { src: "/images/photography/landscape/Poland Grass House.jpg", alt: "house in grass", title: "", description: "" },
      { src: "/images/photography/landscape/DSC_0317.png", alt: "acadia", title: "", description: "" },
      { src: "/images/photography/landscape/DSC_0309 copy.png", alt: "acadia", title: "", description: "" },
      { src: "/images/photography/landscape/Mountains Israel.jpg", alt: "mountains", title: "", description: "" },
      { src: "/images/photography/landscape/DSC_0434.JPG", alt: "arizona fire", title: "", description: "" },
    ],
    'still-life': [
      { src: "/images/photography/still-life/Acadian Seagull 1.jpg", alt: "seagull at acadia", title: "", description: "" },
      { src: "/images/photography/still-life/DSC_0215.JPG", alt: "chipmunk", title: "", description: "" },
      { src: "/images/photography/still-life/DSC_0806_cropped.png", alt: "bird", title: "", description: "" },
      { src: "/images/photography/still-life/Rainbow Shadow.jpg", alt: "rainbow shadow", title: "", description: "" },
      { src: "/images/photography/still-life/DSC_0409.png", alt: "sea lions", title: "", description: "" },
      { src: "/images/photography/still-life/Flowers and Water.jpg", alt: "flowers and water", title: "", description: "" },
      { src: "/images/photography/still-life/Deer drinking edited.png", alt: "deer drinking water", title: "", description: "" },
      { src: "/images/photography/still-life/Trees Green.jpg", alt: "tree", title: "", description: "" },
      { src: "/images/photography/still-life/Bench Leaves.jpg", alt: "autumn bench", title: "", description: "" },
      { src: "/images/photography/still-life/Cat Whiskers.jpg", alt: "cat whiskers", title: "", description: "" },
    ],
    'wedding-and-engagement': [
      { src: "/images/photography/portrait/DSC_0205 copy v1.png", alt: "engagement photo", title: "", description: "" },
      { src: "/images/photography/portrait/DSC_0160 copy V1.png", alt: "engagement photo", title: "", description: "" },
      { src: "/images/photography/portrait/DSC_0239 copy v1.png", alt: "engagement photo", title: "", description: "" },
      { src: "/images/photography/portrait/DSC_0206 copy v1.png", alt: "engagement photo", title: "", description: "" },
      { src: "/images/photography/portrait/DSC_0448 copy v1.png", alt: "engagement photo", title: "", description: "" },
      { src: "/images/photography/portrait/DSC_0351-2 copy V1.png", alt: "engagement photo", title: "", description: "" },
    ]
  };

  const renderImages = (category, imageList) => {
    const midpoint = Math.ceil(imageList.length / 2);
    const leftImages = imageList.slice(0, midpoint);
    const rightImages = imageList.slice(midpoint);

    return (
      <div id="designCont">
          <div id="leftPhoto">
            {leftImages.map((img, index) => (
              <div key={index} className="art" onClick={() => handleImageClick(category, index)}>
                <img src={img.src} alt={img.alt} loading="lazy" />
              </div>
            ))}
          </div>
          <div id="rightPhoto">
            {rightImages.map((img, index) => (
              <div key={index} className="art" onClick={() => handleImageClick(category, index)}>
                <img src={img.src} alt={img.alt} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
    );
  }

  const content = {
    'landscape': (
      <>
        <center><h3 className="designTitle">landscape</h3></center>
        <br />
        {renderImages("landscape", images["landscape"])}
      </>
    ),
    'still-life': (
      <>
        <center><h3 className="designTitle">still life</h3></center>
        <br />
        {renderImages("still-life", images["still-life"])}
      </>
    ),
    'wedding-and-engagement': (
      <>
        <center><h3 className="designTitle">wedding and engagement</h3></center>
        <br />
        {renderImages("wedding-and-engagement", images["wedding-and-engagement"])}
      </>
    ),
  };

  const handleImageClick = (category, index) => {
    setCurrentCategory(category);
    setCurrentImageIndex(index);
    setModalOpen(true);
  };

  const handleNext = () => {
    const categoryImages = images[currentCategory];
    setCurrentImageIndex((prev) => (prev + 1) % categoryImages.length);
  };

  const handlePrev = () => {
    const categoryImages = images[currentCategory];
    setCurrentImageIndex((prev) => (prev - 1 + categoryImages.length) % categoryImages.length);
  };
  
  return (
    <>
      <TabbedSidebar
        tabs={tabs}
        defaultTab="landscape"
        content={content}
      />
      {modalOpen && (
        <ImageModal 
          image={images[currentCategory][currentImageIndex]}
          onClose={() => setModalOpen(false)}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
    </>
  );
};

export default Photography;

