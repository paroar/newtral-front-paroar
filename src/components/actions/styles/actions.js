import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import { small, medium } from '../../../constants/viewport';

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
`;

export const Button = styled(Link)`
    display:flex;
    transition: all .3s;

    & > img {
        width: 24px;
        height: 24px;
        cursor: pointer;
        margin-right: 1rem;
        padding:0;

        @media (min-width: ${small}){
            width: 36px;
            height: 36px;
        }

        @media (min-width: ${medium}){
            width: 48px;
            height: 48px;
        }

    }

    &:hover{
        filter: brightness(0) invert(1);
    }
`;

export const TextLink = styled(Link)`
    border: 1px solid black;
    font-size: 20px;
    width:100%;
    padding: .6rem 0;
    cursor: pointer;
    background-color: #000000;
    color: #ffffff;
    text-transform: uppercase;
    text-decoration:none;
    text-align: center;
    letter-spacing: .05rem;
    transition: all .3s;

    @media (min-width: ${small}){
        font-size: 24px;
    }

    @media (min-width: ${medium}){
        font-size: 30px;
    }

    &:hover{
        background-color: #ffffff;
        color: #000000;
    }
`;
