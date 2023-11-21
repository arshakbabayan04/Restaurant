import { FC, useMemo } from "react";
import { useAppSelector } from "../../store/hooks";
import { useParams } from "react-router-dom";
import { Food, Set } from "../../types";

const SingleSet: FC = () => {
  const { id } = useParams();

  const { sets, foods } = useAppSelector((state) => state.food);

  const data = useMemo(() => sets.find((el: Set) => el.id === id), []) as Set;

  const fiteredFoods = useMemo(() => {
    return foods.filter((el: Food) => data.foods.includes(el.id));
  }, []);

  return (
    <>
      <div
        className="single_set min-h-screen pt-10"
        style={{
          background:
            'url("https://images.unsplash.com/photo-1579631542761-d7c4e913f8d4?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D") center center/cover no-repeat',
        }}
      >
        <div className="container mx-auto px-12">
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-12 w-1/2 mx-auto">
            <h2 className="text-4xl font-bold mt-5 underline">
              Set {data.name}
            </h2>
            <p className="my-4 text-xl text-gray-500">Food List</p>
            <ul className="my-4 text-lg text-gray-500">
              {fiteredFoods.map((elm: Food) => {
                return <li key={elm.id}>{elm.name}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleSet;
