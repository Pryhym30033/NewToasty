import React from 'react';
import ButtonListener from '../../hooks/buttonListener';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {

  const [toasts, setToasts] = React.useState([
    {
      id: crypto.randomUUID(),
      message: 'First Toast',
      variant: 'success',
    },
    {
      id: crypto.randomUUID(),
      message: 'Second Toast',
      variant: 'error',
    }

  ]);

  const handleButton = React.useCallback(() => {
    setToasts([]);
  }, []);

  ButtonListener('Escape', handleButton);


  function CreateToast(message, variant){
    const nextToast = [
      ...toasts,
      {
        id: crypto.randomUUID(),
        message,
        variant,
      }
    ];

    setToasts(nextToast);
  }

  function RemoveToast(id){
    const nextToast = toasts.filter(toast =>{
      return toast.id !== id;
    })

    setToasts(nextToast);
  }

  

  return (
    <ToastContext.Provider value={{toasts, CreateToast, RemoveToast}}>
      {children}
    </ToastContext.Provider>
  )
}

export default ToastProvider;
