<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1 
      h1 Transporte de mercancía y objetos postales
    
    p.mb-4 La gestión logística adecuada depende en gran medida del transporte, debido a que en la cadena de suministros se encuentra en los extremos.
    p.mb-5 El transporte garantiza:

    .row.mb-5
      .col-1
      .col-lg-5.d-flex
        div.px-5.py-3.mb-3.mb-lg-0(style="background-color: #A4A3FF")          
          div.p-0.mb-3
            h4.p-1.d-inline(style="background-color: #E3E7FF")  01
          p.mb-0 Disposición de materia prima e insumos para llevar a cabo el proceso productivo.

      .col-lg-5.d-flex
        div.px-5.py-3.w-100.mb-3.mb-lg-0(style="background-color: #A4A3FF")          
          div.p-0.mb-3
            h4.p-1.d-inline(style="background-color: #E3E7FF")  02
          p.mb-0 Llegada de los productos a los clientes.
      .col-1

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")      
      .col-lg-4
        .imagen-adornos-flotantes-tema3.d-flex.justify-content-center.mb-4.mb-lg-0          
            img(src='@/assets/curso/tema1/img01.png')
            .imagen-adornos-flotantes-tema3__img1: img(src="@/assets/curso/tema3/bolita1.png" style="left: 5%; right:  ; top: 10%; bottom:  ; width: 47px")
            .imagen-adornos-flotantes-tema3__img2: img(src="@/assets/curso/tema3/bolita2.png" style="left: ; right:-2% ; top:2% ; bottom: ; width: 73px ")
            .imagen-adornos-flotantes-tema3__img3: img(src="@/assets/curso/tema3/bolita3.png" style="left: 28% ; right: ; top: ; bottom: -5% ; width: 47px ")
            .imagen-adornos-flotantes-tema3__img4: img(src="@/assets/curso/tema3/cajita1.png" style="left: 0% ; right: ; top: ; bottom: -10% ; width: 142px ")
      .col-lg-8
        p.mb-4 El transporte es un factor de gran importancia en la competitividad de los servicios y productos que las empresas ofrecen a los mercados nacionales e internacionales. La globalización económica ha impulsado el desarrollo tecnológico de los medios de transporte, a su vez el intercambio comercial ha permitido una mayor integración de los estos modos de transporte.
        p.mb-0 A continuación, se describen las características de cada modo de transporte, el cual corresponde a la manera y el tipo de transporte utilizado para transportar la mercancía:


    h4.mb-5 Aéreo

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12.d-none.d-lg-block
        div.p-0.position-relative(data-aos="fade-right")
          figure
            img(src="@/assets/curso/tema1/img02.png")
          div.py-4.p-5.w-100.position-absolute(style="bottom: 0%; height:100px;  background-color: rgba(255, 243, 205, 0.80)")
            p.mt-2.mb-0.px-5 Es el modo de transporte más reciente, su principal ventaja es la rapidez y para la carga se han construido aeronaves cargueras diseñadas para el transporte de mercancía. Las características principales son:      
      .col-lg-12.d-lg-none        
          div.py-4.p-5.w-100(style="bottom: 0%; background-color: rgba(255, 243, 205, 0.80)")
            p.mt-2.mb-0.px-lg-5.px-0 Es el modo de transporte más reciente, su principal ventaja es la rapidez y para la carga se han construido aeronaves cargueras diseñadas para el transporte de mercancía. Las características principales son: 

    .tarjetas1.mb-4(data-aos="fade-left")
      .row.justify-content-center.align-items-center        
        .col-12.col-xl-4
          .TFcontainer.mb-3
            img.TFimage(src='@/assets/curso/tema1/img03.png')
            .TFoverlay(style="background-color: #FFDE96")
              div.p-4.pt-5
                img.mb-4(style="width:79px" src="@/assets/curso/tema1/img08.svg")
                h4 Rapidez
                p.mb-0 Este transporte es adecuado para mercancías urgentes, productos perecederos y aquellos de valor unitario elevado.
        .col-12.col-xl-4
          .TFcontainer.mb-3
            img.TFimage(src='@/assets/curso/tema1/img04.png')
            .TFoverlay(style="background-color: #FFDE96")
              div.p-4.pt-5
                img.mb-4(style="width:79px" src="@/assets/curso/tema1/img09.svg")
                h4 Seguridad
                p.mb-0 El transporte aéreo tiene los índices de seguridad más altos de todos los medios de transporte.
        .col-12.col-xl-4
          .TFcontainer.mb-3
            img.TFimage(src='@/assets/curso/tema1/img05.png')
            .TFoverlay(style="background-color: #FFDE96")
              div.p-4.pt-5
                img.mb-4(style="width:68px" src="@/assets/curso/tema1/img10.svg")
                h4 Flexibilidad
                p.mb-0 Existe una amplia versatilidad y gama de modelos de aeronaves que pueden acceder a cualquier territorio.

    .tarjetas1.mb-4(data-aos="fade-right")
      .row.justify-content-center.align-items-center        
        .col-12.col-xl-4
          .TFcontainer.mb-3
            img.TFimage(src='@/assets/curso/tema1/img11.png')
            .TFoverlay(style="background-color: #FFDE96")
              div.p-4.pt-5
                img.mb-4(style="width:99px" src="@/assets/curso/tema1/img13.svg")
                h4 Costos
                p.mb-0 Su elevado costo limita su uso a mercancías de alto valor unitario o aquellas en que la rapidez de entrega es un valor añadido significativo.
        .col-12.col-xl-4
          .TFcontainer.mb-3
            img.TFimage(src='@/assets/curso/tema1/img12.png')
            .TFoverlay(style="background-color: #FFDE96")
              div.p-4.pt-5
                img.mb-4(style="width:94px" src="@/assets/curso/tema1/img14.svg")
                h4 Limitaciones de carga
                p.mb-0 Las dimensiones de las puertas de las aeronaves, así como la capacidad y el peso total de la mercancía son limitaciones.


    p.mb-5 En cuanto a las modalidades de los servicios, en el transporte aéreo se encuentran los siguientes:

    .tarjetas1.mb-4(data-aos="fade-left")
      .row.justify-content-center
        .col-10.col-xl-4.d-flex
          .TFcontainer.mb-3.py-5(style="background-color: #FFE29E")
            .row.justify-content-center.mb-2
              .col-md-8.col-xl-4
                img.TFimage(src='@/assets/curso/tema1/img15.svg')
            h3.text-center Servicios regulares 
            .TFoverlay2(style="background-color: #8D9BFF")
              div.p-4.pt-3
                .row.justify-content-center.align-items-center.mb-2
                  .col-3
                    img.TFimage(src='@/assets/curso/tema1/img15.svg')      
                  .col-9 
                    h3.mb-0 Servicios regulares 
                p.mb-0 Corresponden a los servicios de transporte aéreo de pasajeros y carga, incluidos en el tráfico programado para una compañía aérea, con horarios y tarifas anunciados.
        .col-10.col-xl-4.d-flex
          .TFcontainer.mb-3.py-5(style="background-color: #8D9BFF")
            .row.justify-content-center.mb-2
              .col-md-8.col-xl-4
                img.TFimage(src='@/assets/curso/tema1/img16.svg')
            h3.text-center Servicios chárter 
            br
            .TFoverlay2(style="background-color: #FFE29E")
              div.p-4.pt-3
                .row.justify-content-center.align-items-center.mb-2
                  .col-3
                    img.TFimage(src='@/assets/curso/tema1/img16.svg')      
                  .col-9 
                    h3.mb-0 Servicios chárter 
                p.mb-0 Servicios de transporte que, por lo general, se realiza mediante el arrendamiento de aeronaves completas para un recorrido determinado, sin que tengan que estar asignadas a una zona geográfica concreta, tarifas y frecuencias fijas.
        .col-10.col-xl-4.d-flex
          .TFcontainer.mb-3.py-5(style="background-color: #FFE29E")
            .row.justify-content-center.mb-2
              .col-md-8.col-xl-4
                img.TFimage(src='@/assets/curso/tema1/img17.svg')
            h3.text-center Grupaje aéreo 
            .TFoverlay2(style="background-color: #8D9BFF")
              div.p-4.pt-3
                .row.justify-content-center.align-items-center.mb-2
                  .col-3
                    img.TFimage(src='@/assets/curso/tema1/img17.svg')      
                  .col-9 
                    h3.mb-0 Grupaje aéreo 
                p.mb-0 Es el servicio de transporte bajo la modalidad de grupaje que presta un agente de carga aérea.

    h4.mb-5 Ferroviario

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12.d-none.d-lg-block
        div.p-0.position-relative(data-aos="fade-left")
          figure
            img(src="@/assets/curso/tema1/img18.png")
          div.py-4.p-5.w-100.position-absolute(style="bottom: 0%; height:100px;  background-color: rgba(255, 243, 205, 0.80)")
            p.mt-2.mb-0.px-5 Este modo hace uso del ferrocarril como medio de transporte. En muchos países tiene baja representación el transporte de mercancías a través de este modo, debido a que no se cuenta con la infraestructura ni los servicios relacionados con estas. 
      .col-lg-12.d-lg-none
          div.py-4.p-5.w-100(style="bottom: 0%;  background-color: rgba(255, 243, 205, 0.80)")
            p.mt-2.mb-0.px-lg-5.px-0 Este modo hace uso del ferrocarril como medio de transporte. En muchos países tiene baja representación el transporte de mercancías a través de este modo, debido a que no se cuenta con la infraestructura ni los servicios relacionados con estas. 
    p.mb-4 Las principales características son las siguientes:

    .row.justify-content-center.align-items-center.mb-4
      .col-12.col-xl-3.tarjeta1-tema1         
        img(src="@/assets/curso/tema1/img19.png")
        div.p-3.mb-3.mb-xl-0(style="bottom: 0%; height:155px;  background-color: #FFF3CD")
          h4 Capacidad
          p.mb-4 Realiza movimientos de grandes cargas. 
      .col-12.col-xl-3.tarjeta1-tema1
        img(src="@/assets/curso/tema1/img20.png")
        div.p-3.mb-3.mb-xl-0(style="bottom: 0%; height:155px;  background-color: #FFF3CD")
          h4 Seguridad
          p.mb-4 Presenta uno de los índices de siniestralidad más bajos.
      .col-12.col-xl-3.tarjeta1-tema1
        img(src="@/assets/curso/tema1/img21.png")
        div.p-3.mb-3.mb-xl-0(style="bottom: 0%; height:155px;  background-color: #FFF3CD")
          h4 Sostenibilidad
          p.mb-4 Es el modo menos contaminante para el medio ambiente.

    .row.justify-content-center.align-items-center.mb-5      
      .col-12.col-xl-3.tarjeta1-tema1
        img(src="@/assets/curso/tema1/img22.png")
        div.p-3.mb-3.mb-xl-0(style="bottom: 0%; height:155px;  background-color: #FFF3CD")
          h4 Intermodalidad
          p.mb-4 Es posible interactuar con otros modos de transporte (marítimo y carretera).
      .col-12.col-xl-3.tarjeta1-tema1
        img(src="@/assets/curso/tema1/img23.png")
        div.p-3.mb-3.mb-xl-0(style="bottom: 0%; height:155px;  background-color: #FFF3CD")
          h4 Regularidad
          p.mb-4 Permite la circulación permanente, incluidos fines de semana o condiciones atmosféricas adversas.

    p.mb-4 Adicionalmente, se distinguen las siguientes modalidades principales de servicios de transporte ferroviario:

    .tema3.mb-5(data-aos="fade-right")  
      AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
        .row.justify-content-center.align-items-top(titulo="Transporte combinado")
          .col-md-7.pt-5
            p.mb-0 Se realiza mediante contenedores, cajas móviles, semirremolques u otras unidades de transporte intermodal entre terminales especializadas desde las que se acarrean desde el lugar de origen o al destino en transporte por carretera.
          .col-md-5
            figure
              img(src="@/assets/curso/tema1/img24.png") 

        .row.justify-content-center.align-items-top(titulo="Cargas completas")
          .col-md-7.pt-5
            p.mb-0 Transporte de mercancía en vagones completos, es adecuado para el acarreo de mercancías de gran volumen o peso a largas distancias, por ejemplo, productos de hierro o acero.
          .col-md-5
            figure
              img(src="@/assets/curso/tema1/img25.png") 

        .row.justify-content-center.align-items-top(titulo="Cargas fraccionadas")
          .col-md-7.pt-5
            p.mb-0 Corresponde a la carga que no alcanza a llenar un vagón o un contenedor. 
          .col-md-5
            figure
              img(src="@/assets/curso/tema1/img26.png") 

    h4.mb-4 Marítimo 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12.d-none.d-lg-block
        div.p-0.position-relative(data-aos="fade-left")
          figure
            img(src="@/assets/curso/tema1/img27.png")
          div.py-4.p-5.w-100.position-absolute(style="bottom: 0%; height:100px;  background-color: rgba(255, 243, 205, 0.80)")
            p.mt-2.mb-0.px-5 Corresponde al modo más utilizado en el comercio internacional y el que mueve la mayor cantidad de carga debido a la facilidad de acceso al medio marítimo, el desarrollo tecnológico y la globalización de los mercados.
      .col-lg-12.d-lg-none
          div.py-4.p-5.w-100(style="bottom: 0%;  background-color: rgba(255, 243, 205, 0.80)")
            p.mt-2.mb-0.px-lg-5.px-0 Corresponde al modo más utilizado en el comercio internacional y el que mueve la mayor cantidad de carga debido a la facilidad de acceso al medio marítimo, el desarrollo tecnológico y la globalización de los mercados.

    p.mb-4 Las características principales de este modo de transporte son:

    .tarjetas1.mb-4(data-aos="fade-right")
      .row.justify-content-center
        .col-12.col-xl-4.d-flex
          .TFcontainer.mb-3(style="background-color: #FFE29E")
            img.TFimage(src='@/assets/curso/tema1/img29.png')                        
            .TFoverlay3(style="background-color: #A4A3FF")
              div.p-4.pt-3
                .row.justify-content-center.align-items-center.mb-2
                  .col-3
                    img.TFimage(src='@/assets/curso/tema1/img28.svg')      
                  .col-9
                    h3.mb-0 Internacionalidad
                p.mb-0 Transporta mercancía entre puntos geográficos distantes al más bajo costo y es el que menos impacto tiene en el medio ambiente. 
        .col-12.col-xl-4.d-flex
          .TFcontainer.mb-3(style="background-color: #8D9BFF")                                     
            img.TFimage(src='@/assets/curso/tema1/img30.png')                        
            .TFoverlay3(style="background-color: #A4A3FF")
              div.p-4.pt-3
                .row.justify-content-center.align-items-center.mb-2
                  .col-3
                    img.TFimage(src='@/assets/curso/tema1/img28.svg')      
                  .col-9 
                    h3.mb-0 Versatilidad
                p.mb-0 Con el fin de adaptarse a la mercancía a transportar, el diseño de los buques se ha especializado cada vez más.
        .col-12.col-xl-4.d-flex
          .TFcontainer.mb-3(style="background-color: #FFE29E")
            img.TFimage(src='@/assets/curso/tema1/img31.png')                        
            .TFoverlay3(style="background-color: #A4A3FF")
              div.p-4.pt-3
                .row.justify-content-center.align-items-center.mb-2
                  .col-3
                    img.TFimage(src='@/assets/curso/tema1/img28.svg')      
                  .col-9 
                    h3.mb-0 Gran capacidad
                p.mb-0 Existen buques de amplia gama de tamaños, desde 100 TPM (toneladas de peso muerto) hasta mayores de 300.000 TPM.

    .tarjetas1.mb-5(data-aos="fade-right")
      .row.justify-content-center.align-items-center
        .col-12.col-xl-4.d-flex
          .TFcontainer.mb-3(style="background-color: #FFE29E")
            img.TFimage(src='@/assets/curso/tema1/img32.png')                        
            .TFoverlay3(style="background-color: #A4A3FF")
              div.p-4.pt-3
                .row.justify-content-center.align-items-center.mb-2
                  .col-3
                    img.TFimage(src='@/assets/curso/tema1/img28.svg')      
                  .col-9 
                    h3.mb-0 Infraestructura
                p.mb-0 Se requiere una infraestructura portuaria en tierra, con instalaciones adecuadas. 
        .col-12.col-xl-4.d-flex
          .TFcontainer.mb-3(style="background-color: #8D9BFF")                                     
            img.TFimage(src='@/assets/curso/tema1/img33.png')                        
            .TFoverlay3(style="background-color: #A4A3FF")
              div.p-4.pt-3
                .row.justify-content-center.align-items-center.mb-2
                  .col-3
                    img.TFimage(src='@/assets/curso/tema1/img28.svg')      
                  .col-9 
                    h3.mb-0 Escasa penetrabilidad
                p.mb-0 Debido a que tiene gran dependencia de la carretera o el ferrocarril para alcanzar el destino de la mercancía.

    p.mb-4 Hay dos mercados principales de prestación de servicios en el transporte marítimo de mercancías, a saber: 
    
    .tema4.mb-5(data-aos="fade-right")
      TabsC.color-acento-contenido
        .py-3.py-md-4.px-3(titulo="Mercado de tráficos de línea regular")
          .row.justify-content-center
            .col-lg-6.pt-8
              p.mb-0 Generalmente transportan materia prima de alto valor unitario, productos manufacturados y componentes semielaborados, usualmente en contenedores. El servicio se lleva a cabo de acuerdo con un itinerario determinado, planeando día y hora de salida, así como llegada en cada puerto de escala.            
            .col-md-4
              figure
                img(src='@/assets/curso/tema1/img34.png')    
        .py-3.py-md-4.px-3(titulo="Mercado de tráficos <i>tramp</i>")
          .row.justify-content-center
            .col-lg-6.pt-8
              p.mb-0 Este servicio se lleva a cabo por buques volanderos o <i>tramp</i>, no tiene ruta fija ni fletes uniformes, una vez se finaliza el servicio el armador queda libre de compromiso para contratar otro servicio. 
            .col-md-4
              figure
                img(src='@/assets/curso/tema1/img35.png')    

    h4.mb-4 Carretera

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12.d-none.d-lg-block
        div.p-0.position-relative(data-aos="fade-right")
          figure
            img(src="@/assets/curso/tema1/img36.png")
          div.py-4.p-5.w-100.position-absolute(style="bottom: 0%; height:85px;  background-color: rgba(255, 243, 205, 0.80)")
            p.mt-2.mb-0.px-5 Corresponde a la modalidad de transporte más utilizada y eficaz para los servicios puerta a puerta.
      .col-lg-12.d-lg-none
          div.py-4.p-5.w-100(style="bottom: 0%;  background-color: rgba(255, 243, 205, 0.80)")
            p.mt-2.mb-0.px-lg-5.px-0 Corresponde a la modalidad de transporte más utilizada y eficaz para los servicios puerta a puerta.

    p.mb-5 Las principales características de este modo de transporte son las siguientes:

    SlyderB.mb-5(:datos="datosSlyder")

    p.mb-4 Una de las mayores ventajas del transporte de carretera consiste en su versatilidad, que se puede apreciar conociendo los servicios del transporte por corretera

    TabsA.color-secundario.mb-5      
      .tarjeta.tarjeta--gris.p-5(titulo="Carga completa")        
        .row.justify-content-center.align-items-center
          .col-lg-8
            h4 Carga completa
            p.mb-0 Transporte de cargas a granel o embaladas que ocupan toda la capacidad de un camión desde un punto de origen hasta uno de destino, por ejemplo, transporte en vehículos cisterna.
          .col-lg-4.px-5
            img(src="@/assets/curso/tema1/img42.svg")

      .tarjeta.tarjeta--gris.p-5(titulo="Cargas fraccionadas o grupaje")        
        .row.justify-content-center.align-items-center
          .col-lg-8
            h4 Cargas fraccionadas o grupaje
            p.mb-0 Aquella que, por peso o volumen de la mercancía, no completa un vehículo de carretera, por lo tanto, se hace necesario agrupar la mercancía atendiendo a su origen (consolidación) por ejemplo, servicios de paquetería urgente y distribución urbana de mercancía.
          .col-lg-4.px-0
            img(src="@/assets/curso/tema1/img43.svg")

    
    h4.mb-4 Fluvial  
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")      
      .col-10.col-xl-4
        .imagen-adornos-flotantes-tema3.d-flex.justify-content-center.mb-5.mb-xl-0
            img(src='@/assets/curso/tema1/img44.png')
            .imagen-adornos-flotantes-tema3__img1: img(src="@/assets/curso/tema3/bolita1.png" style="left:25%; right:  ; top: -10%; bottom:  ; width: 47px")
            .imagen-adornos-flotantes-tema3__img2: img(src="@/assets/curso/tema3/bolita2.png" style="left: ; right:-10% ; top:-5% ; bottom: ; width: 73px ")
            .imagen-adornos-flotantes-tema3__img3: img(src="@/assets/curso/tema3/bolita3.png" style="left: 25% ; right: ; top: ; bottom: -12% ; width: 47px ")
            .imagen-adornos-flotantes-tema3__img4: img(src="@/assets/curso/tema3/cajita1.png" style="left: -5% ; right: ; top: ; bottom: -17% ; width: 142px ")
      .col-xl-7
        div.px-4
          p.mb-4 Posee características similares al modo marítimo y corresponde al transporte por vías navegables al interior de los territorios se caracteriza por:
        ol.lista-ol--cuadro
            li 
              .lista-ol--cuadro__vineta
                span 1
              | Costos reducidos de transporte. 
            li 
              .lista-ol--cuadro__vineta
                span 2
              | Capacidad de mover gran cantidad de mercancía. 
            li 
              .lista-ol--cuadro__vineta
                span 3
              | Uso polivalente de buques o gabarras.
            li 
              .lista-ol--cuadro__vineta
                span 4
              | Sistema intermodal con fácil conexión a otros modos de transporte. 




        
</template>

<script>
import BannerInterno from '../components/BannerInterno.vue'
export default {
  name: 'Tema1',
  components: {
    BannerInterno,
  },
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Flexibilidad ',
        texto:
          'Se adapta fácilmente a los requerimientos del mercado y los clientes, ya que los vehículos pueden transportar desde pequeños paquetes hasta grandes volúmenes y productos de diferente naturaleza.',
        imagen: require('@/assets/curso/tema1/img37.png'),
      },
      {
        titulo: 'Penetración ',
        texto:
          'Permite realizar un servicio puerta a puerta de manera eficaz. ',
        imagen: require('@/assets/curso/tema1/img38.png'),
      },
      {
        titulo: 'Rapidez ',
        texto:
          'Es adecuado para los para envíos urgentes, ya que la carga y descarga de la mercancía se realiza de manera fácil, además de la versatilidad de horarios y vehículos.',
        imagen: require('@/assets/curso/tema1/img39.png'),
      },
      {
        titulo: 'Coordinación con otros medios ',
        texto:
          'Capacidad de acceso a diferentes nodos logísticos, facilitando la manipulación y el transbordo.',
        imagen: require('@/assets/curso/tema1/img40.png'),
      },
      {
        titulo: 'Internacionalización ',
        texto:
          'Debido a que corresponde al modo de transporte más utilizado en la mayoría de países del mundo.',
        imagen: require('@/assets/curso/tema1/img41.png'),
      },
    ],
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
.tabs-a.color-secundario .tabs-a__tab
  background-color: #E8E8E8;

.tabs-a.color-secundario .tabs-a__tab__selected
  background-color: #5263E2;
  color: white

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
  height: 0%
  transition: .5s ease

.TFcontainer:hover .TFoverlay
  height: 100%

.TFoverlay2
  position: absolute
  top: 0
  left: 0
  right: 0
  border-radius: 10px
  overflow: hidden
  width: 100%
  height: 0%
  transition: .5s ease
  background-color: rgba(255, 222, 150, 0.85)

.TFcontainer:hover .TFoverlay2
  height: 100%

.TFoverlay3
  position: absolute
  top: 0
  right: 0
  right: 0
  border-radius: 10px
  overflow: hidden
  width: 0%
  height: 100%
  transition: .5s ease
  background-color: rgba(255, 222, 150, 0.85)

.TFcontainer:hover .TFoverlay3
  width: 100%


.tarjeta1-tema1
  transition: transform .2s;
  //filter: brightness(50%);
  cursor: pointer


.tarjeta1-tema1:hover
  transform: scale(1.11);
  div
    background-color: #B4BDFF !important

// @media screen and (max-width: 991px)
//   .TFimage
//     height: 200px
</style>
