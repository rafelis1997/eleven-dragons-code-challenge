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
  background: "$yellow500",
  borderRadius: 8,
  cursor: "pointer",
  color: '$gray800',

  '&:hover': {
    background: "$yellow300",
    transition: 'background-color 0.2s ease',
  },

  '@bp1': {
    width: '150px',
    padding: "1rem 1.5rem",
    textAlign: 'center',
  }
})