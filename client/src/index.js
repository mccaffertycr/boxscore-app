import React from 'react';
import ReactDOM from 'react-dom';

import { GlobalStyle } from './styles';
import Boxscore from './Boxscore';

ReactDOM.render(
  <>
    <Boxscore league="mlb" />
    <Boxscore league="nba" />
    <GlobalStyle />
  </>,
  document.getElementById('root')
);
