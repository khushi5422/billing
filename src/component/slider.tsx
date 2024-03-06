import React, { useState } from 'react';
import TabContent from './TabContent';

const Slider: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(1);

  const handleTabClick = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-4 w-100">
          <div className="slider-tabs">
            <div className={`tab ${activeTab === 1 ? 'active' : ''}`} onClick={() => handleTabClick(1)}>New Order</div>
            <div className={`tab ${activeTab === 2 ? 'active' : ''}`} onClick={() => handleTabClick(2)}>Delivered Order</div>
            <div className={`tab ${activeTab === 3 ? 'active' : ''}`} onClick={() => handleTabClick(3)}>Todays Orders</div>
          </div>
        </div>
        <div className="col-8 w-100">
          <TabContent activeTab={activeTab} />
        </div>
      </div>
    </div>
  );
};

export default Slider;
