import { useContext } from "react";
import { AuthContext } from "../AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

export default function Signin() {
  const { signinUser, setUser, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();

    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    const result = await signinUser(email, password);
    const logedUser = result.user;

    const res = await fetch("http://localhost:5000/users");
    const users = await res.json();

    const matchedUser = users.find((u) => u.email === logedUser.email);
    setUser(matchedUser);

    if (matchedUser) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Loginsuccessful",
        timer: 1000,
      });
      form.reset();
      navigate("/");
    }
  };
  return (
    <div className="py-20 my-10 max-h-screen bg-[#92A099] rounded-sm">
      <h2 className="text-center text-5xl font-bold my-10">Sign-In Now!</h2>
      <form
        onSubmit={handleSignIn}
        type="submit"
        className="border mx-auto w-2/5 rounded-xl flex flex-col pt-10 items-center bg-[#202C35]"
      >
        <div className="flex flex-col space-y-2 mb-4 w-3/5">
          <label>Email *</label>
          <input
            type="email"
            placeholder="email"
            name="email"
            className="px-4 py-2 border"
            required
          />
        </div>
        <div className="flex flex-col space-y-2 mb-4 w-3/5">
          <label>Passwod *</label>
          <input
            type="password"
            placeholder="password"
            name="password"
            className="px-4 py-2 border"
            required
          />
        </div>
        <div>
          <a
            href="/signup"
            className="font-semibold cursor-pointer hover:text-black"
          >
            Sign-Up Now?
          </a>
        </div>
        <button className="w-2/5 font-bold py-2 my-5 border rounded cursor-pointer bg-[#395F69]">
          Sign-In
        </button>
      </form>
      <button
        type="button"
        onClick={() => {
          googleSignIn(), navigate("/home");
        }}
        className="btn flex justify-center mx-auto"
      >
        <FcGoogle className="mr-1 text-xl" />
        SignIn With Google
      </button>
    </div>
  );
}
