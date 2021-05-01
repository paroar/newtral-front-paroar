import styled from 'styled-components/macro';
import {
  small, medium, large, xlarge,
} from '../../../constants/viewport';

export const Container = styled.div`
    display: flex;
    flex-direction: column;

`;

export const Frame = styled.div`
    padding: 5rem 1rem;
    
    @media (min-width: ${small}){
        padding: 5rem 5rem;
    }

    @media (min-width: ${medium}){
        padding: 5rem 10rem;
    }

    @media (min-width: ${large}){
        padding: 5rem 15rem;
    }

    @media (min-width: ${xlarge}){
        padding: 5rem 20rem;
    }
`;

export const Image = styled.img`
    width: 100%;
    height: auto;
    margin-bottom: 2rem;
`;

export const Info = styled.div``;
