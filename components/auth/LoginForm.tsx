export default function LoginForm() {
  return (
    <div className="space-y-6">

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

      <button
        className="w-full rounded-xl bg-blue-700 p-4 text-white hover:bg-blue-800"
      >
        Login
      </button>

      <p className="text-center text-sm text-gray-500">
        Don't have an account? Register
      </p>

    </div>
  );
}