import style from './layout.module.css';

export default function AuthLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className={style.backgroundContent}></div>
      <div className={style.authContent}>{children}</div>
    </div>
  );
}
