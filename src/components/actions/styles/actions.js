import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import { small, medium } from '../../../constants/viewport';

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
`;

export const Button = styled(Link)`
    display:flex;

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
        filter: brightness(0);
    }
`;
