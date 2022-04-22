<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 10
      h1 Pesaje

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-2
        .imagen-adornos-flotantes-tema4.d-flex.justify-content-center          
            img(style="width:144px" src='@/assets/curso/tema10/img01.svg')
            .imagen-adornos-flotantes-tema4__img1: img(src="@/assets/curso/tema4/bolita1.png" style="left: 6%; right:  ; top: -12%; bottom:  ; width: 26px")
            .imagen-adornos-flotantes-tema4__img2: img(src="@/assets/curso/tema4/bolita2.png" style="left: ; right:-10% ; top:30% ; bottom: ; width: 73px ")
            .imagen-adornos-flotantes-tema4__img3: img(src="@/assets/curso/tema4/bolita3.png" style="left: -5% ; right: ; top: ; bottom: -10% ; width: 47px ")
      .col-lg-10
        p.mb-4Para el transporte y la manipulación de mercancía, el peso es un dato esencial para la determinación de costos, antes y después del embalaje de los mismos. Por lo tanto, es necesario disponer de equipos de pesaje que garanticen la gestión y el control de todo el tránsito de productos a través de la cadena logística.
        p.mb-0 Dependiendo de los artículos que se tiene en el almacén, existen varios equipos de pesaje, a saber:
 

    .tema10.p-0(data-aos="fade-right")
      ImagenInfografica.color-acento-contenido
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/tema10/img02.svg')            

        .tarjeta.color-primario.p-3.position-relative(style="font-size: 15px; right:60%" x="75.6%" y="18%" numero=" ")
          p.mb-1 <b>Báscula compacta</b>
          p.mb-0 Corresponde al equipo que se usa normalmente y que se conoce también como báscula o balanza de sobremesa. Se compone de una plataforma de pesaje donde se pone el artículo y un indicador de peso que puede ser una aguja que indica las cantidades o un sistema LCD que corresponde a un modelo más moderno.
        .tarjeta.color-primario.p-3.position-relative(style="font-size: 15px; right:30%" x="19%" y="71%" numero=" ")
          p.mb-1 <b>Básculas especial </b>
          p.mb-0 Pueden ser de diferentes características, por ejemplo, las básculas cuentapiezas que son de sobremesa y con mucha precisión o las grandes e industriales que se encuentran empotradas al suelo para mercancía transportada por carretillas, elevadoras o transpaletas.
        

    Separador
    
    #t_10_1.titulo-segundo.color-primario
      h2 10.1 Terminales de dosificación y formulación

    p.mb-5 Es utilizado cuando se necesita mezclar contenido dentro un mismo tipo de embalaje o paquete. Normalmente, se usa cuando la mercancía es almacenada a granel y calcula las dosis exactas de cada material para establecer la mezcla final. Este equipo tiene varios contenedores, que a través de una apertura en la parte inferior permiten el paso de una cantidad exacta y predeterminada de contenido, la mezcla que se obtiene como resultado es el producto final en su fórmula y peso exacto.
    .titulo-sexto.color-acento-contenido(data-aos="fade-left")
      h4.mb-0 Figura 3
      div <i>Terminales de dosificación y formulación</i>
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8(data-aos="fade-right")
        figure
            img(src='@/assets/curso/tema10/img03.png')    

    h4 - Plataformas de pesaje   
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-1
      .col-lg-4
        .imagen-adornos-flotantes-tema4.d-flex.justify-content-center          
            img(src='@/assets/curso/tema10/img04.png')
            .imagen-adornos-flotantes-tema4__img1: img(src="@/assets/curso/tema4/bolita1.png" style="left: 0%; right:  ; top: 5%; bottom:  ; width: 26px")
            .imagen-adornos-flotantes-tema4__img2: img(src="@/assets/curso/tema4/bolita2.png" style="left: ; right:-10% ; top:5% ; bottom: ; width: 73px ")
            .imagen-adornos-flotantes-tema4__img3: img(src="@/assets/curso/tema4/bolita3.png" style="left: -5% ; right: ; top: ; bottom: 5% ; width: 47px ")
      .col-lg-7
        p.mb-0 Corresponden a plataformas generalmente metálicas empotradas en el suelo para recibir la carga de pesadas mercancías. Son de tipos y tamaños diferentes dependiendo de la carga máxima que puedan cifrar. Las más pequeñas son conocidas como básculas de piso.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")         
      .col-lg-7
        p.mb-3 <b><i>- Receptores de cargas especiales</i></b>
        p.mb-0 Corresponden a plataformas generalmente metálicas empotradas en el suelo para recibir la carga de pesadas mercancías. Son de tipos y tamaños diferentes dependiendo de la carga máxima que puedan cifrar. Las más pequeñas son conocidas como básculas de piso.
      .col-lg-4
        .imagen-adornos-flotantes-tema4.d-flex.justify-content-center          
            img(src='@/assets/curso/tema10/img05.png')
            .imagen-adornos-flotantes-tema4__img1: img(src="@/assets/curso/tema4/bolita1.png" style="left: 3%; right:  ; top: -5%; bottom:  ; width: 26px")
            .imagen-adornos-flotantes-tema4__img2: img(src="@/assets/curso/tema4/bolita2.png" style="left: ; right: -2% ; top:-6% ; bottom: ; width: 73px ")
            .imagen-adornos-flotantes-tema4__img3: img(src="@/assets/curso/tema4/bolita3.png" style="left: 32% ; right: ; top: ; bottom: -3% ; width: 47px ")
      .col-lg-1
</template>

<script>
import BannerInterno from '../components/BannerInterno.vue'
export default {
  name: 'Tema10',
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
.tarjeta.color-primario
  width: 480px
  background-color: rgba(254, 217, 129, 0.9)
</style>
