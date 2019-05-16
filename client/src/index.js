import React from 'react';
import ReactDOM from 'react-dom';

import { GlobalStyle } from './styles';
import Boxscore from './Boxscore';
import BoxscoreData from './BoxscoreData';

const BoxscoreWithData = BoxscoreData(Boxscore);

ReactDOM.render(
  <>
    <BoxscoreWithData league="MLB" />
    <BoxscoreWithData league="NBA" />
    <GlobalStyle />
  </>,
  document.getElementById('root')
);
