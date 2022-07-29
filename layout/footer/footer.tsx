import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <>
      <footer className="footer bg-gray-800 text-white flex justify-around items-center py-10 md:justify-center md:gap-8">
        <Link href="/terms">Terms</Link>
        <Link href="/privacy">Privacy Policy</Link>
        <Link href="/github">Github</Link>
        <Link href="/twitter">Twitter</Link>
      </footer>
    </>
  );
};

export default Footer;
