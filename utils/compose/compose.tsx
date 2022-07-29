type Props = {
  providers: Array<React.JSXElementConstructor<React.PropsWithChildren<any>>>;
  children: React.ReactNode;
};

const Compose: React.FC<Props> = ({ providers, children }) => {
  return (
    <>
      {providers.reduceRight((children, Components) => {
        return <Components>{children}</Components>;
      }, children)}
    </>
  );
};

export default Compose;
