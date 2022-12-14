export type OtpInputType = {
  wrapperClass?: string;
  wrapperStyle?: React.CSSProperties;
  inputClass?: string;
  inputStyle?: React.CSSProperties;
  numberOfInputs: number;
  onComplete: (input: string) => void;
  onInput?: (input: string) => void;
};
