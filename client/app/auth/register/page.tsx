//next - react
import Link from 'next/link';
//components

import { formatDate } from '../../../helpers/functions';
//styles
import styles from './register.module.css';

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
        <div className={`${styles.inputIcon} i-icon-park-solid:edit-name`} />
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
        <div className={`${styles.inputIcon} i-lets-icons:rename`} />
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
        <div className={`${styles.inputIcon} i-material-symbols-light:person-raised-hand`} />
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
        <div className={`${styles.inputIcon} i-mdi:email-edit`} />
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
        <div className={`${styles.inputIcon} i-carbon-location-company`} />
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
        <div
          className="i-ic:sharp-password absolute left-[14px] top-[50%]
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
          <div className={`${styles.eyeIcon} i-mingcute:eye-fill`} />
        </div>
      </div>
      <div className="inputWrapper">
        <div
          className="i-ic:sharp-password absolute left-[14px] top-[50%]
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
          <div className={`${styles.eyeIcon} i-mingcute:eye-fill`} />
        </div>
      </div>

      <div className={styles.buttonContainer}>
        <Link href="/forgot-password">
          <p className={styles.forgetPassword}>Şifremi Unuttum</p>
        </Link>

        <Link className={styles.right} href="/auth/login">
          <div className={styles.registerButton}>
            <div className={`${styles.registerIcon} i-quill:link-out`} />
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
        <div className="i-lets-icons-arrow-right"></div>
      </Link>
    </div>
  );
}
