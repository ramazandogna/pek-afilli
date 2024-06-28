//Next
import Link from 'next/link';
//Styles
import styles from './register.module.css';
//Icons
import { HandRaiseIcon } from '../../../icons/HandRaiseIcon';
import { PasswordIcon } from '../../../icons/PasswordIcon';
import { EyeIcon } from '../../../icons/EyeIcon';
import { LinkIcon } from '../../../icons/LinkIcon';
import { NameIcon } from '../../../icons/NameIcon';
import { RenameIcon } from '../../../icons/RenameIcon';
import { EmailIcon } from '../../../icons/EmailIcon';
import { CompanyIcon } from '../../../icons/CompanyIcon';
import { ArrowRightIcon } from '../../../icons/ArrowRightIcon';

const formatDate = (date: any) => {
  const year = date.getFullYear();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const formattedMonth = month < 10 ? `0${month}` : month;

  return `${day}.${formattedMonth}.${year}`;
};

export default function Register() {
  const today = new Date();
  const time = formatDate(today);

  return (
    <div className={styles.authSide}>
      <div className={styles.titleWrapper}>
        <h1 className={styles.title}>Register</h1>
        <div className={styles.date}>{time}</div>
      </div>
      <div className="inputWrapper">
        <NameIcon className={styles.inputIcon} />
        <input
          className="input"
          v-model="auth.usernameOrEmail"
          type="text"
          placeholder=" "
          id="usernameOrEmail"
        />
        <label className="label" htmlFor="Name">
          Name
        </label>
      </div>
      <div className="inputWrapper">
        <RenameIcon className={styles.inputIcon} />
        <input
          className="input"
          v-model="auth.usernameOrEmail"
          type="text"
          placeholder=" "
          id="usernameOrEmail"
        />
        <label className="label" htmlFor="usernameOrEmail">
          Surname
        </label>
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
          Username
        </label>
      </div>
      <div className="inputWrapper">
        <EmailIcon className={styles.inputIcon} />
        <input
          className="input"
          v-model="auth.usernameOrEmail"
          type="text"
          placeholder=" "
          id="usernameOrEmail"
        />
        <label className="label" htmlFor="usernameOrEmail">
          Email
        </label>
      </div>
      <div className="inputWrapper">
        <CompanyIcon className={styles.inputIcon} />
        <input
          className="input"
          v-model="auth.usernameOrEmail"
          type="text"
          placeholder=" "
          id="usernameOrEmail"
        />
        <label className="label" htmlFor="usernameOrEmail">
          Company
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

        <Link className={styles.right} href="/auth/login">
          <div className={styles.registerButton}>
            <LinkIcon className={styles.registerIcon} />
            <p className={styles.register}>Back To Login</p>
          </div>
        </Link>
        <button
          className={`backgroundContent ${styles.button}`}

          // onClick={() => {}}
        >
          Register
        </button>
      </div>
      <Link href="/" className={styles.backToHomepage}>
        <div> Back to Homepage</div>
        <ArrowRightIcon />
      </Link>
    </div>
  );
}
