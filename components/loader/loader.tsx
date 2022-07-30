import classes from "../../styles/modules/loader.module.css";

const Loader: React.FC = () => {
  return (
    <>
      <main className="min-h-screen flex justify-center items-center">
        <div className={classes.loader__icon} />
      </main>
    </>
  );
};

export default Loader;
