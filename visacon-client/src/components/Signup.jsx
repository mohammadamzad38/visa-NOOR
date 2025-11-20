export default function Signup() {
  return (
    <div className="py-20 my-10 max-h-screen bg-[#667C89] rounded-sm">
      <h2 className="text-center text-5xl font-bold my-10">Sign-Up Now!</h2>
      <form
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
            type="photo"
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
