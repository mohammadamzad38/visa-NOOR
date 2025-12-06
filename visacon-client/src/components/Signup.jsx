import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider";
import Swal from "sweetalert2";

export default function Signup() {
  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;

    form.reset();

    const check = await fetch("http://localhost:5000/users");
    const emailcheck = await check.json();
    const matchEmail = await emailcheck.find((u) => u.email === email);

    if (matchEmail) {
      setError("Email already exist");

      setTimeout(() => {
        setError("");
      }, 1200);

      return;
    }

    createUser(email, password).then((result) => {
      const newUser = result.user;
      const userInfo = {
        name,
        email,
        password,
        photo,
        uid: newUser.uid,
      };

      console.log("User created (up)", newUser);
      Swal.fire({
        position: "center",
        icon: "success",
        title: `Congratulations ${userInfo.name}`,
        text: "Your account has been created successfully",
        timer: 1500,
      });

      fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(userInfo),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("User info saved", data);
        });
    });
  };
  return (
    <div className="py-20 my-10 max-h-screen bg-[#667C89] rounded-sm">
      <h2 className="text-center text-5xl font-bold my-10">Sign-Up Now!</h2>
      <form
        onSubmit={handleSignUp}
        type="submit"
        className="border mx-auto w-2/5 rounded-xl flex flex-col py-10 items-center bg-[#5A636A]"
      >
        <div className="flex flex-col space-y-2 mb-4 w-3/5">
          <label>Name *</label>
          <input
            type="text"
            placeholder="name"
            name="name"
            className="px-4 py-2 border"
            required
          />
        </div>
        <div className="flex flex-col space-y-2 mb-4 w-3/5">
          <label>Email *</label>
          <input
            type="email"
            placeholder="email"
            name="email"
            className="px-4 py-2 border"
            required
          />
          {error && (
            <p className="text-[#202C35] font-bold text-sm mt-1">{error}*</p>
          )}
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
        <div className="flex flex-col space-y-2 mb-4 w-3/5">
          <label>Photo URL *</label>
          <input
            type="text"
            placeholder="photo"
            name="photo"
            className="px-4 py-2 border"
            required
          />
        </div>
        <div>
          <a
            href="/signin"
            className="font-semibold cursor-pointer hover:text-black"
          >
            Log-In Now?
          </a>
        </div>
        <button className="w-2/5 font-bold py-2 my-5 border rounded cursor-pointer bg-[#395F69]">
          SignUp
        </button>
      </form>
    </div>
  );
}
