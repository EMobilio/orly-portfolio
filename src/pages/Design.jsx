import { useState } from 'react';
import ImageModal from '../components/ImageModal';
import TabbedSidebar from '../components/TabbedSidebar/TabbedSidebar';

const Design = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentCategory, setCurrentCategory] = useState('');

  const tabs = [
    { id: 'digital-design', label: 'digital design' },
    { id: 'logos-and-marketing', label: 'logos and marketing' },
    { id: 'painting', label: 'painting' },
    { id: 'digital-drawing', label: 'digital drawing' },
    { id: 'traditional-drawing', label: 'traditional drawing' },
    // { id: 'home-series', label: '"home" series' },
  ];

  // Image data with info
  const images = {
    'digital-design': [
      { src: "/images/digital-design/Tree_of_Life_Donor_Campaign_v5.png", alt: "tree campaign graphic", title: "Tree of Life Donor Campaign", description: "Campaign graphic design" },
      { src: "/images/digital-design/Dermatology Authority_Full Page Ad.png", alt: "full page ad", title: "Dermatology Authority Ad", description: "Full page advertisement" },
      { src: "/images/digital-design/The Pound_CT Ice Festival UConn Mens Hockey.png", alt: "men's hockey graphic", title: "UConn Men's Hockey Promo", description: "CT Ice Festival promotion" },
      { src: "/images/digital-design/Thanksgiving Results One Sheet.png", alt: "thanksgiving results flyer", title: "Thanksgiving Results", description: "One sheet flyer design" },
      { src: "/images/digital-design/The Pound_Music Monday 2-3-20.png", alt: "music monday graphic", title: "Music Monday", description: "Event promotion graphic" },
      { src: "/images/digital-design/Older Adults_LearningRx Flyer.jpg", alt: "learning rx flyer", title: "LearningRx Flyer", description: "Educational program flyer" },
      { src: "/images/digital-design/Eva_and_Arie_Halpern_Merit_Award.png", alt: "award flyer", title: "Halpern Merit Award", description: "Award announcement design" },
    ],
    'logos-and-marketing': [
      { src: "/images/logos-and-marketing/dot vintage logo.png", alt: "dot vintage logo", title: "Dot Vintage Logo", description: "Brand identity design" },
      { src: "/images/logos-and-marketing/CIA Logo v4.png", alt: "careers in aesthetics logo", title: "Careers in Aesthetics", description: "Logo design" },
      { src: "/images/logos-and-marketing/RAE_Logo.png", alt: "RAE logo", title: "RAE Logo", description: "Brand identity" },
      { src: "/images/logos-and-marketing/No_More_Jewish_Victims_logo.png", alt: "No More Jewish Victims logo", title: "No More Jewish Victims", description: "Advocacy campaign logo" },
      { src: "/images/logos-and-marketing/together we will win_final blue-01.png", alt: "together we will win logo", title: "Together We Will Win", description: "Campaign branding" },
      { src: "/images/logos-and-marketing/Feiler's Jerky Logo.png", alt: "feiler's jerky logo", title: "Feiler's Jerky", description: "Product logo design" },
      { src: "/images/logos-and-marketing/Strive Sports Logo_No Border.png", alt: "strive sports logo", title: "Strive Sports", description: "Sports brand logo" },
      { src: "/images/logos-and-marketing/BT Medical Innovations_Logo.png", alt: "BT Medical Innovations logo", title: "BT Medical Innovations", description: "Medical tech branding" },
      { src: "/images/logos-and-marketing/Alumni_Newsletter_Cover.png", alt: "alumni newsletter cover", title: "Alumni Newsletter", description: "Publication cover design" },
    ],
    'painting': [
      { src: "/images/paintings/Susak painting.jpg", alt: "susak painting", title: "Susak", description: "Acrylic painting" },
      { src: "/images/paintings/Acadia Dandelion painting.jpg", alt: "dandelion painting", title: "Acadia Dandelion", description: "Nature study" },
      { src: "/images/paintings/Ireland Cliffs painting.jpg", alt: "ireland cliffs painting", title: "Ireland Cliffs", description: "Landscape painting" },
      { src: "/images/paintings/FTF painting.jpg", alt: "ftf painting", title: "FTF", description: "Abstract work" },
      { src: "/images/paintings/Fire_Dove.png", alt: "fire dove painting", title: "Fire Dove", description: "Symbolic artwork" },
      { src: "/images/paintings/For_the_Oceans.png", alt: "for oceans painting", title: "For the Oceans", description: "Environmental series" },
      { src: "/images/paintings/One_People.png", alt: "one people painting", title: "One People", description: "Unity themed work" },
      { src: "/images/paintings/UTMMT edited.png", alt: "mishmish tree painting", title: "Under the Mishmish Tree", description: "Narrative painting" },
      { src: "/images/paintings/Berry Bush painting.jpg", alt: "berry bush painting", title: "Berry Bush", description: "Botanical study" },
      { src: "/images/paintings/Acadia Water painting.jpg", alt: "acadia water painting", title: "Acadia Water", description: "Waterscape" },
      { src: "/images/paintings/Acadia Fallen Tree painting.jpg", alt: "fallen tree painting", title: "Acadia Fallen Tree", description: "Nature detail" },
      { src: "/images/paintings/Acadia Beach Trees painting.jpg", alt: "beach trees painting", title: "Acadia Beach Trees", description: "Coastal landscape" },
      { src: "/images/paintings/For_the_Lightning.png", alt: "for lightning painting", title: "For the Lightning", description: "Environmental series" },
      { src: "/images/paintings/For_the_Rainbows.png", alt: "for rainbows painting", title: "For the Rainbows", description: "Environmental series" },
      { src: "/images/paintings/You_Are_Not_Alone.png", alt: "you are not alone painting", title: "You Are Not Alone", description: "Message piece" },
    ],
    'digital-drawing': [
      { src: "/images/digital-drawing/Omer_Adam_Tribute.png", alt: "Omer Adam drawing", title: "Omer Adam Tribute", description: "Portrait illustration" },
      { src: "/images/digital-drawing/Blooming Hands.jpg", alt: "colorful hands drawing", title: "Blooming Hands", description: "Digital illustration" },
      { src: "/images/digital-drawing/Digital Polish Bright.jpg", alt: "nail polish drawing", title: "Digital Polish", description: "Product illustration" },
      { src: "/images/digital-drawing/Until the Last Hostage.png", alt: "until the last hostage drawing", title: "Until the Last Hostage", description: "Advocacy artwork" },
      { src: "/images/digital-drawing/Home_11x17.png", alt: "home drawing", title: "Home", description: "Conceptual piece" },
      { src: "/images/digital-drawing/Zioness_Mia_Schem_v2.webp", alt: "Mia Schem drawing", title: "Mia Schem", description: "Portrait tribute" },
      { src: "/images/digital-drawing/Retro Eyes.png", alt: "comic eyes", title: "Retro Eyes", description: "Pop art style" },
      { src: "/images/digital-drawing/Mobilio_Curly Haired Dailies-04.png", alt: "hair design", title: "Curly Haired Dailies", description: "Character design" },
      { src: "/images/digital-drawing/Yasmine_Mohammed_Tribute.png", alt: "Yasmine Mohammed drawing", title: "Yasmine Mohammed Tribute", description: "Portrait illustration" },
      { src: "/images/digital-drawing/Mobilio_Orly_ MeAfela L’Ora_8x10.png", alt: "meAfela L'Ora drawing", title: "Me'Afela L'Ora", description: "Typography art" },
      { src: "/images/digital-drawing/Ori_Danino_ZL.png", alt: "Ori Danino drawing", title: "Ori Danino Z\"L", description: "Memorial tribute" },
    ],
    'traditional-drawing': [
      { src: "/images/traditional-drawing/Rocking Horse.jpg", alt: "rocking horse drawing", title: "Rocking Horse", description: "Pencil drawing" },
      { src: "/images/traditional-drawing/Polarity.jpg", alt: "water droplets drawing", title: "Polarity", description: "Technical drawing" },
      { src: "/images/traditional-drawing/Bicycle Sketch.jpg", alt: "bicycle drawing", title: "Bicycle Sketch", description: "Observational drawing" },
      { src: "/images/traditional-drawing/Edwina.jpg", alt: "cat drawing", title: "Edwina", description: "Pet portrait" },
    ],
  };

  const renderImages = (category, imageList) => {
    const midpoint = Math.ceil(imageList.length / 2);
    const leftImages = imageList.slice(0, midpoint);
    const rightImages = imageList.slice(midpoint);

    return (
      <div id="designCont">
        <div id="leftArt">
          {leftImages.map((img, index) => (
            <div key={index} className="art" onClick={() => handleImageClick(category, index)}>
              <img src={img.src} alt={img.alt} loading="lazy" style={{ cursor: 'pointer' }} />
            </div>
          ))}
        </div>
        <div id="rightArt">
          {rightImages.map((img, index) => (
            <div key={index + midpoint} className="art" onClick={() => handleImageClick(category, index + midpoint)}>
              <img src={img.src} alt={img.alt} loading="lazy" style={{ cursor: 'pointer' }} />
            </div>
          ))}
        </div>
      </div>
    );
  };

  const content = {
    'digital-design': (
      <>
        <center><h3 className="designTitle">digital design</h3></center>
        <br />
        {renderImages('digital-design', images['digital-design'])}
      </>
    ),
    'logos-and-marketing': (
      <>
        <center><h3 className="designTitle">logos and marketing</h3></center>
        <br />
        {renderImages('logos-and-marketing', images['logos-and-marketing'])}
      </>
    ),
    'painting': (
      <>
        <center><h3 className="designTitle">painting</h3></center>
        <br />
        {renderImages('painting', images['painting'])}
      </>
    ),
    'digital-drawing': (
      <>
        <center><h3 className="designTitle">digital drawing</h3></center>
        <br />
        {renderImages('digital-drawing', images['digital-drawing'])}
      </>
    ),
    'traditional-drawing': (
      <>
        <center><h3 className="designTitle">traditional drawing</h3></center>
        <br />
        {renderImages('traditional-drawing', images['traditional-drawing'])}
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
        defaultTab="digital-design"
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

export default Design;

