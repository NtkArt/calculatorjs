export const checkLastAction: boolean | unknown | any = (expression: string) => {
  const actions = /[+/\-x*.]$/;

  return actions.test(expression);
};

export const checkZeroDigit: boolean | unknown | any = (expression: string) => expression === '0';

export const isDot: boolean | unknown | any = (expression: string) => expression === '.';

export const isNumber: boolean | unknown | any = (value: string) => {
  const numbers = /[0-9]/;

  return numbers.test(value);
};
