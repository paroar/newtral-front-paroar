import styled from 'styled-components/macro';
import { small, medium } from '../../../constants/viewport';

export const Container = styled.div`
    display:flex;
    justify-content: space-around;
    align-items:center;
    bottom:0;
    margin: auto;
`;

export const Image = styled.img`
    width: 36px;
    height: 36px;
    cursor: pointer;

    @media (min-width: ${small}){
        width: 48px;
        height: 48px;
    }

    @media (min-width: ${medium}){
        width: 64px;
        height: 64px;
    }

`;

export const Page = styled.p`
    font-size: 18px;
    margin: 1rem;

    @media (min-width: ${small}){
        font-size: 18px;
    }

    @media (min-width: ${medium}){
        font-size: 24px;
    }
`;
