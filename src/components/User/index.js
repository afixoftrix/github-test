import React from "react";
import * as User from "./style";
import default_avatar from "../../assets/images/anon.png";

class UserInfo extends React.Component{
    render(){
        const { avatar, name, persona, links } = this.props
        return (
            <User.Container>
                <User.Avatar src={avatar} alt="profile avatar" />
                <div style={{ padding: "1.6rem 0" }}>
                    <User.Name>{name}</User.Name>
                    <User.Persona>{persona}</User.Persona>
                </div>
                <User.Follow>Follow</User.Follow>
                <User.Report>Block or report user</User.Report>
                <User.BioContainer>
                    <User.Links>{links}</User.Links>
                    <User.Organizations />
                </User.BioContainer>
            </User.Container>
        );
    }
}

UserInfo.defaultProps = {
    avatar: default_avatar,
    name: "Anon",
    persona: "@anon"
};

export default UserInfo;
