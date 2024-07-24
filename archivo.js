<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mensaje Especial</title>
    <style>
        body, html {
            height: 100%;
            margin: 0;
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            background: linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%);
        }
        .container {
            text-align: center;
            color: white;
        }
        .sun {
            width: 100px;
            height: 100px;
            background: yellow;
            border-radius: 50%;
            margin: 0 auto 20px;
            animation: rise 3s ease-in-out;
        }
        @keyframes rise {
            0% {
                transform: translateY(100%);
                opacity: 0;
            }
            100% {
                transform: translateY(0);
                opacity: 1;
            }
        }
        .message {
            font-size: 2em;
            animation: fadeIn 4s ease-in-out;
        }
        @keyframes fadeIn {
            0% {
                opacity: 0;
            }
            100% {
                opacity: 1;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="sun"></div>
        <div class="message">Eres muy especial para mí</div>
    </div>
</body>
</html>
