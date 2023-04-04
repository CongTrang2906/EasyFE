import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// export const roboto = Roboto({
//   weight: ['300', '400', '500', '700'],
//   subsets: ['latin'],
//   display: 'swap',
//   fallback: ['Helvetica', 'Arial', 'sans-serif'],
// });

// Create a theme instance.
export const theme = createTheme({
  typography:{
    fontFamily: 'Heebo, sans-serif',
  },
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      light:'#EDF7FA',
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    text:{
      primary:'#21243D'
    }
  },
  components:{
    MuiContainer:{
      defaultProps:{
        maxWidth:'md',
      },
      styleOverrides:{
        maxWidthSm:{
          maxWidth: '680px',
          "@media(min-width:600px)": { maxWidth: '680px' },
        },
        maxWidthMd:{
          maxWidth: '860px',
          "@media(min-width:900px)": { maxWidth: '860px' },
        },
      }
    },
    MuiLink:{
      defaultProps:{
        underline:'none',
      },
      styleOverrides:{
       root:{
        color:'black',
        '&:hover ,&.active':{
          color:'#19857b'
        }
       }
      }
    },
    MuiButton:{
      variants:[
        {
          props:{variant:'contained',color:'primary'},
          style:{
            color:'white'
          }
        }
      ]
    },
    MuiChip:{
      styleOverrides:{
        root:{
          paddingInline:2,
 
        }
      },
      variants:[
        {
          props:{color:'secondary'},
          style:{
            color:'white',
            backgroundColor:'#142850',
            fontSize:16,
            fontWeight:'bold',
          }
        }
      ]
    }
  }
  
});

