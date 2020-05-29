// == Import npm
import React, { useState } from 'react';
import axios from 'axios';

// == Import
import SearchBar from 'src/components/SearchBar';
import Text from 'src/components/Text';
import ReposResults from 'src/components/ReposResults';
import ThemeButton from 'src/components/ThemeButton';


import githublogo from 'src/assets/images/logo-github.png';
import dataRepos from 'src/data/repos';
import AppStyled from './AppStyled';


// == Composant
const App = () => {
  const [repos, setRepos] = useState(dataRepos);
  const [inputValue, setInputValue] = useState('');
  const [themeValue, setThemeValue] = useState(false);

  const fetchSearch = () => {
    axios.get(`https://api.github.com/search/repositories?q=${inputValue}`)
      .then((response) => {
        setRepos(response.data);
        setInputValue('');
      })
      .catch((error) => {
        console.error('error', error);
      });
  };

  const reposCounter = () => repos.items.length;

  const handleChangeTheme = () => {
    const changeBool = () => {
      if (themeValue === false) {
        return true;
      }
      return false;
    };
    setThemeValue(changeBool());
  };

  return (
    <AppStyled>
      <div className="container">
        <header>
          <img src={githublogo} alt="logo git hub" className="githublogo" />
        </header>
        <SearchBar
          value={inputValue}
          changeValue={setInputValue}
          fetchSearch={fetchSearch}
          themeValue={themeValue}
        />
        <Text reposCounter={reposCounter()} />
        <ReposResults items={repos.items} />
      </div>
    </AppStyled>
  );
};

// == Export
export default App;
