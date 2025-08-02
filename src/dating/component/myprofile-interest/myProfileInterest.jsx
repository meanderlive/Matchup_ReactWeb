import React, { useState } from "react";
const MyProfileSelectedInterest = () => {
    const [selectedInterests, setSelectedInterests] = useState([]);

    const interests = [
        "Traveling",
        "Reading",
        "Cooking",
        "Sports",
        "Music",
        "Photography",
        // "Gaming",
        // "Fitness",
        // "Art",
        // "Movies",
        // "Technology",
        // "Fashion",
        // "Foodie",
        // "Hiking",
        // "Dancing",
        // "Writing",
        // "Yoga",
        // "Animals",
        // "Science",
        // "History",
        // "Painting",
        // "Coding",
        // "Swimming",
        // "Camping",
        // "Singing",
        // "Crafting",
        // "Meditation",
        // "Coffee Lover",
        // "Volunteering",
        // "Travelling",
        // "Gardening",
        // "Basketball",
        // "Soccer",
        // "Guitar",
        // "Piano",
        // "Biking",
        // "DIY Projects",
        // "Book Club",
        // "Poetry",
        // "Chess",
        // "Cookbook Enthusiast",
        // "Pottery",
        // "Archery",
        // "Calligraphy",
        // "Languages",
        // "Board Games",
        // "Astrology",
        // "Astronomy",
        // "Cycling",
        // "Tea Connoisseur",
        // "Karaoke",
        // "Cinema",
        // "Historical Fiction",
        // "Nature Walks",
        // "Philosophy",
        // "Sketching",
        // "Graphic Design",
        // "Running",
        // "Yoga",
        // "Stand-up Comedy",
        // "Culinary Arts",
        // "Documentaries",
        // "Car Enthusiast",
        // "Rock Climbing",
        // "Chess",
        // "DIY Home Decor",
        // "Foreign Films",
        // "Cultural Festivals",
        // "Concerts",
        // "Writing",
        // "Snorkeling",
        // "Badminton",
        // "Ballet",
        // "Vintage Collecting",
    ];


    return (
        <div className="container">
        <div className="row">
            <div className="col">
                {interests.map((interest, index) => (
                    <div
                        key={index}
                        style={{
                            margin: "10px 10px 10px 10px",
                            background:"#e36ba5",
                            color:"#fff",
                            padding: "5px 12px",
                            borderRadius: "25px",
                            cursor: "pointer",
                        }}
                        className={`interest-item flex-nowrap ${selectedInterests.includes(interest) ? "selected" : ""}`}
                    >
                        {interest}
                    </div>
                ))}
            </div>
        </div>
    </div>
    );
};

export default MyProfileSelectedInterest;
