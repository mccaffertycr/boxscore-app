import React from 'react';
import useGameData from './useGameData';
import {
  BoxscoreContainer,
  BoxscoreRow,
  BoxscoreHeaderRow,
  BoxscoreTeamInfoRow,
  BoxscoreCell,
} from './styles';

const Boxscore = ({ league }) => {
  const { gameData, headerRowVals } = useGameData(league);

  if (gameData) {
    if (gameData.away_team) {
      const {
        event_information,
        away_team,
        away_period_scores,
        home_team,
        home_period_scores,
      } = gameData;
      return (
        <BoxscoreContainer>
          {/* Header Row */}
          <BoxscoreHeaderRow league={league}>
            <BoxscoreCell topLeft />
            {headerRowVals.map((val, i) =>
              i === headerRowVals.length - 1 ? (
                <BoxscoreCell key={i} topRight>
                  {val}
                </BoxscoreCell>
              ) : (
                <BoxscoreCell key={i}>{val}</BoxscoreCell>
              )
            )}
          </BoxscoreHeaderRow>
          {/* Away Team Row*/}
          <BoxscoreRow league={league}>
            <BoxscoreCell>{away_team.abbreviation}</BoxscoreCell>
            {away_period_scores.map((val, i) => (
              <BoxscoreCell key={i}>{val}</BoxscoreCell>
            ))}
            {gameData.away_batter_totals ? (
              <>
                <BoxscoreCell>{gameData.away_batter_totals.rbi}</BoxscoreCell>
                <BoxscoreCell>{gameData.away_batter_totals.hits}</BoxscoreCell>
                <BoxscoreCell>{gameData.away_errors}</BoxscoreCell>
              </>
            ) : (
              <BoxscoreCell>{gameData.away_totals.points}</BoxscoreCell>
            )}
          </BoxscoreRow>
          {/* Home Team Row*/}
          <BoxscoreRow league={league}>
            <BoxscoreCell>{home_team.abbreviation}</BoxscoreCell>
            {home_period_scores.map((val, i) => (
              <BoxscoreCell key={i}>{val}</BoxscoreCell>
            ))}
            {gameData.away_batter_totals ? (
              <>
                <BoxscoreCell>{gameData.home_batter_totals.rbi}</BoxscoreCell>
                <BoxscoreCell>{gameData.home_batter_totals.hits}</BoxscoreCell>
                <BoxscoreCell>{gameData.home_errors}</BoxscoreCell>
              </>
            ) : (
              <BoxscoreCell>{gameData.home_totals.points}</BoxscoreCell>
            )}
          </BoxscoreRow>
          <BoxscoreTeamInfoRow>
            <BoxscoreCell away btmLeft>
              {away_team.last_name.toUpperCase()}
            </BoxscoreCell>
            {/* place for inning info if game isn't completed */}
            <BoxscoreCell>
              {event_information.status === 'completed' ? 'FINAL' : ''}
            </BoxscoreCell>
            <BoxscoreCell home btmRight>
              {home_team.last_name.toUpperCase()}
            </BoxscoreCell>
          </BoxscoreTeamInfoRow>
        </BoxscoreContainer>
      );
    } else return <h1>loading...</h1>;
  }
  return null;
};

export default Boxscore;
