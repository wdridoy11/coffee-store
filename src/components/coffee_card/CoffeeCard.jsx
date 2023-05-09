import React from "react";
// import Swal from "sweetalert2";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const CoffeeCard = ({ coffee, handleDeleteCoffee }) => {
  const { _id, name, chef, taste, category, photo } = coffee;
  return (
    <div>
      <div className="card card-side shadow-xl bg-[#F5F4F1] p-14 rounded-lg">
        <figure>
          <img
            className="w-full h-[250px] object-cover"
            src={photo}
            alt="Movie"
          />
        </figure>
        <div className="flex justify-between items-center w-full ps-10">
          <div>
            <h2 className="card-title">
              <strong>Name:</strong> {name}
            </h2>
            <p className="my-2 text-base font-medium text-black">
              <strong>Chef:</strong> {chef}
            </p>
            <p className="mb-2 text-base font-medium text-black">
              <strong>Taste:</strong> {taste}
            </p>
            <p className="text-base font-medium text-black">
              <strong>category:</strong> {category}
            </p>
          </div>
          <div>
            <div className="btn-group btn-group-vertical gap-5">
              <button className="p-4 rounded-lg bg-[#D2B48C] text-white border-none">
                <FaEye />
              </button>
              <Link
                to={`/updateCoffee/${_id}`}
                className="p-4 rounded-lg bg-[#3C393B] text-white border-none"
              >
                <FaEdit />
              </Link>
              <button
                onClick={() => handleDeleteCoffee(_id)}
                className="p-4 rounded-lg bg-[#EA4744] text-white border-none"
              >
                <FaTrash />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
