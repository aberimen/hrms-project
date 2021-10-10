import React, { useEffect, useState } from 'react';
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

const LanguageSkill = ({ name, level }) => {

    const [stars, setStars] = useState([]);

    const levels = {
        BEGINNER: 1,
        ELEMENTARY: 2,
        INTERMEDIATE: 3,
        UPPER_INTERMEDIATE: 4,
        ADVANCED: 5
    };

    const starCount = levels[level];

    const loadStars = () => {
        for (let i = 0; i < 5; i++) {
            if (i < starCount)
                setStars((prev) => [...prev, <AiFillStar className="text-warning" />]);
            else
                setStars((prev) => [...prev, <AiOutlineStar className="text-warning" />]);
        }
    }

    useEffect(() => {
        loadStars();
    }, [])


    return (
        <div className="container p-2">
            <div className="d-flex align-items-center justify-content-center">
                <div className="me-2">{name}</div>
                {stars.map(star => star)}

            </div>
        </div>
    );
};

export default LanguageSkill;