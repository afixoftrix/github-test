import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as Nav from './style'
import Icon from './Icon';
import Search from './Search'

export default class NavBar extends Component {
    render() {
        return (
            <Nav.Container>
                <Nav.Left>
                    <div>
                        <Link to="/">
                            <Icon
                                fill="#fff"
                                svgHT="3.3rem"
                                svgWT="3.3rem"
                            />
                        </Link>
                    </div>
                    <div>
                        <Search />
                    </div>
                    <Nav.LinkContainer>
                        <Nav.Link>
                            <Link to="#">Pull requests</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="#">Issues</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="#">Marketplace</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="#">Explore</Link>
                        </Nav.Link>
                    </Nav.LinkContainer>
                </Nav.Left>
                <Nav.Right>user icons</Nav.Right>
            </Nav.Container>
        );
    }
}
