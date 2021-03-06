import React from 'react'
import Icon from './Icon'

const Button = ({ children, type, icon, onClick }) => (
  <button type={type} onClick={onClick}>
    {icon && <Icon type={icon} />}
    {children}
  </button>
)

Button.defaultProps = {
  type: 'button',
  icon: null,
  onClick: null
}

export default Button
