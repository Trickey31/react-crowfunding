import React from "react";

const CampAuthor = () => {
  return (
    <div className="flex items-center gap-[10px]">
      <div>
        <img
          src="https://images.unsplash.com/photo-1661577849879-470cbf27418f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
          alt=""
          className="w-[30px] h-[30px] object-cover rounded-full"
        />
      </div>
      <p className="text-xs text-neutralText3 font-normal">
        by{" "}
        <span className="text-neutralText2 font-semibold">Mahfuzul Nabil</span>
      </p>
    </div>
  );
};

export default CampAuthor;
