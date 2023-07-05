/* eslint-disable react/prop-types */


const Chip = ({ name, id, remove,  }) => {
  const removeSkill = (skillId) => {  
    remove(skillId)
  };
  return (
    <div
      data-te-chip-init
      data-te-ripple-init
      className="[word-wrap: break-word] my-[5px] mr-4 flex h-[32px] cursor-pointer items-center justify-between rounded-[16px] border-2 border-gray-400 bg-[#eceff1] bg-[transparent] px-[12px] py-0 text-[13px]  leading-loose font-semibold text-gray-400 hover:scale-105 hover:shadow-md transition-all duration-300 ease-in-out"
    >
      {name ? name : "Name"}
      <span
        data-te-chip-close
        className="float-right w-4 cursor-pointer pl-[8px] text-[16px] text-gray-200 opacity-[.53] transition-all duration-200  ease-linear scale-110"
        onClick={() => removeSkill(id)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="4.5"
          stroke="currentColor"
          className="h-3 w-3"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </span>
    </div>
  );
};

export default Chip;
