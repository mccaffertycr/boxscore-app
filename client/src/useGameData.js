import React, { useState, useEffect } from 'react';

const useGameData = league => {
  const [gameData, setGameData] = useState({ data: {} });
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [headerRowVals, setHeaderRowVals] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const result = await fetch(`/api/games/${league}`);
        const data = await result.json();

        if (data.data.league === 'NBA') setHeaderRowVals([1, 2, 3, 4, 'T']);
        if (data.data.league === 'MLB')
          setHeaderRowVals([1, 2, 3, 4, 5, 6, 7, 8, 9, 'R', 'H', 'E']);
        setGameData({ data: data.data });
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
    };
    fetchData();
    // let gameDataIntervalId = setInterval(() => fetchData(), 16000);
    // return () => clearInterval(gameDataIntervalId);
  }, [league]);

  return { gameData, headerRowVals, isLoading, isError };
};

export default useGameData;
