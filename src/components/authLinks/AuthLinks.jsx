import Link from "next/link";
import styles from "./authLinks.module.css";

const AuthLinks = () => {
  //temp
  const status = "notauthanticated";
  return (
    <>
      {status == "notauthanticated" ? (
        <Link href="/login">Login</Link>
      ) : (
        <>
        <Link href="/write">Write</Link>
        <span className={styles.link}>Logout</span>
        </>
      )}
    </>
  );
};

export default AuthLinks;
