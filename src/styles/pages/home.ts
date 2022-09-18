import { styled } from "..";
import * as ToggleGroup from '@radix-ui/react-toggle-group';

export const HomeContainer = styled('div', {
  display: "flex",
  flexDirection: "column",
  gap: '2rem',
  width: '100%',
  maxWidth: '1120px',
  margin: '0 auto',
  padding: '2rem',
})

export const SearchBar = styled('div', {
  display: "flex",
  justifyContent: 'center',
  gap: '1rem',

  input: {
    flex: 1,
    height: 50,
    border: 0,
    borderRadius: 8,
    background: '$gray300',
    padding: '0.5rem',
    color: '$gray900',
    fontWeight: 'bold',

    '@bp1' : {
      width: '100%',
    }
  },

  '@bp1': {
    flexDirection: 'column',
  }
})

export const FilterButtonsContainer = styled(ToggleGroup.Root, {
  display: "flex",
  gap: "1rem",
})

export const FilterButtons = styled(ToggleGroup.Item, {
  "&[data-state='on']": {
    padding: '1rem 2rem',
    borderRadius: 8,
    border: 0,
    background: '$yellow500',
    cursor: 'pointer',
    color: '$gray800',

    '&:hover': {
      background: '$yellow300',
      transition: 'background-color 0.2s ease'
    }
  },

  "&[data-state='off']": {
    padding: '1rem 2rem',
    borderRadius: 8,
    border: 0,
    background: '$gray800',
    cursor: 'pointer',

    '&:hover': {
      background: '$gray300',
      color: '$gray800',
      transition: 'background-color 0.2s ease, color 0.2s ease'
    }
  }
})

export const UsersList = styled('table', {
  borderCollapse: 'collapse',
  border:'24px solid $gray800',
  background: '$gray800',
  borderRadius: 16,
  boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.2)',

  '@bp1': {
    overflowX: 'scroll',
    display: 'block',
  },

  tr: {
    padding: '0.5rem',
    textAlign: 'center',
    borderBottom:'1px solid $gray900',
    alignItems: 'center',
    minWidth: '820px',
  },

  td: {
    padding: '1rem',
    borderRight: '5px solid $gray900',
    borderCollapse: 'collapse',
  },

  th: {
    borderBottom:'5px solid $gray900',
    padding:'1rem 0',
    borderRight: '5px solid $gray900',
    borderCollapse: 'collapse',
  },

  'th:last-child': {
    borderLeft: 0,
    borderRight: 0,
    borderCollapse: 'collapse',
  },

  'td:last-child': {
    borderLeft: 0,
    borderRight: 0,
    borderCollapse: 'collapse',
  },

  'tr:last-child': {
    borderBottom:0,
  },

  
})

export const EditButton = styled('span',{
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 4,
  width: '54px',
  height: '54px',
  backgroundColor: '$gray900',
  cursor: 'pointer',

  '&:hover': {
    backgroundColor: '#1B1D21',
    transition: 'background-color 0.2s ease, color 0.2s ease',
  }
})

export const EditButtonContainer = styled('td', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '@bp1':{
    padding: '0.2rem!important',
  },
})