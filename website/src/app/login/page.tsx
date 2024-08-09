import Link from 'next/link';

export default function Login() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">Find Your Perfect Place, Effortlessly!</h1>
      <div className="flex flex-col items-center w-full max-w-xs">
        <button className="mb-4 w-full px-4 py-2 bg-black text-white rounded-md">Continue with Apple</button>
        <button className="mb-4 w-full px-4 py-2 bg-blue-600 text-white rounded-md">Continue with Facebook</button>
        <button className="mb-4 w-full px-4 py-2 bg-gray-600 text-white rounded-md">Sign up with Email</button>
        <p className="text-sm">By continuing you agree to our <Link href="/privacy-policy"><p className="text-yellow-600">Terms & Conditions</p></Link> and <Link href="/privacy-policy"><p className="text-yellow-600">Privacy Policy</p></Link>.</p>
      </div>
    </div>
  );
}
