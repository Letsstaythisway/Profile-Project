import React from "react";

function ProfileViewer({ name, title, image, closeModal }) {
  // const {name, title, image} = item;

  return (
    <div
      className="fixed inset-0 z-50 bg-opacity-60 bg-black h-[100vh] w-[100vw] flex flex-col items-center justify-center"
      aria-hidden="true"
    >
      <div className="bg-white flex flex-col items-center justify-center text-black px-8 py-4  rounded-lg gap-2">
        <img
          src={image}
          className="h-[250px] w-[250px] border border-0 rounded-full"
        />
        <div>{name}</div>
        <div>{title}</div>
        <button
          className="border border-1 rounded-lg bg-black text-white px-6 py-2 "
          onClick={() => {
            closeModal(false);
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default ProfileViewer;
