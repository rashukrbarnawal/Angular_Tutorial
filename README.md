# Angular_Tutorial

A hands-on learning repository for **HTML, CSS, and JavaScript fundamentals**. Despite its name suggesting Angular content, this repository focuses on vanilla web development concepts and demonstrations.

## 📚 Overview

This is a tutorial repository designed for:
- Developers learning **HTML5, CSS3, and JavaScript** basics
- Students following along with **web development tutorials**
- Contributors practicing **front-end fundamentals**

The repository is organized by tutorial days and includes practical examples of:
- Interactive HTML elements
- Form validation and handling
- Asynchronous JavaScript patterns
- CSS styling and animations
- Responsive design principles

## 🗂️ Repository Structure

```
Angular_Tutorial/
├── .github/
│   └── workflows/              # CI/CD Pipeline configurations
│       ├── build.yml           # Build & deployment verification
│       ├── ci.yml              # Code quality & linting checks
│       └── pull-request.yml    # PR validation and automated comments
├── Day1.html                   # Day 1: HTML & Event Handling
├── Day2.js                     # Day 2: JavaScript fundamentals
├── demo.html                   # Demonstration page
├── form.html                   # Form validation examples
├── index.js                    # Form validation logic
├── script.js                   # Supporting JavaScript utilities
├── asyncExample.js             # Asynchronous programming patterns (Promises, async/await)
├── style.css                   # Primary stylesheet (7.5 KB)
├── styles.css                  # Extended styles with CSS variables
└── README.md                   # This file
```

## 🎯 Key Features

### HTML Pages
- **Day1.html** - Interactive button demo with event listeners and DOM manipulation
- **form.html** - Complete form validation example with error handling
- **demo.html** - General demonstration page

### JavaScript Examples
- **index.js** - Form validation with real-time error feedback
- **script.js** - Utility functions and DOM helpers
- **Day2.js** - JavaScript tutorial content
- **asyncExample.js** - Asynchronous patterns including Promises and async/await

### Styling
- **style.css** - Complete stylesheet with:
  - Form styling and validation states
  - Responsive layout design
  - Button and input element styling
  - Error message display styles
  
- **styles.css** - Advanced stylesheet with:
  - CSS custom properties (variables) for theming
  - Centralized color and spacing definitions
  - Design system guidelines

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, or Edge)
- A text editor or IDE (VS Code, Sublime, etc.)
- Basic knowledge of HTML, CSS, and JavaScript

### Opening Files Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/rashukrbarnawal/Angular_Tutorial.git
   cd Angular_Tutorial
   ```

2. **Open files in your browser:**
   - Simply double-click any `.html` file to open it in your default browser
   - Or right-click → "Open with" → select your preferred browser
   - For local development, use a simple HTTP server:
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Python 2
     python -m SimpleHTTPServer 8000
     
     # Using Node.js (if installed)
     npx http-server
     ```
   - Then visit `http://localhost:8000` in your browser

## 📖 Learning Path

### Day 1: HTML Fundamentals
- File: `Day1.html`
- Topics:
  - HTML document structure
  - DOM elements and attributes
  - Event listeners (click, change, etc.)
  - JavaScript event handling

### Day 2: JavaScript Basics
- File: `Day2.js`
- Topics:
  - Variables and data types
  - Functions and scope
  - DOM manipulation
  - Event handling patterns

### Form Validation
- Files: `form.html`, `index.js`, `style.css`
- Topics:
  - Input validation
  - Real-time error feedback
  - Form submission handling
  - CSS validation states

### Asynchronous JavaScript
- File: `asyncExample.js`
- Topics:
  - Promises and `.then()` chaining
  - Async/await syntax
  - Error handling with try/catch
  - Timeout and delay patterns

## 🔧 Code Examples

### Interactive Button (Day1.html)
```html
<button id="my-btn">Hexaview Technologies</button>

<script>
  let btn = document.getElementById("my-btn");
  let count = 1;
  btn.addEventListener("click", () => {
    console.log(`Button clicked ${count++} times`);
  });
</script>
```

### Form Validation (form.html)
```html
<form id="form">
  <input id="username" name="username" type="text">
  <input id="email" name="email" type="email">
  <input id="password" name="password" type="password">
  <button type="submit">Register</button>
</form>
```

### Async/Await Pattern (asyncExample.js)
```javascript
function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("slow");
    }, 2000);
  });
}

async function main() {
  const result = await resolveAfter2Seconds();
  console.log(result);
}
```

## ✅ CI/CD Pipeline

This repository includes automated quality checks:

| Workflow | Trigger | Purpose |
|----------|---------|---------|
| **build.yml** | Push/PR to main, develop | Build verification & deployment readiness |
| **ci.yml** | Push/PR to main, develop, feature/** | Code quality, linting, security checks |
| **pull-request.yml** | PR opened/updated | PR validation & automated comments |

### Checks Performed
- ✓ JavaScript syntax validation (`node -c`)
- ✓ No trailing whitespace
- ✓ Required CSS variables in stylesheets
- ✓ HTML structure validation

## 🤝 Contributing

Contributions are welcome! Please follow these guidelines:

1. **Fork the repository** and create a feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes** following the code conventions
   
3. **Test your changes** locally by opening HTML files in a browser

4. **Commit with descriptive messages:**
   ```bash
   git commit -m "feat: add new tutorial example"
   ```

5. **Push to your fork and open a Pull Request:**
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Address feedback** from code reviews

## 📋 Code Conventions

- **JavaScript**: Use ES6+ syntax (let, const, arrow functions)
- **Naming**: Use camelCase for variables and functions, UPPER_CASE for constants
- **Comments**: Add comments for complex logic
- **Indentation**: Use 2 spaces (not tabs)
- **Files**: Keep files organized by topic

## 🐛 Troubleshooting

### Files Not Loading
- Ensure you're using a web server (not file:// protocol)
- Check browser console for errors (F12 → Console tab)
- Verify file paths in HTML links

### CSS Not Applied
- Clear browser cache (Ctrl+Shift+Delete or Cmd+Shift+Delete)
- Check for CSS selector specificity issues
- Verify stylesheet links are correct

### JavaScript Not Running
- Check browser console for errors
- Ensure scripts are loaded before DOM manipulation
- Verify syntax with `node -c filename.js`

## 📚 Resources

- [MDN Web Docs - HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [MDN Web Docs - CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [MDN Web Docs - JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Web.dev Learning Paths](https://web.dev/learn/)
- [JavaScript.info Tutorial](https://javascript.info/)

## 📄 License

This repository is open source and available under the MIT License. Feel free to use the code for learning purposes.

## 👤 Author

**Rashu Krbarnawal**

- GitHub: [@rashukrbarnawal](https://github.com/rashukrbarnawal)
- Repository: [Angular_Tutorial](https://github.com/rashukrbarnawal/Angular_Tutorial)

## 📝 Changelog

### Version 1.0.0
- Initial repository setup
- Added Day 1 HTML tutorial
- Added Day 2 JavaScript tutorial
- Added form validation example
- Added async JavaScript examples
- Implemented CI/CD pipeline
- Comprehensive README documentation

## 🎓 What You'll Learn

By studying this repository, you'll gain understanding of:
- ✅ HTML5 semantic structure
- ✅ CSS styling and layout techniques
- ✅ JavaScript DOM manipulation
- ✅ Event handling and listeners
- ✅ Form validation patterns
- ✅ Asynchronous JavaScript concepts
- ✅ Best practices for front-end development
- ✅ Git workflow and CI/CD basics

---

**Happy Learning!** 🚀 If you find this helpful, please consider starring the repository!
