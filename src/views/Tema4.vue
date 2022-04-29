<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Equipos y elementos de consolidación de mercancía 

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-2
        .imagen-adornos-flotantes-tema4.d-flex.justify-content-center          
            img(style="width:109px" src='@/assets/curso/tema4/img01.svg')
            .imagen-adornos-flotantes-tema4__img1: img(src="@/assets/curso/tema4/bolita1.png" style="left: 20%; right:  ; top: 7%; bottom:  ; width: 26px")
            .imagen-adornos-flotantes-tema4__img2: img(src="@/assets/curso/tema4/bolita2.png" style="left: ; right:0% ; top:-25% ; bottom: ; width: 73px ")
            .imagen-adornos-flotantes-tema4__img3: img(src="@/assets/curso/tema4/bolita3.png" style="left: 10% ; right: ; top: ; bottom: -10% ; width: 47px ")
      .col-lg-10
        p.mb-4 La consolidación consiste en el agrupamiento de la mercancía, ya sea la que será embalada y, si es necesario, por destino o rutas de transporte, los elementos que aseguran la carga representan 50% de la seguridad del embalaje. 
        p.mb-0 Los elementos utilizados para permitir la consolidación de la mercancía son:


    .tema4(data-aos="fade-right")
      TabsC.color-acento-contenido
        .py-3.py-md-4.px-3(titulo="Cintas")
          .row.justify-content-center
            .col-lg-6.pt-4
              p.mb-0 Corresponde al método más usado para el amarre de cargas en interior de los embalajes, contenedores y medios de transporte pueden ser cintas textiles o de acero. Consiste en una tira enrollada en torno a una bobina, la cual se aplica directamente sobre el embalaje o el producto para su transporte o consolidación. Puede, además, servir como material publicitario.
            .col-lg-1
            .col-md-5
              figure
                img(src='@/assets/curso/tema4/img02.png')    
        .py-3.py-md-4.px-3(titulo="Zunchos")
          .row.justify-content-center
            .col-lg-6.pt-4
              p.mb-0 Es una cinta elaborada con polipropileno que permite el aseguramiento de cajas y embalajes de mercancía para su conservación y transporte.
            .col-lg-1
            .col-md-5
              figure
                img(src='@/assets/curso/tema4/img03.png')        
        .py-3.py-md-4.px-3(titulo="Grapas")
          .row.justify-content-center
            .col-lg-6.pt-4
              p.mb-0 Son fabricadas en <i>nylon</i> de alta resistencia permitiendo el amarre manual, ideales para asegurar el cierre. Se puede realizar de manera manual; si es necesaria mayor tensión se puede hacer uso de una máquina zunchadora automática.
            .col-lg-1
            .col-md-5
              figure
                img(src='@/assets/curso/tema4/img04.png')  
        .py-3.py-md-4.px-3(titulo="Plástico vinipel")
          .row.justify-content-center
            .col-lg-6.pt-4
              p.mb-0 Hace referencia a una película plástica protectora que se adhiere a sí misma para el embalaje de mercancías y la protección directa del producto antes del embalaje.
            .col-lg-1
            .col-md-5
              figure
                img(src='@/assets/curso/tema4/img05.png')  
        .py-3.py-md-4.px-3(titulo="Eslingas")
          .row.justify-content-center
            .col-lg-6.pt-4
              p.mb-0 Se usan para sujetar o elevar cargas haciendo parte del embalaje del paquete, pueden tener orificios en los extremos para asegurar a los contenedores. 
            .col-lg-1
            .col-md-5
              figure
                img(src='@/assets/curso/tema4/img06.png')      
    

</template>

<script>
import BannerInterno from '../components/BannerInterno.vue'
export default {
  name: 'Tema4',
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
