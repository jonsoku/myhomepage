import React, { Component } from 'react';
import { RenderHeader, RenderLogo, RenderHambuger } from './Header/index';
import styled from 'styled-components';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: false
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

    render() {
        const { handleToggle } = this;
        const { toggle } = this.state;
        return (
            <div>
                <RenderLogo />
                <RenderHambuger handleToggle={handleToggle} toggle={toggle} />
                <RenderHeader />
            </div>
        );
    }
}
