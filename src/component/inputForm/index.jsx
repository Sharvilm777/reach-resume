/* eslint-disable react/prop-types */
const InputFrom = ({ children, title, baseline, ...rest }) => {
  return (
    <form
      className="rounded bg-gray-700 px-4 py-6 flex items-start flex-col w-4/5  shadow-lg"
      {...rest}>
      {title && (
        <div className="w-full">
          <h2 className="text-3xl mb-2 font-semibold text-gray-200"> {title}</h2>
          {baseline && <hr />}
        </div>
      )}
      <div className="flex flex-col items-start w-full">{children}</div>
      <button className="self-end mt-4 text-gray-100 bg-blue-500 py-2 px-3 font-semibold rounded hover:bg-blue-600 hover:shadow-lg transition-all ease-in-out duration-200">
        Save
      </button>
    </form>
  );
};

export default InputFrom;
