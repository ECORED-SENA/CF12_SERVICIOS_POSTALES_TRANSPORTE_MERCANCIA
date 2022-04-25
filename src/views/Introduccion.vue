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
    br
    br
    .cajon.color-primario.py-5.mb-5.position-relative(data-aos="fade-left" style="background-color: #FEECC0")
      .row.justify-content-center.align-items-center
        .col-1.d-none.d-lg-block
        .col-10.col-xl-7.p-0.px-3
          p.mb-0 Apreciado participante, le damos la bienvenida a este momento de aprendizaje orientado a las herramientas para operar el proceso de cargue y descargue de mercancías según la normativa de higiene y seguridad. Antes de empezar le sugerimos revisar la siguiente infografía para identificar el contexto de aprendizaje.
        .col-1.col-xl-4
          .imagen-adornos-flotantes.imagen-superior.position-absolute.d-none.d-xl-block(style='bottom:0% ; right: -0%;')
            img(src='@/assets/curso/intro/img01.png')                      
            .imagen-adornos-flotantes__img1: img(src="@/assets/curso/intro/bolita1.png" style="left: 0%; right:  ; top: 30%; bottom:  ; width: 47px")
            .imagen-adornos-flotantes__img2: img(src="@/assets/curso/intro/bolita2.png" style="left: ; right:-0% ; top:10% ; bottom: ; width: 73px ")
            .imagen-adornos-flotantes__img3: img(src="@/assets/curso/intro/bolita3.png" style="left: ; right: 16% ; top: ; bottom: -7% ; width: 47px ")
            .imagen-adornos-flotantes__img4: img(src="@/assets/curso/intro/bolita4.png" style="left: 5% ; right: ; top: ; bottom: -5% ; width: 103px ")
            .imagen-adornos-flotantes__img5: img(src="@/assets/curso/intro/cajita1.png" style="left:  ; right: -2% ; top: ; bottom: -10% ; width: 103px ")

    //- figure.mb-5(data-aos="fade-right")
    //-   .video
    //-     iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)       
    .tarjeta.tarjeta--gris.p-4(style="background-color: #FFFBEF")
      PasosB.color-acento-contenido.p-0.m-0
        .div.p-0.m-0.position-relative(titulo="")
          p.mb-0.text-center <b>¿Cómo aprender durante este primer componente de formación?</b>
          img.mb-0(src="@/assets/curso/intro/img100.svg")
          .position-absolute.p-0.m-0.w-100.d-flex.justify-content-center(style='bottom:0 ; left: 0%;')            
            audio(controls)            
              source(src="@/assets/curso/intro/Slide_2.mp3" type="audio/mpeg")    
            //- div(id="audio-player-container")   
            //-   p Audio Player
            //-   button(id="play-icon3")
            //-   span(id="current-time" class="time") 0:00
            //-   span(id="duration" class="time") 0:00


                  

        .div.p-0.m-0(titulo="")
          p.mb-0.text-center <b>¿Cuál es el objetivo de aprendizaje?</b>
          ImagenInfografica.color-secundario.p-0.m-0
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/intro/img101.svg', alt='Texto que describa la imagen')                
            .tarjeta.color-primario.p-3(x="33.8%" y="32%")
              p.mb-0.d-inline.ps-1(style="border-left: 3px solid #5263E2") <b>Aprendizaje:</b> validar entrega de mercancías y objetos postales de acuerdo a clasificación y procedimientos.     
            .tarjeta.color-primario.p-3(x="71.5%" y="32%")
              p.mb-0.d-inline.ps-1(style="border-left: 3px solid #5263E2") <b>Objetivos:</b> aprender sobre el traslado de mercancías y objetos postales en medio de transporte según origen y destino, zonas asignadas y procedimientos.
            .tarjeta.color-primario.p-3(x="28.8%" y="88%")
              p.mb-0.d-inline.ps-1(style="border-left: 3px solid #5263E2") <b>Habilidades:</b>  operar el proceso de cargue y descargue de mercancías según normativa de higiene y seguridad.

        .div.p-0.m-0.position-relative(titulo="")   
          p.mb-0.text-center <b>¿Cómo está estructurado el componente de formación?</b>                         
          ImagenInfografica.color-secundario.p-0.m-0
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/intro/img102.svg')                
            .tarjeta.color-primario.p-3(x="31.9%" y="55.9%")
              p.mb-0.d-inline.ps-1(style="border-left: 3px solid #5263E2") Trasladar las mercancías y objetos postales en medio de transporte según origen y destino, zonas asignadas y procedimientos.
            .tarjeta.color-primario.p-3(x="68.1%" y="45.8%")
              p.mb-0.d-inline.ps-1(style="border-left: 3px solid #5263E2") Validar entrega de mercancías y objetos postales de acuerdo con la clasificación y procedimientos. 
          .position-absolute.p-0.m-0.w-100.d-flex.justify-content-center(style='bottom:0 ; left: 0%;')            
            audio(controls)            
              source(src="@/assets/curso/intro/Slide_4.mp3" type="audio/mpeg")     
              
        .div.p-0.m-0.position-relative(titulo="")              
          p.mb-0.text-center <b>¿Quiénes están en el curso?</b>                
          ImagenInfografica.color-secundario.p-0.m-0
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/intro/img103.svg')                
            .tarjeta.color-primario.p-3(style="width: 175px" x="38.9%" y="19%")
              .row.align-items-center
                .col-lg-4
                  img(src='@/assets/curso/intro/img105.svg')                
                .col-lg-8.px-0
                  p.mb-0.text-center Contenidos
            .tarjeta.color-primario.p-3(style="width: 175px" x="58.6%" y="17.5%")
              .row.align-items-center
                .col-lg-4
                  img(src='@/assets/curso/intro/img106.svg')                
                .col-lg-8.px-0
                  p.mb-0.text-center Recursos 
            .tarjeta.color-primario.p-3(style="width: 175px" x="55.2%" y="44.5%")
              .row.align-items-center
                .col-lg-4
                  img(src='@/assets/curso/intro/img107.svg')                
                .col-lg-8.px-0
                  p.mb-0.text-center Personas  
          .position-absolute.p-0.m-0.w-100.d-flex.justify-content-center(style='bottom:0 ; left: 0%;')            
            audio(controls)            
              source(src="@/assets/curso/intro/Slide_5.mp3" type="audio/mpeg")
        .div.p-0.m-0.position-relative(titulo="")              
          img(src='@/assets/curso/intro/img108.svg')   
          .position-absolute.p-0.m-0.w-100.d-flex.justify-content-center(style='bottom:0 ; left: 0%;')            
            audio(controls)            
              source(src="@/assets/curso/intro/Slide_6.mp3" type="audio/mpeg")             

            
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

        .bloque-texto-g.color-acento-botones.position-relative.p-3.p-sm-4.p-md-5(data-aos="fade-right" style="background-color: #066B93; padding: 3rem !important")
          .bloque-texto-g__img(
            :style="{'background-image':`url(${require('@/assets/curso/intro/img02.png')})`}"
          )
            .imagen-superior.position-absolute.d-none.d-lg-block(style='bottom:-10% ; left: -0%;'): img(src='@/assets/curso/intro/img03.png')
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

<script>
//import lottieWeb from 'https://cdn.skypack.dev/lottie-web'
// const playIconContainer = document.getElementById('play-icon3')
// let state = 'play'
// alert(playIconContainer)

// playIconContainer.addEventListener('click', () => {
//   if (state === 'play') {
//     //animation.playSegments([14, 27], true)
//     state = 'pause'
//   } else {
//     //animation.playSegments([0, 14], true)
//     state = 'play'
//   }
// })
</script>

<style lang="sass">
.pasos-b__header__btn--left, .pasos-b__header__btn--right
    border: 2px solid #133D60;
    background-color: #133D60;

.tarjeta.tarjeta--gris
  .fa-angle-left:before
    color: white !important

  .fa-angle-right:before
    color: white !important

.pasos-b.color-acento-contenido .pasos-b__header__item--active .pasos-b__header__item__dot
  border: 3px solid #43A99B;
  background-color: #43A99B;
  span
    color: white

.pasos-b__header__item__dot
  border: 1px solid #CEE9FF;
  background-color: #CEE9FF;

.pasos-b__header__item:first-child .pasos-b__header__item__line-container:before
  background-color: transparent


.pasos-b__header__item__line-container:before
  background-color: #707070

.pasos-b__header__item__line-container:after, .pasos-b__header__item__line-container:before
  background-color: #707070;

.pasos-b__header__item--before .pasos-b__header__item__dot
    border-color: #5263E2;
    background-color: #5263E2;

b__header__item__line-container:before, .pasos-b__header__item--before .pasos-b__header__item__line-container:after
  background-color: #707070;

.pasos-b__header__item--before .pasos-b__header__item__line-container:before, .pasos-b__header__item--before .pasos-b__header__item__line-container:after
  background-color: #707070;

.pasos-b__header__item--active .pasos-b__header__item__line-container:before
  background-color: #707070;

.pasos-b__header
  margin-bottom: 0rem!important;



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


.bloque-texto-g__texto
   width: 68%;

@media (max-width: 992px)
  .bloque-texto-g__texto
      width: 100%;
</style>
