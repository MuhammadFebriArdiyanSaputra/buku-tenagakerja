<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Buku Tenaga Kerja 2025</title>

    @viteReactRefresh
    @vite(['resources/css/app.css', 'resources/js/app.jsx'])
</head>
<body class="bg-gray-100 min-h-screen font-sans antialiased">

    <div class="max-w-7xl mx-auto px-4 py-6">
        {{-- Konten yang akan diisi oleh halaman seperti dashboard --}}
        @yield('content')
    </div>

</body>
</html>
