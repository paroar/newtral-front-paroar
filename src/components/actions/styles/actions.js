import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
`;

export const Button = styled(Link)`
    display:flex;
    & img {
        width: 40px;
        height: 40px;
        cursor: pointer;
        margin-right: 1rem;
        padding:0
    }

    &:hover{
        filter: brightness(0);
    }
`;
