
import { LoginForm } from "@/components/login-form";
import { useNavigate } from "react-router"


export default function LoginPage() {
  const navigate = useNavigate();  // This hook allows us to programmatically navigate

  // Define the onLogin function inside LoginPage
  const onLogin = () => {
    console.log("Login successful!");
    // After login, navigate to the dashboard
    navigate("/dashboard");
  };

  return (
    <div className=" grid min-h-screen grid-cols-1 lg:grid-cols-2">
      {/* Left Panel: Form */}
      <div className="  flex flex-col p-6 md:p-10 items-center justify-center bg-white-50 lg:px-16">
        {/* Logo + Name */}
        <div className="mb-8 flex items-center gap-2 md:justify-start justify-center">
          <a href="#" className="flex items-center gap-2 font-medium">
            <div className="flex h-6 w-6 items-center justify-center text-primary-foreground">
            </div>
            <img src ="public/LogoExtended.png"/> 
          </a>
        </div>

        {/* Login Form */}
        <div className=" w-full max-w-md">
          {/* Pass the onLogin function here */}
          <LoginForm onLogin={onLogin} />
        </div>
      </div>

      {/* Right Panel: Image */}
      <div className="relative hidden lg:block">
        <img
          src="public/Greatwork2Lobby.png"
          alt="Login"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.3] dark:grayscale"
        />
      </div>
    </div>
  );
}
