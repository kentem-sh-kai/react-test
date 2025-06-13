type ButtonProps = {
    title: string,
    handleClickButton: () => void
}

const Button = ({ title, handleClickButton }: ButtonProps) => {
  return (
    <>
      <button className="button" onClick={handleClickButton}>{ title }</button>
    </>
  );
};

export default Button;
