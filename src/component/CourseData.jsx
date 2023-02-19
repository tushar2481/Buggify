import React from "react";


const courseData = {
    title: "React for Beginners",
    videos: [
        {
            id: 1,
            title: "Introduction",
            url: "https://example.com/intro.mp4",
        },
        {
            id: 2,
            title: "Setting up Your Environment",
            url: "https://example.com/setup.mp4",
        },
        {
            id: 3,
            title: "Creating Your First Component",
            url: "https://example.com/first.mp4",
        },
        {
            id: 4,
            title: "Styling Your Components",
            url: "https://example.com/styling.mp4",
        },
        {
            id: 5,
            title: "Building a Complete App",
            url: "https://example.com/complete.mp4",
        },
    ],
};

function App() {
    return (
        <div className="App">
            <CourseVideo courseData={courseData} />
        </div>
    );
}
export default App;  