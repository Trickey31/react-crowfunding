import React from "react";

const CampViewAuthor = () => {
  return (
    <div className="flex items-center gap-5 mb-[35px]">
      <img
        src="https://images.unsplash.com/photo-1661577849879-470cbf27418f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
        alt=""
        className="w-[60px] h-[60px] object-cover rounded-full"
      />
      <div className="flex flex-col flex-1">
        <div className="flex items-center gap-[15px]">
          <h3 className="text-lg text-neutralText1 font-medium">
            Saiful Islam
          </h3>
          <div className="flex items-center">
            {Array(5)
              .fill(0)
              .map((item, index) => (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 text-yellow-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
              ))}
          </div>
        </div>
        <div className="flex items-center gap-[10px]">
          <p className="text-sm text-primary font-semibold">02 Campaign</p>
          <span className="block bg-neutralText3 w-[6px] h-[6px] rounded-full"></span>
          <span className="text-sm text-neutralText3 font-normal">
            Dhaka, Bangladesh
          </span>
        </div>
      </div>
    </div>
  );
};

export default CampViewAuthor;
