//next - react
import Link from 'next/link';
//components
import BreadCrumb from '../../../components/breadCrumb';
import { HandRaiseIcon } from '../../../icons/HandRaiseIcon';
import { PasswordIcon } from '../../../icons/PasswordIcon';
import { EyeIcon } from '../../../icons/EyeIcon';
import { LinkIcon } from '../../../icons/LinkIcon';
import { ArrowRightIcon } from '../../../icons/ArrowRightIcon';
//styles
import styles from './login.module.css';
//helpers
import { formatDate } from '../../../helpers/functions';

export default function Login() {
  const today = new Date();
  const time = formatDate(today);

  return (
    <div className={styles.authSide}>
      <div className={styles.titleWrapper}>
        <h1 className={styles.title}>Login</h1>
        <div className={styles.date}>{time}</div>
      </div>
      <div className="inputWrapper">
        <HandRaiseIcon className={styles.inputIcon} />
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
        <PasswordIcon
          className="absolute left-[14px] top-[50%]
z-[1] flex h-[24px] w-[24px] -translate-y-[50%] items-center text-[#9e9e9e]"
        />
        <input className="input" v-model="auth.password" placeholder=" " id="password" />
        <label className="label" htmlFor="password">
          Password
        </label>
        <div
          // onClick={() => {}}
          className={styles.eyeIconWrapper}
        >
          <EyeIcon className={styles.eyeIcon} />
        </div>
      </div>

      <div className={styles.buttonContainer}>
        <Link href="/forgot-password">
          <p className={styles.forgetPassword}>Şifremi Unuttum</p>
        </Link>

        <Link className={styles.right} href="/auth/register">
          <div className={styles.registerButton}>
            <LinkIcon className={styles.registerIcon} />
            <p className={styles.register}>Register</p>
          </div>
        </Link>
        <button
          className={`backgroundContent ${styles.button}`}

          // onClick={() => {}}
        >
          Login
        </button>
      </div>
      <Link href="/" className={styles.backToHomepage}>
        <div> Back to Homepage</div>
        <ArrowRightIcon />
      </Link>
    </div>
  );
}
