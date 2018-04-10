import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 2%;
    background-color: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.primaryColor};
    height: 40px;
    font-size: 20px;
    text-align: right;        
`;

export const Title = styled.div`
    padding-top: 7px;
    white-space: nowrap;
    animation: rightThenLeft 4s linear;
`;
