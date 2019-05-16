import React from 'react';
import {
  BoxscoreContainer,
  BoxscoreRow,
  BoxscoreHeaderRow,
  BoxscoreTeamInfoRow,
  BoxscoreCell,
} from './styles';

const Boxscore = props => {
  // MLB Boxscore
  if (props.mlbData) {
    const headerRowValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'R', 'H', 'E'];
    const {
      event_information,
      away_team,
      away_period_scores,
      away_batter_totals,
      away_errors,
      home_team,
      home_period_scores,
      home_batter_totals,
      home_errors,
    } = props.mlbData;

    if (away_team) {
      return (
        <BoxscoreContainer>
          {/* Header Row */}
          <BoxscoreHeaderRow>
            <BoxscoreCell topLeft />
            {headerRowValues.map((val, i) =>
              i === headerRowValues.length - 1 ? (
                <BoxscoreCell key={i} topRight>
                  {val}
                </BoxscoreCell>
              ) : (
                <BoxscoreCell key={i}>{val}</BoxscoreCell>
              )
            )}
          </BoxscoreHeaderRow>
          {/* Away Team Row*/}
          <BoxscoreRow>
            <BoxscoreCell>{away_team.abbreviation}</BoxscoreCell>
            {away_period_scores.map((val, i) => (
              <BoxscoreCell key={i}>{val}</BoxscoreCell>
            ))}
            <BoxscoreCell>{away_batter_totals.hits}</BoxscoreCell>
            <BoxscoreCell>{away_batter_totals.rbi}</BoxscoreCell>
            <BoxscoreCell>{away_errors}</BoxscoreCell>
          </BoxscoreRow>
          {/* Home Team Row*/}
          <BoxscoreRow>
            <BoxscoreCell>{home_team.abbreviation}</BoxscoreCell>
            {home_period_scores.map((val, i) => (
              <BoxscoreCell key={i}>{val}</BoxscoreCell>
            ))}
            <BoxscoreCell>{home_batter_totals.hits}</BoxscoreCell>
            <BoxscoreCell>{home_batter_totals.rbi}</BoxscoreCell>
            <BoxscoreCell>{home_errors}</BoxscoreCell>
          </BoxscoreRow>
          <BoxscoreTeamInfoRow>
            <BoxscoreCell away btmLeft>
              {away_team.last_name}
            </BoxscoreCell>
            {/* place for inning info if game isn't completed */}
            <BoxscoreCell>
              {event_information.status === 'completed' ? 'FINAL' : ''}
            </BoxscoreCell>
            <BoxscoreCell home btmRight>
              {home_team.last_name}
            </BoxscoreCell>
          </BoxscoreTeamInfoRow>
        </BoxscoreContainer>
      );
    }
  }
  // NBA Boxscore
  if (props.nbaData) {
    const headerRowValues = [1, 2, 3, 4, 'T'];
    const {
      event_information,
      away_team,
      away_period_scores,
      away_totals,
      home_team,
      home_period_scores,
      home_totals,
    } = props.nbaData;

    if (away_team) {
      return (
        <BoxscoreContainer>
          {/* Header Row */}
          <BoxscoreHeaderRow nba>
            <BoxscoreCell topLeft />
            {headerRowValues.map((val, i) =>
              i === headerRowValues.length - 1 ? (
                <BoxscoreCell key={i} topRight>
                  {val}
                </BoxscoreCell>
              ) : (
                <BoxscoreCell key={i}>{val}</BoxscoreCell>
              )
            )}
          </BoxscoreHeaderRow>
          {/* Away Team Row */}
          <BoxscoreRow nba>
            <BoxscoreCell>{away_team.abbreviation}</BoxscoreCell>
            {away_period_scores.map((val, i) => (
              <BoxscoreCell key={i}>{val}</BoxscoreCell>
            ))}
            <BoxscoreCell>{away_totals.points}</BoxscoreCell>
          </BoxscoreRow>
          {/* Home Team Row */}
          <BoxscoreRow nba>
            <BoxscoreCell>{home_team.abbreviation}</BoxscoreCell>
            {home_period_scores.map((val, i) => (
              <BoxscoreCell key={i}>{val}</BoxscoreCell>
            ))}
            <BoxscoreCell>{home_totals.points}</BoxscoreCell>
          </BoxscoreRow>
          <BoxscoreTeamInfoRow>
            <BoxscoreCell away btmLeft>
              {away_team.last_name}
            </BoxscoreCell>
            <BoxscoreCell>
              {event_information.status === 'completed' ? 'FINAL' : ''}
            </BoxscoreCell>
            <BoxscoreCell home btmRight>
              {home_team.last_name}
            </BoxscoreCell>
          </BoxscoreTeamInfoRow>
        </BoxscoreContainer>
      );
    }
  }
  return null;
};

export default Boxscore;
