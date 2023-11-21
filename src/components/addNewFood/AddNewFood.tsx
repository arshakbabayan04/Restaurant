import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { v4 as uuidv4 } from "uuid";
import { useForm } from "react-hook-form";
import { Category, Food } from "../../types";
import { add } from "./foodSlice";

const AddNewFood = () => {
  const dispatch = useAppDispatch();

  const { categories } = useAppSelector((state) => state.food);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<Food>();

  const addFunc = (data: any) => {
    data.id = uuidv4();
    console.log(data);
    dispatch(add(data));
    reset()
  };

  return (
    <>
      <div
        className="add_food min-h-screen pt-10"
        style={{
          background:
            'url("https://images.unsplash.com/photo-1488992783499-418eb1f62d08?q=80&w=1589&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D") center center/cover no-repeat',
        }}
      >
        <div className="container mx-auto px-12">
          <h2
            className="font-mono text-2xl text-center text-red-400"
            style={{ fontSize: "48px" }}
          >
            Add New Food
          </h2>
          <form
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-12 w-1/2 mx-auto"
            onSubmit={handleSubmit(addFunc)}
          >
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="foodName"
              >
                Food Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Food Name"
                {...register("name", {
                  required: "Field is required",
                  pattern: {
                    value: /^[A-Za-z]+$/i,
                    message: "Enter letter",
                  },
                })}
              />
              {errors.name && (
                <p className="text-red-600">{errors.name.message}</p>
              )}
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="price"
              >
                Price
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="price"
                type="text"
                placeholder="Price"
                {...register("price", {
                  required: "Field is required",
                })}
              />
              {errors.price && (
                <p className="text-red-600">{errors.price.message}</p>
              )}
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="descr"
              >
                Description
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="descr"
                placeholder="Description"
                {...register("descr", {
                  required: "Field is required",
                })}
              />
              {errors.descr && (
                <p className="text-red-600">{errors.descr.message}</p>
              )}
            </div>
            <div className="mb-4 relative">
              <select
                aria-label="default select example"
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
                {...register("category", {
                  required: "Field is required",
                })}
              >
                <option value="">Category</option>
                {categories.map((el: Category) => (
                  <option value={el.name} key={el.id}>
                    {el.name}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
              {errors.category && (
                <p className="text-red-600">{errors.category.message}</p>
              )}
            </div>
            <div className="flex items-center justify-between">
              <button className="bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddNewFood;
