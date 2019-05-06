import styled from 'styled-components'

export const Container = styled.div`
    padding: 2.4rem 0;    
    border-bottom: 0.5px solid rgba(0,0,0,0.2);
`
export const Title = styled.div`
    font-size: 2rem;
    font-weight: 600;
    color: #0366d6;
    margin-bottom: 1rem;
`
export const Description = styled.div`
    color: ${ props => props.theme.txt };
    margin-bottom: 1rem;
    font-size: 1.4rem;

`
export const Accolades = styled.div`
    display: flex;

    div {
        font-size: 1.3rem;
        margin-right: 2rem;
    }
`