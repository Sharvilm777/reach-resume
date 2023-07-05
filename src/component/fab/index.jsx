const FAB = () => {
  // const { data } = useContext(ResumeContext);
  // const { generate, setGenerate } = useContext(GenerateResumeContext);
  // const handleClickOnLink = () => {
  //   setGenerate(true);
  // };
  // useEffect(() => {
  //   setGenerate(false);
  // }, [data]);

  return (
    <>
      <a
        href="#preview"
        className="fixed animate-bounce bottom-3 right-2 z-[99]  text-gray-100 bg-orange-400 py-2 px-3 font-semibold rounded hover:bg-orange-500 hover:shadow-lg transition-all ease-in-out duration-200">
        Preview
      </a>
    </>
  );
};

export default FAB;
