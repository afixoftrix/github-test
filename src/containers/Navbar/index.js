import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from "react-router";
import * as Nav from './style'
import Icon from './Icon';
import Search from './Search'
import { searchUsers } from '../../api/search';

class NavBar extends Component {
    state = {
        search: '',
        searchResult: {},
        loading: false,
        error: ""
    }

    handleChange = e => {
        this.setState({
            search: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const { search } = this.state
        this.props.loadingOn()
        searchUsers(search).then(res => {
            console.log(res.data);
            this.setState({ searchResult: {...res.data}});
            this.props.searchAction(res.data)
            this.props.loadingOff();
            this.props.history.push("/search")
        }).catch( err => {
            this.setState({ error: err })
        })
        this.props.history.push("/search");
    }
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
                    <form onSubmit={this.handleSubmit} >
                        <Search onChange={this.handleChange} />
                    </form>
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

export default withRouter(NavBar)