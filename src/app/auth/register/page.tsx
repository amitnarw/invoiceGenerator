const Login = () => {
  const handleSubmit = async (formData: FormData) => {
    "use server";
    try {
      const email = formData.get("email");
      const password = formData.get("password");
      console.log(email, password, formData, "CHECK");
    } catch (error) {
      console.log("Something went wrong, please try again!");
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-white/80">
      <div className="w-[700px] mx-3 mb-2">
        <h1 className="font-semibold sm:text-4xl text-xl text-center mb-8">
          NEXINVOICE
        </h1>
        <div className="bg-white rounded-xl shadow-lg px-10 pb-10 pt-8 border border-gray-100">
          <h1 className="text-center font-semibold text-3xl">
            Create a free account
          </h1>
          <p className="text-center text-gray-500 text-sm mt-1">
            Gain access to more features with an account.
          </p>
          <form action={handleSubmit}>
            <div className="mt-10 flex flex-row gap-5">
              <div className="w-full">
                <p className="text-sm text-gray-500 mb-2 ml-2">First Name</p>
                <input
                  name="first-name"
                  type="text"
                  className="inputNonHoverShow !text-lg"
                />
              </div>
              <div className="w-full">
                <p className="text-sm text-gray-500 mb-2 ml-2">Last Name</p>
                <input
                  name="last-name"
                  type="text"
                  className="inputNonHoverShow !text-lg"
                />
              </div>
            </div>
            <p className="text-sm text-gray-500 mb-2 ml-2 mt-5">Email</p>
            <input
              name="email"
              type="text"
              className="inputNonHoverShow !text-lg"
            />
            <p className="text-sm text-gray-500 mb-2 ml-2 mt-5">Password</p>
            <input
              name="password"
              type="password"
              className="inputNonHoverShow !text-lg"
            />
            <div className="mt-3 flex items-center gap-2 ml-1">
              <input
                type="checkbox"
                name="tac"
                id="tac"
                className="cursor-pointer w-4 h-4 text-gray-500"
              />
              <label
                htmlFor="tac"
                className="cursor-pointer text-sm text-gray-500"
              >
                I agree to the Terms of Service
              </label>
            </div>
            <button className="bg-[#3498db] hover:bg-[#2980b9] text-white w-full p-2 rounded-md mt-6 duration-300">
              Sign up
            </button>
            <div className="text-center mt-5 text-sm">
              <span>Already have an account?</span>
              <button className="text-[#34495e] hover:text-[#2c3e50] cursor-pointer duration-300 font-medium px-2">
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
