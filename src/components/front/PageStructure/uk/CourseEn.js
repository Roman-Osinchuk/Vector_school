import React, { useState } from 'react';
import '../Main/Course.css';
import courseImage from '../../../img/course_img/java-bg.png'; 
import javaImage from '../../../img/course_img/java-img.png'; 
import coursImage from '../../../img/course_img/p-4.png'; 
import webImage from '../../../img/course_img/web.png'; 

const Course = ({ onWebPageClick, onJavaPageClick }) => {
  return (
    <section id="course" className="sectionCourse">
      <div className="course-container">
        <div className="course-header">
          <div className="course-title">
            <img src={courseImage} alt="Course" />
            <div>
              <h2>BASICS OF JAVA PROGRAMMING <br/>FOR SCHOOL STUDENTS</h2>
              <p>Start Date: <span className="start-date">16-02-2024</span></p>
            </div>
          </div>
          <img src={javaImage} alt="Java" className="java-image" />
        </div>
        <div className="course-content">
          <div className="course-info">
            <h3>After completing the course, students will be able to:</h3>
            <ul>
              <li>Set up a computer system unit (installing drivers for Java programming);</li>
              <li>Solve problems using Java;</li>
              <li>Use Java syntax;</li>
              <li>Develop games and projects using algorithms and programming;</li>
              <li>Create data structures with classes and methods;</li>
              <li>Install software for games and projects using a Java game engine;</li>
              <li>Develop and use various Web components (HTML, CSS);</li>
              <li>Understand basic internet protocols (HTTP);</li>
              <li>Optimize their programs for browser performance;</li>
              <li>Debug client-server project operations.</li>
            </ul>
          </div>
          <div className="course-description">
            <h3>About the Course</h3>
            <p>Most children are not yet aware of the importance of learning and gaining knowledge. However, with mobile devices, they understand the future of work. The main goal is to develop children’s skills in the Internet sphere. Therefore, we try to build our course on practical examples by creating real game projects that they will enjoy programming themselves. Mainly, these are game developments, working with graphics, and various other projects. Don’t miss out on this opportunity to engage with technology in a classroom setting!</p>
          </div>
        </div>
        <div className="course-footer">
          <p><strong>HURRY UP</strong><br />New course starts in <span className="days-left">0 days</span></p>
          <button className="course-button" onClick={onJavaPageClick}>Learn More</button>
        </div>
      </div>

      <div className="course-container">
        <div className="course-header">
          <div className="course-title">
            <img src={webImage} alt="Course" />
            <div>
              <h2>WEB DEVELOPMENT <br/>FOR SCHOOL STUDENTS</h2>
              <p>Start Date: <span className="start-date">9-02-2024</span></p>
            </div>
          </div>
          <img src={coursImage} alt="Java" className="java-image" />
        </div>
        <div className="course-content">
          <div className="course-info">
            <h3>After completing the course, students will be able to:</h3>
            <ul>
              <li>HTML, CSS, text styling, vector graphics, CSS animation effects, Bootstrap, JavaScript, JQuery, AJAX, JQuery UI.</li>
              <li>MySQL, PHP, Web forms, control structures, "client-server", Session, Regular Expression, mini-messenger, hosting.</li>
              <li>Laravel framework, routing, migrations, blade templates, MVC, CRUD, pagination, Laravel Collective Form, authentication, GitHub.</li>
              <li>ASP.NET MVC 5, C#, Entity Framework, AJAX forms, online store, shopping cart, CodeFirst, filters, widgets, validation, Bitbucket.</li>
            </ul>
          </div>
          <div className="course-description">
            <h3>About the Course</h3>
            <p>Web development is not just a profession that requires extensive learning, practice, effort, and patience, but also enjoyment from the results, inspiration for something greater, continuous development, self-improvement, an aesthetic view of things, and the combination of something unreal. Many web developers find great satisfaction in their work because it's not just about writing code but creating a masterpiece that brings benefit and profit. Allow your child to discover their web programming skills and ensure a great future for themselves. Sign up for the master class and try creating your first website!</p>
          </div>
        </div>
        <div className="course-footer">
          <p><strong>HURRY UP</strong><br />New course starts in <span className="days-left">0 days</span></p>
          <button className="course-button" onClick={onWebPageClick}>Learn More</button>
        </div>
      </div>
    </section>
  );
}

export default Course;
