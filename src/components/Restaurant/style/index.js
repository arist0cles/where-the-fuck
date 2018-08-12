import styled from 'styled-components'

export const StyledRestaurant = styled.a`
  color: white;
  margin: 0;
  font-size: 30px;
  text-decoration: underline;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  &:visited {
    color: white;
  }

  @media only screen and (max-width : 480px) {
    margin: 0;
    font-size: 1.5em;
    line-height: 0.5;
  }

`
StyledRestaurant.displayName = 'StyledRestaurant'

export const StyledRestaurantDetails = styled.p`
  margin: 0;
  font-size: 1.5em;
  color: #cccccc;
`
StyledRestaurantDetails.displayName = 'StyledRestaurantDetails'
