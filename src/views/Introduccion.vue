<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    br
    br
    br
    .cajon.color-primario.py-5.mb-5.position-relative(data-aos="fade-left" style="background-color: #FEECC0")
      .row.justify-content-center.align-items-center
        .col-lg-1
        .col-lg-7.p-0
          p.mb-0 Apreciado participante, le damos la bienvenida a este momento de aprendizaje orientado a las herramientas para operar el proceso de cargue y descargue de mercancías según la normativa de higiene y seguridad. Antes de empezar le sugerimos revisar la siguiente infografía para identificar el contexto de aprendizaje.
        .col-lg-4
          .imagen-adornos-flotantes.imagen-superior.position-absolute(style='bottom:0% ; right: -0%;')
            img(src='@/assets/curso/intro/img01.png')                      
            .imagen-adornos-flotantes__img1: img(src="@/assets/curso/intro/bolita1.png" style="left: 0%; right:  ; top: 30%; bottom:  ; width: 47px")
            .imagen-adornos-flotantes__img2: img(src="@/assets/curso/intro/bolita2.png" style="left: ; right:-0% ; top:10% ; bottom: ; width: 73px ")
            .imagen-adornos-flotantes__img3: img(src="@/assets/curso/intro/bolita3.png" style="left: ; right: 16% ; top: ; bottom: -7% ; width: 47px ")
            .imagen-adornos-flotantes__img4: img(src="@/assets/curso/intro/bolita4.png" style="left: 5% ; right: ; top: ; bottom: -5% ; width: 103px ")
            .imagen-adornos-flotantes__img5: img(src="@/assets/curso/intro/cajita1.png" style="left:  ; right: -2% ; top: ; bottom: -10% ; width: 103px ")

    figure.mb-5(data-aos="fade-right")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)    
    
    p.mb-5 Como se mencionó, dentro de las actividades en el ámbito de la logística, las operaciones de transporte son las que tienen el mayor porcentaje de participación.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .cajon.color-acento-contenido.px-5.py-4.mb-5(data-aos="fade-left" style="background-color: #FFE0DD")
          .row.justify-content-start.align-items-center
            .col-lg-10
              h4 Operaciones de transporte
              p.mb-0 (componente vertebral de la distribución de la cadena logística) 
              p.mb-0 Vehículos utilizados para el transporte son cargados con mercancía y parten desde un origen para alcanzar un destino, en el cual la mercancía puede ser descargada o trasbordada.
        

        br        

        .bloque-texto-g.color-acento-botones.position-relative(data-aos="fade-right" style="background-color: #066B93; padding: 3rem !important")
          .bloque-texto-g__img(
            :style="{'background-image':`url(${require('@/assets/curso/intro/img02.png')})`}"
          )
            .imagen-superior.position-absolute(style='bottom:0 ; left: -0%;'): img(src='@/assets/curso/intro/img03.png')
          .bloque-texto-g__texto.px-5.py-4
            p.mb-0 La distribución de la mercancía tiene como propósito llevar de la manera más eficiente la cantidad correcta de producto desde su origen al lugar adecuado, en el tiempo requerido y al menor costo. Para hacerlo posible, se debe determinar la preparación de carga, permitiendo, de manera segura, maniobrar, transportar, almacenar e identificar fácilmente el material que contiene.
    
    
    p.mb-0 En este componente se abordan los modos de transporte, los equipos que se utilizan para el cargue y descargue de mercancía, así como el alistamiento de la mercancía y el manejo de las devoluciones.
</template>

<script>
import BannerInterno from '../components/BannerInterno.vue'
export default {
  name: 'Introduccion',
  components: {
    BannerInterno,
  },
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass">
.imagen-adornos-flotantes
  &__img1
    img
      position: absolute
      z-index: 99
      animation: t3zoom1 3s infinite
  &__img2
    img
      position: absolute
      z-index: 99
      animation: t3zoom2 4s infinite
  &__img3
    img
      position: absolute
      z-index: 99
      animation: t3zoom3 5s infinite
  &__img4
    img
      position: absolute
      z-index: 99
      animation: t3zoom2 6s infinite
  &__img5
    img
      position: absolute
      z-index: 99
      animation: t3rotar 15s infinite linear



@keyframes t3zoom1
  0%
    transform: scale(0.9, 0.9);
  50%
    transform: scale(2, 2);
  100%
    transform: scale(0.9, 0.9);
@keyframes t3zoom2
  0%
    transform: scale(0.9, 0.9);
  50%
    transform: scale(1.5, 1.5);
  100%
    transform: scale(0.9, 0.9);
@keyframes t3zoom3
  0%
    transform: scale(0.7, 0.7);
  50%
    transform: scale(1.2, 1.2);
  100%
    transform: scale(0.7, 0.7);

@keyframes t3rotar
  from
    transform: rotate(0deg);
  to
    transform: rotate(360deg);



.bloque-texto-g__img
    width: 40%;

.bloque-texto-g__texto
  width: 68%;
</style>
