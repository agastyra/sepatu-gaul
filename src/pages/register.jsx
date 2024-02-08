import FormRegister from "../components/Fragments/FormRegister";
import AuthLayouts from "../components/Layouts/AuthLayouts";

const email = localStorage.getItem("email");
if (!email) {
  location.href = "/products";
}
const RegisterPage = () => {
  return (
    <div className="flex justify-center min-h-screen items-center">
      <AuthLayouts title="Register" type="register">
        <FormRegister />
      </AuthLayouts>
    </div>
  );
};

export default RegisterPage;
