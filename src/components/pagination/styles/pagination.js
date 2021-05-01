import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    display:flex;
    justify-content: space-around;
    bottom:0;
    margin: auto;
`;

export const ButtonLink = styled(Link)`
    display:flex;
    & >img{
        width:64px;
        height:64px;
    }
`;
