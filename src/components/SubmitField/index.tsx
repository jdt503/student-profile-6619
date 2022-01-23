import { useState, ChangeEvent, FormEvent, InputHTMLAttributes } from 'react';

import styles from './index.module.scss';

export default function SubmitField({
  onEnter,
  ...props
}: {
  onEnter: (tag: string) => void;
} & InputHTMLAttributes<HTMLInputElement>) {
  const [ value, setValue ] = useState("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(value){
      onEnter(value)
      setValue("")
    }
  }
  return(
    <form onSubmit={handleSubmit}>
      <input {...props} value={value} onChange={handleChange} />
      <input type="submit" className={styles.hide} />
    </form>
  )
}
