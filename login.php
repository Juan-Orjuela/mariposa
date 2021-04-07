<?php /* Template Name: Ingreso */ ?>
<?php get_header(); ?>
<!--INICIA HTML-->
<div id="loading"><img src="<?php echo get_template_directory_uri(); ?>/img/loader.gif" alt="CARGANDO..." /></div>
    <div class="contenedor" id="login">
      <div id="particles-js"></div>
      <div class="contenedor-info">
        <div class="fila">
          <div class="col"><img src="<?php echo get_template_directory_uri(); ?>/img/logo-efecto-mariposa.png" alt="EL EFECTO MARIPOSA" /></div>
          <div class="col"><img src="<?php echo get_template_directory_uri(); ?>/img/logo-ach.png" alt="ACH" /></div>
        </div>
        <div class="fila">
          <div class="cont-form">
          <?php echo do_shortcode( '[ultimatemember form_id="6"]' ); ?>
          </div>
        </div>
      </div>
    </div>
<!--FINALIZA HTML-->
<?php get_sidebar(); ?>
<?php get_footer(); ?>