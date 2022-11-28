import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import Categories from '../VolunteerCategory/Categories';
import Banner from './Banner';
import Searchbar from './Searchbar';

const Home = () => {
  const {user,logOut,dark,setDark} = useContext(AuthContext)
  useEffect(()=>{
    setDark(true)
  },[dark, setDark])
    return (
        <div>
          <Banner></Banner>
         
          <Categories></Categories>
        </div>
    );
};

export default Home;