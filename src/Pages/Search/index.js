import React, { Component } from "react";
import * as Layout from "../../theme/ui-template";
import SearchSection from "../../containers/Search";
import SideSearch from "../../components/SideSearch";

export default class Home extends Component {
    render() {
        return (
            <Layout.Container>
                <Layout.Left>
                    <SideSearch />
                </Layout.Left>
                <Layout.Right>
                    <SearchSection />
                </Layout.Right>
            </Layout.Container>
        );
    }
}
