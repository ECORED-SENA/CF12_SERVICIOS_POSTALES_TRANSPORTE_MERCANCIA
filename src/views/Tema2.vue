<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Embalajes para el transporte

    br
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-10.px-5
        .bloque-texto-g.color-primario.position-relative(style="padding: 2.5rem !important")
          .bloque-texto-g__img(
            :style="{'background-image':`url(${require('@/assets/curso/tema2/img01.png')})`}"
          )
            .imagen-superior.position-absolute(style='bottom:0 ; left: -0%;'): img(src='@/assets/curso/tema2/img02.png')
          .bloque-texto-g__texto.px-5.py-4
            p.mb-0 El embalaje sirve para proteger la mercancía ante posibles daños que se ocasionan durante la manipulación, el almacenamiento o el transporte. La función principal del embalaje es otorgar a la mercancía o a la unidad de carga una cobertura que permita su protección y, así mismo, poder identificarla y manejarla fácilmente. Un embalaje adecuado influye sobre la calidad y el precio del transporte. Por ejemplo, no debe ser muy voluminoso o pesado, porque tendrá efecto directo sobre los costos del transporte.
    
    p.mb-5 La naturaleza de la mercancía, así como el proceso de transporte determina la elección del tipo de embalaje. Por ejemplo, a través del embalaje se pueden obtener pallets, sacos, cajas, etc. En todos los casos el embalaje cumple las siguientes funciones.

    ul.lista-ul--separador.mb-5(data-aos="fade-right")
      li 
        i.fas.fa-angle-right
        p.mb-0.ms-3 Constituir una unidad compacta y protegerla contra los riesgos del transporte, como las averías ocasionadas por el movimiento.
      li 
        i.fas.fa-angle-right
        p.mb-0.ms-3 Facilitar la recepción y manipulación, siempre que la carga contenga una cantidad uniforme y coherente de unidades de producto.
      li 
        i.fas.fa-angle-right
        p.mb-0.ms-3 Permitir al destinatario y remitente la fácil identificación de la mercancía y sus características principales .
      li 
        i.fas.fa-angle-right
        p.mb-0.ms-3 Reducir el máximo de espacios vacíos y tener la resistencia adecuada para resistir el apilado.
      li 
        i.fas.fa-angle-right
        p.mb-0.ms-3 Adaptarse a las dimensiones estándar de las unidades de carga.
      li 
        i.fas.fa-angle-right
        p.mb-0.ms-3 Aprovechamiento del transporte, ya que los bultos puedan remontarse para aprovechar al máximo la capacidad de carga de los vehículos. 

    p.mb-5 Entre los materiales más utilizados para el embalaje de la mercancía a transportar se encuentran:        

    .row.mb-5.justify-content-center
      .col-6.col-lg-3.mb-3.mb-lg-0
        .tarjeta-avatar(data-aos="fade-right")
          img.w-25(src='@/assets/curso/tema2/img03.svg' alt='AvatarTop')          
          .tarjeta.color-secundario.w-100
            .p-4
              p.text-center Papel y cartón, que se utilizan para envíos que no necesitan una gran protección, sus principales ventajas son su bajo volumen y costo.
      .col-6.col-lg-3.mb-3.mb-lg-0
        .tarjeta-avatar.w-100(data-aos="fade-left")
          img.w-25(src='@/assets/curso/tema2/img04.svg' alt='AvatarTop')          
          .tarjeta.color-secundario.w-100
            .p-4             
              p.text-center Madera se utiliza en pallet, cajas o toneles.
      .col-6.col-lg-3.mb-3.mb-lg-0
        .tarjeta-avatar.w-100(data-aos="fade-right")
          img.w-25(src='@/assets/curso/tema2/img05.svg' alt='AvatarTop')          
          .tarjeta.color-secundario.w-100
            .p-4              
              p.text-center Metal en contenedores, cajas y bidones.
      .col-6.col-lg-3.mb-3.mb-lg-0
        .tarjeta-avatar.w-100(data-aos="fade-left")
          img.w-25(src='@/assets/curso/tema2/img06.svg' alt='AvatarTop')          
          .tarjeta.color-secundario.w-100
            .p-4              
              p.text-center Plástico, tienen la tendencia actual a utilizarse sobre todo los que son reciclables.

    br
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-2
        .imagen-adornos-flotantes-tema4.d-flex.justify-content-center          
            img(style="width:99px" src='@/assets/curso/tema2/img07.svg')
            .imagen-adornos-flotantes-tema4__img1: img(src="@/assets/curso/tema4/bolita1.png" style="left: 15%; right:  ; top: -10%; bottom:  ; width: 26px")
            .imagen-adornos-flotantes-tema4__img2: img(src="@/assets/curso/tema4/bolita2.png" style="left: ; right:-5% ; top:-20% ; bottom: ; width: 73px ")
            .imagen-adornos-flotantes-tema4__img3: img(src="@/assets/curso/tema4/bolita3.png" style="left: 10% ; right: ; top: ; bottom: -20% ; width: 47px ")
      .col-lg-10
        p.mb-4 También es importante tener en cuenta las exigencias medioambientales y los requisitos normativos sobre las características del embalaje del país de destino, país de tránsito y de origen.
        p.mb-0 Según el número de veces que se emplee, se encuentran dos tipos de embalaje:

    br
    .row.mb-5
      .col-lg-6.mb-3.mb-lg-0
        .tarjeta-avatar-b(data-aos="fade-left")
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema2/img08.svg' alt='AvatarTop')
          .tarjeta.color-secundario
            .p-4
              h4 Monouso
              p Se desechan una vez son utilizados, por lo general son de cartón ondulado o madera de baja calidad. 
      .col-lg-6.mb-3.mb-lg-0
        .tarjeta-avatar-b(data-aos="fade-right")
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema2/img09.svg' alt='AvatarTop')          
          .tarjeta.color-secundario
            .p-4
              h4 Multiuso
              p Sirve para múltiples usos, son fabricados con materiales consistentes, por ejemplo, madera, plástico, cartón o metal.
  
    p.mb-5 Según su función y características físicas, los tipos de embalaje que normalmente se utilizan para el transporte se pueden clasificar en:
    

    .row.align-items-start.mb-5(data-aos="fade-left")
      .col-lg-3.col-md-6.col-sm-7.indicador__container.mb-3.mb-lg-0(@mouseover="mostrarIndicador = false")
        .indicador--click(v-if="mostrarIndicador")
        .tarjeta-avatar.tema9-zoom(@mouseover="mostrar=1" @mouseleave="mostrar = 0")
          img.w-25(src='@/assets/curso/tema2/img10.svg' alt='AvatarTop')                    
          .tarjeta.color-secundario--borde.w-100.px-4
            .row.justify-content-center.align-items-center.mb-3
              .col-4.pt-3
                img(src='@/assets/curso/tema2/img14.svg')
            p.mx-4.text-center.mb-3 <b>Embalaje combinado</b>
            p.text-center(v-if="this.mostrar==1") Reúne diversos envases en un mismo embalaje para su manipulación y transporte.
      .col-lg-3.col-md-6.col-sm-7.mb-3.mb-lg-0
        .tarjeta-avatar.tema9-zoom(@mouseover="mostrar=2" @mouseleave="mostrar = 0")
          img.w-25(src='@/assets/curso/tema2/img11.svg' alt='AvatarTop')          
          .tarjeta.color-primario--borde.w-100.px-4
            .row.justify-content-center.align-items-center.mb-3
              .col-4.pt-3
                img(src='@/assets/curso/tema2/img15.svg')
            p.mx-4.text-center.mb-3 <b>Embalaje compuesto</b>
            p.text-center(v-if="this.mostrar==2") Está constituido por un recipiente interior de plástico, vidrio o cerámico y por una estructura exterior de metal, madera, cartón, plástico, etc., formando un conjunto indisociable.
      .col-lg-3.col-md-6.col-sm-7.mb-3.mb-lg-0
        .tarjeta-avatar.tema9-zoom(@mouseover="mostrar=3" @mouseleave="mostrar = 0")
          img.w-25(src='@/assets/curso/tema2/img12.svg' alt='AvatarTop')          
          .tarjeta.color-secundario--borde.w-100.px-4
            .row.justify-content-center.align-items-center.mb-3
              .col-4.pt-3
                img(src='@/assets/curso/tema2/img16.svg')
            p.mx-4.text-center.mb-3 <b>Embalaje exterior</b>
            p.text-center(v-if="this.mostrar==3") Recubrimiento externo de papel, cartón, plástico o cualquier otro material liviano protector o absorbente con el que se puede recubrir y proteger un envase o embalaje.
      .col-lg-3.col-md-6.col-sm-7.mb-3.mb-lg-0
        .tarjeta-avatar.tema9-zoom(@mouseover="mostrar=4" @mouseleave="mostrar = 0")
          img.w-25(src='@/assets/curso/tema2/img13.svg' alt='AvatarTop')          
          .tarjeta.color-primario--borde.w-100.px-4
            .row.justify-content-center.align-items-center.mb-3
              .col-4.pt-3
                img(src='@/assets/curso/tema2/img17.svg')
            p.mx-4.text-center.mb-3 <b>Sobreembalaje</b>
            p.text-center(v-if="this.mostrar==4") Recipiente o envoltura para contener varios bultos y conseguir una unidad de carga de fácil manipulación o estiba, por ejemplo, cajas, pallets, entre otros.


    p.mb-5 Para el transporte de la mercancía y con el fin de configurar la unidad de carga, se hace necesaria la utilización de elementos complementarios que contribuyan a aumentar la resistencia, estabilidad física y la protección de la mercancía, por ejemplo:

    ul.lista-ul--separador.mb-5(data-aos="fade-right")
      li 
        i.fas.fa-angle-right
        p.mb-0.ms-3 Cantonera (edge protection): son regletas en formas de L que se ajustan a las esquinas de las unidades de carga para proteger las esquinas contra golpes y rozaduras.
      li 
        i.fas.fa-angle-right
        p.mb-0.ms-3 Eslinga: es una cuerda gruesa de fibra o acero, provista de un gancho que permite elevar grandes pesos o manipular cargas generales.
      li 
        i.fas.fa-angle-right
        p.mb-0.ms-3 Deshidratantes: permiten proteger la mercancía seca de la humedad en el interior del embalaje.

    br
    br
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-10
        .bloque-texto-g.color-primario.position-relative(style="padding: 2.5rem !important")
          .bloque-texto-g__img(
            :style="{'background-image':`url(${require('@/assets/curso/tema2/img18.png')})`}"
          )
            .imagen-superior.position-absolute(style='bottom:0 ; left: -5%;'): img(src='@/assets/curso/tema2/img19.png')
          .bloque-texto-g__texto.px-5.py-5
            br
            p.mb-0 A través de las operaciones de retractilado y flejado se asegura la protección de la mercancía y se aumenta la estabilidad de la carga; y a través de la etiqueta se puede identificar la mercancía embalada.
            br
            br
</template>

<script>
import BannerInterno from '../components/BannerInterno.vue'
export default {
  name: 'Tema2',
  components: {
    BannerInterno,
  },
  data: () => ({
    mostrar: 0,
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

<style lang="sass">
.imagen-superior
  @media (max-width: $bp-min-lg)
    display: none !important

.tarjeta-avatar .tarjeta.color-secundario
  background-color: #AAB4F2

.tarjeta-avatar .tarjeta
  padding-top: 40px !important;

.tarjeta-avatar
  padding-top: 45px;

.w-25
  width: 30%!important;

.tarjeta-avatar-b .tarjeta.color-secundario
  background-color: #DCE0F9

.tarjeta.color-secundario--borde
  border: solid 2px #B5BDEB;

.tarjeta.color-primario--borde
  border: solid 2px #FED981;

bloque-texto-g__texto
   width: 68%;

@media (max-width: 992px)
  .bloque-texto-g__texto
      width: 100%;


// .bloque-texto-g__texto
//   width: 70%;

// .bloque-texto-g__img
//     width: 43%;
</style>
