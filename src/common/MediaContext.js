import { createContext } from 'react';

const MediaContext = createContext({
  isTablet: "",
  isLaptop: "",
  isDesktop: ""
});

export default MediaContext;