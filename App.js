import React, {Component} from "react";

import { NavigationContainer } from '@react-navigation/native';
import Navigation from './Navigation';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Splash from "./screens/Splash";
import OnBoarding from "./screens/OnBoarding";
import AutoShow from "./screens/AutoShow";
import AboutEvent from "./screens/AboutEvent";
import FloorMap from "./screens/FloorMap";
import PhotoGellery from './screens/PhotoGellery';
import SponsorList from './screens/SponsorList';
import SurveyContest from "./screens/SurveyContest";
import ContactUs from "./screens/ContactUs";



const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Navigation/>
     

    </NavigationContainer>
  );
};

export default App;