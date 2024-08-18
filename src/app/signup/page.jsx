import SignupForm from "@/components/auth/SignupForm";

export default function SignupPage() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center text-gray-700 mb-6">
          Signup
        </h1>
        <SignupForm />
      </div>
    </div>
  );
}
