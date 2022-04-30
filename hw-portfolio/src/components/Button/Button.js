import MuiButton from '@mui/material/Button'

function Button(props) {
  const styles = {
    '&.MuiButton-outlined:hover': {
      borderWidth: '2px',
      background: 'white',
      color: 'black',
    },
    '&.MuiButton-outlinedSecondary:hover': {
      borderWidth: '2px',
      background: 'black',
      color: 'white',
    },
    borderRadius: 0,
    borderWidth: '2px',
    textTransform: 'none',
    fontSize: '16pt',
  }

  return (
    <MuiButton variant='outlined' {...props} sx={styles}>
      {props.children}
    </MuiButton>
  )
}

export default Button
