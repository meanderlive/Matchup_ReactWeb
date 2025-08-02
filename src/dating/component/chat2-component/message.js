import { UserData } from "../../../assets/DummyData/userData";
import dummyUser from  "../../../dating/assets/images/myCollection/user-male.jpg"

export const messages = [
    {
      id: 1,
      avatar: UserData[1]?.avatar || dummyUser,
      name: UserData[1]?.name,
      profession: "Graphic Designer",
      content: "Hello, Are you there?",
      location:UserData[1]?.location,
      timestamp: "Just now",
      unreadCount: 3,
    },
    { 
      id: 2,
      avatar: UserData[2]?.avatar || dummyUser,
      name: UserData[2]?.name,
      content: "Nice to meet you.",
      profession: "Data Scientist",
      location:UserData[2]?.location,
      timestamp: "5 mins ago",
      unreadCount: 2,
    },
    {
      id: 3,
      avatar: UserData[3]?.avatar || dummyUser,
      name: UserData[3]?.name,
      profession: "UX Designer",
      location:UserData[3]?.location,
      content: "Good Morning.",
      timestamp: "Yesterday",
    },
    {
      id: 4,
      avatar: UserData[4]?.avatar || dummyUser,
      name: UserData[4]?.name,
      profession: "Product Manager",
      location:UserData[4]?.location,
      content: "Hello, How are You?",
      timestamp: "Yesterday",
    },
    {
      id: 5,
      avatar: UserData[5]?.avatar || dummyUser,
      name: UserData[5]?.name,
      profession: "Frontend Developer",
      location:UserData[5]?.location,
      content: "I Will Inform You.",
      timestamp: "Yesterday",
    },
    {
      id: 6,
      avatar: UserData[6]?.avatar || dummyUser,
      name: UserData[6]?.name,
      profession: "Marketing Specialist",
      location:UserData[6]?.location,
      content: "All have to........ .",
      timestamp: "Yesterday",
    },
    {
      id: 7,
      avatar: UserData[7]?.avatar || dummyUser,
      name: UserData[7]?.name,
      profession: "Software Engineer",
      location:UserData[7]?.location,
      content: "Just checking in.",
      timestamp: "2 days ago",
    },
    {
      id: 8,
      avatar: UserData[8]?.avatar || dummyUser,
      name: UserData[8]?.name,
      profession: "UI Designer",
      location:UserData[8]?.location,
      content: "How's your day going?",
      timestamp: "2 days ago",
    },
    {
      id: 9,
      avatar: UserData[9]?.avatar || dummyUser,
      name: UserData[9]?.name,
      profession: "Project Manager",
      location:UserData[9]?.location,
      content: "Excited for the weekend?",
      timestamp: "2 days ago",
    },
    {
      id: 10,
      avatar: UserData[10]?.avatar || dummyUser,
      name: UserData[10]?.name,
      profession: "Content Writer",
      location:UserData[10]?.location,
      content: "Any plans for tonight?",
      timestamp: "2 days ago",
    },
    {
      id: 11,
      avatar: UserData[11]?.avatar || dummyUser,
      name: UserData[11]?.name,
      profession: "Full Stack Developer",
      location:UserData[11]?.location,
      content: "What's your favorite movie?",
      timestamp: "2 days ago",
    },
    {
      id: 12,
      avatar: UserData[12]?.avatar || dummyUser,
      name: UserData[12]?.name,
      profession: "Business Analyst",
      location:UserData[12]?.location,
      content: "Got any recommendations?",
      timestamp: "2 days ago",
    },
    {
      id: 13,
      avatar: UserData[13]?.avatar || dummyUser,
      name: UserData[13]?.name,
      profession: "Network Engineer",
      location:UserData[13]?.location,
      content: "Coffee or tea person?",
      timestamp: "2 days ago",
    },
    {
      id: 14,
      avatar: UserData[14]?.avatar || dummyUser,
      name: UserData[14]?.name,
      profession: "Digital Marketer",
      location:UserData[14]?.location,
      content: "Favorite book?",
      timestamp: "2 days ago",
    },
    {
      id: 15,
      avatar: UserData[15]?.avatar || dummyUser,
      name: UserData[15]?.name,
      location:UserData[15]?.location,
      profession: "UI/UX Designer",
      content: "How's the weather there?",
      timestamp: "2 days ago",
    },
    // ... other messages
  ];
  
  
  export const customMessages = [
    {
      id: 1,
      avatar:
        "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp",
      content: "Hey there! How was your day?",
      timestamp: "2:30 PM | Today",
      backgroundColor: "#f5f6f7",
    },
    {
      id: 2,
      avatar:
        "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp",
      content: "Not bad, just finished a project. How about you?",
      timestamp: "2:35 PM | Today",
      backgroundColor: "#f24570",
    },
    {
      id: 3,
      avatar:
        "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp",
      content: "Nice! I've been working on some coding challenges.",
      timestamp: "2:40 PM | Today",
      backgroundColor: "#f5f6f7",
    },
    {
      id: 4,
      avatar:
        "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp",
      content: "That sounds interesting! Anything challenging?",
      timestamp: "2:45 PM | Today",
      backgroundColor: "#f24570",
    },
    {
      id: 5,
      avatar:
        "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp",
      content: "Yeah, a bit stuck on a complex algorithm.",
      timestamp: "2:50 PM | Today",
      backgroundColor: "#f5f6f7",
    },
    {
      id: 6,
      avatar:
        "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp",
      content: "Need any help? I'm pretty good at algorithms.",
      timestamp: "2:55 PM | Today",
      backgroundColor: "#f24570",
    },
    {
      id: 7,
      avatar:
        "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp",
      content: "That would be awesome! Can I show you the code?",
      timestamp: "3:00 PM | Today",
      backgroundColor: "#f5f6f7",
    },
    {
      id: 8,
      avatar:
        "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp",
      content: "Sure, send it over. I'll take a look.",
      timestamp: "3:05 PM | Today",
      backgroundColor: "#f24570",
    },
    {
      id: 9,
      avatar:
        "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp",
      content: "Here's the snippet. Let me know your thoughts.",
      timestamp: "3:10 PM | Today",
      backgroundColor: "#f5f6f7",
    },
    {
      id: 10,
      avatar:
        "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp",
      content: "Looks good! Have you considered optimizing this part?",
      timestamp: "3:15 PM | Today",
      backgroundColor: "#f24570",
    },
    {
      id: 11,
      avatar:
        "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp",
      content: "Hmm, good point. I'll give it a try. Thanks!",
      timestamp: "3:20 PM | Today",
      backgroundColor: "#f5f6f7",
    },
    {
      id: 12,
      avatar:
        "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp",
      content: "No problem! Let me know if you need more help.",
      timestamp: "3:25 PM | Today",
      backgroundColor: "#f24570",
    },
    {
      id: 13,
      avatar:
        "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp",
      content: "Sure thing! By the way, did you watch the latest movie?",
      timestamp: "3:30 PM | Today",
      backgroundColor: "#f5f6f7",
    },
    {
      id: 14,
      avatar:
        "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp",
      content: "Not yet. How was it? Worth watching?",
      timestamp: "3:35 PM | Today",
      backgroundColor: "#f24570",
    },
    {
      id: 15,
      avatar:
        "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp",
      content: "Absolutely! It's a must-watch. Great storyline!",
      timestamp: "3:40 PM | Today",
      backgroundColor: "#f5f6f7",
    },
    {
      id: 16,
      avatar:
        "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp",
      content: "Nice, I'll check it out this weekend. Thanks!",
      timestamp: "3:45 PM | Today",
      backgroundColor: "#f24570",
    },
    {
      id: 17,
      avatar:
        "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp",
      content: "You're welcome! Let me know your thoughts afterward.",
      timestamp: "3:50 PM | Today",
      backgroundColor: "#f5f6f7",
    },
    {
      id: 18,
      avatar:
        "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp",
      content: "Sure thing! Anyway, got to go now. Catch you later!",
      timestamp: "3:55 PM | Today",
      backgroundColor: "#f24570",
    },
    {
      id: 19,
      avatar:
        "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp",
      content: "Absolutely! Take care and have a great day!",
      timestamp: "4:00 PM | Today",
      backgroundColor: "#f5f6f7",
    },
    {
      id: 20,
      avatar:
        "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp",
      content: "You too! Talk to you soon.",
      timestamp: "4:05 PM | Today",
      backgroundColor: "#f24570",
    },
    // Add more custom messages as needed
  ];
