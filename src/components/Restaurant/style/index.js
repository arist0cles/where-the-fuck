import styled, { keyframes } from 'styled-components'

export const StyledRestaurant = styled.a`
  color: white;
  margin: 0;
  text-decoration: underline;
  font-size: 1.5em;
  line-height: 0.5;

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

const float = keyframes`
	0% {
		transform: translatey(0px);
	}
	50% {
		transform: translatey(-10px);
	}
	100% {
		transform: translatey(0px);
	}
`

export const StyledFloatingSection = styled.div`
  transform: translatey(0px);
	animation: ${float} 2s ease-in-out infinite;
}
`
