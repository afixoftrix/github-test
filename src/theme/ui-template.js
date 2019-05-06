import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    grid-template-columns: auto 230px 45% auto;
    grid-column-gap: 3rem;
`
export const Left = styled.div`
    grid-column-start: 2;
`
export const Right = styled.div`
    grid-column-start: 3;
`