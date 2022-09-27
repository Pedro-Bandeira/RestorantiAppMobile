import Routes from "./src/routes";

// imports de tema global
import {ThemeProvider} from 'styled-components';
import theme from './src/global/styles/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes></Routes>
    </ThemeProvider>
  );
}
