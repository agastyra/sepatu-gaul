import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormRegister = () => {
  return (
    <form action="">
      <InputForm
        label="Full Name:"
        type="text"
        placeholder="John Doe"
        name="fullName"
        id="fullName"
      />
      <InputForm
        label="Email:"
        type="email"
        placeholder="email@example.com"
        name="email"
        id="email"
      />
      <InputForm
        label="Password:"
        type="password"
        placeholder="********"
        name="password"
        id="password"
      />
      <InputForm
        label="Confirm Password:"
        type="password"
        placeholder="********"
        name="confirmPassword"
        id="confirmPassword"
      />
      <Button type="submit" className="bg-blue-600 w-full text-white mb-4">
        Register
      </Button>
    </form>
  );
};

export default FormRegister;
