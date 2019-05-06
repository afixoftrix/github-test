import React from "react";
import styled from "styled-components";

const Container = styled.div`
    border-radius: 3px;
    background-color: ${props => props.theme.inputBG};
    color: ${props => props.theme.white};
    height: 2.8rem;
    margin-top: 3px;
`;

const Input = styled.input`
    border: none;
    outline: none;
    background: none;
    font-size: 1.4rem;
    padding: 0 8px;
    min-height: 28px;
    border-radius: 3px;
    width: 26rem;
    line-height: 20px;
    transition: width 0.5s ease;
    color: rgba(255,255,255,0.25);

    :focus {
        width: 30rem
        background-color: ${props => props.theme.white};
        color: ${props => props.theme.black};
    }
`;

const Slash = styled.div`
    display: ${props => (props.show ? "inline-block" : "none")};
    padding: 2px 6px;
    border: 0.5px solid ${props => props.theme.white};
    border-radius: 3px;
    opacity: 0.5;
    margin-right: 1rem !important;
    line-height: 14px;
    font-size: 1.2rem;
    margin-bottom: -1px;
    transform: translateY(-1.6px);
`;

class Search extends React.Component {
    state = {
        showSlash: true
    };

    handleFocus = e => {
        console.log("focus has triggered");
        this.setState({
            showSlash: false
        });
    };
    handleBlur = e => {
        console.log("Blur has triggered");
        this.setState({
            showSlash: true
        });
    };

    render() {
        const { showSlash } = this.state;
        const { onChange } = this.props;
        return (
            <Container>
                <Input
                    name="search"
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}
                    placeholder="Search or jump to…"
                    onChange={ onChange }
                />
                <Slash show={showSlash}>/</Slash>
            </Container>
        );
    }
}

export default Search;
