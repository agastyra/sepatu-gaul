import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const handleSubmit = (e) => {
  e.preventDefault();
  const { email, password } = e.target;

  localStorage.setItem("email", email.value);
  localStorage.setItem("password", password.value);

  location.href = "/products";
};

const FormLogin = () => {
  return (
    <form action="" onSubmit={handleSubmit}>
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
      <Button type="submit" className="bg-blue-600 w-full text-white mb-4">
        Login
      </Button>
    </form>
  );
};

export default FormLogin;
