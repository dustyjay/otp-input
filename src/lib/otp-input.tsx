import React, { FC, FormEvent, useEffect, useRef, useState } from "react";
import { OtpInputType } from "./types";

const OtpInput: FC<OtpInputType> = ({
  onComplete,
  onInput,
  numberOfInputs,
  wrapperClass,
  wrapperStyle,
  inputClass,
  inputStyle,
}) => {
  const inputRefs = Array.from({ length: numberOfInputs }, () =>
    useRef<HTMLInputElement>(null)
  );

  const [otp, setOtp] = useState(
    Array.from({ length: numberOfInputs }, () => "")
  );

  const [activeIndex, setActiveIndex] = useState(0);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.code === "ArrowRight") {
      moveToNextInput();
    } else if (e.code === "ArrowLeft") {
      moveToPreviousInput();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex]);

  useEffect(() => {
    const isComplete = otp.every((val) => val !== "");
    if (isComplete) onComplete?.(otp.join(""));
    else onComplete?.("");
    onInput?.(otp.join(""));
  }, [otp]);

  const updateOTP = (e: FormEvent<HTMLInputElement>, index: number) => {
    const value = (e.target as HTMLInputElement).value;
    const newChar = value.split("").pop() || "";
    const newArr = [...otp];
    newArr[index] = newChar;
    setOtp(newArr);
    if (newChar) moveToNextInput();
    else moveToPreviousInput();
  };

  const moveToNextInput = () => {
    if (activeIndex + 1 === numberOfInputs) return;
    const input = inputRefs[activeIndex + 1];
    input.current?.focus();
  };

  const moveToPreviousInput = () => {
    if (activeIndex === 0) return;
    const input = inputRefs[activeIndex - 1];
    input.current?.focus();
  };

  return (
    <div style={wrapperStyle} className={wrapperClass}>
      {otp.map((value, index) => (
        <input
          key={index}
          style={inputStyle}
          className={inputClass}
          type="number"
          ref={inputRefs[index]}
          value={value}
          onInput={(val) => updateOTP(val, index)}
          onFocus={() => setActiveIndex(index)}
        />
      ))}
    </div>
  );
};

export default OtpInput;
