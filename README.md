## Supermarket Basket Web App

This repository now contains a small, self-contained web application that mimics
filling a supermarket basket. You can click on the preset food tags to add them
to the basket, remove items by clicking on the tags inside the basket, and add
custom items via the input field.

### Project Structure

```
AdvanvedML_Dummy/
├── index.html      # Page layout
├── styles.css      # Visual styling
├── script.js       # Interactivity
├── package.json    # Development dependency for local hosting
└── README.md       # Setup and usage instructions
```

### Required Software & Packages

| Requirement | Purpose |
|-------------|---------|
| [Node.js 18+](https://nodejs.org/) | Provides `npm` to install and run the static server. |
| `http-server` (installed via `npm install`) | Lightweight static file server used for local hosting. |

### Windows Setup & Local Hosting

1. **Install Node.js**
   - Download the latest LTS version for Windows from [nodejs.org](https://nodejs.org/) and follow the installer prompts.
   - This also installs `npm`, the Node.js package manager.

2. **Clone or download this repository**
   - Using Git:
     ```powershell
     git clone https://github.com/your-account/AdvanvedML_Dummy.git
     cd AdvanvedML_Dummy
     ```
   - Or download the ZIP from your hosting service, extract it, and open the folder in a terminal.

3. **Install dependencies**
   ```powershell
   npm install
   ```
   This pulls the `http-server` package defined in `package.json`.

4. **Start the local web server**
   ```powershell
   npm start
   ```
   The server listens on [http://localhost:3000](http://localhost:3000). Open that address in your browser to interact with the app.

5. **Using the app**
   - Click any of the available tags (watermelon, grape, carrot, steak) to add them to the basket.
   - Click a tag inside the basket to remove it.
   - Type a custom item in the input field and press **Add to Basket** to create a new, removable basket tag.

To stop the server, return to the terminal running `npm start` and press `Ctrl + C`.
