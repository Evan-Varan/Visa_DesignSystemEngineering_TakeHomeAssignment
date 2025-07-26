
# Visa Natural Language → Component Suggestion Tool  
# [Live Demo](https://visa-design-system-engineering-take.vercel.app/)  

## Overview
This project is a web application built with React, TypeScript, and components from the Visa Nova Design System. 
The purpose of this project is to allow developers to describe a component they want to create, and be met with the following:
- A sample rendered output
- Combined component code
- Rendering of each sub-component
- Code of each sub-component

---

## Approach and Technical Choices
The approach focused on solid UI/UX design with an emphasis on an easy-to-use tool for developers.
It was decided against including a home page, as most modern AI tools do not do this for better UX. (If you go to OpenAI's website, you are sent directly to a ChatGPT interface.)

---

## Assumptions and Shortcuts
- The Visa font was unavailable, so Open Sans was used  
- No backend was implemented; components are stored locally  
- Hardcoded logic was used for component output  

---

## What I would add with more time
- An actual AI with search and retrieve (not hardcoded)
- Full-stack mock backend
- Delete button for snippets, website file structure for snippets

---
  
## How I leveraged AI
Used Cursor and ChatGPT for the following:
- Researching component structuring for React
- Helper for complex CSS & font generation
- Learning new tools & modules
- Helper for debugging

---

## Features
- A free-form text field for developers to describe what they want to build
- AI mock input interface
- Output of suggested Visa Nova Components
- Easily traversable output section through mini links
- Live preview of the composed UI
- Ability to save, copy, and download code snippets.
- Saved snippets page with your saved snippets
- Onboarding tour for first-time users (replayable via the navbar)
- Accessibility features compliant with WCAG, VGAR, and Visa's own internal rules

---

## Installation and Setup
Clone the repository:  
```bash
git clone https://github.com/Evan-Varan/Visa_DesignSystemEngineering_TakeHomeAssignment.git
cd visa-nova-tool
npm install 
npm run dev

