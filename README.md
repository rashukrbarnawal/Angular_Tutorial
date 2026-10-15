# Angular_Tutorial

A comprehensive learning repository for front-end web development fundamentals. Despite its name, this repository features vanilla HTML, CSS, and JavaScript tutorials—no Angular framework required!

## 🎯 Purpose

This repository serves as a hands-on practice ground for learning core web development concepts:
- HTML structure and semantics
- CSS styling and layout techniques
- JavaScript fundamentals and async patterns
- Form handling and DOM manipulation

## 👥 Target Users

- Developers new to web development
- Students following structured tutorials
- Contributors practicing front-end fundamentals
- Anyone looking for vanilla JavaScript examples

## 📚 Repository Structure

```
Angular_Tutorial/
├── .github/workflows/          # CI/CD pipeline configurations
│   ├── build.yml               # Build & deploy status checks
│   ├── ci.yml                  # Code quality & tests
│   └── pull-request.yml        # PR validation checks
├── Day1.html                   # Day 1: HTML Fundamentals
├── Day2.js                     # Day 2: JavaScript Basics
├── asyncExample.js             # Async JavaScript patterns
├── demo.html                   # Demo HTML page
├── form.html                   # HTML form examples
├── index.js                    # Main JavaScript entry point
├── script.js                   # Additional JavaScript utilities
├── style.css                   # Primary stylesheet
├── styles.css                  # Extended styles with CSS variables
└── README.md                   # This file
```

## 📖 Tutorial Files

### HTML Files

| File | Description |
|------|-------------|
| `Day1.html` | **Day 1 Tutorial** - Introduction to HTML fundamentals, semantic markup, and page structure |
| `form.html` | **Form Handling** - HTML form elements, input types, validation patterns, and submission handling |
| `demo.html` | **Demo Page** - Example page demonstrating HTML and CSS integration |

### JavaScript Files

| File | Description |
|------|-------------|
| `Day2.js` | **Day 2 Tutorial** - JavaScript basics, variables, functions, and DOM manipulation |
| `asyncExample.js` | **Async Patterns** - Promises, async/await, callbacks, and asynchronous programming examples |
| `index.js` | **Main Entry Point** - Primary JavaScript logic for the application |
| `script.js` | **Utilities** - Helper functions and additional JavaScript code |

### Stylesheet Files

| File | Purpose |
|------|---------|
| `style.css` | Primary stylesheet with core page styling |
| `styles.css` | Extended styles featuring CSS variables for consistent theming |

## 🚀 Quick Start

### Option 1: Direct Browser Opening
Simply open any HTML file in your web browser:
```bash
# macOS
open Day1.html

# Linux
xdg-open Day1.html

# Windows
start Day1.html
```

### Option 2: Local Web Server

#### Using Python 3
```bash
python -m http.server 8000
# Then visit http://localhost:8000
```

#### Using Node.js
```bash
npx serve .
# Then visit http://localhost:3000
```

#### Using PHP
```bash
php -S localhost:8000
# Then visit http://localhost:8000
```

### Option 3: VS Code Live Server
1. Install the "Live Server" extension
2. Right-click an HTML file
3. Select "Open with Live Server"

## 📋 Prerequisites

- **Web Browser** - Any modern browser (Chrome, Firefox, Safari, Edge)
- **Text Editor** - VS Code, Sublime Text, or similar (optional, for editing)
- **Node.js 18+** - Only needed for syntax validation (optional)

## ✅ Code Quality

### Validate JavaScript Files
```bash
node -c index.js
node -c asyncExample.js
node -c Day2.js
node -c script.js
```

### CI/CD Checks

The repository includes automated checks:
- ✅ JavaScript syntax validation
- ✅ CSS file structure verification
- ✅ HTML validation
- ✅ No trailing whitespace
- ✅ Required files presence check

All checks run automatically on pull requests and commits to `main`.

## 📝 Learning Path

**Follow this recommended order:**

1. **Day 1** - Start with `Day1.html` to learn HTML fundamentals
2. **Day 2** - Move to `Day2.js` to practice JavaScript basics
3. **Forms** - Explore `form.html` for interactive form handling
4. **Async** - Study `asyncExample.js` for advanced JavaScript patterns
5. **Demo** - Review `demo.html` to see concepts in action

## 🎨 Styling

### CSS Variables
The project uses CSS variables for consistent theming. See `styles.css` for available variables:

```css
:root {
  /* Your custom CSS variables */
}
```

Use these variables throughout your styles for maintainability.

## 🤝 Contributing

We welcome contributions! Please follow these guidelines:

### Before You Start
- Create a feature branch: `git checkout -b feature/your-feature-name`
- Keep changes focused and small (under 20 file changes preferred)

### Code Quality
- Validate syntax: `node -c <file>.js` for JavaScript files
- Maintain core files: `index.js`, `style.css`, `styles.css`, `README.md`
- No trailing whitespace
- Clear, descriptive commit messages

### Pull Request
- Use descriptive titles (minimum 5 characters)
- Include a description explaining your changes
- Wait for all CI checks to pass before merging

## 📦 No External Dependencies

This is a **zero-dependency project**—no `package.json` or npm installations needed. All code is vanilla:
- Pure HTML5
- Pure CSS3 (with CSS variables)
- Pure JavaScript (ES6+)

## 🔒 Security

- No secrets, API keys, or tokens in the codebase
- No environment variables required
- No external libraries to manage

## 📞 Support & Questions

- Check existing files for examples
- Review `Day1.html` and `Day2.js` for fundamental concepts
- Study `asyncExample.js` for advanced patterns

## 📄 License

This project is public and available for educational purposes.

## 🔗 Related Resources

- [MDN Web Docs](https://developer.mozilla.org/) - Web technology reference
- [JavaScript.info](https://javascript.info/) - Modern JavaScript tutorial
- [CSS Tricks](https://css-tricks.com/) - CSS guides and articles
- [HTML Living Standard](https://html.spec.whatwg.org/) - Official HTML specification

---

**Happy Learning! 🎓**
