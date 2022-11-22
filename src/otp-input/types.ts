export type OtpInputType = {
  wrapperClass?: string;
  wrapperStyle?: React.CSSProperties;
  inputClass?: string;
  inputStyle?: React.CSSProperties;
  numberOfInputs: number;
  onOtpComplete: (input: string) => void;
  onInput?: (input: string) => void;
};
