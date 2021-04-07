<?php /* Template Name: Accion */ ?>
<?php get_header(); ?>
<!--INICIA HTML-->
<div id="loading"><img src="<?php echo get_template_directory_uri(); ?>/img/loader.gif" alt="CARGANDO..." /></div>
    <div class="contenedor" id="accion">
      <div id="particles-js"></div>
      <div class="contenedor-info">
        <div class="fila">
          <div class="col"><img src="<?php echo get_template_directory_uri(); ?>/img/logo-efecto-mariposa.png" alt="EL EFECTO MARIPOSA" /></div>
          <div class="col"><img src="<?php echo get_template_directory_uri(); ?>/img/logo-ach.png" alt="ACH" /></div>
        </div>
        <div class="fila fila-form">
          <div class="cont-form">
          <?php echo do_shortcode( '[contact-form-7 id="16" title="Acción efecto mariposa"]' ); ?>
          
          </div>
        </div>
        <div class="fila-contador">
          <div id="contador">
            <div class="col col-dias"><span class="num"></span><span class="tag">DÍAS</span></div>
            <div class="col col-horas"><span class="num"></span><span class="tag">HORAS</span></div>
            <div class="col col-minutos"><span class="num"></span><span class="tag">MINUTOS</span></div>
            <div class="col col-segundos"><span class="num"></span><span class="tag">SEGUNDOS</span></div>
          </div>
        </div>
        <div class="fila-mensaje">
          <p>PRONTO PODRÁS VISUALIZAR TODAS LAS ACCIONES EFECTO MARIPOSA DE CADA COLABORADOR DE LA COMPAÑÍA</p>
        </div>
      </div>
      <div id="glow-planeta"></div>
      <!--Canvas-->
      <img src="<?php echo get_template_directory_uri(); ?>/img/accion-desktop.jpg" alt="" id="canvas_img_escritorio" class="canvas-base" />
      <canvas id="canvas_escritorio" width="1440px" height="900px"></canvas>

      <img src="<?php echo get_template_directory_uri(); ?>/img/accion-mobile.jpg" alt="" id="canvas_img_mobile" class="canvas-base" />
      <canvas id="canvas_mobile" width="640px" height="1136px"></canvas>
      <div id="caja-descarga">
        <span>DESCARGA TU ACCIÓN:</span>
        <a id="descarga_escritorio" download="mi_proposito_computador.jpg">Formato computador</a>
        <a id="descarga_mobile" download="mi_proposito_celular.jpg">Formato celular</a>
      </div>
    </div>
    <script src="<?php echo get_template_directory_uri(); ?>/contador.js"></script>
<!--FINALIZA HTML-->
<?php get_sidebar(); ?>
<?php get_footer(); ?>