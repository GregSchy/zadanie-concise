import React, { useState } from "react";

const NewCardForm = ({ onSubmit }) => {
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [ccv, setCcv] = useState("");
  const [cardType, setCardType] = useState("");

  const handleCardNumberChange = (e) => {
    const cardNumber = e.target.value;
    setCardNumber(cardNumber);

    // detect card type based on the first digit of the card number
    if (cardNumber.length >= 1) {
      const firstDigit = parseInt(cardNumber.charAt(0));
      if (firstDigit === 4) {
        setCardType("visa");
      } else if (firstDigit === 5) {
        setCardType("mastercard");
      } else {
        setCardType("");
      }
    } else {
      setCardType("");
    }
  };

  const handleCardHolderChange = (e) => {
    setCardHolder(e.target.value);
  };

  const handleExpiryDateChange = (e) => {
    setExpiryDate(e.target.value);
  };

  const handleCcvChange = (e) => {
    setCcv(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // validate the form data
    if (!cardNumber || !cardHolder || !expiryDate || !ccv) {
      alert("Please fill in all the fields");
      return;
    }

    if (!/^\d{3}$/.test(ccv)) {
      alert("Please enter a valid CCV code");
      return;
    }

    if (!/^\d{4}-\d{2}$/.test(expiryDate)) {
      alert("Please enter a valid expiry date (YYYY-MM)");
      return;
    }

    onSubmit({
      cardNumber,
      cardHolder,
      expiryDate,
      ccv,
      cardType,
    });

    setCardNumber("");
    setCardHolder("");
    setExpiryDate("");
    setCcv("");
    setCardType("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="cardNumber">Card Number</label>
        <input
          type="text"
          id="cardNumber"
          value={cardNumber}
          onChange={handleCardNumberChange}
          maxLength={16}
          required
        />
        {cardType === "visa" && <img src="visa.png" alt="Visa" />}
        {cardType === "mastercard" && (
          <img src="mastercard.png" alt="Mastercard" />
        )}
      </div>
      <div>
        <label htmlFor="cardHolder">Cardholder Name</label>
        <input
          type="text"
          id="cardHolder"
          value={cardHolder}
          onChange={handleCardHolderChange}
          required
        />
      </div>
      <div>
        <label htmlFor="expiryDate">Expiry Date</label>
        <input
          type="text"
          id="expiryDate"
          value={expiryDate}
          onChange={handleExpiryDateChange}
          maxLength={7}
          placeholder="YYYY-MM"
          required
        />
      </div>
      <div>
        <label htmlFor="ccv">CCV</label>
        <input
          type="text"
          id="ccv"
          value={ccv}
          onChange={handleCcvChange}
          maxLength={3}
          required
        />
      </div>
      <button type="submit">Add Card</button>
    </form>
  );
};

export default NewCardForm;
