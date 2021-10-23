import styled from 'styled-components'

export const SFilterContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`

export const SForm = styled.form`
    margin: 50px 0;
`

export const SLabel = styled.label`
    display: block;
    margin-bottom: 10px;
`

export const SSelect = styled.select`
    border: 2px solid ${ ({theme}) => theme.colors.filterSelectBorder};
    cursor: pointer;
    padding: 8px;
    width: 100%;
`