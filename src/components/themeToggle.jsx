import React from 'react'
import MoonIcon from '../assets/icon-moon.svg'
import SunIcon from '../assets/icon-sun.svg'

export const themeToggle = ({handleChange, isChecked}) => {
  return (
    <div className='toggle-container'>
        <input 
        type="checkbox" 
        id="check"
        className='theme-switcher'
        onChange={handleChange}
        checked={isChecked}
        />

        <label htmlFor="check">
        {isChecked ? (
            <>
               Dark <img src={MoonIcon} alt="DarkModeIcon" />
            </>
          ) : (
            <>
               Light <img src={SunIcon} alt="LightModeIcon" />
            </>
          )}
        </label>
    </div>
  )
}

export default themeToggle
