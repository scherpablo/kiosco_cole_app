const Title = ({ children }: { children: React.ReactNode }) => {
    return (
      <>
        <h1 className="text-4xl text-center font-black">
          {children}
        </h1>
      </>
    );
  };
  
  export default Title;
  