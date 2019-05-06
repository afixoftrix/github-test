import React, { Component } from 'react'
import * as Layout from '../../theme/ui-template'
import UserInfo from '../../components/User';
import TabSection from '../../containers/Tabs';

export default class Home extends Component {
    render() {
        return (
            <Layout.Container>
                <Layout.Left>
                    <UserInfo />
                </Layout.Left>
                <Layout.Right>
                    <TabSection />
                </Layout.Right>
            </Layout.Container>
        )
    }
}
