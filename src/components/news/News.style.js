import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
    margin-top: 2%;
    background-color: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.primaryColor};
    height: 40px;
    font-size: 20px;
    text-align: right;
    line-height: ${props => props.theme.lineHeight}rem;
    letter-spacing: ${props => props.theme.letterSpacing}rem;
    font-family: ${props => props.theme.fontFamily}, sans-serif;
`;

const slideshow = keyframes`
    from {
        margin-left: 100%;
    }
    to {
        margin-left: -1000%;
    }
`;

export const Title = styled.div`
    padding-top: 7px;
    white-space: nowrap;
    animation: ${slideshow} 100s linear infinite;
`;
