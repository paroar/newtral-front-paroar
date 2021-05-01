import styled from 'styled-components/macro';
import { medium, large, xlarge } from '../../../constants/viewport';

export const Container = styled.div`
    display: flex;
    flex-direction: column;

`;

export const Frame = styled.div`
    padding: 3rem;
    
    @media (min-width: ${medium}){
        padding: 10rem;
    }

    @media (min-width: ${large}){
        padding: 15rem;
    }

    @media (min-width: ${xlarge}){
        padding: 20rem;
    }
`;

export const Image = styled.img`
    width: 100%;
    height: auto;
    margin-bottom: 2rem;
`;

export const Info = styled.div``;
