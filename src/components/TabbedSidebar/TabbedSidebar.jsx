import { useState } from 'react';
import './TabbedSidebar.css';

const TabbedSidebar = ({ tabs, defaultTab, content }) => {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);

  const handleClick = (id) => {
    setActiveTab(id);
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
  };

  return (
    <div id="workPageContainer">
      <aside id="portfolioSidebar">
        <ul id="sidebarTabs">
          {tabs.map((tab) => (
            <li key={tab.id}>
              <button
                className={`sidebarTab ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => handleClick(tab.id)}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>
      </aside>

      <div id="workContainer">
        {content[activeTab]}
        <br />
      </div>
    </div>
  );
};

export default TabbedSidebar;

