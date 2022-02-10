/**
 * Color palette
 * Inspired by google-material-color
 */

 const palette = {
    Primary: {
      500: '#2196f3',
      light: '#6ec6ff',
      dark: '#0069c0'
    },
    Secondary: {
      500: '#f50057',
      light: '#ff5983',
      dark: '#bb002f'
    },
    Grey: {
      100: '#cccccc',
      300: '#999999',
      400: '#666666',
      500: '#555555',
      600: '#444444',
      700: '#333333',
      800: '#232323',
    },
    Black: {
      500: '#000000',
      transparent_50: 'rgba(0, 0, 0, 0.5)',
      transparent: 'rgba(0, 0, 0, 0)',
    },
    White: {
      500: '#ffffff',
      transparent_50: 'rgba(255, 255, 255, 0.5)',
      transparent: 'rgba(255, 255, 255, 0)',
    },
  };
  
  export default function (color, shade) {
    return palette[color][shade || '500'];
  }
  