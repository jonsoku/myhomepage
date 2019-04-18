import React, { Component } from 'react';
import { RenderHeader, RenderLogo, RenderHambuger } from './Header/index';
import styled from 'styled-components';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: false,
            show: false
        };
    }

    handleToggle = () => {
        {
            this.state.toggle
                ? this.setState({
                      toggle: false
                  })
                : this.setState({ toggle: true });
        }
        console.log(this.state.toggle);
    };

    _scroll = () => {
        const scrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
        const scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
        const clientHeight = document.documentElement.clientHeight;
        {
            (scrollTop / scrollHeight) * 100 > 5.7
                ? this.setState({
                      show: true
                  })
                : this.setState({
                      show: false
                  });
        }
        console.log((scrollTop / scrollHeight) * 100);
    };

    componentDidMount() {
        window.addEventListener('scroll', this._scroll, true);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this._scroll, false);
    }

    render() {
        const { handleToggle } = this;
        const { toggle, show } = this.state;
        console.log(this.state.show);
        return (
            <div>
                <RenderLogo />
                <RenderHambuger handleToggle={handleToggle} toggle={toggle} show={show} />
                <RenderHeader />
            </div>
        );
    }
}
