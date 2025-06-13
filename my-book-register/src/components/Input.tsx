import { ChangeEventHandler } from 'react';

type InputProps = {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

const Input = ({ value, onChange }: InputProps) => {
  return (
    <>
      <input
        className="input"
        placeholder="入力してください"
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export default Input;
