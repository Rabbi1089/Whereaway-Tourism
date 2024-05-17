import React, { useContext } from 'react';
import { AuthCOntext } from '../provider/AuthProvider';

const useHook = () => {
    const all = useContext(AuthCOntext)
    return all
};

export default useHook;