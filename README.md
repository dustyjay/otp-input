# Otp Input

A light-weight package to display otp inputs with the option of customizing the input to suit your project designs. The package does not contain any styling which leaves that power in your hands.

## Installation

```
Using npm
$ npm install @dustyjay/otp-input
```

```
Using yarn
$ yarn add @dustyjay/otp-input
```

## Usage

```
import { OtpInput } from "@dustyjay/otp-input"

<OtpInput
  numberOfInputs={5}
  onComplete={(value) => console.log('Completed OTP is', value)}
/>
```

## Props

| Name           | Type                  | Description                                            |
| :------------- | :-------------------- | :----------------------------------------------------- |
| numberOfInputs | _number_              | The number of otp inputs to be displayed. **Required** |
| inputStyle     | _React.CSSProperties_ | Styling properties for all input boxes. _Optional_     |
| inputClass     | _string_              | Class name(s) for all input boxes. _Optional_          |
| wrapperStyle   | _React.CSSProperties_ | Styling properties for input wrapper. _Optional_       |
| wrapperClass   | _string_              | Class name(s) for input wrapper. _Optional_            |

## Events

| Name       | Description                                                                                                               |
| :--------- | :------------------------------------------------------------------------------------------------------------------------ |
| onInput    | The callback is triggered as user inputs any character. arg contains the current characters. _Optional_                   |
| onComplete | The callback is triggered when all inputs are completely filled. arg contains the complete characters entered. _Optional_ |

## [NPM Package](https://www.npmjs.com/package/@dustyjay/otp-input)

GitHub Repo: [https://github.com/dustyjay/otp-input](https://github.com/dustyjay/otp-input)
