/* eslint-disable react/prop-types */
const InputFrom = ({
  children,
  title,
  baseline,
  next,
  isMore = false,
  preview,
  ...rest
}) => {
  return (
    <form
      className="rounded bg-gray-300 px-4 py-6 flex items-start flex-col w-4/5  shadow-lg"
      {...rest}
    >
      {title && (
        <div className="w-full">
          <h2 className="text-3xl mb-2 font-semibold text-black"> {title}</h2>
          {baseline && <hr />}
        </div>
      )}
      <div className="flex flex-col items-start w-full">{children}</div>
      {isMore && (
        <button className="self-start mt-4 text-white bg-[#f53855] py-2 px-3 font-semibold rounded hover:shadow-orange-md hover:shadow-lg transition-all ease-in-out duration-200">
          Add more
        </button>
      )}
      {!preview && (
        <button
          onClick={() => {
            next();
          }}
          className="self-end mt-4 text-white bg-[#f53855] py-2 px-3 font-semibold rounded hover:shadow-orange-md hover:shadow-lg transition-all ease-in-out duration-200"
        >
          Next
        </button>
      )}

      {preview && (
        <button className="self-end mt-4 text-white bg-[#f53855] py-2 px-3 font-semibold rounded hover:shadow-orange-md hover:shadow-lg transition-all ease-in-out duration-200">
          Save
        </button>
      )}
    </form>
  );
};

export default InputFrom;
