import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <>
      <footer className="footer bg-gray-800 text-white flex justify-around items-center py-10 md:justify-center md:gap-8">
        <Link href="/">Terms</Link>
        <Link href="/">Privacy Policy</Link>
        <Link href="/">Github</Link>
        <Link href="/">Twitter</Link>
        <Link href="/I-DONT-KNOW-WHERE-YOU-ARE">404</Link>
      </footer>
    </>
  );
};

export default Footer;
