import { styled } from ".."
import * as Select from "@radix-ui/react-select"

export const NewFormContainer = styled('div', {
  width: "100%",
  maxWidth: 1120,
  display: "flex",
  flexDirection: "column",
  margin: '0 auto',
  alignItems: "center",
  gap: '2rem',
})

export const NewUserFormContent = styled('form', {
  width: '80%',
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  borderRadius: 16,
  background: '$gray800',
  padding: '2rem',
})

export const SelectContainer = styled('div', {
  display: 'flex',
  gap: '1rem',
  alignItems: 'center',
})

export const SelectTrigger = styled(Select.Trigger, {
  all: 'unset',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 4,
  width: '20%',
  padding: '0 15px',
  fontSize: 14,
  lineHeight: 1,
  height: 35,
  gap: 5,
  backgroundColor: '$gray900',
  color: '$gray100',
  boxShadow: `0 2px 10px $gray900`,
  '&:hover': { backgroundColor: '$gray300', color: '$gray900' },
  '&:focus': { boxShadow: `0 0 0 2px black` },
  '&[data-placeholder]': { color: '$gray100' },
  '&[data-placeholder]:hover': { color: '$gray900' },
})

export const StyledContent = styled(Select.Content, {
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  backgroundColor: '$gray900',
  border: '1px solid $gray800',

  borderRadius: 6,
  boxShadow:
    '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
});

export const StyledViewport = styled(Select.Viewport, {
  padding: '0.5rem',
  display: 'flex',
  right: 0,
  height: 200,
  width: 200,
  alignItems: 'flex-start',
  flexDirection: 'column',
  justifyContent: 'space-between',
});

export const StyledSeparator = styled(Select.Separator, {
  height: 1,
  backgroundColor: '$gray800',
  margin: 5,
});

export const StyledItem = styled(Select.Item, {
  textAlign: 'center',
  padding: 5,
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',

  '&[data-highlighted]': {
    backgroundColor: '$gray800',
    color: '$gray300',
  },
});

export const StyledPortal = styled(Select.Portal, {
});

export const InputContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',

  input: {
    border: 0,
    background: '$gray900',
    borderRadius: 6,
    padding: '0.875rem',
    fontSize: 14,
    lineHeight: 1,

    '&[placeholder]': {
      color: '$gray300',
    }
  }
})

export const SubmitButton = styled('button', {
  alignSelf: 'flex-end',
  border: 0,
  padding: "1rem 2.5rem",
  background: "$yellow500",
  borderRadius: 8,
  cursor: "pointer",
  color: '$gray800',

  '&:hover': {
    background: "$yellow300",
    transition: 'background-color 0.2s ease',
  }
})

export const ErrorText = styled('p', {
  color: 'red',
  fontWeight: 'bold',
})

