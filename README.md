# Movie Intro Skipper

## Overview

The Movie Intro Skipper Chrome Extension automatically clicks the "Skip Intro" button on specific streaming platforms like Netflix, Crunchyroll, and Disney+. Users can also add custom texts to be skipped via the extension's popup interface.

## Features

- **Automatic Skipping:** Automatically clicks buttons with specified texts to skip intros or credits on supported streaming platforms.
- **User Customization:** Allows users to add new texts to be skipped via a popup interface.
- **Persistent Storage:** Stores user-defined texts in the browser's `localStorage` for persistent customization.

## Installation

1. Clone or download the extension repository:
   ```sh
   git clone https://github.com/yourusername/movie-intro-skipper.git
   ```
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable "Developer mode" using the toggle switch at the top right.
4. Click "Load unpacked" and select the extension directory.

## Usage

1. Click the extension icon to open the popup.
2. Use the form to add new texts that should trigger the skip action.
3. The extension will automatically look for these texts and click the corresponding buttons every 5 seconds.

## Notes

- **Permissions:** The extension requires permissions to access storage, active tabs, and execute scripts on specified host URLs.
- **Automatic Search:** The background script searches for specified texts every 5 seconds and clicks the corresponding buttons if found.
- **Popup Interface:** Users can add new texts via the popup interface, and these texts are saved in `localStorage` for persistence across sessions.

## License

This project is licensed under the MIT License.
