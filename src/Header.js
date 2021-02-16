import Button from './Button'
import PropTypes from 'prop-types'
//import AddLearnerDetails from './AddParents'

const Header = ({title}) =>{
    return(
        <div className='header'>
            <h1>{title}</h1>
            {<Button color='blue' text='Add'/>}
        </div>
    )
}

Header.defaultProps ={
    title: 'Learner Detail'
}

Header.propTypes ={
    tile: PropTypes.string,
}


export default Header