import React, { useState, useEffect } from 'react';

const useGameData = league => {
  const [gameData, setGameData] = useState(null);
  const [headerRowVals, setHeaderRowVals] = useState([]);
  const [initialRender, setInitialRender] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    let mounted = true;
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const result = await fetch(`/api/games/${league}`);
        const data = await result.json();

        if (data.data.league === 'NBA') setHeaderRowVals([1, 2, 3, 4, 'T']);
        if (data.data.league === 'MLB')
          setHeaderRowVals([1, 2, 3, 4, 5, 6, 7, 8, 9, 'R', 'H', 'E']);
        if (mounted) setGameData(data.data);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };

    if (initialRender) {
      fetchData();
      setInitialRender(false);
    } else {
      let gameDataIntervalId = setInterval(() => fetchData(), 16000);
      const cleanup = () => {
        mounted = false;
        clearInterval(gameDataIntervalId);
      };
      return cleanup;
    }
  }, [league, initialRender]);

  return { gameData, headerRowVals, isLoading, isError };
};

export default useGameData;
