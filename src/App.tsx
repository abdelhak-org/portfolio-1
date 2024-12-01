import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import { Router } from './Router';
import { theme } from './theme';
import { NavBar } from './components/navbar/NavBar';

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <NavBar/>
      <Router />
    </MantineProvider>
  );
}
