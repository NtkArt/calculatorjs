export const checkLastAction: any = (expression: any) => {
  const actions = /[+/\-x*.]$/;

  return actions.test(expression);
};

export const checkZeroDigit: any = (expression: any) => expression === '0';

export const isDot: any = (expression: any) => expression === '.';

export const isNumber: any = (value: any) => {
  const numbers = /[0-9]/;

  return numbers.test(value);
};
