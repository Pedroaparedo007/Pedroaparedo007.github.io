<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>My Cloudflare Proxy</title>
    <style>
        body { font-family: sans-serif; display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; background: #121212; color: white; }
        .search-box { display: flex; gap: 10px; width: 100%; max-width: 500px; }
        input { flex: 1; padding: 12px; border-radius: 6px; border: 1px solid #333; background: #222; color: white; }
        button { padding: 12px 20px; border-radius: 6px; border: none; background: #f63; color: white; cursor: pointer; font-weight: bold; }
    </style>
</head>
<body>
    <h1>Web Proxy Gateway</h1>
    <div class="search-box">
        <input type="text" id="target" placeholder="Enter full URL (e.g., https://example.com)">
        <button onclick="launchProxy()">Go</button>
    </div>

    <script>
        function launchProxy() {
            const targetUrl = document.getElementById('target').value;
            if (targetUrl) {
                // Redirects the user to your backend function with the URL attached
                window.location.href = `/proxy?url=${encodeURIComponent(targetUrl)}`;
            }
        }
    </script>
</body>
</html>

