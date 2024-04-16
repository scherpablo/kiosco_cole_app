const Heading = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <h1 className="text-2xl font-semibold mt-5 mb-10 text-center">
        {children}
      </h1>
    </>
  );
};

export default Heading;
