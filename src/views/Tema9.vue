<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 9
      h1 Precintos

    p.mb-5 Corresponde al elemento con el que se cierra y sella un envase o embalaje con el fin de que solo pueda ser abierto por un destinatario o la persona a la que corresponda. Las formas más habituales de precinto son:
    
    .row.justify-content-center.align-items-center.mb-4.indicador__container(@mouseover="mostrarIndicador = false")
      .indicador--click(v-if="mostrarIndicador")
      .col-lg-4.tema9-zoom        
        div.p-0.position-relative.mb-4.mb-lg-0(data-aos="fade-left")          
          figure            
            img(src="@/assets/curso/tema9/img01.png")
          div.py-4.px-3.px-lg-5.w-100.position-absolute(style="bottom: 0%; height:75px;  background-color: rgba(255, 247, 230, 0.85)")
            .row.justify-content-center.align-items-center.mb-5
              .col-lg-1.p-0.d-flex.justify-content-center(style="background-color: #FF8578")
                h4.mb-0 01
              .col-lg-10
                p.mb-0 Las cintas adhesivas plásticas.
      .col-lg-4.tema9-zoom
        div.p-0.position-relative.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src="@/assets/curso/tema9/img02.png")
          div.py-4.px-3.px-lg-5.w-100.position-absolute(style="bottom: 0%; height:75px;  background-color: rgba(255, 247, 230, 0.85)")
            .row.justify-content-center.align-items-center.mb-5
              .col-lg-1.p-0.d-flex.justify-content-center(style="background-color: #FF8578")
                h4.mb-0 02
              .col-lg-10
                p.mb-0 Cuerdas.
      .col-lg-4.tema9-zoom
        div.p-0.position-relative.mb-4.mb-lg-0(data-aos="fade-left")
          figure
            img(src="@/assets/curso/tema9/img03.png")
          div.py-4.px-3.px-lg-5.w-100.position-absolute(style="bottom: 0%; height:75px;  background-color: rgba(255, 247, 230, 0.85)")
            .row.justify-content-center.align-items-center.mb-5
              .col-lg-1.p-0.d-flex.justify-content-center(style="background-color: #FF8578")
                h4.mb-0 03
              .col-lg-10
                p.mb-0 Correas.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.tema9-zoom
        div.p-0.position-relative.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src="@/assets/curso/tema9/img04.png")
          div.py-4.px-3.px-lg-5.w-100.position-absolute(style="bottom: 0%; height:75px;  background-color: rgba(255, 247, 230, 0.85)")
            .row.justify-content-center.align-items-center.mb-5
              .col-lg-1.p-0.d-flex.justify-content-center(style="background-color: #FF8578")
                h4.mb-0 04
              .col-lg-10
                p.mb-0 Tirantes.
      .col-lg-4.tema9-zoom
        div.p-0.position-relative.mb-4.mb-lg-0(data-aos="fade-left")
          figure
            img(src="@/assets/curso/tema9/img05.png")
          div.py-4.px-3.px-lg-5.w-100.position-absolute(style="bottom: 0%; height:75px;  background-color: rgba(255, 247, 230, 0.85)")
            .row.justify-content-center.align-items-center.mb-5
              .col-lg-1.p-0.d-flex.justify-content-center(style="background-color: #FF8578")
                h4.mb-0 05
              .col-lg-10
                p.mb-0 Lacres.
      .col-lg-4.tema9-zoom
        div.p-0.position-relative.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src="@/assets/curso/tema9/img06.png")
          div.py-4.px-3.px-lg-5.w-100.position-absolute(style="bottom: 0%; height:75px;  background-color: rgba(255, 247, 230, 0.85)")
            .row.justify-content-center.align-items-center.mb-5
              .col-lg-1.p-0.d-flex.justify-content-center(style="background-color: #FF8578")
                h4.mb-0 06
              .col-lg-10
                p.mb-0 Flejes.

    br
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-2
        .imagen-adornos-flotantes-tema4.d-flex.justify-content-center          
            img(style="width:127px" src='@/assets/curso/tema9/img07.svg')
            .imagen-adornos-flotantes-tema4__img1: img(src="@/assets/curso/tema4/bolita1.png" style="left: 5%; right:  ; top: -15%; bottom:  ; width: 26px")
            .imagen-adornos-flotantes-tema4__img2: img(src="@/assets/curso/tema4/bolita2.png" style="left: ; right:-10% ; top:-20% ; bottom: ; width: 73px ")
            .imagen-adornos-flotantes-tema4__img3: img(src="@/assets/curso/tema4/bolita3.png" style="left: -10% ; right: ; top: ; bottom: -15% ; width: 47px ")
      .col-lg-10
        p.mb-0 Para el caso de los contenedores de transporte, se hace uso de precintos de seguridad mecánicos, que incluyen códigos de identificación, con el fin de impedir que puedan ser abiertos sin conocimiento del destinatario. También, se pueden encontrar precintos electrónicos, los cuales permiten la trazabilidad del contenedor, registrar la apertura y cierre de puertas, mantener control sobre la ruta y los tiempos de tráfico, así como la entrada o salida de las áreas de tránsito.        

    br
    .row.justify-content-center.align-items-center.mb-0
      .col-lg-5(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido
          h4.mb-0 Figura 1
          div <i>Precinto de alta seguridad para sellar contenedores de transporte</i>
        figure
          img(src="@/assets/curso/tema9/img08.png")
      .col-lg-5(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          h4.mb-0 Figura 2
          div <i>Precinto electrónico para contenedores</i>
        figure
          img(src="@/assets/curso/tema9/img09.png")
</template>

<script>
import BannerInterno from '../components/BannerInterno.vue'
export default {
  name: 'Tema9',
  components: {
    BannerInterno,
  },
  data: () => ({
    mostrarIndicador: true,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
