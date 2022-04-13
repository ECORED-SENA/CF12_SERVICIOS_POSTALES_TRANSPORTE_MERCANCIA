<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7 
      h1 Alistamiento de mercancía
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-1
      .col-lg-4
        .imagen-adornos-flotantes-tema3.d-flex.justify-content-center          
            img(src='@/assets/curso/tema7/img01.png')
            .imagen-adornos-flotantes-tema3__img1: img(src="@/assets/curso/tema3/bolita1.png" style="left: 5%; right:  ; top: -0%; bottom:  ; width: 47px")
            .imagen-adornos-flotantes-tema3__img2: img(src="@/assets/curso/tema3/bolita2.png" style="left: ; right: -3% ; top:0% ; bottom: ; width: 73px ")
            .imagen-adornos-flotantes-tema3__img3: img(src="@/assets/curso/tema3/bolita3.png" style="left: 25% ; right: ; top: ; bottom: -3% ; width: 47px ")
            .imagen-adornos-flotantes-tema3__img4: img(src="@/assets/curso/tema3/cajita1.png" style="left:  ; right: 10% ; top: ; bottom: -10% ; width: 142px ")
      .col-lg-7
        p.mb-0 En el momento que la mercancía es solicitada por los clientes o distribuidores, empieza la actividad de alistamiento de la mercancía, la cual consiste en las operaciones para extraer los productos que han sido demandados y acondicionarlos para su envío. El alistamiento de la mercancía se da en gran parte a la necesidad de los clientes, debido a que esta actividad depende del cumplimiento de las órdenes de pedido.

    p.mb-5 Normalmente las operaciones que se siguen durante la actividad de alistamiento son estas:

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-3.col-md-6.col-sm-7
        .tarjeta-avatar
          img.w-25(src='@/assets/curso/tema7/img02.svg' alt='AvatarTop')          
          .tarjeta.color-secundario--borde.w-100
            .row.justify-content-center.align-items-center.mb-3
              .col-4
                img(src='@/assets/curso/tema7/img10.svg')
            p.mx-4.text-center.mb-4 <b>Captura de datos  y lanzamiento de órdenes de picking.</b>

      .col-lg-3.col-md-6.col-sm-7
        .tarjeta-avatar.w-100(style="height:100%")
          img.w-25(src='@/assets/curso/tema7/img03.svg' alt='AvatarTop')          
          .tarjeta.color-primario--borde.w-100
            .row.justify-content-center.align-items-center.mb-3
              .col-4
                img(src='@/assets/curso/tema7/img11.svg')
            p.mx-4.text-center.mb-4 <b>Picking.</b>
            <br>
      .col-lg-3.col-md-6.col-sm-7
        .tarjeta-avatar
          img.w-25(src='@/assets/curso/tema7/img04.svg' alt='AvatarTop')          
          .tarjeta.color-secundario--borde.w-100
            .row.justify-content-center.align-items-center.mb-3
              .col-4
                img(src='@/assets/curso/tema7/img12.svg')
            p.mx-4.text-center.mb-4 <b>Embalaje.</b>
            <br>
      .col-lg-3.col-md-6.col-sm-7
        .tarjeta-avatar
          img.w-25(src='@/assets/curso/tema7/img05.svg' alt='AvatarTop')          
          .tarjeta.color-primario--borde.w-100
            .row.justify-content-center.align-items-center.mb-3
              .col-4
                img(src='@/assets/curso/tema7/img13.svg')
            p.mx-4.text-center.mb-4 <b>Acondicionamiento de  unidades de manipulación.</b>

    .row.justify-content-center.align-items-center(data-aos="fade-right")
      .col-lg-3.col-md-6.col-sm-7
        .tarjeta-avatar
          img.w-25(src='@/assets/curso/tema7/img06.svg' alt='AvatarTop')          
          .tarjeta.color-secundario--borde.w-100
            .row.justify-content-center.align-items-center.mb-3
              .col-4
                img(src='@/assets/curso/tema7/img14.svg')
            p.mx-4.text-center.mb-4 <b>Pesaje.</b>
            <br>
      .col-lg-3.col-md-6.col-sm-7
        .tarjeta-avatar
          img.w-25(src='@/assets/curso/tema7/img07.svg' alt='AvatarTop')          
          .tarjeta.color-primario--borde.w-100
            .row.justify-content-center.align-items-center.mb-3
              .col-4
                img(src='@/assets/curso/tema7/img15.svg')
            p.mx-4.text-center.mb-4 <b>Precintado.</b>
            <br>
      .col-lg-3.col-md-6.col-sm-7
        .tarjeta-avatar
          img.w-25(src='@/assets/curso/tema7/img08.svg' alt='AvatarTop')          
          .tarjeta.color-secundario--borde.w-100
            .row.justify-content-center.align-items-center.mb-3
              .col-4
                img(src='@/assets/curso/tema7/img16.svg')
            p.mx-4.text-center.mb-4 <b>Etiquetado.</b>
            <br>
      .col-lg-3.col-md-6.col-sm-7
        .tarjeta-avatar
          img.w-25(src='@/assets/curso/tema7/img09.svg' alt='AvatarTop')          
          .tarjeta.color-primario--borde.w-100
            .row.justify-content-center.align-items-center.mb-3
              .col-4
                img(src='@/assets/curso/tema7/img17.svg')
            p.mx-4.text-center.mb-4 <b>Preparación de documentos para el transporte.</b>
    

    Separador

    #t_7_1.titulo-segundo.color-primario.mb-0
      h2 7.1. Picking (recogida)

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-up")
      .col-10(style="position:relative")
        img(src='@/assets/curso/tema7/img19.png')
        div(style="position:absolute; bottom:5px")
          .bloque-texto-g.color-primario.p-4.py-5
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/tema7/img18.png')})`}"
            )
            .bloque-texto-g__texto.p-5
              div.p-0.d-block.p-2
                p.mb-0 En este punto se va a enfocar la atención en la actividad de picking debido a que es la actividad con mayor relevancia para la preparación de los pedidos, y consiste en seleccionar y extraer de los lugares de almacenamiento las referencias solicitadas.              

    p.mb-4 Teniendo en cuenta que esta es una de las actividades más costosas en el almacén, se deben realizar procesos operativos eficientes. Por ejemplo, reducir al mínimo las distancias recorridas por los operarios o por los equipos, sin descuidar la calidad del servicio en el almacén.
    p.mb-4 A continuación, se especifican los tipos de picking, de acuerdo con diferentes criterios:

    .tarjeta.tarjeta--gris.p-4.mb-5(data-aos="fade-down")          
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-top                      
          .col-lg-6                
            p.mb-4 <b>Según la separación de los productos</b>
            p.mb-4 <b>Batch Picking</b>
            p.mb-0 Se trata de extraer en conjunto las referencias de todos los pedidos agrupados y posteriormente separar las cantidades de las referencias que corresponden a cada pedido.
          .col-lg-6
            figure
              img(src='@/assets/curso/tema7/img20.png')                

        .row.justify-content-center.align-items-top                      
          .col-lg-6                
            p.mb-4 <b>Según la separación de los productos</b>
            p.mb-4 <b>Pick to box</b>
            p.mb-0 Se basa en extraer las referencias de forma agrupada, las cuales son introducidas directamente en las cajas de cada envío en el mismo punto de extracción del material, eliminando el proceso de separación posterior. 
          .col-lg-6
            figure              img(src='@/assets/curso/tema7/img21.png') 

        .row.justify-content-center.align-items-top                      
          .col-lg-6                
            p.mb-4 <b>Según la realización</b>
            p.mb-4 <b>Picking in situ o de hombre a producto</b>
            p.mb-0 A partir de una lista de picking que recibe el preparador de pedidos, en la que se encuentran las cantidades y artículos que componen el pedido, se definen rutas óptimas para la recogida del producto. 
          .col-lg-6
            figure
              img(src='@/assets/curso/tema7/img22.png') 

        .row.justify-content-center.align-items-top                      
          .col-lg-6                
            p.mb-4 <b>Según la realización</b>
            p.mb-4 <b>Estaciones de picking</b>
            p.mb-0 Se usan medios automatizados que llevan la mercancía hasta los operarios y la zona de preparación de pedidos, generando mayor rapidez y productividad en los procesos, evitando así los múltiples desplazamientos dentro del almacén.
          .col-lg-6
            figure
              img(src='@/assets/curso/tema7/img23.png') 

        .row.justify-content-center.align-items-top                      
          .col-lg-6                
            p.mb-4 <b>Picking in situ</b>
            p.mb-4 <b>Picking a nivel del suelo</b>
            p.mb-0 Se realiza en una zona habilitada para la preparación de pedidos, la cual es abastecida por unidades de carga extraídas de la zona de almacenaje.
          .col-lg-6
            figure
              img(src='@/assets/curso/tema7/img24.png') 

        .row.justify-content-center.align-items-top                      
          .col-lg-6                
            p.mb-4 <b>Picking in situ</b>
            p.mb-4 <b>Picking sobre estanterías de pallets</b>
            p.mb-0 Se realiza sobre los distintos niveles de la estantería utilizando equipos para recoger la mercancía en los niveles superior de la estantería y para el nivel bajo, picking manual.
          .col-lg-6
            figure
              img(src='@/assets/curso/tema7/img25.png') 

    br
    .row.justify-content-center.align-items-top.mb-0(data-aos="fade-left")    
      .col-lg-7.py-5        
        p.mb-4 Si el almacén cuenta con mercancía de todo tipo, gran gama de productos y con características diferentes, al momento del alistamiento de la mercancía la preparación de pedidos se puede hacer lenta y complicada, por ello es importante que el control en las zonas del almacén esté determinado por las características de los artículos, tamaño y salida comercial. Adicionalmente, para optimizar la velocidad y calidad de los pedidos es importante tener claras u ordenadas las zonas donde se encuentra la mercancía en el almacén.
        p.mb-0 Con el fin de tener control sobre el proceso de picking, existen varios sistemas de seguimiento y control de pedidos que permiten acelerar el proceso y evitar la pérdida de información, los cuales son conocidos como SGA (Sistema de Gestión de Almacén) en estos se pueden ir introduciendo pedidos de mayor urgencia en ordenadores personales de almacén conforme cambia su prioridad. Uno de los sistemas más conocidos es el ERP, estos sistemas se caracterizan principalmente por controlar y cambiar la información relevante en tiempo real, lo cual supone un aumento en la productividad y mejor aprovechamiento del tiempo.
      .col-lg-4.pt-4        
        .imagen-adornos-flotantes-tema3.d-flex.justify-content-center
            img(src='@/assets/curso/tema7/img26.png')
            .imagen-adornos-flotantes-tema3__img1: img(src="@/assets/curso/tema3/bolita1.png" style="left: -5%; right:  ; top: -12%; bottom:  ; width: 47px")
            .imagen-adornos-flotantes-tema3__img2: img(src="@/assets/curso/tema3/bolita2.png" style="left: ; right: 0% ; top:-0% ; bottom: ; width: 73px ")
            .imagen-adornos-flotantes-tema3__img3: img(src="@/assets/curso/tema3/bolita3.png" style="left: 13% ; right: ; top: ; bottom: 0% ; width: 47px ")
            .imagen-adornos-flotantes-tema3__img4: img(src="@/assets/curso/tema3/cajita1.png" style="left:  ; right: 0% ; top: ; bottom: -15% ; width: 142px ")      
      .col-lg-1

        
</template>

<script>
import BannerInterno from '../components/BannerInterno.vue'
export default {
  name: 'Tema7',
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
.tarjeta-avatar
  padding-top: 35px;

.tarjeta.color-secundario--borde
  border: solid 2px #B5BDEB;

.tarjeta.color-primario--borde
  border: solid 2px #FED981;

.tarjeta-avatar .tarjeta
  padding-top: 30px !important;

.w-25
  width: 20%!important;

.bloque-texto-g__texto
  width: 70%;

.bloque-texto-g__img
    width: 43%;
</style>
