import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title, onAdd, showAdd}) => {
    // const onClick = () => {
    //     console.log('click')
    // }
  return (
    <header className='header'>    
        <h1>{title}</h1> 
        <Button color={showAdd ? '#322167' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick= {onAdd} />
    </header>
  )
}

Header.defaultProps = {
    title: 'Reminders',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

//CSS in JS
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black'
// }

export default Header
