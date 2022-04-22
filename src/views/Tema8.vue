<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 8
      h1 Procedimientos y protocolos de recibo

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-up")
      .col-lg-1
      .col-8.col-lg-4
        .imagen-adornos-flotantes-tema3.d-flex.justify-content-center.mb-3.mb-lg-0          
            img(src='@/assets/curso/tema8/img01.png')
            .imagen-adornos-flotantes-tema3__img1: img(src="@/assets/curso/tema3/bolita1.png" style="left: 5%; right:  ; top: -0%; bottom:  ; width: 47px")
            .imagen-adornos-flotantes-tema3__img2: img(src="@/assets/curso/tema3/bolita2.png" style="left: ; right:0% ; top:10% ; bottom: ; width: 73px ")
            .imagen-adornos-flotantes-tema3__img3: img(src="@/assets/curso/tema3/bolita3.png" style="left: 25% ; right: ; top: ; bottom: -5% ; width: 47px ")
            .imagen-adornos-flotantes-tema3__img4: img(src="@/assets/curso/tema3/cajita1.png" style="left: -5% ; right: ; top: ; bottom: -10% ; width: 142px ")
      .col-lg-7
        p.mb-0 La recepción surge con las actividades que se generan en el almacén a consecuencia de la llegada de la mercancía. Para realizar el procedimiento de recepción de la mercancía debe existir un pedido previamente emitido. Y una vez esta llega al almacén, se debe hacer un proceso de verificación. Este proceso comprende las siguientes fases: 
    
    PasosA.color-primario.mb-5(data-aos="fade-left" tipo="n")
      .row
        .col-md-6.mb-4.mb-md-0
          h4 Llegada de la mercancía
          p.mb-0 Los vehículos llegan al almacén, para ello debe estar determinado el muelle en el que se realizará la descarga. El movimiento de la mercancía se debe registrar de manera cronológica a través de un parte de entrada y salida de vehículos.
        .col-md-6
          figure
            img(src='@/assets/curso/tema8/img02.png')            
      .row
        .col-md-6
          figure.mb-3.mb-lg-0
            img(src='@/assets/curso/tema8/img03.png')
        .col-md-6.mb-4.mb-md-0(style="text-align: left!important;")
          h4 Verificación del envío
          p.mb-0 Previo a la descarga se debe hacer un reconocimiento de la mercancía para comprobar que los datos que se encuentran en el documento (albarán de recepción) coinciden con los documentos de pedido.
      .row
        .col-md-6.mb-4.mb-md-0
          h4 Descarga
          p.mb-0 Se debe procurar realizar esta maniobra en zonas llanas apilando la mercancía de manera correcta. 
        .col-md-6
          figure.mb-3.mb-lg-0
            img(src='@/assets/curso/tema8/img04.png')
      .row
        .col-md-6
          figure.mb-3.mb-lg-0
            img(src='@/assets/curso/tema8/img05.png')
        .col-md-6.mb-4.mb-md-0(style="text-align: left!important;")
          h4 Control cuantitativo
          p.mb-0 A través del cotejo de la mercancía, comprobando que el envío incluye todo lo que está reflejado en el albarán de entrega.
      .row
        .col-md-6.mb-4.mb-md-0
          h4 Control cualitativo
          p.mb-0 Se extrae una muestra del envío para comprobar el estado del mismo y rechazar la existencia de daños, es importante dejar por escrito el resultado de la inspección.  
        .col-md-6
          figure.mb-3.mb-lg-0
            img(src='@/assets/curso/tema8/img06.png')
      .row
        .col-md-6
          figure.mb-3.mb-lg-0
            img(src='@/assets/curso/tema8/img07.png')
        .col-md-6.mb-4.mb-md-0(style="text-align: left!important;")
          h4 Registro de la mercancía
          p.mb-0 Posterior a la verificación, se debe integrar al almacén a través de una hoja de recepción. Se le asignará un código a cada referencia para su identificación en el almacén.
      .row
        .col-md-6.mb-4.mb-md-0
          h4 Reacondicionamiento físico
          p.mb-0 El Sistema de Gestión del Almacén (SGA) asignará una ubicación a cada referencia, en ocasiones puede ser necesario realizar la desconsolidación de la mercancía.
        .col-md-6
          figure.mb-3.mb-lg-0
            img(src='@/assets/curso/tema8/img08.png')
      .row
        .col-md-6
          figure.mb-3.mb-lg-0
            img(src='@/assets/curso/tema8/img09.png')
        .col-md-6.mb-4.mb-md-0(style="text-align: left!important;")
          h4 Etiquetado
          p.mb-0 Debe incluir datos como el código interno, lote, caducidad, número de unidades por unidad de carga y ubicación definida.
      .row
        .col-md-6.mb-4.mb-md-0
          h4 Ubicación en la zona asignada
          p.mb-0 Se debe ubicar la mercancía en el lugar asignado.
        .col-md-6
          figure.mb-3.mb-lg-0
            img(src='@/assets/curso/tema8/img10.png')
      
    Separador


</template>

<script>
import BannerInterno from '../components/BannerInterno.vue'
export default {
  name: 'Tema8',
  components: {
    BannerInterno,
  },
  data: () => ({
    // variables de vue
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
