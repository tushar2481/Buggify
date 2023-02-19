import React, { useState } from "react";
import Academy1 from '../image/academy1.png';
import Academy2 from '../image/academy2.png';
import Academy3 from '../image/academy3.png';
import AvatarRemove from '../image/AvatarRemove.png';
import './AcademyCourse.css';



const AcademyCourses = () => {
    const [levelFilters, setLevelFilters] = useState({
        Beginner: false,
        Intermediate: false,
        Advanced: false,
    });

    const [categoryFilters, setCategoryFilters] = useState({
        Web: false,
        Mobile: false,
        Malware: false,
        Windows: false,
        Exlpoitation: false,
        Programming: false,
    });

    const courses = [{
        id: 1,
        title: "Pentesting with Python",
        level: "Beginner",
        category: "Programming",
        description: "Learn Python concepts & modules important for hacking. Learn how to use python as scripting language.",

        price: "10",
        img: Academy1,
        avatar: AvatarRemove,
        instrutor: "Tarjani Patel",
    },
    {
        id: 2,
        title: "Bash for Beginners",
        level: "Beginner",
        category: "Programming",
        description: "Bash Scripting or Shell Scripting Course includes everything you need for Command-line, Automate Daily Tasks, and a lot of fun and experiment with shell.",
        price: "15",
        img: Academy2,
        avatar: AvatarRemove,
        instrutor: "Tarjani Patel",
    },
    {
        id: 3,
        title: "WEb Applicataion Pentesting",
        level: "Intermediate",
        category: "Web",
        description: "Web Application Pentesting Covers Basic of Web Applications, OWASP Top 10 attacks in-depth. Latest Exploits and Techniques in wild.",
        price: "150",
        img: Academy3,
        avatar: AvatarRemove,
        instrutor: "Tarjani Patel",
    },
    {
        id: 4,
        title: "Cyber Security Fundamentals",
        level: "Beginner",
        category: "Windows",
        img: Academy1,
    }, {
        id: 5,
        title: "Ethical Hacking for Advanced",
        level: "Advanced",
        category: "Exploitation",
        price: "10",
        img: Academy1,
    },
    {
        id: 6,
        title: "Python Programming for Beginners",
        level: "Beginner",
        category: "Programming",
        price: "10",
        img: Academy1,
    },
    {
        id: 7,
        title: "Python Programming for Beginners",
        level: "Beginner",
        category: "Exploitation",
        price: "10",
        img: Academy1,
    },];

    const handleLevelFilterChange = (event) => {
        setLevelFilters({
            ...levelFilters,
            [event.target.name]: event.target.checked
        });
    };

    const handleCategoryFilterChange = (event) => {
        setCategoryFilters({
            ...categoryFilters,
            [event.target.name]: event.target.checked
        });
    };

    // Define filteredCourses array based on selected filters
    let filteredCourses = courses;
    if (levelFilters.Beginner) {
        filteredCourses = filteredCourses.filter(
            (course) => course.level === "Beginner"
        );
    }
    if (levelFilters.Intermediate) {
        filteredCourses = filteredCourses.filter(
            (course) => course.level === "Intermediate"
        );
    }
    if (levelFilters.Advanced) {
        filteredCourses = filteredCourses.filter(
            (course) => course.level === "Advanced"
        );
    }
    if (categoryFilters.Web) {
        filteredCourses = filteredCourses.filter(
            (course) => course.category === "Web"
        );
    }
    if (categoryFilters.Mobile) {
        filteredCourses = filteredCourses.filter(
            (course) => course.category === "Mobile"
        );
    }
    if (categoryFilters.Malware) {
        filteredCourses = filteredCourses.filter(
            (course) => course.category === "Malware"
        );
    }
    if (categoryFilters.Windows) {
        filteredCourses = filteredCourses.filter(
            (course) => course.category === "Windows"
        );
    }
    if (categoryFilters.Exploitation) {
        filteredCourses = filteredCourses.filter(
            (course) => course.category === "Exploitation"
        );
    }
    if (categoryFilters.Programming) {
        filteredCourses = filteredCourses.filter(
            (course) => course.category === "Programming"
        );
    }


    return (
        <div className="container" >
            <div className="courses-div">
                <div className="filter-div">

                    <div className="level-filter">
                        <div className="col-md-3 filter-box1">
                            <h5 className="level-filter-h">Level </h5>
                            <div className="form-check">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    name="Beginner"
                                    id="Beginner"
                                    checked={levelFilters.Beginner}
                                    onChange={handleLevelFilterChange}
                                />
                                <label className="form-check-label" for="Beginner">Beginner</label>
                            </div>
                            <div className="form-check">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    name="Intermediate"
                                    id="Intermediate"
                                    checked={levelFilters.Intermediate}
                                    onChange={handleLevelFilterChange}
                                />
                                <label className="form-check-label" for="Intermediate">Intermediate</label>
                            </div>
                            <div className="form-check">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    name="Advanced"
                                    id="Advanced"
                                    checked={levelFilters.Advanced}
                                    onChange={handleLevelFilterChange}
                                />
                                <label className="form-check-label" for="Advanced">Advanced</label>
                            </div>
                        </div>
                    </div>
                    <div className="category-filter col-3">
                        <h5 className="category-filter-h" for="myCheckbox">Category</h5>

                        <div className="form-check">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                name="Web"
                                id="Web"
                                checked={categoryFilters.Web}
                                onChange={handleCategoryFilterChange}
                            />
                            <label className="form-check-label" for="Web">Web</label>
                        </div>
                        <div className="form-check">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                name="Mobile"
                                id="Mobile"
                                checked={categoryFilters.Mobile}
                                onChange={handleCategoryFilterChange}
                            />
                            <label className="form-check-label" for="Mobile">Mobile</label>
                        </div>
                        <div className="form-check">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                name="Malware"
                                id="Malware"
                                checked={categoryFilters.Malware}
                                onChange={handleCategoryFilterChange}
                            />
                            <label className="form-check-label" for="Mobile">Malware</label>
                        </div>
                        <div className="form-check">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                name="Windows"
                                id="Windows"
                                checked={categoryFilters.Windows}
                                onChange={handleCategoryFilterChange}
                            />
                            <label className="form-check-label" for="Windows">Windows</label>
                        </div>
                        <div className="form-check">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                name="Exploitation"
                                id="Exploitation"
                                checked={categoryFilters.Exploitation}
                                onChange={handleCategoryFilterChange}
                            />
                            <label className="form-check-label" for="Exploitation">Exlpoitation</label>
                        </div>
                        <div className="form-check">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                name="Programming"
                                id="Programming"
                                checked={categoryFilters.Programming}
                                onChange={handleCategoryFilterChange}
                            />
                            <label className="form-check-label" for="Programming">Programming</label>
                        </div>
                    </div>
                </div>

                <div className="courses-card-div">
                    <h3 className="h">Courses</h3>
                    <div className="row course-cards">
                        {filteredCourses.map((course) => (
                            <div className="course-cards" key={course.id}>
                                <div className="course-card">
                                    <div className="card-body-div1">
                                        <img src={course.img} className="card-body-div1-img" />
                                    </div>
                                    <div className="card-body-div2">
                                        <p className="card-body-div2-title">{course.title}</p>
                                        <p className="card-body-div2-text">{course.description}</p>
                                        <button className="card-body-div2-level-button"> {course.level}</button>
                                        <button className="card-body-div2-category-button"> {course.category}</button>
                                        <p className="card-body-div2-instrutor">Course instrutor : <br />
                                            <img src={course.avatar} className="card-body-div2-avatar" />
                                            <p className="card-body-div2-instrutor-span">{course.instrutor}</p>
                                        </p>


                                    </div>
                                    <div className="card-body-div3">
                                        <center>
                                            <p className="card-body-div3-price">Course Price:{'$' + course.price}</p>
                                            <div className="button_ani card-div3-button1">
                                                <button className="button2">View More</button>
                                            </div>
                                            <div className="button_ani card-div3-button2">
                                                <button className="btn card-div3-button2-button">Buy Now</button>
                                            </div>
                                        </center>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

        </div>

    )
}

export default AcademyCourses;