# Browser-Bruce  

A simple web browser for Bruce firmware! 🚀  

## How It Works  
Since parsing HTML on an ESP32 is basically impossible (there's not enough memory). This browser uses the [W3C HTML to Text service](https://www.w3.org/services/html2txt/) to convert web pages into plain text, which are displayed on screen.

## Features
- **Browse text-based versions of websites**
- **Follow links**
- **History navigation**
- **Custom site list** (edit the source to add your own sites!)  

## How to Use
1. Pick a website from the list.
2. The browser fetches a simplified text version of the page.
3. Scroll, navigate, and follow links!

## Limitations
- No images, no CSS, no JavaScript—just pure text.
- Some sites might not work if they block the W3C service.
- It's a tiny browser for a tiny device—keep expectations realistic!

## Project setup
```
npm install
```

### Compiles
```
npm run build
```

### Compiles and runs script
```
npm run start
```

### Compiles and hot-reloads for development
```
npm run dev
```

### Compiles and upload file to Bruce device
```
npm run upload
```
