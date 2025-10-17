import React from 'react';
import Calculator from '../src/components/Calculator';
import { render, fireEvent } from '@testing-library/react-native';

test('2 + 3 = 5 via UI', () => {
 const { getByTestId, getByText } = render(<Calculator />);
 fireEvent.changeText(getByTestId('input-a'), '2');
 fireEvent.changeText(getByTestId('input-b'), '3');
 fireEvent.press(getByText('+'));
 expect(getByTestId('result')).toHaveTextContent('5');
});