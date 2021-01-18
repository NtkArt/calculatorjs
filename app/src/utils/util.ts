import * as Validations from './validation';

export const {
  checkLastAction, checkZeroDigit, isNumber, isDot,
} = Validations;

export const deleteElement: any = (expression: any, quantity: any) => {
  const output = expression.split('');

  if (output.length > 1) {
    return output.slice(0, output.length - quantity).join('');
  }

  return '0';
};

export const changeLastElement:any = (expression: any, value: any, quantity: any) => {
  const modifiedExpression = expression.split('');

  modifiedExpression[expression.length - quantity] = value;

  return modifiedExpression.join('');
};
