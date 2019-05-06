import React, { Component } from "react";
import * as Search from "./style";
import UserCard from "../../components/UserCard";

// const TabTitle = ({ title, number }) => {
//     return (
//         <Tab.TitleDiv>
//             <Tab.Title>{title}</Tab.Title>
//             <Tab.Amt>{number}</Tab.Amt>
//         </Tab.TitleDiv>
//     );
// };

export default class SearchSection extends Component {
    render() {
        const { resNum } = this.props;

        return (
            <Search.Container>
                <Search.Nav>
                    <Search.Num>{resNum} users</Search.Num>
                </Search.Nav>
                <Search.Content>
                    <UserCard />
                </Search.Content>
            </Search.Container>
        );
    }
}

SearchSection.defaultProps = {
    resNum: 0
};
