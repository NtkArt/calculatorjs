import React, { useState } from 'react';
import { Button, Container, Title, CalcScreen, Wrapper, Layer } from './styles';
import {
  changeLastElement,
  checkLastAction,
  checkZeroDigit,
  deleteElement,
  isDot,
  isNumber,
} from '../../utils/util';

const Calculator: React.FC = () => {
  const [result, setResult] = useState('0');
  const [count, setCount] = useState(0);
  function calculate(e: any) {
    e.persist();
    const { value } = e.target;

    switch (value) {
      case 'AC':
        resetAction();
        break;
      case '=':
        equalAction();
        break;
      default:
        othersActions(value);
        break;
    }
  }

  function othersActions(value: any) {
    if (checkLastAction(value)) {
      if (isDot(value)) {
        setCount(counter => counter + 1);

        if (count < 1) {
          setResult(res => res + value);
        }
      } else {
        setCount(0);

        if (checkLastAction(result)) {
          if (value === '-' && result[result.length - 1] !== value) {
            setResult(res => res + value);
          } else if (
            value !== '-' &&
            result[result.length - 1] === '-' &&
            !isNumber(result[result.length - 2])
          ) {
            setResult(res => deleteElement(res, 2));
            setResult(res => res + value);
          } else if (value !== '-') {
            setResult(res => changeLastElement(res, value, 1));
          }
        } else {
          setResult(res => res + value);
        }
      }
    } else if (checkZeroDigit(result)) {
      setResult(value);
    } else {
      setResult(res => res + value);
    }
  }
  function equalAction() {
    if (checkLastAction(result)) {
      setResult(res => deleteElement(res, 1));
    } else {
      setResult(res => eval(res).toString());

      if (eval(result) % 1 === 0) {
        setCount(0);
      }
    }
  }

  function resetAction() {
    setResult('0');
    setCount(0);
  }

  return (
    <>
      <Container>
        <Wrapper>
          <Layer>
            <Title>CalculatorJS</Title>
          </Layer>
        </Wrapper>
        <Wrapper>
          <CalcScreen value={result} />
          <Button value="AC" id="clear" onClick={calculate}>
            AC
          </Button>
          <Button value="/" id="divide" onClick={calculate}>
            /
          </Button>
          <Button value="*" id="multiply" onClick={calculate}>
            *
          </Button>
          <Button value="+" id="add" onClick={calculate}>
            +
          </Button>
          <Button value="7" id="seven" onClick={calculate}>
            7
          </Button>
          <Button value="8" id="eight" onClick={calculate}>
            8
          </Button>
          <Button value="9" id="nine" onClick={calculate}>
            9
          </Button>
          <Button value="-" id="subtract" onClick={calculate}>
            -
          </Button>
          <Button value="4" id="four" onClick={calculate}>
            4
          </Button>
          <Button value="5" id="five" onClick={calculate}>
            5
          </Button>
          <Button value="6" id="six" onClick={calculate}>
            6
          </Button>
          <Button value="." id="decimal" onClick={calculate}>
            .
          </Button>
          <Button value="1" id="one" onClick={calculate}>
            1
          </Button>
          <Button value="2" id="two" onClick={calculate}>
            2
          </Button>
          <Button value="3" id="three" onClick={calculate}>
            3
          </Button>
          <Button value="=" id="equals" onClick={calculate}>
            =
          </Button>
          <Button value="0" id="zero" onClick={calculate}>
            0
          </Button>
        </Wrapper>
      </Container>
    </>
  );
};

export default Calculator;
