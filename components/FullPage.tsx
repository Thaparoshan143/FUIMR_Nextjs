interface IFullPageProps {
  oClassName?: string;
  children?: any;
}

const FullPage = ({ oClassName, children }: IFullPageProps) => {
  return (
    <section
      className={`relative min-h-screen w-screen flex flex-col justify-evenly items-center ${oClassName}`}
    >
      {children}
    </section>
  );
};

export default FullPage;
