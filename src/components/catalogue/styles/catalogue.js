import styled from 'styled-components/macro';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Image = styled.img`
    width: 48px;
    height: 48px;
    border-radius:50rem;
    margin: 0 1rem;
`;

export const Info = styled.div`
    color: #ffffff;
    display: flex;
    align-items:center;


`;

export const Item = styled.div`
    cursor: pointer;
    position: relative;
    background-color: rgba(0,0,0,.2);
    margin-bottom: 1px;

    &:nth-child(even){
        background-color: rgba(0,0,0,.3);
    }

    & > a {
        text-decoration: none;
    }

    &:hover{
        background-color: rgba(0,0,0,.4);
    }
`;

export const Title = styled.h1`
    font-size: 24px;
`;

export const Text = styled.p`
    font-size: 18px;
    font-weight: bold;
`;
