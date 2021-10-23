import PropType from 'prop-types'
import { SFilterContainer, SForm, SLabel, SSelect } from './Filter.styled'

const Filter = ({initialVal, selectVals, handleChange}) => (
    <SFilterContainer>
        <SForm>
            <SLabel>Filtrar por categoria:</SLabel>
            <SSelect value={initialVal} onChange={(evt) => handleChange(evt.target.value)}>
                <option value="todos">Todos</option>
                {
                    selectVals.map((optionVal) => (
                        <option key={optionVal} value={optionVal}>{optionVal}</option>
                    ))
                }
            </SSelect>
        </SForm>
    </SFilterContainer>
)

Filter.propTypes = {
    initialVal: PropType.string.isRequired,
    selectVals: PropType.arrayOf(PropType.number),
    handleChange: PropType.func.isRequired
}

export default Filter