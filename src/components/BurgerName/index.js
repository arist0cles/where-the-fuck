import React from 'react'
import { StyledBurgerName } from './style'

const BurgerName = ({ Event }) => {
  const burgerTitle = Event[0].name_of_burger
  const titleContainsBurger = checkForBurgerInTitle(burgerTitle)
  return (
    <StyledBurgerName>
      {removeThe(burgerTitle) + (titleContainsBurger ? '' : ' Burger')}
    </StyledBurgerName>
  )
}

function removeThe(title) {
  const startWithThe = title.substring(0, 4) === 'The '
  if(startWithThe) {
    return title.substring(4, title.length)
  }
  return title
}

function checkForBurgerInTitle(title) {
  const burgerWords = ['Burger', 'Bayger', 'Baoger', 'burger']

  for (let i = 0; i < burgerWords.length; i++) {
    if (title.includes(burgerWords[i])) {
      return true
    }
  }
  return false
}

export default BurgerName
