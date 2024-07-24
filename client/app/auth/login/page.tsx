//next - react
import Link from 'next/link';
//helpers
import { formatDate } from '../../../helpers/functions';
//icons
import { RaisedHand } from '../../../public/icons/raisedHand';
import { Password } from '../../../public/icons/password';
import { Eye } from '../../../public/icons/eye';
import { LinkI } from '../../../public/assets/slider/link';
import { ArrowRight } from '../../../public/icons/arrowRight';

export default function Login() {
  const today = new Date();
  const time = formatDate(today);

  return (
    <div className="flex w-full flex-col gap-[16px] overflow-y-auto bg-[#f9fafb] p-[24px] [box-shadow:_10px_0_10px_-5px_rgba(0,_0,_0,_0.5)]  sm:w-[450px]">
      <div className="mt-[12px] flex items-center justify-between">
        <h1 className="text-2xl font-bold">Login</h1>
        <div className="text-[13px] opacity-70">{time}</div>
      </div>
      <div className="inputWrapper">
        <RaisedHand className="absolute left-[14px] top-[50%] z-[1] flex h-[24px] w-[24px] -translate-y-[50%] items-center text-[#9e9e9e]" />
        <input
          className="input"
          v-model="auth.usernameOrEmail"
          type="text"
          placeholder=" "
          id="usernameOrEmail"
        />
        <label className="label" htmlFor="usernameOrEmail">
          Username or Email
        </label>
      </div>

      <div className="inputWrapper">
        <Password
          className="absolute left-[14px] top-[50%]
z-[1] flex h-[24px] w-[24px] -translate-y-[50%] items-center text-[#9e9e9e]"
        />
        <input className="input" v-model="auth.password" placeholder=" " id="password" />
        <label className="label" htmlFor="password">
          Password
        </label>
        <div
          // onClick={() => {}}
          className="absolute right-[14px] top-[50%] z-[4] flex h-[38px] w-[38px] -translate-y-[50%] cursor-pointer items-center justify-center rounded-full transition-all duration-[400] hover:bg-[#08839520]"
        >
          <Eye className=" h-[24px] w-[24px] text-[#00000090] opacity-80" />
        </div>
      </div>

      <div className="flex w-[100%] flex-col items-center gap-[8px] sm:flex-row">
        <Link href="/forgot-password">
          <span className="cursor-pointer text-[13px] text-[#9e9e9e80] underline transition-all hover:text-[#08839575]">
            Şifremi Unuttum
          </span>
        </Link>

        <Link className="ml-0 w-full sm:ml-auto sm:w-auto" href="/auth/register">
          <div className="flex h-[42px] w-full items-center justify-center gap-[4px] rounded-[4px] border-2 px-[16px] py-[8px] font-bold transition-all hover:scale-105 hover:border-[#088395] sm:w-auto">
            <LinkI className=" h-[20px] w-[20px] text-black" />
            <span className="underline">Register</span>
          </div>
        </Link>
        <button
          className="backgroundContent h-[40px] w-full min-w-[92px] rounded-[4px] py-1 font-bold text-[#f9fafb] transition-all hover:scale-105 hover:border-2 hover:border-[#088395] hover:bg-[#f9fafb] sm:w-auto"

          // onClick={() => {}}
        >
          Login
        </button>
      </div>
      <Link
        href="/"
        className="absolute bottom-[8px] right-[8px] flex items-center gap-[8px] text-[14px] text-[#33333385] hover:text-[#333333]"
      >
        <div> Back to Homepage</div>
        <ArrowRight />
      </Link>
    </div>
  );
}
