import React, { Component } from "react";
import * as Tab from "./style";
import Repo from "../../components/Repo";

const TabTitle = ({ title, number }) => {
    return (
        <Tab.TitleDiv>
            <Tab.Title>{title}</Tab.Title>
            <Tab.Amt>{number}</Tab.Amt>
        </Tab.TitleDiv>
    );
};

export default class TabSection extends Component {
    render() {
        const { repNum, starNum, followers, following } = this.props;

        return (
            <Tab.Container>
                <Tab.Nav>
                    <TabTitle title="Repositories" number={repNum} />
                    <TabTitle title="Stars" number={starNum} />
                    <TabTitle title="Followers" number={followers} />
                    <TabTitle title="Following" number={following} />
                </Tab.Nav>
                <Tab.Content>
                    <Repo />
                </Tab.Content>
            </Tab.Container>
        );
    }
}

TabSection.defaultProps = {
    repNum: 0,
    starNum: 0,
    followers: 0,
    following: 0
};
