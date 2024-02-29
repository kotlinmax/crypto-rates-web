import React, {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/rates');
  }, []);

  return <div>HomePage</div>;
};

export default HomePage;
