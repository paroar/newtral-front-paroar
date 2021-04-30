import styled from 'styled-components/macro';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Image = styled.img`
    width: 100%;
    height: auto;
`;

export const Info = styled.div`
    background-color: rgba(0,0,0,.8);
    color: #ffffff;
    position: absolute;
    bottom:0;
    right:0;
    left:0;
    display: none;
    text-align: center;
`;

export const Item = styled.div`
    cursor: pointer;
    position: relative;

    &:hover ${Info}{
        display: block;
        z-index: 100;
    }
`;

export const Title = styled.h1`
    font-size: 24px;
`;

export const Text = styled.p`
    font-size: 18px;
    font-weight: bold;
`;
