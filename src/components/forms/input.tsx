import styles from './input.module.css'

type InputProps = React.ComponentProps<'input'> & {
  label: string;
  error?: string
};
export default function Input({ label, error,  ...props }: InputProps) {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={props.name}>{label}</label>
      <input className={styles.input} type="text" {...props} id={props.name} />
      {error && <p className={styles.error}>{error}</p> }
    </div>
   );
}
