import styled from 'styled-components'

export const Container = styled.div`
    padding: 1.6rem;
    background-color: ${ props => props.theme.navbarBG };
    color: ${ props => props.theme.white };
    display: flex;
    justify-content: space-between;
`;

export const Left = styled.div`
    display: flex;
    justify-content: space-between;

    div {
        margin-right: 1.6rem;
    }
`
export const LinkContainer = styled.div`
    margin-top: 6px;
    display: flex;
    justify-content: space-between;
`
export const Link = styled.div`
    font-weight: 600;
`
export const Right = styled.div`
    display: flex;
    justify-content: space-between;
`