<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 11
      h1 Devoluciones

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-10
        .bloque-texto-g.color-secundario.p-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema11/img01.png')})`}"
          )
          .bloque-texto-g__texto.p-5
            p.mb-0 Si se ha cometido algún error en el envío de la mercancía o no llegue en condiciones adecuadas al cliente, se puede producir su devolución. Esta debe gestionarse adecuadamente para mantener su imagen y cumplir con las exigencias legales.              

    p.mb-4 Las devoluciones que se presentan en la empresa tienen diferentes causas y, por lo tanto, un tratamiento distinto. Sería conveniente que la empresa disponga de un lugar que permita el almacenamiento de devoluciones y, en los casos que sea necesario, procesos de reciclado y reutilización de la mercancía devuelta.
    p.mb-5 Se pueden encontrar los siguientes tipos de devolución: de productos y de envases y embalajes.

    ImagenInfograficaB.color-primario.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/tema11/img02.svg', alt='Texto que describa la imagen')          

      div(x="35.75%" y="84.6%"  numero=" ")
        .tarjeta.tarjeta--gris.p-4(data-aos="fade-down")          
          SlyderA(tipo="b")
            .tabla-a.tabla2.color-primario(data-aos="fade-down") 
              table.mb-5      
                thead
                  tr
                    th(colspan=5 style="font-size: 18px; border-left: 0px !important") Devoluciones <u>de productos</u>
                tbody
                  tr
                    td(colspan=5 style="font-size:18px; border-left: 0px !important") Se pueden presentar devoluciones de productos nuevos o usados. Las principales razones que origina la devolución de un producto nuevo son:                    
                  tr
                    td.centrado(style="border-left: 0px !important") Razones de la devolución de productos nuevos. 
                    td(colspan=4)
                      img(src='@/assets/curso/tema11/img03.svg') 

              p.mb-0.text-center * <i>En este caso el proceso debe involucrar la recepción del producto nuevo devuelto y el posterior envío del nuevo producto.</i>
                  

            .tabla-a.tabla2.color-primario(data-aos="fade-down") 
              table.mb-5      
                thead
                  tr
                    th(colspan=5 style="font-size: 18px; border-left: 0px !important") Devoluciones <u>de productos</u>
                tbody
                  tr
                    td(colspan=5 style="font-size:18px; border-left: 0px !important") Para el caso de los productos usados, las razones principales de su devolución son las siguientes:
                  tr
                    td.centrado(style="border-left: 0px !important") Razones de la devolución de productos usados.
                    td(colspan=4)
                      img(src='@/assets/curso/tema11/img04.svg') 

              p.mb-0.text-center <i>En este caso, el tratamiento del producto inicia con la recepción del producto usado, posteriormente se realiza un proceso de reutilización, reciclaje o renovación para obtener un producto nuevo, materiales o componentes o un producto renovado.</i>
            
      div(x="74.9%" y="56.6%"  numero=" ")
        .tarjeta.tarjeta--gris.p-4(data-aos="fade-down")    
          p.mb-4 Devoluciones de envases y embalajes de productos
          p.mb-4 La empresa no solo gestiona la devolución de sus productos, también pueden gestionar la devolución de los envases y los embalajes de estos. 
          p.mb-5 Los procesos que se pueden llevar a cabo con estos materiales son los siguientes:
          figuare
            img(src='@/assets/curso/tema11/img05.svg') 
</template>

<script>
import BannerInterno from '../components/BannerInterno.vue'
export default {
  name: 'Tema11',
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

.slyder-a__btn--sigt, .slyder-a__btn--atrs
    background-color: #FED981
    background-image: url("../assets/curso/tema6/img04.svg")

.slyder-a__tipo-b .slyder-a__btn--atrs
  transform: rotate(180deg);

.slyder-a__tipo-b .slyder-a__btn--sigt
  transform: rotate(0);

.slyder-a__bullets__item--active
    background-color: #FED981;
    border-color: #FED981;

.bloque-texto-g__img
    width: 40%;

.bloque-texto-g__texto
  width: 70% !important

.tabla-a.tabla2
  table
    min-width: 200px;
    background-color: #F6F6F6
  thead
    border-color: #FED981
  th
    background-color: #F5EFDE
    font-size: 18px
    font-style: italic
    border-left: 1px solid #AFAFAF !important

  td
    vertical-align: top
    border-left: 1px solid #AFAFAF !important
    color: $color-sistema-texto
  tr
    border-top: 2px solid white !important
    border-button: 2px solid white !important


  .centrado
    text-align: center !important
    vertical-align: middle;
</style>
