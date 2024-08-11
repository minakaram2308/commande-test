<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <title>Laravel and React.js App</title>
    @vite('resources/css/app.css')
</head>
<body>
    <div id="root"></div>
    @vite('resources/react/app.jsx')
</body>
</html>
