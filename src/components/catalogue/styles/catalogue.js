import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import { small, medium, large } from '../../../constants/viewport';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Image = styled.img`
    width: 36px;
    height: 36px;
    border-radius:50rem;
    margin: .5rem;


    @media (min-width: ${small}){
        width: 48px;
        height: 48px;
    }

    @media (min-width: ${medium}){
        width: 64px;
        height: 64px;
    }

    @media (min-width: ${large}){
        width: 90px;
        height: 90px;
    }
`;

export const Info = styled.div`
    color: #ffffff;
    display: flex;
    align-items:center;
`;

export const Item = styled.div`
    cursor: pointer;
    position: relative;
    margin-bottom: 1px;
    display:flex;
    align-items: center;
    justify-content: space-between;
`;

export const Title = styled.h1`
    font-size: 16px;

    @media (min-width: ${small}){
        font-size: 18px;
    }

    @media (min-width: ${medium}){
        font-size: 22px;
    }

    @media (min-width: ${large}){
        font-size: 24px;
    }
`;

export const Text = styled.p`
    font-size: 18px;
    font-weight: bold;
`;

export const ButtonLink = styled(Link)`
    text-decoration: none;
    background-color: rgba(0,0,0,.2);
    margin-bottom: .1rem;

    &:nth-child(even){
        background-color: rgba(0,0,0,.3);
    }

    &:hover{
        background-color: rgba(0,0,0,.4);
    }
`;
