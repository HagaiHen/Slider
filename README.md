# Simple React Slider

This is a simple React slider component that allows you to display content in a slideshow format. It includes basic functionalities such as navigating between slides manually and enabling auto-scrolling.

### Prerequisites

Before you begin, ensure you have the following installed:

- Node.js
- npm

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/HagaiHen/Slider.git
   ```

2. Install dependencies using npm:

   ```bash
   npm install
   ```

### Running the Application

To run the application locally, use the following commands:

```bash
npm start
```

This will start the development server. Open [http://localhost:3000](http://localhost:3000) in your browser to view the slider.

## Usage

Once the application is running, you can navigate between slides manually using the "Prev" and "Next" buttons. Clicking the "Auto" button will start automatic scrolling through the slides. You can stop the auto-scrolling by clicking the "Stop" button.

## Customization

You can customize the content of the slides by editing the `slides` array in the `Slider.js` file. Each slide object should have an `id` and `content` property. You can also customize the styling of the slider by modifying the `slider.css` file.