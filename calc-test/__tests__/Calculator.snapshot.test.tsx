import React from 'react';
import Calculator from '../src/components/Calculator';
import { render } from '@testing-library/react-native';

test('snapshot Calculator', () => {
 const tree = render(<Calculator />).toJSON();
 expect(tree).toMatchSnapshot();
});