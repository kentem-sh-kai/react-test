import Input from './Input';
import Button from './Button';

type InputFormProps = {
  inputValue: string,
  setValue: React.Dispatch<React.SetStateAction<string>>,
  handleClickButton: () => void,
};

const InputForm = ({
  inputValue,
  setValue,
  handleClickButton
}: InputFormProps) => {
  return (
    <>
      <div className="book-register">
        <div className="label-input">
          <label className="label">ISBNコード</label>
          <Input value={inputValue} onChange={(e) => setValue(e.target.value)} />
        </div>
        <Button
          title={'書籍登録'}
          handleClickButton={handleClickButton}
        ></Button>
      </div>
    </>
  );
};

export default InputForm;
