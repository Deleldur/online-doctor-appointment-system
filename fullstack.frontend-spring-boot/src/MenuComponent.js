import React, { useState, useRef } from 'react';
import { ThemeProvider } from 'styled-components';
import { useOnClickOutside } from './hooks';
import { GlobalStyles } from './gobal';
import { theme } from './theme';
 import {Menu, Burger} from './components';
//import FocusLock from 'react-focus-lock';

function MenuComponent() {
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";

  useOnClickOutside(node, () => setOpen(false));

  return (
   <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <div ref={node}>
        <React.Fragment disabled={!open}>
            <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
            <Menu open={open} setOpen={setOpen} id={menuId} />
                </React.Fragment>
        </div>
        
      </>
    </ThemeProvider>
  );
}

export default MenuComponent
  
