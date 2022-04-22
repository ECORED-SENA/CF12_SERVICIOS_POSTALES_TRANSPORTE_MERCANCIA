<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6 
      h1 Tipos de armados de pedidos

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-1
      .col-lg-4
        .imagen-adornos-flotantes-tema3.d-flex.justify-content-center          
            img(src='@/assets/curso/tema6/img01.png')
            .imagen-adornos-flotantes-tema3__img1: img(src="@/assets/curso/tema3/bolita1.png" style="left: 35%; right:  ; top: -10%; bottom:  ; width: 47px")
            .imagen-adornos-flotantes-tema3__img2: img(src="@/assets/curso/tema3/bolita2.png" style="left: ; right:-2% ; top:2% ; bottom: ; width: 73px ")
            .imagen-adornos-flotantes-tema3__img3: img(src="@/assets/curso/tema3/bolita3.png" style="left: 28% ; right: ; top: ; bottom: -5% ; width: 47px ")
            .imagen-adornos-flotantes-tema3__img4: img(src="@/assets/curso/tema3/cajita1.png" style="left: 0% ; right: ; top: ; bottom: -10% ; width: 142px ")
      .col-lg-7
        p.mb-0 Durante la etapa de preparación de pedidos se garantiza que el producto es el correcto y que el embalaje es el adecuado para que llegue en óptimas condiciones a su destino. El objetivo principal de esta actividad es organizar y preparar los productos para ser embalados; si esta etapa se desarrolla de manera eficaz es muy probable tener mejores resultados durante la entrega de los pedidos.

    p.mb-5 Los métodos de armado o preparación de pedidos son:

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        ImagenInfograficaB.color-acento-contenido.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema6/img02.svg', alt='Texto que describa la imagen')              

          div(x="16.9%" y="34.5%"  numero=" ")    
            .tarjeta.p-4.mb-5          
              SlyderA(tipo="b")
                .row.justify-content-center.align-items-top    
                  p.mb-4 <b>Manual</b>
                  .col-lg-6                
                    p.mb-4 Hace referencia al <u>no uso de maquinaria</u> para el control y picking en el almacén.
                    p.mb-4 Uso de transpaletas <u>manuales</u> o montacargas para manejar la carga:
                    p.mb-0 - Movimiento de la carga paletizada.
                    p.mb-4 - Carga embalada sobre pallets.
                    p.mb-0 Las unidades para entregar al cliente o enviar a transporte y el resto del procedimiento se realiza de forma <u>manual</u>.

                  .col-lg-6
                    figure
                      img(src='@/assets/curso/tema6/img03.png')
                .row.justify-content-center.align-items-top    
                  p.mb-4 <b>Manual</b>
                  .col-lg-6                
                    p.mb-4 Las empresas que utilizan este tipo de armado de pedidos no almacenan artículos con un peso o volumen exagerado, sino que se dedican a manejar paquetería de pequeñas dimensiones y las estanterías no suelen ser altas para que los operarios con la elevación de brazos puedan alcanzar los artículos en los estantes más altos sin problema.
                    p.mb-3 - Los espacios entre estanterías pueden estar más reducidos, pues no es necesario el paso de maquinaria entre las mismas.
                    p.mb-4 - El operario debe buscar los artículos en las zonas respectivas y llevarlos a la zona de manipulación o embalaje antes de su entrega.
                    p.mb-0 Las unidades para entregar al cliente o enviar a transporte y el resto del procedimiento se realiza de forma manual.

                  .col-lg-2.p-1        
                    div.p-0.position-relative
                      figure
                        img(src="@/assets/curso/tema6/img05.png")
                      div.p-2.w-100.position-absolute(style="font-size: 15px; bottom: 0%; height:87px;  background-color: rgba(255, 247, 230, 0.85)")
                        p.mt-2.mb-0 El operario camina entre los pasillos .

                  .col-lg-2.p-1        
                    div.p-0.position-relative
                      figure
                        img(src="@/assets/curso/tema6/img06.png")
                      div.p-2.w-100.position-absolute(style="font-size: 15px; bottom: 0%; height:87px;  background-color: rgba(255, 247, 230, 0.85)")
                        p.mt-2.mb-0 Recoge los productos con las manos.
                  
                  .col-lg-2.p-1        
                    div.p-0.position-relative
                      figure
                        img(src="@/assets/curso/tema6/img07.png")
                      div.px-2.w-100.position-absolute(style="font-size: 15px; bottom: 0%; height:87px;  background-color: rgba(255, 247, 230, 0.85)")
                        p.mt-2.mb-0 Lleva los productos a la zona de manipulación o embalaje.

            
          div(x="23%" y="66%"  numero=" ")    
            .tarjeta.p-4.mb-5          
              SlyderA(tipo="b")
                .row.justify-content-center.align-items-top    
                  p.mb-4 <b>Semiautomático</b>
                  .col-lg-6                
                    p.mb-0 En este tipo de almacenes es común que operario tenga a su disposición herramientas manuales y semiautomáticas y se suele manejar mercancía de todo tipo, desde artículos pequeños envasados, mercancía a granel o contenedores de grandes dimensiones.
                  .col-lg-6
                    figure
                      img(src='@/assets/curso/tema6/img08.png')    
                .row.justify-content-center.align-items-top    
                  p.mb-4 <b>Semiautomático</b>
                  .col-lg-6                
                    p.mb-2 Es necesario zonificar los espacios.
                    p.mb-4 Por ejemplo:
                    p.mb-3 - Zonas de productos paletizados que reposan sobre el suelo en posición vertical.
                    p.mb-3 - Disposición de estanterías. 
                    p.mb-3 - Zonas de embalaje. 
                    p.mb-0 - Zonas especiales (por ejemplo, para materiales tóxicos o frigoríficas).
                  .col-lg-6
                    figure
                      img(src='@/assets/curso/tema6/img09.png')
                .row.justify-content-center.align-items-top    
                  p.mb-4 <b>Semiautomático</b>
                  .col-lg-6                
                    p.mb-0 Este tipo de almacenes pueden hacer uso de un sistema de preparación de pedidos semiautomático con sistemas SGA o ERP con reducción de tiempos de entrega, mejor comunicación y reducción de costos.
                    p.mb-0 Utilizan equipos de manipulación de pedidos, como carretillas elevadoras, apiladores, recoge pedidos, montacargas, entre otros métodos semiautomáticos como cintas o rodillos grúas, ascensores, entre otros. Se facilita el picking y el embalaje de productos con la necesidad del manejo de diferentes operarios.
                  .col-lg-6
                    figure
                      img(src='@/assets/curso/tema6/img10.png')    
          div(x="93.55%" y="65.7%"  numero=" ")  
            .tarjeta.p-4.mb-5                    
                .row.justify-content-center.align-items-top    
                  p.mb-4 <b>Automático</b>
                  .col-lg-6                
                    p.mb-3 - Se requiere el mínimo de operarios, porque  el proceso es automatizado. Desde la aceptación del presupuesto hasta el embalaje y la entrega.
                    p.mb-4 - Es imprescindible el uso de tecnología SGA o sistemas ERP. La acción humana es necesaria para activar pedidos y las máquinas necesarias, contabilizar presupuestos y costos y la realizar algunas tareas de picking.
                    p.mb-0 <i>Los sistemas utilizados normalmente son carretillas por radiofrecuencia, transelevadores y carruseles verticales y horizontales</i>
                  .col-lg-6
                    figure
                      img(src='@/assets/curso/tema6/img11.png')         

</template>

<script>
import BannerInterno from '../components/BannerInterno.vue'
export default {
  name: 'Tema6',
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
</style>
