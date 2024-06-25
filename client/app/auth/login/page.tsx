import Link from 'next/link';

export default function Login() {
  return (
    <div className="bg-white">
      <div>This is Login component</div>
      <Link href="/auth/register">Kayıt Ol</Link>
    </div>
  );
}
