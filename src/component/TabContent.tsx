import React from 'react';
import CardList from './CardList';

interface TabContentProps {
  activeTab: number;
}

const TabContent: React.FC<TabContentProps> = ({ activeTab }) => {
  const orderItems = [
    { name: 'Burger', quantity: 1 },
    { name: 'Fries', quantity: 1 },
    { name: 'Coke', quantity: 1 },
  ];
  const orderItems22 = [
    { name: '222Burger', quantity: 2 },
    { name: '222Fries', quantity: 2 },
    { name: '222Coke', quantity: 2 },
  ];
  const orderItems33 = [
    { name: '33Burger', quantity: 3 },
    { name: '33Fries', quantity: 3 },
    { name: '33Coke', quantity: 3 },
  ];


  return (
    <div className="tab-content">
      {activeTab === 1 && <CardList tableNumber ={1}  customerName = "vidhi"  phoneNumber = "9999999999" orderItems = {orderItems} />}
      {activeTab === 2 && <CardList tableNumber ={2}  customerName = "khushi"  phoneNumber = "2222222222" orderItems = {orderItems22} />}
      {activeTab === 3 && <CardList tableNumber ={3}  customerName = "nitya"  phoneNumber = "3333333333" orderItems = {orderItems33} />}
    </div>
  );
};

export default TabContent;
