function Login() {
  return (
    <div className="w-72">

      <h2 className="text-2xl font-bold mb-4 text-center">
        Login
      </h2>

      <input
        type="text"
        placeholder="Email or Mobile"
        className="w-full border p-2 mb-4 rounded"
      />

      <input
        type="password"
        placeholder="Password"
        className="w-full border p-2 mb-4 rounded"
      />

      <button className="w-full bg-black text-white py-2 rounded hover:bg-gray-800">
        Login
      </button>

      <p className="text-sm text-blue-600 mt-3 text-center cursor-pointer">
        Forgot Password?
      </p>

    </div>
  );
}

export default Login;