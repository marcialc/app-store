type AppCardWrapperProps = {
  children: React.ReactNode;
};

const AppCardWrapper = ({ children }: AppCardWrapperProps) => {
  return (
    <div className="flex flex-wrap gap-6 justify-center items-center">
      {children}
    </div>
  );
};

export default AppCardWrapper;
