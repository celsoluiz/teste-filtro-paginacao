import PropType from 'prop-types'
import styled from 'styled-components'

const SForm = styled.form`
    margin: 50px 0;
`

const SLabel = styled.label`
    display: block;
`

const Filter = ({initialVal, selectVals, handleChange}) => (
    <SForm>
        <SLabel>Filtrar por categoria:</SLabel>
        <select value={initialVal} onChange={(evt) => handleChange(evt.target.value)}>
            <option value="todos">Todos</option>
            {
                selectVals.map((optionVal) => (
                    <option value={optionVal}>{optionVal}</option>
                ))
            }
        </select>
    </SForm>
)

Filter.propTypes = {
    initialVal: PropType.string.isRequired,
    selectVals: PropType.arrayOf(PropType.number),
    handleChange: PropType.func.isRequired
}

export default Filter