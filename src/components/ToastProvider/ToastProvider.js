import React from 'react';

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

  React.useEffect(() => {
    function handleEscape (event){
      if (toasts.length !== 0 && event.code === 'Escape'){
        setToasts([]);
      }
    };

    window.addEventListener('keyup', handleEscape);
    return () => {
      window.removeEventListener('keyup', handleEscape)
    };
  }, [])

  return (
    <ToastContext.Provider value={{toasts, CreateToast, RemoveToast}}>
      {children}
    </ToastContext.Provider>
  )
}

export default ToastProvider;
