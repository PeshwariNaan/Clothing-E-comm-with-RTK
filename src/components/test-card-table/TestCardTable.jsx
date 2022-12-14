import React from 'react';
import { StyledTableDiv } from './testCardTable.styles';

const TestCardTable = () => {
  return (
    <StyledTableDiv>
      <h2>Test credit cards</h2>
      <table>
        <thead>
          <tr>
            <th>
              <h2>CARD NUMBER</h2>
            </th>
            <th>
              <h2>CVC</h2>
            </th>
            <th>
              <h2>DATE</h2>
            </th>
            <th>
              <h2>ZIP CODE</h2>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>4242 4242 4242 4242</th>
            <th>123</th>
            <th>01/25</th>
            <th>12345</th>
          </tr>
          <tr>
            <th>5555 5555 5555 4444</th>
            <th>123</th>
            <th>01/25</th>
            <th>12345</th>
          </tr>
        </tbody>
      </table>
    </StyledTableDiv>
  );
};

export default TestCardTable;
