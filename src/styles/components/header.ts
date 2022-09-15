import {styled} from '..'

export const HeaderContainer = styled('header', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '2rem 2rem',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',
})

export const NewUserButton = styled('a', {
  padding: "1rem 2.5rem",
  background: "$green300",
  borderRadius: 8,
  cursor: "pointer",
  color: '$gray200',

  '&:hover': {
    background: "$green500",
    transition: 'background-color 0.2s ease',
  }
})