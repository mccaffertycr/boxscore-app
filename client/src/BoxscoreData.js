import React, { Component } from 'react';

export default function BoxscoreData(WrappedComponent) {
  return class extends Component {
    state = {
      mlbData: {},
      nbaData: {},
      mlbIntervalId: null,
      nbaIntervalId: null,
    };

    componentDidMount() {
      const { league } = this.props;
      if (league === 'MLB') {
        this.fetchMLBData();
        this.setState({
          mlbIntervalId: setInterval(() => this.fetchMLBData(), 15000),
        });
      }
      if (league === 'NBA') {
        this.fetchNBAData();
        this.setState({
          nbaIntervalId: setInterval(() => this.fetchNBAData(), 15000),
        });
      }
    }

    componentWillUnmount() {
      clearInterval(this.state.mlbIntervalId);
      clearInterval(this.state.nbaIntervalId);
    }

    fetchMLBData() {
      fetch('/api/games/mlb').then(response => {
        if (!response.ok) throw new Error(response.statusText);
        return response.json().then(data => {
          this.setState({ mlbData: data.data });
        });
      });
    }

    fetchNBAData() {
      fetch('/api/games/nba').then(response => {
        if (!response.ok) throw new Error(response.statusText);
        return response.json().then(data => {
          this.setState({ nbaData: data.data });
        });
      });
    }

    render() {
      return <WrappedComponent {...this.state} />;
    }
  };
}
