import { createTheme } from '@mui/material/styles';



const primary = {
  main: '#52796F',
  light: '#84A98C',
  dark: '#354F52',
  lightgray: '#CAD2C5',
  darkgray: "#2F3E46",
  text: '#071108'
}


export const theme = createTheme({
  palette: {
    primary,
    secondary:{
      main: '#574B60'
    },
    background: {
      default: '#283D3B',
      paper: '#283D3B'
    },
    text: {
      primary: '#071108 !important'
    }
  
  },
  

}) 

