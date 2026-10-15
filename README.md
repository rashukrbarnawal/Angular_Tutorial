# Angular_Tutorial

A hands-on learning repository for front-end web development fundamentals including HTML, CSS, and JavaScript. Despite the name, this repository contains vanilla web development examples and demonstrations rather than Angular.js-specific content.

## 📋 Overview

This repository serves as a practice ground for developers learning web development basics. It contains structured tutorial files, form handling examples, asynchronous JavaScript patterns, and comprehensive CI/CD pipeline checks.

## 🎯 Target Audience

- Developers learning HTML, CSS, and JavaScript fundamentals
- Students following web development tutorials
- Contributors practicing front-end concepts
- Anyone wanting hands-on web development examples

## 🚀 Quick Start

### Prerequisites

- **Web Browser**: Any modern browser (Chrome, Firefox, Safari, Edge)
- **Node.js 18+** (optional, only needed for syntax validation)
- **Text Editor**: VS Code, Sublime Text, or similar

### Installation

Clone the repository:

```bash
git clone https://github.com/rashukrbarnawal/Angular_Tutorial.git
cd Angular_Tutorial
```

**Note**: This is a static project with no npm dependencies. No `package.json` installation is needed.

### Running the Project

#### Option 1: Open HTML Files Directly

```bash
# On macOS
open Day1.html

# On Linux
xdg-open Day1.html

# On Windows
start Day1.html
```

#### Option 2: Local Server (Recommended)

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (if installed)
npx serve .

# Using PHP (if installed)
php -S localhost:8000
```

Then navigate to `http://localhost:8000` in your browser.

#### Option 3: VS Code Live Server

1. Install the "Live Server" extension in VS Code
2. Right-click on any HTML file
3. Select "Open with Live Server"

## 📁 Repository Structure

```
Angular_Tutorial/
├── .github/workflows/           # CI/CD pipeline configurations
│   ├── build.yml               # Build verification tests
│   ├── ci.yml                  # Code quality & validation
│   └── pull-request.yml        # PR validation checks
│
├── Day1.html                   # Day 1 tutorial content
├── Day2.js                     # Day 2 tutorial content
├── asyncExample.js             # Async/await examples
├── demo.html                   # Interactive demo
├── form.html                   # Form handling examples
├── index.js                    # Main entry point
├── script.js                   # General scripts
├── style.css                   # Primary stylesheet
├── styles.css                  # CSS variables and utilities
├── README.md                   # This file
└── config.yml                  # Project configuration
```

## 📚 Tutorial Files

| File | Description |
|------|-------------|
| `Day1.html` | Day 1 HTML fundamentals and structure |
| `Day2.js` | Day 2 JavaScript concepts and patterns |
| `asyncExample.js` | Asynchronous programming with async/await |
| `form.html` | HTML form handling and validation examples |
| `demo.html` | Interactive demonstrations |
| `index.js` | Core JavaScript entry point |

## 🎨 Styling

The project uses CSS variables defined in `styles.css` for consistent styling across all components:

```css
/* Example CSS variables in styles.css */
:root {
  --primary-color: #007bff;
  --secondary-color: #6c757d;
  /* ... more variables ... */
}
```

Use these variables in your CSS:

```css
body {
  color: var(--primary-color);
}
```

## ✅ Code Quality

### JavaScript Validation

All JavaScript files are validated for syntax errors:

```bash
node -c filename.js
```

Run validation for all `.js` files:

```bash
for file in *.js; do
  node -c "$file" 2>&1 && echo "✅ $file" || echo "❌ $file"
done
```

### Required Files

The following files must exist and be maintained:

- `README.md` - Project documentation
- `index.js` - Main entry point
- `style.css` - Primary stylesheet
- `styles.css` - CSS variables and utilities

## 📝 File Naming Convention

Tutorial files follow a day-based naming convention:

- `Day1.html`, `Day2.html`, `Day3.html` (HTML tutorials)
- `Day1.js`, `Day2.js`, `Day3.js` (JavaScript tutorials)
- `form.html` (Form-specific content)

## 🔄 CI/CD Pipeline

The repository uses GitHub Actions for automated code quality checks:

### CI Checks (`.github/workflows/ci.yml`)

- ✅ JavaScript syntax validation
- ✅ Required file existence verification
- ✅ Trailing whitespace detection
- ✅ File formatting checks

### Build Verification (`.github/workflows/build.yml`)

- ✅ HTML file count verification
- ✅ CSS file count verification
- ✅ JavaScript file count verification

### PR Validation (`.github/workflows/pull-request.yml`)

- ✅ PR title length validation (minimum 5 characters)
- ✅ PR description verification
- ✅ Large PR detection (>20 files flagged)

## 🤝 Contributing

### Before Committing

1. **Validate JavaScript syntax**:
   ```bash
   node -c your-file.js
   ```

2. **Check for trailing whitespace**

3. **Ensure all required files exist**

4. **Follow naming conventions** (Day-based for tutorials)

### Creating Pull Requests

1. **Create a feature branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Write a descriptive PR title** (minimum 5 characters)

3. **Include a clear description** of your changes

4. **Keep changes focused** (aim for under 20 files)

5. **Ensure CI checks pass** before merging

### Do's and Don'ts

#### ✅ Do's
- Validate JavaScript syntax before committing
- Maintain core files: `index.js`, `style.css`, `styles.css`, `README.md`
- Use CSS variables from `styles.css` for styling
- Write descriptive PR titles and descriptions
- Keep PRs small and focused

#### ❌ Don'ts
- Don't commit JavaScript with syntax errors
- Don't delete core required files
- Don't leave trailing whitespace
- Don't use vague or single-character PR titles
- Don't merge PRs with failing CI checks
- Don't commit secrets or API keys

## 📖 Learning Path

1. Start with `Day1.html` for HTML fundamentals
2. Progress to `Day2.js` for JavaScript basics
3. Explore `asyncExample.js` for advanced async patterns
4. Review `form.html` for form handling
5. Examine `demo.html` for interactive examples

## 🐛 Issues & Debugging

### JavaScript Syntax Error

If CI fails with a JavaScript syntax error:

```bash
node -c problematic-file.js
```

Fix the syntax error and commit again.

### Missing Required Files

Ensure these files always exist:

```bash
ls -la README.md index.js style.css styles.css
```

### Local Testing

Verify your changes locally before committing:

```bash
# Run syntax check
for file in *.js; do node -c "$file" || exit 1; done

# Verify file structure
python -m http.server 8000
# Open http://localhost:8000 in browser
```

## 📞 Support

For questions or issues:

1. Check existing issues on GitHub
2. Review the tutorial files for examples
3. Verify CI workflow files for validation rules
4. Consult the `config.yml` for project configuration

## 📄 License

This project is part of the Angular_Tutorial learning series. Contributions are welcome!

## 🔗 Resources

- [MDN Web Docs](https://developer.mozilla.org/)
- [HTML Specification](https://html.spec.whatwg.org/)
- [CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)

---

**Last Updated**: 2024
**Repository**: [rashukrbarnawal/Angular_Tutorial](https://github.com/rashukrbarnawal/Angular_Tutorial)
