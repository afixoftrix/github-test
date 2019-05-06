import React, { Component } from "react";
import * as Layout from "../../theme/ui-template";
import SearchSection from "../../containers/Search";
import SideSearch from "../../components/SideSearch";

export default class Search extends Component {
    render() {
        const { searchData, loading } = this.props
        return (
            <Layout.Container>
                {loading && <div>LOADING.. </div>}
                <Layout.Left>
                    <SideSearch num={searchData.total_count} />
                </Layout.Left>
                <Layout.Right>
                    <SearchSection data={searchData} />
                </Layout.Right>
            </Layout.Container>
        );
    }
}
