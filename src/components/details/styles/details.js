import styled from 'styled-components/macro';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Frame = styled.div`
    padding: 2rem;
`;

export const Image = styled.img`
    width: 100%;
    height: auto;
    margin-bottom: 2rem;
`;

export const Info = styled.div``;

export const Actions = styled.div`
    display: flex;
    justify-content: space-around;

    & > a > img {
        width: 40px;
        height: 40px;
        cursor: pointer;
    }
`;
