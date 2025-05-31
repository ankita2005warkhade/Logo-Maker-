Logo Maker
A powerful and intuitive web-based logo maker that allows users to design custom logos with a variety of icons, customizable backgrounds, and text options. Create unique and professional logos directly in your browser!


✨ Features
Icon Customization:

Select from a wide range of favorite icons.

Adjust icon size.

Rotate icons to any angle.

Full-spectrum color picker for icons.

Background Customization:

Change background color with a color picker.

Apply padding to the logo canvas.

Control border-radius to make backgrounds rounded.

Utilize gradient backgrounds for dynamic effects.

Export Functionality:

Export your created logo as an image (using html2canvas).

🛠️ Technologies Used
This project is built using modern web technologies to provide a smooth and responsive user experience:

React: A JavaScript library for building user interfaces.

Vite: A fast build tool that provides an excellent developer experience.

Tailwind CSS: A utility-first CSS framework for rapidly building custom designs.

Shadcn/ui: A collection of reusable components built with Radix UI and Tailwind CSS.

html2canvas: A JavaScript library to take screenshots of webpages or parts of them.

react-colorful: A tiny color picker component for React.

lucide-react: A collection of beautiful and customizable open-source icons.

🚀 Installation
To get a local copy up and running, follow these simple steps. Ensure you have Node.js and npm (or Yarn) installed on your system.

Clone the repository:

git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

(Replace YOUR_USERNAME and YOUR_REPO_NAME with your actual GitHub details)

Navigate into the project directory:

cd YOUR_REPO_NAME

Install dependencies:

npm install
# or
yarn install

Install and Initialize Tailwind CSS v4:
This project uses Tailwind CSS v4. Follow these steps to ensure it's correctly set up:

npm install -D tailwindcss@next
# or
yarn add -D tailwindcss@next

Then, initialize Tailwind CSS:

npx tailwindcss init

This will create a tailwind.config.js file in your project root.

Configure your tailwind.config.js:
Update the content array in tailwind.config.js to include all your component files:

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

Add Tailwind Directives to your CSS:
Create or open your main CSS file (e.g., src/index.css or src/App.css) and add the Tailwind directives:

@tailwind base;
@tailwind components;
@tailwind utilities;

🏃 Usage
To run the project in development mode:

npm run dev
# or
yarn dev

This will start the development server, and you can view the application in your browser, usually at http://localhost:5173.

🤝 Contributing
We welcome contributions to this project! If you have ideas for improvements, new features, or bug fixes, please feel free to:

Open an issue to report bugs or suggest enhancements.

Fork the repository, make your changes, and submit a pull request.

Your support is greatly appreciated!

📞 Contact
Ankita Warkhade - ankitawarkhadecse@gmail.com

Project Link: https://github.com/ankita2005warkhade/Logo-Maker
