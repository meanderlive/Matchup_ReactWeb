import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch } from "react-redux";
import { updateInterestsAsync } from "../store/slice/profileSlice";

const SelectInterest = () => {
    const [selectedInterests, setSelectedInterests] = useState([]);
    const dispatch = useDispatch();
    const userId = '6567256d3ebf5c7f5efd10a8';
    const navigate = useNavigate();

    const [interests] = useState([
        "Traveling",
        "Reading",
        "Cooking",
        "Sports",
        "Music",
        "Photography",
        "Gaming",
        "Fitness",
        "Art",
        "Movies",
        "Technology",
        "Fashion",
        "Foodie",
        "Hiking",
        "Dancing",
        "Writing",
        "Yoga",
        "Animals",
        "Science",
        "History",
        "Painting",
        "Coding",
        "Swimming",
        "Camping",
        "Singing",
        "Crafting",
        "Meditation",
        "Coffee Lover",
        "Volunteering",
        "Travelling",
        "Gardening",
        "Basketball",
        "Soccer",
        "Guitar",
        "Piano",
        "Biking",
        "DIY Projects",
        "Book Club",
        "Poetry",
        "Chess",
        "Cookbook Enthusiast",
        "Pottery",
        "Archery",
        "Calligraphy",
        "Languages",
        "Board Games",
        "Astrology",
        "Astronomy",
        "Cycling",
        "Tea Connoisseur",
        "Karaoke",
        "Cinema",
        "Historical Fiction",
        "Nature Walks",
        "Philosophy",
        "Sketching",
        "Graphic Design",
        "Running",
        "Yoga",
        "Stand-up Comedy",
        "Culinary Arts",
        "Documentaries",
        "Car Enthusiast",
        "Rock Climbing",
        "Chess",
        "DIY Home Decor",
        "Foreign Films",
        "Cultural Festivals",
        "Concerts",
        "Writing",
        "Snorkeling",
        "Badminton",
        "Ballet",
        "Vintage Collecting",
    ]);

    const handleInterestToggle = (interest) => {
        const index = selectedInterests.indexOf(interest);

        if (index === -1) {
            setSelectedInterests((prev) => [...prev, interest]);
        } else {
            setSelectedInterests((prev) => prev.filter((item) => item !== interest));
        }
    };

    const saveSettings = async (settings) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
    };

    const handleNavigateHome = async () => {
        try {
            await new Promise((resolve) => setTimeout(resolve, 500));

            await toast.promise(
                dispatch(updateInterestsAsync({ userId, interests: selectedInterests })),
                {
                    loading: 'Saving  your interests  😍...',
                    success: <b>Settings saved! Redirecting...</b>,
                    error: <b>Could not save. Please try again.</b>,
                }
            );

            navigate('/dating/add-photos');
        } catch (error) {
            toast.error("Error submitting interests. Please try again.");
        }
    }

    return (
        <div className="container padding-top padding-bottom">
            <div className="row">
                <h2 className="mb-4">Select Your Interests</h2>
                <div className="col">
                    {interests.map((interest, index) => (
                        <Link
                            key={index}
                            style={{
                                border: `1px solid ${selectedInterests.includes(interest) ? "#d63384" : "lightgray"}`,
                                margin: "10px 10px 10px 10px",
                                padding: "5px 12px",
                                borderRadius: "25px",
                                cursor: "pointer",
                            }}
                            className={`interest-item flex-nowrap ${selectedInterests.includes(interest) ? "selected" : ""}`}
                            onClick={() => handleInterestToggle(interest)}
                        >
                            {interest}
                        </Link>
                    ))}
                </div>
            </div>
            <div className="col-4 mt-4">
                {selectedInterests.length > 0 ? (
                    <button
                        className="default-btn reverse"
                        onClick={handleNavigateHome}
                    >
                        <span>Submit your interests</span>
                    </button>
                ) : (
                    <button
                        className="default-btn reverse"
                        onClick={() => navigate('/dating/add-photos')}
                    >
                        <span>Skip</span>
                    </button>
                )}
            </div>
        </div>
    );
};

export default SelectInterest;
