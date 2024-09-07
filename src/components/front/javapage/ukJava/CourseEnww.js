import React, { useState } from 'react';
import '../../webpage/mainWeb/Courseww.css';


const Course1 = () => {
  const [activeModule, setActiveModule] = useState(1);

  const moduleContent = {
    1: {
      description: "In the first module, students are introduced to the basics of Java theory (variables, algorithmic constructs), including object-oriented approaches. They get acquainted with game-oriented tools: timers, image handling, motion animation, keyboard handling, pseudo-random number generation. Armed with the necessary knowledge, we start the process of creating a small computer game – 'New Year’s Rain.'",
      program: [
        "Introduction to the Java programming language",
        "Working with variables",
        "Basic algorithmic constructs",
        "Basics of object-oriented programming",
        "Basics of Java computer graphics",
        "Working with graphical images",
        "Class constructors, event handlers",
        "Creating the computer game 'New Year’s Rain (beginning)'",
        "Creating the computer game 'New Year’s Rain (continuation)'",
        "Creating the computer game 'New Year’s Rain (continuation)'",
        "Creating the computer game 'New Year’s Rain (end)'",
        "Flowcharts and formal program notation"
      ],
      learnText: [
        "Install software for working with the Java programming language.",
        "Work with variables and data types.",
        "Understand basic algorithmic constructs such as conditional operators and loops.",
        "Learn the basics of object-oriented programming.",
        "Work with graphics and create animations.",
        "Handle keyboard events and create a small 2D computer game 'New Year’s Rain.'",
        "Introduction to formal methods of algorithm notation (flowcharts)."
      ]
    },
    2: {
      description: "In the second module, we continue learning Java. We study mouse operations, file operations, user interface design using visual development tools and 'manually.' Databases (mySQL) and their integration with Java programs in the magical application 'Future Prediction.' Creating a webpage and programming JavaScript effects, developing a calculator, working with the Windows registry, and creating a super-interesting application 'Windows Blocker' – all this and much more await our young developers in the second module.",
      program: [
        "Handling events related to the 'mouse' input device",
        "Designing the user interface",
        "Creating a 'calculator' application. Continuation",
        "Layout of a webpage using HTML and CSS",
        "Using JavaScript on a webpage",
        "Creating a welcome Windows blocker. Implementation of the interface",
        "Creating a welcome Windows blocker. Completion",
        "Visual development tools. Creating application interfaces",
        "Working with the file system from Java. Creating, deleting, renaming files",
        "Working with the file system from Java. Reading and writing files",
        "Databases. SQL query language. Working with a MySQL database from Java",
        "Creating a 'Future Prediction' game using a database"
      ],
      learnText: [
        "Work with MySQL databases from Java.",
        "Work with the Windows registry, understand the principles of blocker programs and malware.",
        "Work with the file system from Java.",
        "Handle mouse events, write a mini-Paint.",
        "Learn about visual development tools and user interface design principles.",
        "Create mini-webpages using HTML, CSS, and JavaScript."
      ]
    },
    3: {
      description: "The third module immerses students in web development, creating a site as part of a client-server project for the online store 'Winnie the Pooh and Company,' studying the key points needed by a beginner web developer. Additionally, Java is complemented by learning languages: PHP, JavaScript, HTML (markup language), CSS (cascading style sheets).",
      program: [
        "Creating an online store"
      ],
      learnText: [
        "Get acquainted with client-server applications",
        "Learn the principles of data transfer via the HTTP protocol",
        "Learn to work with the PHP server language, create a small online store",
        "Learn to work with JavaScript, HTML, CSS",
        "Study MySQL database operations in more detail",
        "Create your own small online store"
      ]
    },
    4: {
      description: "The last, fourth module, is pure practice. Students are offered to independently write three well-known computer games: Snake, Battleship, Solitaire. The instructor is a helper who provides recommendations and hints in difficult situations but does not provide ready-made solutions. This way, students have the chance to feel like real programmers who only receive a technical task.",
      program: [
        "Development of the 'Snake' game (1-3 sessions)",
        "Development of the 'Battleship' game (4-7 sessions)",
        "Development of the 'Solitaire' game (8-12 sessions)"
      ],
      learnText: [
        "Understanding project programming.",
        "Working with 2D arrays, lists.",
        "Principles of game development.",
        "Independently create 2D games such as Snake, Battleship, and Solitaire."
      ]
    }
  };

  return (
    <section id="course" className="sectionCourse">
      <div className="course-containerT">
        <div className="course-headerT">
          <h1>Java Course for Schoolchildren</h1>
        </div>

        <div className="tabsT">
          <button 
            className={`tabT ${activeModule === 1 ? 'activeT' : ''}`}
            onClick={() => setActiveModule(1)}
          >
            Module 1. Basic
          </button>
          <button 
            className={`tabT ${activeModule === 2 ? 'activeT' : ''}`}
            onClick={() => setActiveModule(2)}
          >
            Module 2. Hacker
          </button>
          <button 
            className={`tabT ${activeModule === 3 ? 'activeT' : ''}`}
            onClick={() => setActiveModule(3)}
          >
            Module 3. Young Businessman
          </button>
          <button 
            className={`tabT ${activeModule === 4 ? 'activeT' : ''}`}
            onClick={() => setActiveModule(4)}
          >
            Module 4. GameDev
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
            <h3>We will teach your child:</h3>
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
