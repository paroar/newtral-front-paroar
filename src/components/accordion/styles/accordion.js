import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';

export const Container = styled.div``;

export const Item = styled.div`
    &:not(:last-of-type){ 
        margin-bottom: 2rem;
    }
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    font-size: 16px;

    & > img {
        width:16px;
        height: 16px;
    }
`;

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    max-height: ${({ height }) => (height ? 0 : '100vh')};
    transition: max-height 1s ease;
    overflow: hidden;
`;

export const ButtonLink = styled(Link)`
    text-decoration: none;
    font-size: 16px;
    margin-bottom: .8rem;
    color: rgba(0,0,0,.56);

    &:hover{
        color: rgba(0,0,0,.87);
    }
`;
