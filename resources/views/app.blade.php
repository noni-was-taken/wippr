<!DOCTYPE html>
<html lang="en">
<head>
    @viteReactRefresh
    @vite(['resources/css/app.css', 'resources/js/app.tsx'])
    @inertiaHead
    <link rel="icon" type="image/png" href="{{ asset('/logos/fire-colored.png') }}">
</head>
<body class="antialiased">
    @inertia
</body>
</html>
