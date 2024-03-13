import { createContext } from "react";

const defaultValue = {
    locale: 'pt',
    setLocale: () => {}
}

export default createContext(defaultValue);