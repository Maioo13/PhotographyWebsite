import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Add global styles for fonts
const style = document.createElement('style');
style.textContent = `
  /* Base font styles */
  body {
    font-family: 'Roboto', sans-serif;
    background-color: #121212;
    color: #F5F5F5;
  }
  
  /* Font for headings */
  h1, h2, h3, h4, h5, h6, .font-condensed {
    font-family: 'Roboto Condensed', sans-serif;
  }
`;
document.head.appendChild(style);

createRoot(document.getElementById("root")!).render(<App />);
