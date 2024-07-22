import React from 'react';

import Button from '../Button';
import ToastShelf from '../ToastShelf';
import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {

  const [message, setMessage] = React.useState('');
  const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0])
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

  function CreateToast(event){
    event.preventDefault();
    const nextToast = [
      ...toasts,
      {
        id: crypto.randomUUID(),
        message,
        variant,
      }
    ]
    setToasts(nextToast);
    setMessage('');
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf toasts={toasts} />

      <form className={styles.controlsWrapper}
      onSubmit={CreateToast}
      >
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea id="message" 
            className={styles.messageInput}
            value={message}
            onChange={(event) => {
              setMessage(event.target.value);
            }}
             />
          </div>
        </div>
          <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>

            {VARIANT_OPTIONS.map((choice) => (
              <label htmlFor={`variant-${choice}`} key={choice}>
              <input
                id={`variant-${choice}`}
                type="radio"
                name="variant"
                value={choice}
                checked={choice === variant}
                onChange={(event) => {
                  setVariant(event.target.value);
                }}
              />
              {choice}
            </label>
            ))}

          </div>
            </div>
         
        <div className={styles.row}>
          <div className={styles.label} />
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
