import { NavLink } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";

const ShowAllSet = () => {

    const { sets } = useAppSelector(state => state.food)

    return (
        <>
            <div className="all_set min-h-screen pt-10" style={{ background: 'url("https://images.unsplash.com/photo-1579631542761-d7c4e913f8d4?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D") center center/cover no-repeat' }}>
                <div className="container mx-auto px-12">
                    <h2 className="font-mono text-2xl text-center text-red-400" style={{ fontSize: '48px' }}>All Set</h2>
                    <ul role="list" className="divide-y divide-gray-100 mt-10 w-2/3 mx-auto">
                        

                        {sets.map((el) => 
                            <li key={el.id} className="flex justify-between gap-x-6 py-5 p-5 items-center w-full text-sm mb-5 font-medium text-gray-900 bg-white border border-gray-300 rounded-lg sm:flex">
                                <div className="flex min-w-0 gap-x-4">
                                    <div className="min-w-0 flex-auto">
                                        <p className="text-sm font-semibold leading-6 text-gray-900">{el.name}</p>
                                        <p className="mt-1 truncate text-xs leading-5 text-gray-500"> {el.foods.join(', ')}</p>
                                    </div>
                                </div>
                                <button className="text-center bg-transparent hover:bg-red-400 text-red-400 font-semibold hover:text-white py-2 px-4 border border-red-400 hover:border-transparent rounded">
                                    <NavLink to={`/set/${el.id}`}>
                                        More
                                    </NavLink>
                                </button>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default ShowAllSet;