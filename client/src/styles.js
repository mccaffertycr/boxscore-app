import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  }
  #root {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
`;

export const BoxscoreContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr) 3fr;
  width: 660px;
  min-height: 200px;
  border-radius: 5px;
  margin: 0 auto;
  margin-bottom: 1em;
`;

export const BoxscoreRow = styled.div`
  display: grid;
  grid-template-columns: 2fr repeat(${props => (props.nba ? '5' : '12')}, 1fr);
  width: 100%;
  height: 100%;
`;

export const BoxscoreHeaderRow = styled(BoxscoreRow)`
  background: #eee;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

export const BoxscoreTeamInfoRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  height: 100%;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  font-size: 2em;
  font-weight: 500;
`;

export const BoxscoreCell = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100% - 1px);
  height: calc(100% - 1px);
  border: 1px solid #dedede;
  border-top-left-radius: ${props => (props.topLeft ? '5px' : 0)};
  border-top-right-radius: ${props => (props.topRight ? '5px' : 0)};
  border-bottom-left-radius: ${props => (props.btmLeft ? '5px' : 0)};
  border-bottom-right-radius: ${props => (props.btmRight ? '5px' : 0)};
  background: ${props =>
    props.away ? 'midnightblue' : props.home ? 'firebrick' : 'none'};
  color: ${props => (props.away || props.home ? 'white' : 'inherit')};
`;
