<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Técnicas de cohesión de las mercancías y objetos postales
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-1
      .col-lg-4
        .imagen-adornos-flotantes-tema3.d-flex.justify-content-center          
            img(src='@/assets/curso/tema5/img01.png')
            .imagen-adornos-flotantes-tema3__img1: img(src="@/assets/curso/tema3/bolita1.png" style="left: 20%; right:  ; top: -10%; bottom:  ; width: 47px")
            .imagen-adornos-flotantes-tema3__img2: img(src="@/assets/curso/tema3/bolita2.png" style="left: ; right:-5% ; top:-8% ; bottom: ; width: 73px ")
            .imagen-adornos-flotantes-tema3__img3: img(src="@/assets/curso/tema3/bolita3.png" style="left: 8% ; right: ; top: ; bottom: -10% ; width: 47px ")
            .imagen-adornos-flotantes-tema3__img4: img(src="@/assets/curso/tema3/cajita1.png" style="left: -10% ; right: ; top: ; bottom: -10% ; width: 103px ")
      .col-lg-7
        p.mb-4 Una estructura de la mercancía que proporcione cohesión permite que no exista dislocaciones de esta durante su manipulación y transporte y, por ende, disminuir el riesgo de hundimiento y rotura.
        p.mb-0 La ventaja principal de la cohesión de mercancía es el aumento en la estabilidad de la carga, ya que una correcta estructura permite una ocupación óptima en los vehículos de transporte. Por ejemplo, si la carga no está correctamente estructurada sobre un pallet, al momento de realizar su traslado al vehículo es susceptible de formar abanicos que provocan roturas.

    p.mb-4 Se conocen los siguientes métodos de cohesión de la mercancía: 

    .tarjetas1.mb-5(data-aos="fade-left")
      .row.justify-content-center.align-items-center        
            .col-lg-6
              .TFcontainer.mb-3
                img.TFimage(src='@/assets/curso/tema5/img02.png')
                .TFoverlay.p-4.pt-5
                  h4 Cohesión natural
                  p.mb-0 Consiste en la disposición de paquetes en pila mejorando la resistencia, la colocación de caja sobre caja garantiza una mejor resistencia a la compresión, se puede decir, entonces, que esta cohesión hace referencia a la sobre posición de paquetes.
            .col-lg-6
              .TFcontainer.mb-3
                img.TFimage(src='@/assets/curso/tema5/img03.png')
                .TFoverlay.p-4.pt-5
                  h4 Cohesión artificial 
                  p.mb-0 Consiste en el uso de dispositivos especiales de mantenimiento, como stretch film (vinipel).

    p.mb-4 Para agrupar la carga de forma que permita estabilidad y, por ende, menor riesgo de rotura-pérdida pueden utilizarse las siguientes técnicas:

    .tabla-a.tabla2.color-primario.mb-5(data-aos="fade-down") 
      table        
        thead
          tr
            th(colspan=3 style="border-left: 0px !important") Técnicas de cohesión            
        tbody
          tr
            td.centrado(style="font-size:18px; border-left: 0px !important") <b>Contenerización.</b>
            td(colspan=2) Consiste en depositar, estibar o acondicionar los bultos o cualquier unidad de carga en un contenedor de transporte, con el fin de optimizar los flujos físicos del transporte. El contenedor almacena cualquier tipo de carga; para ello, existe una amplia variedad, los cuales se puede adaptar a las diferentes necesidades del transporte.            
          tr
            td.centrado(style="font-size:18px; border-left: 0px !important") <b>Flejado</b>
            td(colspan=2) Operación a través de la cual se forma una sola unidad de carga con bultos que se sujetan entre sí mediante flejes, o se fijan uno o varios bultos sobre un pallet o plataforma.
          tr
            td.centrado(style="font-size:18px; border-left: 0px !important") <b>Paletización</b>
            td(colspan=2) Se trata de reunir uno o más paquetes acondicionados sobre un pallet, fijándolo a través de flejes, cartón, madera, retractilado, o cualquier sistema de sujeción, con el fin de mantener su seguridad y evitar robos o averías. <br>En la actualidad existen múltiples tipos y tamaños con diferentes materiales, los cuales se han adaptado a las necesidades del comercio y la industria. Puede usarse como soporte de la mercancía o formar parte del embalaje, lo que maximiza su capacidad y garantiza su seguridad durante las operaciones de manutención, almacenamiento y transporte.
          tr
            td.centrado(style="font-size:18px; border-left: 0px !important") <b>Preeslingado</b>
            td(colspan=2) Formación de una unidad de carga por la agrupación de diversos bultos o unidades a través su sujeción con eslingas para su manipulación por medio mecánicos.
</template>

<script>
import BannerInterno from '../components/BannerInterno.vue'
export default {
  name: 'Tema5',
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

<style lang="sass">

.TFcontainer
  position: relative
  width: 100%
  border-radius: 10px

.TFimage
  display: block
  width: 100%
  //height: 587px
  object-fit: cover !important
  border-radius: 6px 6px 0 0
  border-radius: 10px

.TFoverlay
  position: absolute
  bottom: 0
  left: 0
  right: 0
  border-radius: 10px
  overflow: hidden
  width: 100%
  height: 85px
  transition: .5s ease
  background-color: rgba(255, 247, 230, 0.85)

.TFcontainer:hover .TFoverlay
  height: 100%

@media screen and (max-width: 991px)
  .TFimage
    height: 200px

.tabla-a.tabla2
  table
    min-width: 400px;
    background-color: #F6F6F6
  thead
    border-color: #FED981
  th
    background-color: #FFF3CD
    font-size: 18px
    font-style: italic
    border-left: 1px solid #AFAFAF !important
  td
    vertical-align: top
    border-left: 1px solid #AFAFAF !important
  tr
    border-top: 2px solid white !important
    border-button: 2px solid white !important


  .centrado
    text-align: center !important
    vertical-align: middle;
</style>
