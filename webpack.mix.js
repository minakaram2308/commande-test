const mix = require('laravel-mix');

mix.js('resources/react/app.jsx', 'public/js')
    .react() // Add this line for React
    .sass('resources/sass/app.scss', 'public/css');
