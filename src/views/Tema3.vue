<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Equipos y herramientas de cargue y descargue

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-8.col-lg-4
        .imagen-adornos-flotantes-tema3.d-flex.justify-content-center.mb-5.mb-lg-0          
            img(src='@/assets/curso/tema3/img01.png')
            .imagen-adornos-flotantes-tema3__img1: img(src="@/assets/curso/tema3/bolita1.png" style="left: 20%; right:  ; top: -10%; bottom:  ; width: 47px")
            .imagen-adornos-flotantes-tema3__img2: img(src="@/assets/curso/tema3/bolita2.png" style="left: ; right:-5% ; top:-8% ; bottom: ; width: 73px ")
            .imagen-adornos-flotantes-tema3__img3: img(src="@/assets/curso/tema3/bolita3.png" style="left: 31% ; right: ; top: ; bottom: -10% ; width: 47px ")
            .imagen-adornos-flotantes-tema3__img4: img(src="@/assets/curso/tema3/cajita1.png" style="left: 14% ; right: ; top: ; bottom: -10% ; width: 103px ")
      .col-lg-8
        p.mb-4 Para que los diferentes vehículos de transporte realicen su actividad de forma óptima, es necesario disponer de una infraestructura adecuada. Por eso, es importante tener en cuenta que las manipulaciones de la mercancía deben ser mínimas, ya que esto repercute en ahorro de tiempo y costo, así como menor posibilidad de roturas y golpes. Lo ideal es trabajar de camión a estantería y viceversa. Sin embargo, en algunas ocasiones no es posible debido a las largas distancias entre estantería y camión, lo cual haría más demorado el tiempo de carga y descarga, así como la ocupación de muelles y tiempos de espera. Adicionalmente, cuando no existen acuerdos de calidad concertados, el producto debe pasar por un control de calidad.
        p.mb-0 Para almacenes que no sobrepasan los 40 a 50 metros se puede seguir el procedimiento que se indica a continuación:
        
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6.mb-3.mb-lg-0
        div.p-0.position-relative(data-aos="fade-right")
          figure
            img(src="@/assets/curso/tema3/img02.png")
          div.py-4.p-5.w-100.position-absolute(style="bottom: 0%; height:100px;  background-color: rgba(255, 247, 230, 0.85)")
            p.mt-2.mb-0 Cargar los pallets directamente desde la estantería.
      .col-lg-6.mb-3.mb-lg-0(style="position: relative")
        div.p-0.position-relative(data-aos="fade-left")
          figure
            img(src="@/assets/curso/tema3/img03.png")
          div.py-4.p-5.w-100.position-absolute(style="bottom: 0%; height:100px;  background-color: rgba(255, 247, 230, 0.85)")
            p.mt-2.mb-0 Depositar los pallets de picking en la zona de precarga o playa de expediciones.


    p.mb-5 Las siguientes herramientas y equipos son los que normalmente se utilizan en un proceso de cargue y descargue de mercancía, su uso depende del tipo de producto a manipular, transportar o elevar:

    .tema3(data-aos="fade-down")  
      AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
        .row.justify-content-center.align-items-top(titulo="Novedad")
          .col-md-7
            p.mb-4 El pallet permite constituir cargas unitarias y se puede manipular con facilidad a través de carretillas u otro equipo mecánico, en la actualidad existen muchos tipos y tamaños, los cuales se han adaptado a cada necesidad del comercio y la industria.
            p.mb-4 El pallet es, básicamente, una plataforma de carga que consiste en dos bases separadas entre sí por soportes, o una base única apoyada sobre patas de suficiente altura para permitir su manipulación por medio de camiones, montacargas, etc.
            p.mb-0 La disposición de la mercancía sobre el pallet requiere una maximización de la capacidad y garantizar la seguridad durante el transporte, almacenamiento y manutención, entre las principales ventajas de su uso se encuentra la posibilidad de uso múltiple, mejorar la calidad en el transporte, agilizar la manipulación de mercancía y mayor productividad.
          .col-md-5
            figure
              img(src="@/assets/curso/tema3/img04.png")              
        .row.justify-content-center.align-items-top(titulo="Transpaletas")
          .col-md-7
            p.mb-0 Es una máquina que se puede utilizar para realizar las labores de carga y descarga de camiones, el traslado de pallets o contenedores y apoyo en las operaciones de picking, se encuentran transpaletas manuales o eléctricas, las cuales se pueden elevar ligeramente para facilitar su desplazamiento.
          .col-md-5
            figure
              img(src="@/assets/curso/tema3/img05.png")              
        .row.justify-content-center.align-items-top(titulo="Carretilla de mano  ")
          .col-md-7
            p.mb-4 Corresponde a un equipo de carga manual en forma de L, con dos ruedas en su base para desplazamiento y asas para dirigirlo en la parte superior. Cuenta con una base en la parte inferior para colocar objetos con el fin de trasladarlos.
            p.mb-0 Se usan generalmente para el transporte de cajas o bultos o como un complemento a las preparadoras de pedidos.
          .col-md-5
            figure
              img(src="@/assets/curso/tema3/img06.png")              
        .row.justify-content-center.align-items-top(titulo="Carretillas elevadoras")
          .col-md-7
            p.mb-4 Son equipos utilizados para cargar y descargar mercancía paletizada dentro y fuera de los contenedores y transportarla a cortas distancias.
            p.mb-0 A través de dos horquillas, se utiliza para subir, bajar y transportar pallets, contenedores y otras cargas.
          .col-md-5
            figure
              img(src="@/assets/curso/tema3/img07.png")              
        .row.justify-content-center.align-items-top(titulo="Cinta transportadora")
          .col-md-7
            p.mb-4 Es útil cuando se deben cargar muchas cajas, y con mayor razón si son pesadas, pues, además de facilitar el trabajo, reducen el riesgo de dañar la carga en comparación con realizar la carga o descarga manualmente.
            p.mb-0 Dependiendo de las necesidades, hay cintas transportadoras para cargar o descargar carga suelta, a granel y otras podrían ser apropiadas para transportar grandes cargas.
          .col-md-5
            figure
              img(src="@/assets/curso/tema3/img08.png")              
        .row.justify-content-center.align-items-top(titulo="Rampas")
          .col-md-7
            p.mb-0 Son utilizadas cuando no se disponen de muelles o zonas para la carga y descarga. Normalmente soportan pesos muy altos, incluyendo el de una carretilla elevadora y la carga transportada. Se usa colocándola desde los pies del contenedor hasta el suelo, de modo que la carretilla pueda subir y bajar con facilidad.
          .col-md-5
            figure
              img(src="@/assets/curso/tema3/img09.png")              
        .row.justify-content-center.align-items-top(titulo="Plataformas elevadoras")
          .col-md-7
            p.mb-4 Son plataformas motorizadas añadidas a la parte trasera del camión para permitir la carga y descarga de mercancía, estas elevan desde el suelo hasta la altura del suelo del camión para permitir la carga y descienden desde este punto hasta el suelo para la descarga.
            p.mb-0 Estas plataformas se usan para las recogidas o entregas en las que no se dispone de carretillas ni muelles de carga y normalmente se usan para manipular mercancías muy pesadas o complejas de levantar. 
          .col-md-5
            figure
              img(src="@/assets/curso/tema3/img10.png")              
        .row.justify-content-center.align-items-top(titulo="Rampa hidráulica")
          .col-md-7
            p.mb-4 Es una rampa también llamada de carga/descarga que  se ajusta a la diferencia de nivel del muelle y la altura de la cama del vehículo. Su finalidad es que las carretillas y transpaletas entren y salgan directamente a y del camión, ganando una productividad entre 25% y 40%.  Las medidas estándar de estas rampas son:
            p.mb-0 - 1,20 m de altura para camiones de ruta.
            p.mb-0 - 1 m para los vehículos ligeros. 
            p.mb-0 - 0,5 a 0,8 m para las furgonetas de reparto.
          .col-md-5
            figure
              img(src="@/assets/curso/tema3/img11.png")              
        


       

</template>

<script>
import BannerInterno from '../components/BannerInterno.vue'
export default {
  name: 'Tema3',
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
