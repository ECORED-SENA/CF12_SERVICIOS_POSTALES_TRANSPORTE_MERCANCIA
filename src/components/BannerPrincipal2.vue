<template lang="pug">
.banner-principal.pt-3
  .container.tarjeta.position-relative(
    :style="{'background-image': globalData.fondoBannerPrincipal ? `url(${globalData.fondoBannerPrincipal})` : 'none'}"
  )
    .row.banner-principal__row.position-relative.justify-content-center.align-items-center.g-0
      .col-lg-6.banner-principal__info.ps-2.py-4.py-sm-5.ps-5
        .banner-principal__componente
          h1.mb-0( v-html="globalData.componenteFormativo")
        .col-lg-11
          .banner-principal__descripcion
            p.mb-0(v-html="globalData.descripcionCurso")
        .banner-principal__accion
          router-link.boton(:to="{name: iniciarLnk.nombreRuta }")
            span.me-1 Ver más
            i.fas.fa-angle-right

      .d-none.d-lg-block.col-lg-5.px-0.banner-principal__img.d-flex.justify-content-center
        img(:src="globalData.imagenBannerPrincipal")
    .imagen_flotante_1: img(src="@/assets/curso/float4.png")    
    .imagen_flotante_2: img(src="@/assets/curso/float1.png")
    .imagen_flotante_3: img(src="@/assets/curso/float3.png")
    .imagen_flotante_4: img(src="@/assets/curso/float2.png")
    
  

</template>

<script>
import mixins from '../components/plantillaMixins'
export default {
  name: 'BannerPrincipal',
  mixins: [mixins],
  computed: {
    globalData() {
      return this.$config.global
    },
  },
}
</script>

<style lang="sass">
.banner-principal,  header
  .fa-angle-right:before
    color: white !important

.fondo-contenido
  position: absolute
  padding: 0px
  z-index: 2
  height: 100%
  width: 100%
.banner-principal__info
  //padding-left: 80px  !important
  z-index: 3


.banner-principal
  p, h1, h2, h3, h4, h5, h6
    color: $color-banner-text

  .tarjeta
    background-color: $color-banner-fondo
    background-size: cover
    background-position: center

  &__info
    display: flex
    flex-direction: column
    justify-content: center

  &__programa
    display: flex
    align-items: center
    margin-bottom: 20px

  &__componente
    margin-bottom: 20px
    h1
      line-height: 1.1em

      @media (max-width: $bp-max-xs)
        font-size: 2em

  &__descripcion
    margin-bottom: 20px

  .banner-principal__img
    padding-top: 0.5rem !important;
    padding-bottom: 0.5rem !important;


  // &__row
  //   @if $banner-principal-img-x == 'derecha'
  //     justify-content: space-between
  //   @else
  //     justify-content: space-around
  //     .banner-principal__img
  //       //padding-right: 1.5rem!important
  //     @media (min-width: $bp-min-sm)
  //       .banner-principal__img
  //         //padding-right: 3rem!important

  &__img
    animation: scale 5s ease-in-out infinite alternate
    @if $banner-principal-img-y == 'arriba'
      align-self: flex-start
      padding-bottom: 1.5rem
      @media (min-width: $bp-min-sm)
        padding-bottom: 3rem!important
    @else if $banner-principal-img-y == 'abajo'
      align-self: flex-end
      padding-top: 1.5rem
      @media (min-width: $bp-min-sm)
        padding-top: 3rem!important
    @else
      align-self: center
      padding-top: 1.5rem
      padding-bottom: 1.5rem
      @media (min-width: $bp-min-sm)
        padding-top: 3rem!important
        padding-bottom: 3rem!important


.imagen_flotante
  &_1
    animation: float1 3s ease-in-out infinite alternate
    position: absolute
    width: 110px
    bottom: 100px
    left: -4%
  &_2
    animation: float1 3.5s ease-in-out infinite alternate
    position: absolute
    width: 121px
    top: 10px
    box-shadow:
    left: -4%
  &_3
    animation: float1 3.8s ease-in-out infinite alternate
    position: absolute
    width: 133px
    bottom: -10%
    left: 23%
  &_4
    filter: blur(1px)
    animation: float1 3s ease-in-out infinite alternate
    position: absolute
    width: 133px
    top: 5%
    right: -4.5%
    z-index: 99
    @media  (max-width: $bp-max-lg)
      display: none



@keyframes float1
  0%
    transform: translateY(20px)

  100%
    transform: translateY(0px)
@keyframes scale
  0%
    transform: scale(1.1)

  100%
    transform: scale(1)


@media (max-width: $bp-max-md)
  .fondo-contenido
    display: none
  .fondo-contenido2
    background-repeat: no-repeat
    background-size: cover
</style>
