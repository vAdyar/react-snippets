import PropTypes from 'prop-types'
import Button from './Button'
import { useLocation } from "react-router"

const Header = ({ title, onAdd, showAdd }) => {

const location = useLocation()
    return (
        <header className='header'>
            <h1>Task Tracker for {title}</h1>
            {location.pathname === '/' && <Button 
                color={showAdd ? 'red' : 'green'} 
                text={showAdd ? 'Close' : 'Add'} 
                onClick={onAdd}
            />}
        </header>
    )
}

Header.defaultProps = {
    title: 'Stranger',
}

Header.prototype = {
    title: PropTypes.string.isRequired,
}

// CSS in JS
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black'
// }

export default Header