import PropType from 'prop-types'
import parse from 'html-react-parser'
import moment from 'moment'
import { SPost, STitle, SPubDate, SDescription, SContent, SImage } from './Post.styled'

const Post = ({title, description, pubDate, image}) => {
    const date = moment(pubDate).format('DD/MM/YYYY');
    const time = moment(pubDate).format('hh:mm');

    return (
        <SPost>
            <STitle>{ parse(title) }</STitle>
            <SPubDate>Publicado: { date } { time }</SPubDate>
            <SContent>
                <SImage src={image} alt="" />
                <SDescription>{ parse(description) }</SDescription>
            </SContent>
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