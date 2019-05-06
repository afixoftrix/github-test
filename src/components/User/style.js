import styled from 'styled-components'

export const Container = styled.div`
    display: block;
    margin-top: 2.4rem;
`
export const Avatar = styled.img`
    border-radius: 6px;
    width: 100%;
`;
export const Name = styled.div`
    font-size: 26px;
    line-height: 30px;
    font-weight: 600;
`
export const Persona = styled.div`
    color: #616161;
    font-size: 20px;
    font-style: normal;
    font-weight: 300;
    line-height: 24px;
`
export const Follow = styled.button`
    -webkit-appearance: none;
    -webkit-user-select: none;
    appearance: none;
    display: block;
    text-align: center;
    width: 100%;
    background-color: #eff3f6;
    background-image: linear-gradient(-180deg, #fafbfc, #eff3f6 90%);
    color: #24292e;
    background-position: -1px -1px;
    background-repeat: repeat-x;
    background-size: 110% 110%;
    border: 1px solid rgba(27,31,35,.2);
    border-radius: .25em;
    cursor: pointer;
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
    padding: 6px 12px;
    user-select: none;
    white-space: nowrap;
    margin-bottom: 1.4rem;
`;
export const Report = styled.div`
    background-color: transparent;
    border: 0;
    cursor: pointer;
    display: inline-block;
    font-size: 1.2rem;
    padding: 0;
    text-decoration: none;
    user-select: none;
    white-space: nowrap;    
    :hover{
        color: #0366d6;
    }
`;
export const BioContainer = styled.div`
    border-top: 0.5px solid rgba(0,0,0,0.2);
    margin-top: 2rem;

`
export const Links = styled.div`
    display: block;
`
export const Organizations = styled.div`
    display: block;
`
