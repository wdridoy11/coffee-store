import React from "react";

const CreateCoffee = () => {
  const handleAddCoffee = (event) => {
    event.preventDefault();
    // form target value
    const form = event.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const newCoffee = { name, chef, supplier, taste, category, details, photo };

    fetch(`http://localhost:5000/coffees`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className="py-20">
      <div className="container mx-auto px-5">
        <div className="w-full lg:w-1/1 p-24 mx-auto bg-[#F4F3F0] rounded-lg">
          <h1 className="text-center font-semibold text-5xl mb-5">
            Add New Coffee
          </h1>
          <p className="text-start text-base text-slate-600 font-normal mb-5">
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
          <div>
            <form onSubmit={handleAddCoffee}>
              <div className="grid md:grid-cols-2 gap-5 mb-3">
                <div>
                  <label className="label">
                    <span className="label-text text-base font-medium text-black">
                      Name
                    </span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter coffee name"
                    className="input input-bordered w-full rounded-none"
                    required
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-text text-base font-medium text-black">
                      Chef
                    </span>
                  </label>
                  <input
                    type="text"
                    name="chef"
                    id="chef"
                    placeholder="Enter coffee chef"
                    className="input input-bordered w-full rounded-none"
                    required
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-5 mb-3">
                <div>
                  <label className="label">
                    <span className="label-text text-base font-medium text-black">
                      Supplier
                    </span>
                  </label>
                  <input
                    type="text"
                    name="supplier"
                    id="supplier"
                    placeholder="Enter coffee supplier"
                    className="input input-bordered w-full rounded-none"
                    required
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-text text-base font-medium text-black">
                      Taste
                    </span>
                  </label>
                  <input
                    type="text"
                    name="taste"
                    id="taste"
                    placeholder="Enter coffee taste"
                    className="input input-bordered w-full rounded-none"
                    required
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-5 mb-3">
                <div>
                  <label className="label">
                    <span className="label-text text-base font-medium text-black">
                      Category
                    </span>
                  </label>
                  <input
                    type="text"
                    name="category"
                    id="category"
                    placeholder="Enter coffee category"
                    className="input input-bordered w-full rounded-none"
                    required
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-text text-base font-medium text-black">
                      Details
                    </span>
                  </label>
                  <input
                    type="text"
                    name="details"
                    id="details"
                    placeholder="Enter coffee details"
                    className="input input-bordered w-full rounded-none"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="label">
                  <span className="label-text text-base font-medium text-black">
                    Photo
                  </span>
                </label>
                <input
                  type="text"
                  name="photo"
                  id="photo"
                  placeholder="Enter photo URL"
                  className="input input-bordered w-full rounded-none"
                  required
                />
              </div>
              <div>
                <input
                  className="btn border-0 w-full mt-5 bg-[#FECACA] text-black"
                  type="submit"
                  value="Add Coffee"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCoffee;
