import React from "react";
import { Switch, Route } from "react-router-dom";
import { Helmet } from 'react-helmet'
import Home from "./Pages/Home";
import "./App.css";
import Search from "./Pages/Search";
import NavBar from "./containers/Navbar";

class App extends React.Component {
    state = {
        userData: {},
        searchData: {},
        loading: false
    };

    getUserData = data => {
        this.setState({
            userData: { ...data }
        });
    };

    getSearchData = data => {
        this.setState({
            searchData: { ...data }
        });
    };
    loadingOn = () => {
        this.setState({
            loading: true
        });
    };
    loadingOff = () => {
        this.setState({
            loading: false
        });
    };

    render() {
        const { userData, searchData, loading } = this.state;
        const { history } = this.props;
        return (
            <div className="App">
                <Helmet>
                    <title>Fiber Test</title>
                    <link
                        rel="stylesheet"
                        href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
                        integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
                        crossorigin="anonymous"
                    />
                </Helmet>
                <NavBar
                    searchAction={this.getSearchData}
                    userAction={this.getUserData}
                    history={history}
                    loadingOn={this.loadingOn}
                    loadingOff={this.loadingOff}
                />
                <Switch>
                    <Route
                        exact
                        path="/"
                        render={props => (
                            <Home
                                userData={userData}
                                history={history}
                                loading={loading}
                                {...props}
                            />
                        )}
                    />
                    <Route
                        exact
                        path="/search"
                        render={props => (
                            <Search
                                searchData={searchData}
                                loading={loading}
                                history={history}
                                {...props}
                            />
                        )}
                    />
                </Switch>
            </div>
        );
    }
}

export default App;
