import React from 'react';
import { Link } from 'react-router-dom';

const CategoryItem = ({category}) => {
    const {picture,title,_id} = category

    return (
         <div className="overflow-hidden transition-shadow duration-300 bg-white rounded-xl shadow-sm mb-3">
          <Link to={`/eventDetails/${_id}`}>
            <img
              src={picture}
              className="w-full h-[304px] object-cover"
              alt="img"
            />
          </Link>
          <div className="p-5">
            <h3
            className="capitalize inline-block mb-3 text-xl leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
            {title}
            </h3>
        </div>
      </div>
    );
};

export default CategoryItem;