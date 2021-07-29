import { createContext } from 'react';

export const defaultContext = {
  form: {
    data: {
      name: '',
      email: '',
      message: ''
    },
    setData: () => { }
  },
  cactus: {
    greeted: false,
    setGreeted: () => { }
  }
}

const FormContext = createContext(defaultContext);

export default FormContext;