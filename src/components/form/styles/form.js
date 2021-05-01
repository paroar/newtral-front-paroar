import styled from 'styled-components/macro';
import {
  small, medium, large, xlarge,
} from '../../../constants/viewport';

export const Container = styled.div`
    display: flex;
`;

export const Frame = styled.div`
    padding: 5rem 1rem;
    font-size: 14px;
    width:100%;

    @media (min-width: ${small}){
        padding: 5rem 5rem;
        font-size: 18px;
    }

    @media (min-width: ${medium}){
        padding: 5rem 10rem;
        font-size: 24px;
    }

    @media (min-width: ${large}){
        padding: 5rem 15rem;
    }

    @media (min-width: ${xlarge}){
        padding: 5rem 20rem;
    }

    & > form {
        width: 100%;
    }
`;

export const Input = styled.input`
    
`;

export const Submit = styled.input`
    background-color:transparent;
    border: 1px solid black;
    font-size: 20px;
    width:100%;
    padding: .6rem 0;
    margin-top: 2rem;
    cursor: pointer;
    background-color: #000000;
    color: #ffffff;
    text-transform: uppercase;
    letter-spacing: .05rem;
    text-align:center;

    @media (min-width: ${small}){
        font-size: 24px;
    }

    @media (min-width: ${medium}){
        font-size: 30px;
    }

`;
