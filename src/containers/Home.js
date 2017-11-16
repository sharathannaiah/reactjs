import React, {Component, PropTypes } from 'react';
import styled from 'styled-components';
import container from '../themes/container';

const Image = styled.img `
width: 25%;
background-color: black;
`;

const Para = styled.p `

font-size: 20px;
`;

export default class Home extends Component {



	static PropTypes = {};

	render() {
     return (
     	<container>
     	<h1>
     	Home 
     	</h1>
          <Image src = {require('../assets/giphy.gif')} alt="but"/>
          <Para class ="blue" >
          asdasudhasl aiusdas dosaid asdiosa da sdoasid asd aiosdas diasda
          asdasasd adasda asdasd asdasd ddadjioads a djas dansdadkjlaj ashdusah
          asdasudhasl aiusdas dosaid asdiosa da sdoasid asd aiosdas diasda
          asdasasd adasda asdasd asdasd ddadjioads a djas dansdadkjlaj ashdusah >
          </Para>

     	</container>
     	);
	}
}