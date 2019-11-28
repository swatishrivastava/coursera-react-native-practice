import React, { Component } from 'react';
import {View, Text} from 'react-native'; 
import { Movies } from '../shared/Moview';
import  MovieComponent  from './MovieComponent';

export default class MainComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: Movies,
        }
    }

    render() {
    
        return (<MovieComponent movies={this.state.movies}></MovieComponent>);
    }
}