import { styled } from "..";

export const HomeContainer = styled('div', {
  display: "flex",
  flexDirection: "column",
  gap: '2rem',
  width: '100%',
  maxWidth: '1120px',
  margin: '0 auto',
  padding: '2rem',
})

export const SearchBar = styled('form', {
  display: "flex",
  justifyContent: 'space-between',
  gap: '1rem',

  input: {
    flex: 1,
    border: 0,
    borderRadius: 8,
    background: '$gray300',
    padding: '0.5rem',
    color: '$gray900',
    fontWeight: 'bold',
  },

  button : {
    padding: '1rem 2rem',
    borderRadius: 8,
    border: 0,
    background: '$green300',
    cursor: 'pointer',

    '&:hover': {
      background: '$green500',
      transition: 'background-color 0.2s ease'
    }
  }
})

export const UsersList = styled('table', {
  borderCollapse: 'collapse',
  border:'10px solid $gray800',
  borderRadius: 16,
  overflow: "hidden",
  padding: '0.5rem',
  boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.2)', 

  tr: {
    padding: '0.5rem',
    textAlign: 'center',
    borderBottom:'1px solid $gray800',
  },

  td: {
    padding: '1rem',
  },

  th: {
    borderBottom:'5px solid $gray800',
    padding:'1rem 0',
  },

  'th:first-child': {
    borderRight: '5px solid $gray800',
    borderCollapse: 'collapse',
  },

  'th:last-child': {
    borderLeft: '5px solid $gray800',
    borderCollapse: 'collapse',
  },

  'td:first-child': {
    borderRight: '1px solid $gray800',
    borderCollapse: 'collapse',
  },

  'td:last-child': {
    borderLeft: '1px solid $gray800',
    borderCollapse: 'collapse',
  },

  'tr:last-child': {
    borderBottom:0,
  },
})

// export const HomeContainer = styled('div', {

// })