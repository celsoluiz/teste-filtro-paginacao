import PropType from 'prop-types'
import parse from 'html-react-parser'
import moment from 'moment'
import styled from 'styled-components'

const SPost = styled.article`
    
    margin-top: 25px;
`

const STitle = styled.h1`
    font-size: 1.25rem;
    margin-bottom: 0;
`

const SPubDate = styled.p`
    margin: 5px 0;
    text-align: right;
`

const SDescription = styled.div`
    
`

const Post = ({title, description, pubDate, image}) => {
    const date = moment(pubDate).format('DD/MM/YYYY');
    const time = moment(pubDate).format('hh:mm');

    return (
        <SPost>
            <STitle>{ parse(title) }</STitle>
            <SPubDate>Publicado: { date } { time }</SPubDate>
            <SDescription>{ parse(description) }</SDescription>
            { image && <img src={image} alt="" />}
        </SPost>        
    )
}

Post.propTypes = {
    title: PropType.string.isRequired,
    description: PropType.string.isRequired,
    pubDate: PropType.string.isRequired,
    image: PropType.string
}

export default Post