/* eslint-disable react/prop-types */

const Input = ({
  id,
  label,
  placeholder,
  type = "text",
  message,
  validate = false,
  required = false,
  value = "",
  onChange,
  error,
  textarea = false,
  ...rest
}) => {
  return (
    <div className="flex flex-col gap-1 w-full my-2">
      <label htmlFor={id} className="font-semibold text-black">
        {label}
      </label>
      {!textarea ? (
        <input
          {...rest}
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={`flex w-full border p-2 rounded bg-white ${
            error ? "outline outline-red-400" : "outline-blue-200"
          } `}
        />
      ) : (
        <textarea
          {...rest}
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={`flex w-full border p-2 rounded bg-white ${
            error ? "outline outline-red-400" : "outline-blue-200"
          } `}
        />
      )}

      {error && message && <p className="text-sm text-red-400">{message}</p>}
    </div>
  );
};

export default Input;
