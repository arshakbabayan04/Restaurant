import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { v4 as uuidv4 } from "uuid";
import { Controller, useForm } from "react-hook-form";
import { Set, Food, Category } from "../../types";
import { addSet } from "../addNewFood/foodSlice";
import { useMemo, useState } from "react";

const AddNewSet = () => {
  const { foods, categories } = useAppSelector((state) => state.food);
  const dispatch = useAppDispatch();
  const [activeCategory, setActiveCategory] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    control,
    reset,
  } = useForm<Set>();
  const addFunc = (data: any) => {
    if (data.foods.length < 2) {
      setError("foods", { type: "custom", message: "Entered foods are < 2" });
    } else {
      data.id = uuidv4();
      dispatch(addSet(data));
    }
    reset();
  };

  const filteredFoods: Food[] = useMemo(() => {
    if (activeCategory !== "") {
      return foods.filter(
        (elm: Food) =>
          elm.category.toLowerCase() === activeCategory?.toLowerCase()
      );
    }

    return foods;
  }, [activeCategory]);

  return (
    <>
      <div
        className="food_set min-h-screen pt-10"
        style={{
          background:
            'url("https://images.unsplash.com/photo-1579631542761-d7c4e913f8d4?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D") center center/cover no-repeat',
        }}
      >
        <div className="container mx-auto px-12">
          <h2
            className="font-mono text-2xl text-center text-red-400"
            style={{ fontSize: "48px" }}
          >
            Add New Set
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
                Set Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="foodName"
                type="text"
                placeholder="Set Name"
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

            <h3 className="mb-2 font-semibold text-gray-900">
              Set Food Category
            </h3>
            <ul className="items-center w-full text-sm mb-5 font-medium text-gray-900 bg-white border border-gray-300 rounded-lg sm:flex">
              {categories.map((elm: Category) => (
                <li
                  key={elm.id}
                  className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r"
                >
                  <div className="flex items-center ps-3">
                    <input
                      onChange={(e) => setActiveCategory(e.target.value)}
                      id={`category${elm.id}`}
                      type="radio"
                      value={elm.name}
                      name="list-radio"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 "
                    />
                    <label
                      htmlFor={`category${elm.id}`}
                      className="w-full py-3 ms-2 text-sm font-medium text-gray-900"
                    >
                      {elm.name}
                    </label>
                  </div>
                </li>
              ))}
            </ul>

            <ul className="text-sm font-medium text-black-600 bg-white border border-gray-200 rounded-lg">
              {filteredFoods.map((el) => (
                <li
                  key={el.id}
                  className="w-full border-b border-gray-200 rounded-t-lg"
                >
                  <div className="flex items-center ps-3">
                    <input
                      id={`food${el.id}`}
                      type="checkbox"
                      value={el.id}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      {...register("foods", {
                        required: "Field is required",
                      })}
                    />

                    <label
                      htmlFor={`food${el.id}`}
                      className="w-full py-3 ms-2 text-sm font-medium text-gray-900"
                    >
                      {el.name}
                    </label>
                  </div>
                </li>
              ))}
            </ul>
            {errors.foods && (
              <p className="text-red-600">{errors.foods.message}</p>
            )}
            <div className="flex items-center justify-between mt-4">
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

export default AddNewSet;
