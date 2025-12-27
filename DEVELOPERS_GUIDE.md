# DACIT Developer Guide

This document outlines the conventions and best practices for contributing to the DACIT (Decentralized Autonomous Compute & Intelligence Token) project.

## Table of Contents

1. [Project Structure](#project-structure)
2. [File Naming Conventions](#file-naming-conventions)
3. [Documentation Standards](#documentation-standards)
4. [Code Organization](#code-organization)
5. [Technology Stack](#technology-stack)

## Project Structure

```
Online_marketing_NN_token/
├── DEVELOPERS_GUIDE.md         # This file
├── README.md                   # Project overview and whitepaper
├── docs/                       # Documentation files
│   ├── whitepaper.md          # Detailed whitepaper
│   ├── conversion-optimization.md
│   ├── real-time-optimization.md
│   └── ui-design.md
├── contracts/                  # Smart contracts
│   └── anchor/                # Anchor/Solana programs
│       ├── Anchor.toml
│       ├── Cargo.toml
│       └── src/
│           └── lib.rs
└── frontend/                   # Frontend code
    ├── components/            # React/TypeScript components
    └── utils/                 # Utility functions
```

## File Naming Conventions

- **Use lowercase and hyphens**: File names should be lowercase with hyphens separating words (e.g., `conversion-optimization.md`, not `Conversion Optimization Metrics`)
- **Use appropriate extensions**: 
  - `.md` for Markdown documentation
  - `.rs` for Rust source files
  - `.ts` / `.tsx` for TypeScript/React files
  - `.json` for JSON configuration files
  - `.toml` for TOML configuration files
- **No spaces in filenames**: Avoid spaces in file and directory names

## Documentation Standards

### Markdown Files

- Use proper Markdown syntax with headers (`#`, `##`, `###`)
- Include a table of contents for longer documents
- Use code blocks with language specification for syntax highlighting
- Use tables for structured data

Example:
```markdown
# Document Title

## Section 1

Content here...

```rust
// Code example with syntax highlighting
fn main() {
    println!("Hello, DACIT!");
}
```
```

### Code Comments

- Add documentation comments for public APIs
- Use inline comments sparingly and only when necessary
- For Rust: Use `///` for doc comments, `//` for inline comments
- For TypeScript: Use JSDoc-style comments for functions

## Code Organization

### Rust/Anchor Smart Contracts

- Place all Anchor programs in `contracts/anchor/`
- Follow Anchor conventions for program structure
- Separate concerns: accounts, instructions, and state

### Frontend Components

- Place React components in `frontend/components/`
- Use TypeScript for type safety
- Follow React functional component patterns
- Use Tailwind CSS for styling

### Utility Functions

- Place shared utilities in `frontend/utils/`
- Keep utilities small and focused on single responsibilities

## Technology Stack

| Component | Technology |
|-----------|-----------|
| Blockchain | Solana |
| Smart Contracts | Anchor Framework (Rust) |
| Frontend | Next.js + React + TypeScript |
| Styling | Tailwind CSS |
| Wallet Integration | @solana/wallet-adapter |

## Getting Started

1. Clone the repository
2. Review the README.md for project overview
3. Check docs/ for detailed documentation
4. Set up your development environment per the technology requirements

## Contributing

1. Follow the file naming conventions above
2. Place code in appropriate directories
3. Document new features in the docs/ directory
4. Ensure code compiles/lints before submitting PRs
