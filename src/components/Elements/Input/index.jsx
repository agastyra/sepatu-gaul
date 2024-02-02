import Input from "./Input";
import Label from "./Label";

const InputForm = (props) => {
  const { label, type, placeholder, name, id } = props;

  return (
    <div className="mb-6">
      <Label htmlFor={id}>{label}</Label>
      <Input type={type} placeholder={placeholder} name={name} id={id} />
    </div>
  );
};

export default InputForm;
