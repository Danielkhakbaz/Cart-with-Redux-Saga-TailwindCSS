import Head from "next/head";
import Link from "next/link";
import { MdOutlineHome } from "react-icons/md";

const NotFound: React.FC = () => {
  return (
    <>
      <Head>
        <title>404 | Cart Web Application</title>
      </Head>

      <main className="min-h-screen bg-white text-black flex flex-col justify-center items-center gap-8 text-center">
        <header className="absolute top-0 pt-10"></header>
        <strong className="text-6xl">Oops!</strong>
        <p className="text-2xl">404 - Page not found!</p>
        <Link href="/">
          <button className="bg-black text-white flex flex-row justify-center items-center gap-2 text-center rounded-3xl px-6 py-2">
            <MdOutlineHome className="text-xl" />
            <span>Back to home</span>
          </button>
        </Link>
      </main>
    </>
  );
};

export default NotFound;
