1. AutoDiagnostics — Webpage README CSC104 UAT 

This folder contains the source files for the Auto Diagnostics website. The site provides vehicle diagnostic guides and tools, and includes a contact form.

2. Files in this folder

- `index.html` — The main HTML file that defines the page structure and content.
  - Title: "Auto Diagnostics - Your Vehicle Diagnostics Hub"
  - Sections: header, navigation, About, Diagnostic Guides, Recommended Tools, Contact form, Footer
  - External resources:
    - Google Fonts: Poppins
    - Contact form posts to an external Web3Forms API.

- `styles.css` — Main stylesheet
  - Typography and layout in `Poppins` font.
  - Full-height `header` with a dark gradient overlay and a background image.
  - Sticky, fixed top `nav` bar with a `.scrolled` state for different opacity when the page is scrolled.
  - Sections are initially hidden (opacity 0, translateY) and become visible after 10% visible 
  - `.dynamic-section` for card layout (flexbox) and responsive behavior.
  - `.card` styles for the guides and tools list with hover lift and shadow effects.
  - Responsive breakpoints (max-width: 768px) to stack navigation and cards on small screens.
  - Keyframe animations: `fadeInDown` and `fadeInUp` for header elements.

- `script.js` — Main JavaScript file. Key features:
  - `tools` array defines recommended tools (OBD-II Scanner, Multimeter, Code Reader, Brake Bleeder Kit, Fuel Pressure Tester, Compression Tester).
  - `populateToolsSection('tools-section', tools)` dynamically creates `.card` elements and inserts them into the `#tools-section` container.
  - Contact form handling:
    - Adds a `submit` event listener to `#contact-form`.
    - Prevents default submission, sends the form via `fetch()` to the form's `action` URL, and expects JSON responses.
    - Updates `#form-status` text and color for sending / success / error states.
    - Disables the submit button while sending and re-enables it after completion.
    - Hides the status message after a short delay.
  - IntersectionObserver to add `.visible` to each `<section>` when it scrolls into view, enabling the CSS reveal animations.
  - Navbar scroll behavior:
    - Hides the navbar when scrolling down and shows it when scrolling up (via `transform: translateY(...)`).
    - Toggles the `.scrolled` class when the page is scrolled more than 50px.
  - Smooth-scrolling for navigation links using `Element.scrollIntoView({ behavior: 'smooth' })`.



## Credits
- Google Fonts — Poppins
- Background image: Unsplash (linked in `styles.css` via remote URL)



