import { useState } from 'react';

const TabbedSidebar = ({ tabs, defaultTab, content, containerId = 'designPageContainer', sidebarId = 'designSidebar' }) => {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);

  const handleClick = (id) => {
    setActiveTab(id);
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
  };

  return (
    <div id={containerId}>
      <aside id={sidebarId}>
        <ul id="designTabs">
          {tabs.map((tab) => (
            <li key={tab.id}>
              <button
                className={`designTab ${activeTab === tab.id ? 'active' : ''}`}
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

