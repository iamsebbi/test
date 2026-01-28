:root {
/_ LIGHT MODE _/
--light-bg-canvas: #F7F4ED; /_ Parchmen _/
--light-text-primary: #1F1F1F; /_ Carbon Black _/
--light-text-muted: #8A8A8A; /_ Grey Olive _/
--light-border: #DCDCDC; /_ Alabaster Grey _/
--light-accent: #7C8F5E; /_ Palm Leaf _/

/_ DARK MODE _/
--dark-bg-canvas: #141311; /_ Dark Warm Charcoal _/
--dark-text-primary: #E6E2DC; /_ Off-White _/
--dark-text-muted: #9E9E9E; /_ Silver Olive _/
--dark-border: #2A2A2A; /_ Dark Grey _/
--dark-accent: #8DA36B; /_ Lighter Palm _/
}

/\*_ @type {import('tailwindcss').Config} _/
module.exports = {
theme: {
extend: {
colors: {
canvas: {
DEFAULT: '#F7F4ED', // Light Mode
dark: '#141311', // Dark Mode
},
primary: {
DEFAULT: '#1F1F1F', // Light Mode
dark: '#E6E2DC', // Dark Mode
},
muted: {
DEFAULT: '#8A8A8A', // Light Mode
dark: '#9E9E9E', // Dark Mode
},
border: {
DEFAULT: '#DCDCDC', // Light Mode
dark: '#2A2A2A', // Dark Mode
},
accent: {
DEFAULT: '#7C8F5E', // Light Mode
dark: '#8DA36B', // Dark Mode
},
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
mono: ['Xanh Mono', 'monospace'],
},
},
},
plugins: [],
}
