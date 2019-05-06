import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    background-color: #fff;
    color: #24292e;
    cursor: default;
    font-weight: 600;
    border: 0.5px solid rgba(0, 0, 0, 0.2);
    padding: 0.8rem 1.2rem;
    line-height: 1.5;
    margin-top: 4rem;
    border-radius: 2px;
    div{
        font-size: 1.4rem;
    }
`;

const Amt = styled.div`
    color: white;
    border-radius: 20px;
    background-color: #586069;
    display: inline-block;
    font-size: 1.4rem;
    font-weight: 600;
    line-height: 1;
    padding: 2px 5px;
`;

const SS = ({num}) => {
  return (
    <Container>
        <div className="id" >Users</div>
        <Amt>{num}</Amt>
    </Container>
  )
}

SS.defaultProps = {
    num: 0
}

export default SS
