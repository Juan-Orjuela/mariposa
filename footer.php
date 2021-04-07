<script>
      var cargando = document.getElementById("loading");
      var contenido = document.querySelector(".contenedor");
      setTimeout(function () {
        contenido.style.opacity = 1;
        cargando.style.opacity = 0;
        setTimeout(function () {
          cargando.style.display = "none";
        }, 2000);
      }, 5000);
    </script>
    <script src="<?php echo get_template_directory_uri(); ?>/particles.min.js"></script>
    <script src="<?php echo get_template_directory_uri(); ?>/particulas.js"></script>
    <?php wp_footer();?> 
  </body>
</html>