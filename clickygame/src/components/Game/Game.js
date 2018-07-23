import React, { Component } from 'react';
import Nav from '../Nav';
import Header from '../Header';
import Footer from '../Footer';
import Container from '../Container';
import ClickItem from '../ClickItem';
import data from '../../data.json';

class Game extends Component {
    state = {
        data,
        score: 0,
        highScore: 0
    };

    componentDidMount() {
        this.setState({ data: this.shuffleData(this.state.data) });
    }

}