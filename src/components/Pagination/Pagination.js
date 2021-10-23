import PropType from 'prop-types'
import { SPagination, SButton } from './Pagination.styled';

const Pagination = ({totalPages, currentPage, handleClick}) => {
    const pages = [...Array(totalPages).keys()].map(page => page + 1);
    const hasPagination = pages.length > 2;
    
    if(!hasPagination) return null

    return (
        <SPagination>
            {pages.map(num => (
                <SButton key={num} onClick={() => handleClick(num)} active={num === currentPage}>{num}</SButton>
            ))}
        </SPagination>
    )
}

Pagination.propTypes = {
    totalPages: PropType.number.isRequired,
    currentPage: PropType.number.isRequired,
    handleClick: PropType.func.isRequired
}

export default Pagination