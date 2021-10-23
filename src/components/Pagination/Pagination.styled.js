import styled, { css } from 'styled-components'

export const SPagination = styled.nav`
    display: flex;
    justify-content: center;
    margin-top: 25px;
`

const hoverStyle = css`
    background-color: ${ ({theme}) => theme.colors.paginationButtonActive};
    color: ${ ({theme}) => theme.colors.paginationButtonTextActive};
`

export const SButton = styled.button`
    border: none;
    border-radius: 3px;
    background-color: ${ ({theme}) => theme.colors.paginationButton};
    color: ${ ({theme}) => theme.colors.paginationButtonText};
    cursor: pointer;
    font-family: ${({theme}) => theme.fontFamily};
    font-weight: bold;
    margin: 0 5px;
    padding: 8px 15px;

    &:hover {
        ${hoverStyle}
    }

    ${props => props.active && hoverStyle}
`

