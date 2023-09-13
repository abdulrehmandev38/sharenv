import { LoginForm } from "../components/LoginForm";

const Login = () => {
  return (
    <div className="border flex rounded-md items-center flex-col justify-center px-16 py-4">
      <p className="font-bold mb-4">Login with one click</p>
      <LoginForm />
    </div>
  );
};
export default Login;
