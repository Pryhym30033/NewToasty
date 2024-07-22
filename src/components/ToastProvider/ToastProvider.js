import React from 'react';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {



  function createToast(){
    const nextToast = [
      ...toasts,
      {
        id: crypto.randomUUID,
        message,
        variant,
      }
    ];

    setToasts(nextToast);

  }
  return <ToastContext.Provider value={{toasts, createToast}}>
    {children}
  </ToastContext.Provider>;
}

export default ToastProvider;
