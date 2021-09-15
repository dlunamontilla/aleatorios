<?php
include __DIR__ . "/app/index.php";
?>

<!DOCTYPE html>
<html lang="es-VE" prefix="og: https://ogp.me/ns#">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Sorteo de números</title>

  <!-- Protocolo OpenGraph -->
  <meta property="og:title" content="Sorteo de números" />
  <meta property="og:type" content="website" />

  <!--
  <meta property="og:url" content="https://ejemplo.com/">
  <meta property="og:image" content="https://ejemplo.com/imagen.jpeg" />
  <meta property="og:video" content="https://example.com/video" />
  -->

  <!-- Favicon -->
  <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
  <link rel="icon" href="favicon.png" type="image/png" />

  <!-- Estilos -->
  <link rel="stylesheet" href="vista/css/style.css" />
</head>

<body>
  <main id="app">
    <header class="header">
      <h2>Encontrar Número Ganador</h2>

      <div class="buttons">
        <button class="button button--ganador">Encontrar al ganador</button>
      </div>
    </header>
  </main>

  <script src="app/js/main.js" type="module"></script>
</body>

</html>