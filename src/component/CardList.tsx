import React from 'react';

interface Props {
  tableNumber: number;
  customerName: string;
  phoneNumber: string;
  orderItems: { name: string; quantity : number}[];
}

class BillCard extends React.Component<Props> {

  render() {
    const { tableNumber, customerName, phoneNumber, orderItems } = this.props;

    return (
      <>
      <style>{`
      .bill-card {
        display: flex;
        flex-direction: column;
        border: 1px solid #ccc;
        padding: 16px;
        margin-bottom: 16px;
      }
      
      .bill-card-header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 16px;
      }
      
      .bill-card-body {
        display: flex;
        height: 115px;
      }
      
      .order-item-column {
        display: flex;
        flex-direction: column;
        width: 50%;
      }
      
      .order-item-column-header {
        font-weight: bold;
        margin-bottom: 8px;
      }
      
      .order-item-name {
        margin-bottom: 8px;
      }
      
      .order-item-price {
        margin-bottom: 8px;
      }
      `}</style>
      <div className="bill-card">
        <div className="bill-card-header">
          <div>
            Table {tableNumber} - {customerName} - {phoneNumber}
          </div>
        </div>
        <div className="bill-card-body">
          <div className="order-item-column">
            <div className="order-item-column-header">Item</div>
            {orderItems.map((item, index) => (
              <div key={index} className="order-item-name">
                {item.quantity} x {item.name}
              </div>
            ))}
          </div>
        </div>
      </div>
      </>
    );
  }
}

export default BillCard;