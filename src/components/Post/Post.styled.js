import styled from 'styled-components'

export const SPost = styled.article`    
    background-color: ${ ({theme}) => theme.colors.postBackground};
    padding: 15px 20px 25px;

    & + & {
        margin-top: 45px;    
    }
`

export const STitle = styled.h1`
    font-size: 1.25rem;
    margin-top: 0;
`

export const SPubDate = styled.p`
    font-size: 0.75rem;
    margin: 5px 0 20px;
`

export const SContent = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: ${({theme}) => theme.breakpoints.desktop}) {
        flex-direction: row;
    }
`

export const SDescription = styled.div`
    p {
        margin-top: 0;
    }

    @media (min-width: ${({theme}) => theme.breakpoints.desktop}) {
        margin-left: 15px;
    }
`

export const SImage = styled.img`
    display: block;
    height: auto;
    margin: 15px auto;
    max-width: 100%;

    @media (min-width: ${({theme}) => theme.breakpoints.desktop}) {
        margin: 0;
        max-width: 250px;
    }
`