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
        const { data } = this.props;

        return (
            <Search.Container>
                <Search.Nav>
                    <Search.Num>{data.total_count} users</Search.Num>
                </Search.Nav>
                <Search.Content>
                    {!!data.items && data.items.map(( item, i) => {
                        return (
                            <UserCard
                                avatar={item.avatar_url}
                                user={item.login}
                                link={item.html_url}
                                key={i}
                            />
                        );
                    })}
                </Search.Content>
            </Search.Container>
        );
    }
}

SearchSection.defaultProps = {
    resNum: 0
};
