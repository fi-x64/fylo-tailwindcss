/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ (() => {

eval("const themeToggleBtn = document.getElementById(\"theme-toggle\");\nconst themeToggleDarkIcon = document.getElementById(\"theme-toggle-dark-icon\");\nconst themeToggleLightIcon = document.getElementById(\"theme-toggle-light-icon\");\n\nif (\n  localStorage.getItem(\"color-theme\") === \"dark\" ||\n  (!(\"color-theme\" in localStorage) &&\n    window.matchMedia(\"(prefers-color-scheme: dark)\").matches)\n) {\n  // Show light icon\n  themeToggleLightIcon.classList.remove(\"hidden\");\n} else {\n  themeToggleDarkIcon.classList.remove(\"hidden\");\n}\n\n// Listen for toggle button click\nthemeToggleBtn.addEventListener(\"click\", toggleMode);\n\nfunction toggleMode() {\n  // Toggle icon\n  themeToggleDarkIcon.classList.toggle(\"hidden\");\n  themeToggleLightIcon.classList.toggle(\"hidden\");\n\n  // If is set in localstorage\n  if (localStorage.getItem(\"color-theme\")) {\n    // If light, make dark and save in localstorage\n    if (localStorage.getItem(\"color-theme\") === \"light\") {\n      document.documentElement.classList.add(\"dark\");\n      localStorage.setItem(\"color-theme\", \"dark\");\n    } else {\n      document.documentElement.classList.remove(\"dark\");\n      localStorage.setItem(\"color-theme\", \"light\");\n    }\n  } else {\n    // If not in localstorage\n    if (document.documentElement.classList.contains(\"dark\")) {\n      document.documentElement.classList.remove(\"dark\");\n      localStorage.setItem(\"color-theme\", \"light\");\n    } else {\n      document.documentElement.classList.add(\"dark\");\n      localStorage.setItem(\"color-theme\", \"dark\");\n    }\n  }\n}\n\nconst btn = document.getElementById(\"menu-btn\");\nconst menu = document.getElementById(\"menu\");\n\nbtn.addEventListener(\"click\", navToggle);\n\nfunction navToggle() {\n  btn.classList.toggle(\"open\");\n  menu.classList.toggle(\"flex\");\n  menu.classList.toggle(\"hidden\");\n}\n\n\n//# sourceURL=webpack://simple-tailwind-starter/./js/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./js/script.js"]();
/******/ 	
/******/ })()
;