import { useNavigate } from "react-router-dom";

type LogoProps = {
  large?: boolean;
};

const Logo = ({ large }: LogoProps) => {
  const navigate = useNavigate();

  return (
    <>
      <img
        alt="Logo"
        width={large ? 150 : 100}
        height={100}
        src="https://i.pinimg.com/736x/3c/7a/f3/3c7af3c03a1fc34f679d6cb8d1af703a.jpg"
        onClick={() => navigate("/")}
        className="hidden md:block cursor-pointer"
      />
    </>
  );
};

export default Logo;
