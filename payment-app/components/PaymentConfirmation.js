import React from "react";

const PaymentConfirmation = ({ cardType, cardNumber, totalAmount }) => {
  const maskCardNumber = (cardNumber) => {
    // mask all but the last 4 digits of the card number
    const visibleDigits = 4;
    const maskedNumber = cardNumber
      .slice(-visibleDigits)
      .padStart(cardNumber.length, "•");
    return maskedNumber;
  };

  return (
    <div>
      <h2>Payment Confirmation</h2>
      <p>Thank you for your purchase!</p>
      <p>You have been charged {totalAmount}.</p>
      <p>
        The payment was made using a {cardType} card with the following number:
      </p>
      <p>**** **** **** {maskCardNumber(cardNumber)}</p>
    </div>
  );
};

export default PaymentConfirmation;
