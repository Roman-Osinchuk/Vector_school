import React, { useState } from 'react';
import '../mainWeb/Courseww.css';

const Course1 = () => {
  const [activeModule, setActiveModule] = useState(1);

  const moduleContent = {
    1: {
      description: "In the first module, students (recommended age 12-18 years) will be introduced to one of the areas of web development - Front-end. They will learn about HTML, CSS, text styling, vector graphics, CSS animations, Bootstrap, JavaScript, JQuery, AJAX, and JQuery UI. From start to finish, students will study the basics of modern website development with the instructor. By the end, they will understand website structure, how to create them correctly, and how to ensure their work is of high quality.",
      program: [
        "Basic HTML tags",
        "Introduction to CSS. Linking external style files.",
        "Text styling. Block model and block positioning",
        "Using graphics. Creating shadows",
        "CSS animation",
        "Responsive web design. Basics of Bootstrap",
        "Introduction to JavaScript. Variables. Data types. Operators. Working with numbers and text",
        "Continuing JavaScript study. Conditional operators. Loops. Functions. Date and time.",
        "Objects. Inheritance",
        "Introduction to jQuery. Interacting with selections. Events. AJAX",
        "Form styling and validation. Creating image sliders",
        "JQuery UI"
      ],
      learnText: [
        "Install software to work with HTML, CSS & JavaScript.",
        "How to properly style a website.",
        "Work with vector graphics.",
        "Create custom animation effects.",
        "Create responsive websites using Bootstrap.",
        "Work with JavaScript (variables, data types, operators, working with numbers and text).",
        "Differentiate types of inheritance.",
        "Create a rich user interface for web applications using JQuery."
      ]
    },
    2: {
      description: "In the second module, students move to a higher level of programming - Back-End (the server-side of a website). They begin studying site logic, focusing on the aspects that are less visible but form a significant part of the development process. Concepts like 'client-server', 'database', 'control structures', 'web forms', 'sessions', and regular expressions are introduced. Students study the principles of object-oriented programming and learn how to create a quality back-end for websites. They will work with PHP to create a chat application and host it, exploring file operations, creating functions, and more.",
      program: [
        "Setting up the environment. Back-end developer tools",
        "Variables. Data types. Conditional operators. Control structures",
        "Control structures (continued)",
        "Understanding functions in PHP",
        "Working with files",
        "Web forms. JSON",
        "Databases",
        "Databases (continued)",
        "Sessions. Developing a small chat application",
        "Basics of object-oriented programming",
        "Object-oriented programming (continued)",
        "Regular expressions in PHP"
      ],
      learnText: [
        "Understand the PHP programming language.",
        "Work with variables and data types.",
        "Apply basic algorithmic structures like conditionals and loops.",
        "Understand the basics of object-oriented programming.",
        "Correctly build client-server websites.",
        "Work with databases.",
        "Write custom functions.",
        "Work with files.",
        "Create and host a chat application.",
        "Work with web forms.",
        "Create sessions for websites.",
        "Work with regular expressions."
      ]
    },
    3: {
      description: "The third module is fully dedicated to studying the Laravel framework and creating a blog using the MVC pattern. Students will explore the capabilities of the framework, learn how to protect their websites from hacker attacks, and reinforce their knowledge from the first two modules. They will study the CRUD mechanism and relationships between models and tables, routes, and more. The module culminates with students uploading their project to GitHub, where they will create a secure and functional blog that can be customized to their liking.",
      program: [
        "Setting up the development environment. Introduction to the Laravel framework",
        "Laravel structure. Migrations. Artisan",
        "MVC",
        "Continuing MVC. What is a blog?",
        "Blog front-end. Database. Laravel Collective Form",
        "Validation. Session. Reading data",
        "Update. Delete. Pagination. Query Builder",
        "Errors. Slug. Features",
        "Authentication",
        "Relationships. Categories. Tags relationships",
        "Tags. Contact Form. Comments",
        "WYSIWYG. Image. GitHub"
      ],
      learnText: [
        "Set up the development environment and a local server.",
        "Learn the basics of the Laravel framework.",
        "Apply the MVC (Model-View-Controller) pattern.",
        "Work with the CRUD (Create Read Update Delete) mechanism.",
        "Use migrations and website routing.",
        "Work with the 'artisan' command.",
        "Use Laravel Collective Form.",
        "Validate data with JavaScript Validation.",
        "Create page pagination.",
        "Create website authentication.",
        "Understand relationships between models and tables.",
        "Create a post editor.",
        "Upload images to the project.",
        "Use the GitHub web server."
      ]
    },
    4: {
      description: "The final, fourth module focuses on developing an online store using the ASP.NET MVC 5 platform. Students will learn a new programming language, C#, one of the most popular and in-demand languages. They will create small websites with ASP.NET and move on to building an online store with ASP.NET MVC 5. They will learn how to implement business logic effectively, solidifying their knowledge of MVC patterns and Entity Framework technology. Students will create a shopping cart and order processing for the online store, integrate social media links, and more. By the end, they will upload their project to Bitbucket, resulting in a secure and functional online store.",
      program: [
        "Introduction to C# and the Visual Studio programming environment",
        "Strict typing in C#. Basic data types",
        "ASP.NET",
        "Continuing ASP.NET. Starting ASP.NET MVC 5",
        "ASP.NET MVC 5",
        "Online store on ASP.NET MVC 5",
        "CRUD in Entity Framework",
        "Search. CRUD for Product. Theme",
        "Uploading pictures. Relationships",
        "Category & Product. Cart",
        "Shopping cart for products. URL",
        "Image for Product. Pagination",
        "Validation. Widgets",
        "Filters. Cart Functionality",
        "Authentication. Orders Processing"
      ],
      learnText: [
        "Work with the C# programming language.",
        "Differentiate between dynamic and static pages.",
        "Understand ASP.NET technology.",
        "Work with Entity Framework and the CodeFirst approach.",
        "Apply the MVC pattern in ASP.NET.",
        "Build business processes for an online store.",
        "Work with the CRUD mechanism.",
        "Create AJAX forms.",
        "Implement a shopping cart for products.",
        "Upload images to the project using this technology.",
        "Create pagination and filters for products.",
        "Validate data and widgets for products.",
        "Create website authentication.",
        "Use the Bitbucket web server."
      ]
    }
  };

  return (
    <section id="course" className="sectionCourse">
      <div className="course-containerT">
        <div className="course-headerT">
          <h1>Web Development Course for Students</h1>
        </div>

        <div className="tabsT">
          <button 
            className={`tabT ${activeModule === 1 ? 'activeT' : ''}`}
            onClick={() => setActiveModule(1)}
          >
            Module 1
          </button>
          <button 
            className={`tabT ${activeModule === 2 ? 'activeT' : ''}`}
            onClick={() => setActiveModule(2)}
          >
            Module 2
          </button>
          <button 
            className={`tabT ${activeModule === 3 ? 'activeT' : ''}`}
            onClick={() => setActiveModule(3)}
          >
            Module 3
          </button>
          <button 
            className={`tabT ${activeModule === 4 ? 'activeT' : ''}`}
            onClick={() => setActiveModule(4)}
          >
            Module 4
          </button>
        </div>

        <p>{moduleContent[activeModule].description}</p>

        <div className="programsT">
          <div className="programT">
            <h3>Course Program:</h3>
            <ul>
              {moduleContent[activeModule].program.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="learnT">
            <h3>Your child will learn:</h3>
            <ul>
              {moduleContent[activeModule].learnText.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Course1;
