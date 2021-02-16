import PropTypes from 'prop-types'
//import AddLearnerDetails from './AddLearnerDetails' 
import './App.css'   

const Button = ({color, text}) => {
    return(
        <button style={{backgroundColor:color}} className='btn' align='center'>{text}</button>
    )
}

Button.propTypes ={
    text: PropTypes.string,
    color: PropTypes.string,
}

export default Button