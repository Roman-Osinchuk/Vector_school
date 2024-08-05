import React from 'react';
import '../Main/Course.css';
import courseImage from '../../img/course_img/java-bg.png'; 
import javaImage from '../../img/course_img/java-img.png'; 
import coursImage from '../../img/course_img/p-4.png'; 
import webImage from '../../img/course_img/web.png'; 

const Course = () => {
  return (
    <section id="course" className="sectionCourse">
      <div className="course-container">
        <div className="course-header">
          <div className="course-title">
            <img src={courseImage} alt="Course" />
            <div>
              <h2>JAVA PROGRAMMING FUNDAMENTALS FOR STUDENTS</h2>
            </div>
          </div>
          <img src={javaImage} alt="Java" className="java-image" />
        </div>
        <div className="course-content">
          <div className="course-info">
            <p>Start Date: <span className="start-date">16-2-2024</span></p>
            <h3>After the course, students will be able to</h3>
            <ul>
              <li>Set up a computer system (install drivers for Java programming);</li>
              <li>Solve problems using Java;</li>
              <li>Utilize Java syntax;</li>
              <li>Develop games and projects using algorithms and programming;</li>
              <li>Create data structures with classes and methods;</li>
              <li>Install software for games and projects using a Java game engine;</li>
              <li>Develop and use various Web components (HTML, CSS);</li>
              <li>Understand basic internet protocols (HTTP);</li>
              <li>Optimize their programs for browser use;</li>
              <li>Debug client-side and server-side interactions in projects.</li>
            </ul>
          </div>
          <div className="course-description">
            <h3>About the Course</h3>
            <p>Most children do not yet realize the importance of learning and acquiring knowledge. However, with mobile devices, they understand future job opportunities. Our goal is to develop children’s skills through practical examples, allowing them to create real gaming projects that they will enjoy programming. Primarily, this involves game development, working with graphics, and various projects that students haven't encountered before. The course aims to avoid just loading a computer in a classroom.</p>
          </div>
        </div>
        <div className="course-footer">
          <p><strong>HURRY UP</strong><br />New course starts in <span className="days-left">0 days</span></p>
          <button className="course-button">Learn More</button>
        </div>
      </div>

      <div className="course-container">
        <div className="course-header">
          <div className="course-title">
            <img src={webImage} alt="Web Development" />
            <div>
              <h2>WEB DEVELOPMENT FOR STUDENTS</h2>
            </div>
          </div>
          <img src={coursImage} alt="Web Development" className="java-image" />
        </div>
        <div className="course-content">
          <div className="course-info">
            <p>Start Date: <span className="start-date">9-2-2024</span></p>
            <h3>After the course, students will be able to</h3>
            <ul>
              <li>HTML, CSS, text styling, vector graphics, CSS animations, Bootstrap, JavaScript, JQuery, AJAX, JQuery UI.</li>
              <li>MySQL, PHP, Web-forms, control structures, client-server architecture, Session, Regular Expressions, mini-messenger, hosting.</li>
              <li>Laravel framework, routing, migrations, blade templates, MVC, CRUD, pagination, Laravel Collective Form, authentication, GitHub.</li>
              <li>ASP.NET MVC 5, C#, Entity Framework, AJAX forms, e-commerce site, shopping cart, CodeFirst, filters, widgets, validation, Bitbucket.</li>
            </ul>
          </div>
          <div className="course-description">
            <h3>About the Course</h3>
            <p>Web development is not just a profession that requires extensive learning, practice, effort, and patience; it is also about enjoying the results, being inspired by something greater, continuous growth, self-improvement, and an aesthetic view of things. Many web developers find great satisfaction in their work as it involves creating masterpieces that bring both benefit and profit. Allow your child to discover their potential in web programming and secure a bright future. Enroll in the master class and try creating your first website!</p>
          </div>
        </div>
        <div className="course-footer">
          <p><strong>HURRY UP</strong><br />New course starts in <span className="days-left">0 days</span></p>
          <button className="course-button">Learn More</button>
        </div>
      </div>
    </section>
  );
}

export default Course;
