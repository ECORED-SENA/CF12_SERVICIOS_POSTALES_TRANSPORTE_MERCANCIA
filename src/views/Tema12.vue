<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 12
      h1 Normativa de producto

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-1
      .col-lg-4
        .imagen-adornos-flotantes-tema3.d-flex.justify-content-center          
            img(src='@/assets/curso/tema12/img01.png')
            .imagen-adornos-flotantes-tema3__img1: img(src="@/assets/curso/tema3/bolita1.png" style="left: -3%; right:  ; top: -13%; bottom:  ; width: 47px")
            .imagen-adornos-flotantes-tema3__img2: img(src="@/assets/curso/tema3/bolita2.png" style="left: ; right: -8% ; top:-5% ; bottom: ; width: 73px ")
            .imagen-adornos-flotantes-tema3__img3: img(src="@/assets/curso/tema3/bolita3.png" style="left: 25% ; right: ; top: ; bottom: -10% ; width: 47px ")
            .imagen-adornos-flotantes-tema3__img4: img(src="@/assets/curso/tema3/cajita1.png" style="left:  ; right: 0% ; top: ; bottom: -20% ; width: 142px ")
      .col-lg-7
        p.mb-4 Durante el proceso de la cadena logística resulta de gran importancia la comunicación entre sus agentes para alcanzar la eficacia en las operaciones de manipulación, almacenamiento y transporte, lo que se logra a través de la identificación de la mercancía mediante un lenguaje comprensible para la mayoría de las personas: símbolos gráficos. 
        p.mb-0 Para identificar mediante símbolos las unidades de carga se debe tomar como referencia la norma ISO 780 (figura 4).

    .titulo-sexto.color-acento-contenido
      h4.mb-0 Figura 4
      div <i>Símbolos utilizados para identificar las unidades de carga y facilitar la manipulación de envases y embalajes (norma ISO 780)</i>    

    h4.text-center.mb-4 Símbolos para la manipulación de envases y embalajes

    .row.justify-content-center.align-items-top.mb-5.mx-0(data-aos="fade-right" style="background-color: #CDD2FB")
      .col-lg-6.p-0.pe-2
        .tabla-a.tabla1.color-acento-botones(data-aos="fade-up")
          table            
            thead
              tr
                th Símbolo
                th Instrucción
                th Significado               
            tbody
              tr
                td.p-0.centrado
                  img(src='@/assets/curso/tema12/img02.svg')
                td Frágil.
                td El contenido del embalaje es frágil y se debe manejar con precaución.                 
              tr
                td.p-0.centrado
                  img(src='@/assets/curso/tema12/img03.svg')
                td No usar garfios.
                td No se pueden usar garfios en el manejo de la carga.
              tr
                td.p-0.centrado
                  img(src='@/assets/curso/tema12/img04.svg')
                td Mantener vertical.
                td La unidad de carga se debe mantener en posición vertical.
              tr
                td.p-0.centrado
                  img(src='@/assets/curso/tema12/img05.svg')
                td Proteger de la luz solar.
                td La carga no se debe exponer a la luz solar u otras fuentes de calor.
              tr
                td.p-0.centrado
                  img(src='@/assets/curso/tema12/img06.svg')
                td Proteger de fuentes radiactivas.
                td La mercancía se puede deteriorar o quedar inutilizada si se expone a radiaciones.
              tr
                td.p-0.centrado
                  img(src='@/assets/curso/tema12/img07.svg')
                td Mantener a resguardo de la lluvia.
                td La carga debe mantenerse en un ambiente seco.
              tr
                td.p-0.centrado
                  img(src='@/assets/curso/tema12/img08.svg')
                td Centro de gravedad.
                td Indica el centro de gravedad de la unidad de carga.
              tr
                td.p-0.centrado
                  img(src='@/assets/curso/tema12/img09.svg')
                td No rodar ni inclinar.
                td La carga no se debe rodar ni inclinar o balancear.
              tr
                td.p-0.centrado
                  img(src='@/assets/curso/tema12/img10.svg')
                td No manipular con las horquillas en esta cara.
                td Caras de la unidad de carga donde no se deben colocar las horquillas de las carretillas manuales.
      .col-lg-6.p-0.ps-2.d-flex
        div(style="background-color: #F6F6F6")
          .tabla-a.tabla1.color-acento-botones(data-aos="fade-down")
            table            
              thead
                tr
                  th Símbolo
                  th Instrucción
                  th Significado               
              tbody
                tr
                  td.p-0.centrado
                    img(src='@/assets/curso/tema12/img11.svg')
                  td No usar carretilla elevadora.
                  td La carga no se debe manipular con la carretilla elevadora 
                tr
                  td.p-0.centrado
                    img(src='@/assets/curso/tema12/img12.svg')
                  td Colocar mordazas aquí.
                  td Colocar las abrazaderas en los lados que se indica para manipular la carga.
                tr
                  td.p-0.centrado
                    img(src='@/assets/curso/tema12/img13.svg')
                  td No colocar mordazas aquí.
                  td No colocar las abrazaderas en los lados que se indica al manipular el embalaje.
                tr
                  td.p-0.centrado
                    img(src='@/assets/curso/tema12/img14.svg')
                  td Apilamiento limitado.
                  td Indica el peso máximo posible sobre la unidad de carga.
                tr
                  td.p-0.centrado
                    img(src='@/assets/curso/tema12/img15.svg')
                  td Apilamiento limitado por número.
                  td Número máximo de embalajes iguales que se pueden apilar (n = número máx.).
                tr
                  td.p-0.centrado
                    img(src='@/assets/curso/tema12/img16.svg')
                  td No apilar.
                  td No se debe apilar ninguna otra carga encima.
                tr
                  td.p-0.centrado
                    img(src='@/assets/curso/tema12/img17.svg')
                  td Eslinga aquí. 
                  td Indica dónde se deben emplazar las eslingas para elevar la carga.
                tr
                  td.p-0.centrado
                    img(src='@/assets/curso/tema12/img18.svg')
                  td Límites de temperatura.
                  td Límites de temperatura entre los que se debe conservar y manipular la carga.
                
    p.mb-4 Para el caso de la carga peligrosa se deben tener en cuenta los siguientes aspectos:
    p.mb-5 Está constituida por mercancía nociva o perjudicial, embalada o a granel, la cual durante su transporte puede desprender residuos, humos, gases, vapores de naturaleza inflamable, tóxica, infecciosa, etc. es decir que constituyen un riesgo para la salud humana, los bienes y el medio ambiente.

    .titulo-sexto.color-acento-contenido
      h4.mb-0 Figura 5
      div <i>Reglamentaciones internacionales sobre mercancías peligrosas</i>

    h4.text-center.mb-4 Normativas internacionales sobre mercancías peligrosas

    .tabla-a.tabla2.color-primario.mb-5 
      table(data-aos="fade-right")        
        thead
          tr
            th(style="border-left: 0px !important") Modo de transporte
            th(colspan=2) Denominaciones
            th Denominación usual            
        tbody
          tr
            td.centrado(style="border-left: 0px !important" rowspan=2) Marítimo.
            td Código marítimo internacional de mercancías peligrosas.
            td <i>International Maritime Dangerous Goods</i> (IMDG).
            td Código IMDG.
          tr            
            td Convenio internacional para prevenir la contaminación por los buques.
            td <i>International Convention for the prevention of Pollution from Ships.</i>
            td Marpol 73/78.
          tr
            td.centrado(style="border-left: 0px !important") Carretera.
            td Convenio internacional sobre el transporte de mercancías peligrosas por carretera.
            td <i>Articles Dangereux de Route</i> (ADR).
            td Convenio ADR.
          tr
            td.centrado(style="border-left: 0px !important") Ferroviario.
            td Reglamento sobre el transporte internacional de mercancías peligrosas por ferrocarril.
            td <i>Règlement International sur les déchets Dangereux</i> (RID).
            td Convenio RID.
          tr
            td.centrado(style="border-left: 0px !important") Aéreo.
            td Reglas de IATA sobre mercancías peligrosas.
            td IATA <i>Dangerous Goods Regulations.</i>
            td Reglas IATA DGR.
</template>

<script>
import BannerInterno from '../components/BannerInterno.vue'
export default {
  name: 'Tema12',
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
.tabla-a.tabla1
  table
    min-width: 400px;
    background-color: #F6F6F6
  thead
    border-top: 0px solid;
  th
    background-color: #A6B1FF
    font-size: 18px
    font-style: italic
  td
    vertical-align: top
    height: 100px
  .centrado
    vertical-align: middle

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
