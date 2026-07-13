export default function RegisterForm() {
  return (
    <div className="space-y-5">

      <input
        type="text"
        placeholder="Full Name"
        className="w-full rounded-xl border p-4"
      />

      <input
        type="email"
        placeholder="Email Address"
        className="w-full rounded-xl border p-4"
      />

      <input
        type="password"
        placeholder="Password"
        className="w-full rounded-xl border p-4"
      />

      <button className="w-full rounded-xl bg-blue-700 p-4 text-white hover:bg-blue-800">
        Create Account
      </button>

      <p className="text-center text-sm text-gray-500">
        Already have an account? Login
      </p>

    </div>
  );
}