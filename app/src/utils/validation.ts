export const checkLastAction: boolean | unknown = (expression: string) => {
  const actions = /[+/\-x*.]$/;

  return actions.test(expression);
};

export const checkZeroDigit: boolean | unknown = (expression: string) => expression === '0';

export const isDot: boolean | unknown = (expression: string) => expression === '.';

export const isNumber: boolean | unknown = (value: string) => {
  const numbers = /[0-9]/;

  return numbers.test(value);
};
