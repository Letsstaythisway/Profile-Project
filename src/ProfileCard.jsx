import React from "react";

const ProfileCard = ({ data, opensessame, setSelectedProfile }) => {
  const item = data;

  const OpenProfileViewer = () => {
    opensessame(true);
    setSelectedProfile(data);
  };
  return (
    <div className="flex flex-col items-center justify-center gap-3 my-3 bg-white text-black">
      <img src={item.image} className="h-[200px] w-[200px]" />
      <div> {item.name}</div>
      <div className="italic">{item.title}</div>
      <button
        className="border border-0 rounded-lg bg-black text-white p-2 mb-3"
        onClick={OpenProfileViewer}
      >
        View Profile
      </button>
    </div>
  );
};

export default ProfileCard;
