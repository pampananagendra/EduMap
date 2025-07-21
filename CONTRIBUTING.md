# Contributing to PathFinder India

Thank you for your interest in contributing to PathFinder India! This document provides guidelines for contributing to this educational guidance platform.

## Development Setup

### Prerequisites
- Node.js (v16.0 or higher)
- npm (comes with Node.js)
- Git for version control

### Local Development
1. Fork the repository
2. Clone your fork: `git clone <your-fork-url>`
3. Install dependencies: `npm install`
4. Start development server: `npm run dev`
5. Start backend server: `cd backend && npm start`

## Project Structure

```
src/
├── components/          # Reusable React components
│   ├── Arts.tsx        # Arts stream component
│   ├── Commerce.tsx    # Commerce stream component
│   └── ...
├── pages/              # Page components
│   ├── Index.tsx       # Home page
│   ├── Login.tsx       # Authentication
│   └── ...
├── routes/             # Routing configuration
├── types/              # TypeScript definitions
└── App.tsx             # Main application
```

## Code Standards

### TypeScript
- Use TypeScript for all new files
- Define proper interfaces and types
- Avoid `any` type usage
- Use strict type checking

### React Components
- Use functional components with hooks
- Implement proper error boundaries
- Follow component naming conventions
- Use proper prop typing

### Styling
- Use Tailwind CSS for styling
- Follow responsive design principles
- Maintain consistent spacing and colors
- Use semantic class names

## Commit Guidelines

### Commit Message Format
```
type(scope): description

[optional body]

[optional footer]
```

### Types
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes
- `refactor`: Code refactoring
- `test`: Test additions/modifications
- `chore`: Build process or auxiliary tool changes

### Examples
```
feat(components): add college filtering functionality
fix(auth): resolve login redirect issue
docs(readme): update installation instructions
```

## Testing

### Running Tests
```bash
npm test                 # Run all tests
npm run test:watch      # Run tests in watch mode
npm run test:coverage   # Generate coverage report
```

### Writing Tests
- Write unit tests for components
- Include integration tests for features
- Maintain test coverage above 80%
- Use descriptive test names

## Pull Request Process

1. **Create Feature Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make Changes**
   - Follow coding standards
   - Add tests for new functionality
   - Update documentation if needed

3. **Test Your Changes**
   ```bash
   npm run build        # Ensure build passes
   npm run lint         # Check code quality
   npm test             # Run test suite
   ```

4. **Submit Pull Request**
   - Use descriptive PR title
   - Include summary of changes
   - Reference related issues
   - Request appropriate reviewers

## Code Review Guidelines

### For Authors
- Ensure CI checks pass
- Respond to feedback promptly
- Keep PRs focused and small
- Update documentation as needed

### For Reviewers
- Review code thoroughly
- Provide constructive feedback
- Check for security issues
- Verify tests are adequate

## Issue Reporting

### Bug Reports
Include:
- Steps to reproduce
- Expected behavior
- Actual behavior
- Environment details
- Screenshots if applicable

### Feature Requests
Include:
- Problem description
- Proposed solution
- Alternative solutions considered
- Additional context

## Development Guidelines

### Performance
- Optimize component re-renders
- Use lazy loading for routes
- Implement proper caching
- Monitor bundle size

### Security
- Validate all user inputs
- Use HTTPS in production
- Implement proper authentication
- Follow OWASP guidelines

### Accessibility
- Use semantic HTML
- Implement keyboard navigation
- Provide alt text for images
- Ensure proper color contrast

## Release Process

1. Update version in package.json
2. Update CHANGELOG.md
3. Create release branch
4. Run full test suite
5. Create release tag
6. Deploy to production

## Getting Help

- Check existing documentation
- Search existing issues
- Join our development discussions
- Contact maintainers for urgent issues

## License

By contributing to PathFinder India, you agree that your contributions will be licensed under the MIT License.
