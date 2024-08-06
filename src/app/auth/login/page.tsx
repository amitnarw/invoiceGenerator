const Login = () => {
  const handleSubmit = async (formData: FormData) => {
    "use server";
    try {
      const email = formData.get("email");
      const password = formData.get("password");
      console.log(email, password, "CHECK");
    } catch (error) {
      console.log("Something went wrong, please try again!");
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-5/12">
        <h1 className="font-semibold sm:text-4xl text-xl lg:text-center text-start mb-8">
          NEXINVOICE
        </h1>
        <div className="bg-white rounded-xl shadow-lg p-10">
          <h1 className="text-center font-semibold text-3xl">Sign in</h1>
          <p className="text-center text-gray-500">Welcome back!</p>
          <form action={handleSubmit}>
            <div className="mt-5">
              <p className="text-sm text-gray-500 mb-2 ml-2">Email</p>
              <input
                name="email"
                type="text"
                className="inputNonHoverShow !text-lg"
              />
            </div>
            <p className="text-sm text-gray-500 mb-2 ml-2 mt-5">Password</p>
            <input
              name="password"
              type="password"
              className="inputNonHoverShow !text-lg"
            />
            <div className="text-end mt-2">
              <button className="text-sm text-gray-500 hover:text-black cursor-pointer px-5 duration-300">
                Forgot password?
              </button>
            </div>
            <button className="bg-[#3498db] hover:bg-[#2980b9] text-white w-full p-2 rounded-md mt-6 duration-300">
              Sign in
            </button>
            <div className="text-center mt-5">
              <span>Don't have an account yet?</span>
              <button className="text-[#34495e] hover:text-[#2c3e50] cursor-pointer duration-300 font-medium px-2">
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
