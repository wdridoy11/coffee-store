import React, { useState } from "react";
import Swal from "sweetalert2";

import { useLoaderData } from "react-router-dom";
import CoffeeCard from "../../../components/coffee_card/CoffeeCard";

const Home = () => {
  const coffeesData = useLoaderData();
  const [coffees, setCoffees] = useState(coffeesData);
  const handleDeleteCoffee = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffees/${id}`, {
          method: "DELETE",
          headers: {
            "content-type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
            const remaining = coffees.filter((coffee) => coffee._id !== id);
            setCoffees(remaining);
          });
      }
    });
  };
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-2 gap-10">
        {coffees.map((coffee) => (
          <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            handleDeleteCoffee={handleDeleteCoffee}
          ></CoffeeCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
