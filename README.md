# Angular_Tutorial

A hands-on learning repository for front-end web development fundamentals featuring HTML, CSS, and JavaScript tutorials. Despite its name, this repository focuses on **vanilla web development** rather than Angular framework concepts.

## 📋 Overview

This repository serves as a practical learning ground for developers studying core web technologies. It contains day-by-day tutorial content, interactive examples, and demonstrations of web development concepts.

### Key Features

- ✅ **Day-based learning structure** - Organized tutorial content following a daily progression
- ✅ **Interactive HTML examples** - Button interactions and DOM manipulation
- ✅ **JavaScript fundamentals** - Array methods, string manipulation, and ES6+ syntax
- ✅ **Async JavaScript patterns** - Promises, async/await, and concurrent operations
- ✅ **Form handling** - HTML form creation and processing examples
- ✅ **CSS styling** - Comprehensive stylesheets with CSS variables
- ✅ **CI/CD pipeline** - Automated code quality checks and validation

## 📁 Repository Structure

```
Angular_Tutorial/
├── .github/
│   └── workflows/              # GitHub Actions CI/CD configuration
│       ├── build.yml           # Build & deployment status checks
│       ├── ci.yml              # Code quality & syntax validation
│       └── pull-request.yml    # Pull request validation
├── Day1.html                   # Day 1: HTML & DOM Interaction
├── Day2.js                     # Day 2: JavaScript Array Methods & String Operations
├── asyncExample.js             # Asynchronous JavaScript Patterns
├── demo.html                   # Demo page for testing
├── form.html                   # HTML form examples
├── index.js                    # Main entry point script
├── script.js                   # Supporting JavaScript
├── style.css                   # Primary stylesheet
├── styles.css                  # Extended styles with CSS variables
└── README.md                   # This file
```

## 🎯 Tutorial Content

### Day 1: HTML Basics (Day1.html)
An interactive introduction to HTML with DOM manipulation:
- HTML5 document structure
- Interactive button element
- JavaScript event listeners
- Dynamic text manipulation

```html
<button id="my-btn">Hexaview Technologies</button>
```
Click the button to see it update with "Welcome to Day X" messages.

### Day 2: JavaScript Fundamentals (Day2.js)
Core JavaScript array and string operations:
- **Array filtering** - Using `.filter()` to find words longer than 6 characters
- **Array mapping** - Using `.map()` with string replacement
- Working with arrays like `['Hexaview', 'elite', 'exuberant', 'destruction', 'present']`

### Async JavaScript (asyncExample.js)
Advanced asynchronous programming patterns:
- **Promises** - Creating and resolving promises with timeouts
- **Async/Await** - Modern syntax for async operations
- **Sequential execution** - Running promises one after another
- **Concurrent execution** - Running promises in parallel with `Promise.all()`

Example patterns included:
- `sequentialStart()` - Await each promise before starting the next
- `sequentialWait()` - Start promises concurrently but log sequentially
- `concurrent1()` - Use `Promise.all()` for true concurrency
- `concurrent2()` - Log results immediately as promises resolve

### Form Examples (form.html)
HTML form demonstrations for learning form structure and input handling.

## 🛠️ Tech Stack

### Languages
- **HTML5** - Semantic markup and structure
- **CSS3** - Styling with CSS variables for theming
- **JavaScript (ES6+)** - Vanilla JavaScript with modern syntax

### Infrastructure
- **GitHub Actions** - Continuous Integration/Deployment
- **Node.js 18** - JavaScript runtime for CI validation
- **Ubuntu Latest** - CI runner environment

### Notable Techniques
- **CSS Variables** - Centralized style definitions in `styles.css`
- **Event Listeners** - Interactive DOM manipulation in Day1
- **Array Methods** - Functional programming patterns in Day2
- **Async Patterns** - Promise-based and async/await patterns

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A text editor (VS Code, Sublime Text, etc.)
- Basic familiarity with HTML, CSS, and JavaScript

### Running the Tutorials

1. **Clone the repository**
   ```bash
   git clone https://github.com/rashukrbarnawal/Angular_Tutorial.git
   cd Angular_Tutorial
   ```

2. **View HTML pages**
   - Open `Day1.html` in your browser to see interactive button example
   - Open `demo.html` for the demo page
   - Open `form.html` to see form examples

3. **Run JavaScript examples**
   - Open browser Developer Tools (F12)
   - Navigate to the Console tab
   - Open `asyncExample.js` in an HTML page or run with Node.js:
     ```bash
     node asyncExample.js
     ```

4. **Study the code**
   - Read through `Day2.js` for array and string manipulation examples
   - Review `styles.css` for CSS variable patterns
   - Examine event handlers in `Day1.html`

## 📚 Learning Resources

This repository is designed for self-paced learning:

1. **Start with Day1.html** - Learn basic HTML and DOM interaction
2. **Progress to Day2.js** - Study JavaScript array methods
3. **Explore asyncExample.js** - Understand asynchronous patterns
4. **Experiment with form.html** - Practice form handling
5. **Review stylesheets** - Learn CSS organization and variables

## 🔄 Development Workflow

### Branch Strategy
- `main` - Production-ready code
- `develop` - Integration branch for features
- `feature/**` - Individual feature branches

### CI/CD Checks

The repository includes automated checks for:
- ✅ JavaScript syntax validation (all `.js` files)
- ✅ CSS file validation
- ✅ HTML structure validation
- ✅ Code quality enforcement
- ✅ Trailing whitespace detection

### Creating a Pull Request

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Make your changes
3. Commit with conventional messages: `git commit -m "feat: add new feature"`
4. Push to your fork: `git push origin feature/your-feature`
5. Open a Pull Request against `main` or `develop`
6. Wait for CI checks to pass
7. Merge after review

## 📝 Code Conventions

- **No trailing whitespace** - Clean file endings
- **Valid JavaScript syntax** - All `.js` files must be syntactically correct
- **CSS variables** - Use CSS custom properties for consistent styling
- **Semantic HTML** - Use proper HTML5 elements
- **Clear comments** - Document complex logic

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch
3. Make your changes following code conventions
4. Commit with clear messages
5. Open a Pull Request with a description of your changes
6. Respond to any review feedback

## 📄 License

This repository is open source and available for learning purposes.

## 🎓 Target Audience

- 👨‍💻 Developers learning HTML, CSS, and JavaScript basics
- 🎓 Students following web development tutorials
- 👥 Contributors practicing front-end fundamentals

## 📞 Support

For questions or issues:
- Review the existing code and comments
- Check the tutorial files for examples
- Refer to web development documentation (MDN, W3C)
- Open an issue in the repository

---

**Happy Learning!** 🚀

This repository is a foundation for understanding vanilla web development. Feel free to modify, experiment, and build upon these examples.
