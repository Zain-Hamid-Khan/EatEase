import React, { useEffect, useState } from 'react';
import FoodData from '../Data/FoodData';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../Redux/slices/CategorySlice';

const CategoryMenu = () => {
    const [categories, setCategories] = useState([]);

    const dispatch = useDispatch();
    const selectedCategory = useSelector((state) => state.category?.category);

    const listUniqueCategories = () => {
        const uniqueCategories = [...new Set(FoodData.map((food) => food.category))];
        setCategories(uniqueCategories);
    };

    useEffect(() => {
        listUniqueCategories();
    }, []);

    const handleCategoryChange = (category) => {
        dispatch(setCategory(category));
        console.log(`Category set to: ${category}`);
    };

    return (
        <div className='my-3 flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden'>
            <button
                onClick={() => handleCategoryChange("All")}
                className={`ml-5 px-5 py-2 bg-gray-300 font-bold hover:bg-green-500 hover:text-white rounded-lg ${selectedCategory === "All" && "bg-green-500 text-white" }`}
            >
                All
            </button>
            {categories.map((category, index) => (
                <button
                    onClick={() => handleCategoryChange(category)}
                    key={index}
                    className={`px-3 py-2 bg-gray-300 font-bold hover:bg-green-500 hover:text-white rounded-lg ${selectedCategory === category && "bg-green-500 text-white"}`}
                >
                    {category}
                </button>
            ))}
        </div>
    );
};

export default CategoryMenu;
