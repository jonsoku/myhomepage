import React, { Component } from 'react';
import RenderHeader from '../../components/Header/RenderHeader';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: false
        };
    }

    handleToggle = () => {
        {
            this.state.toggle ? this.setState({ toggle: false }) : this.setState({ toggle: true });
        }
    };

    render() {
        console.log(this.state.toggle);
        const { handleToggle } = this;
        const { toggle } = this.state;
        return (
            <div>
                <RenderHeader handleToggle={handleToggle} toggle={toggle} />
            </div>
        );
    }
}
export default Header;
