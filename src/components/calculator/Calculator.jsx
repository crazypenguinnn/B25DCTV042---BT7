import { useState } from "react";
import Display from "./Display";
import Button from "./Button";

export default function Calculator() {
  const [expression, setExpression] = useState("");

  const handleButtonClick = (val) => {
    if (val === "Clear") {
      setExpression("");
      return;
    }
    if (val === "Delete") {
      setExpression((prev) => prev.slice(0, -1));
      return;
    }
    if (val === "=") {
      if (!expression) return;
      try {
        const sanitized = expression.replace(/[^0-9+\-*/.]/g, "");
        const result = new Function(`return ${sanitized}`)();
        setExpression(Number.isFinite(result) ? String(result) : "Lỗi");
      } catch (err) {
        setExpression("Lỗi cú pháp");
      }
      return;
    }

    setExpression((prev) => {
      if (prev.includes("Lỗi")) return val;
      return prev + val;
    });
  };

  const primaryGreen = "#4CAF50";

  return (
    <div className="calculator-wrapper">
      <h2 className="section-heading">Bài 1: Virtual Calculator</h2>
      <div className="calculator-box">
        <Display value={expression} />
        <div className="calc-grid">
          <Button label="Clear" color={primaryGreen} onClick={handleButtonClick} />
          <Button label="Delete" color={primaryGreen} onClick={handleButtonClick} />
          <Button label="." color={primaryGreen} onClick={handleButtonClick} />
          <Button label="/" color={primaryGreen} onClick={handleButtonClick} />

          <Button label="7" color={primaryGreen} onClick={handleButtonClick} />
          <Button label="8" color={primaryGreen} onClick={handleButtonClick} />
          <Button label="9" color={primaryGreen} onClick={handleButtonClick} />
          <Button label="*" color={primaryGreen} onClick={handleButtonClick} />

          <Button label="4" color={primaryGreen} onClick={handleButtonClick} />
          <Button label="5" color={primaryGreen} onClick={handleButtonClick} />
          <Button label="6" color={primaryGreen} onClick={handleButtonClick} />
          <Button label="-" color={primaryGreen} onClick={handleButtonClick} />

          <Button label="1" color={primaryGreen} onClick={handleButtonClick} />
          <Button label="2" color={primaryGreen} onClick={handleButtonClick} />
          <Button label="3" color={primaryGreen} onClick={handleButtonClick} />
          <Button label="+" color={primaryGreen} onClick={handleButtonClick} />
        </div>
        <div className="calc-bottom">
          <Button label="0" color={primaryGreen} onClick={handleButtonClick} />
          <Button label="=" color={primaryGreen} onClick={handleButtonClick} />
        </div>
      </div>
    </div>
  );
}