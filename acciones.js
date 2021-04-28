const acciones = [
  {
    apellidos: "Fernandez",
    nombres: "Luis Alberto",
    accion: "Liderazgo Inspirador",
  },
  {
    apellidos: "Benavides Fajardo",
    nombres: "Oscar Fernando",
    accion: "Escuchar para entender",
  },
  {
    apellidos: "Rojas Osorio",
    nombres: "Juan David",
    accion: "Lograr cumplir con mis objetivos.",
  },
  {
    apellidos: "Ortiz Guerra",
    nombres: "Diana Patricia",
    accion:
      "Fortalecer las competencias de los colaboradores que permita su desarrollo integral para la contribución de los objetivos del cuadro de mando integral 2021 de ACH COLOMBIA.",
  },
  {
    apellidos: "Masmela",
    nombres: "Maria Del Pilar",
    accion: "Trabajar de manera colaborativa con los diferentes equipos para lograr el desarrollo exitoso de nuestra estrategia ",
  },
  {
    apellidos: "Segura",
    nombres: "Angela Patricia",
    accion: "Apoyo con conocimiento integral de la compañía",
  },
  {
    apellidos: "Rodríguez",
    nombres: "Rocio del Pilar",
    accion: "Evaluar los procesos a profundidad para asegurar el cumplimiento y efectividad.",
  },
  {
    apellidos: "Fernandez",
    nombres: "Edison German",
    accion: "Aportar ideas y conocimiento en pro de la mejora continua en materia de la administración de riesgo SARLAFT en ACH Colombia.",
  },
  {
    apellidos: "Garcia Arcila",
    nombres: "Diana Carolina",
    accion: "Gestión",
  },
  {
    apellidos: "Gonzalez Moreno",
    nombres: "Johanna Andrea",
    accion: "Mejora continua, no desfallecer, lograr lo que me propongo",
  },
  {
    apellidos: "Quiñonez Rodríguez",
    nombres: "Diego Armando",
    accion: "Apoyar y ayudar a mejorar todo el proceso de vinculación de las entidades para el servicio de transfiya.",
  },
  {
    apellidos: "Mendoza",
    nombres: "Giovanni Arturo",
    accion: "Ser multiplicador y ejemplo para la implementación de una cultura de agil en Ach.",
  },
  {
    apellidos: "Diaz",
    nombres: "Gloria Alejandra",
    accion: "Corazón",
  },
  {
    apellidos: "Ricaurte Vásquez",
    nombres: "Jeimy Yorlady",
    accion: "Llevaré a ACH Colombia en el corazón siempre y recordare con gratitud el tiempo que estuve aquí. Los voy a extrañar mucho.",
  },
  {
    apellidos: "Torres Beltran",
    nombres: "Andrés Fernando",
    accion:
      "Seguir apoyando con mi conocimiento sobre los aplicativos actuales en las iniciativas y proyectos de renovación que se están trabajando actualmente con lo cual lograr que ACH que ACH sea una de los mejores motores de transacciones de Colombia.",
  },
  {
    apellidos: "Schaefer Navarro",
    nombres: "Erwin Sergio",
    accion: "Escuchar y apoyar permanentemente a los equipos para que juntos podamos eliminar los impedimentos que vayamos encontrando en la realización de nuestros objetivos.",
  },
  {
    apellidos: "Moreno",
    nombres: "Julio Cesar",
    accion: "Darlo todo",
  },
  {
    apellidos: "Fernandez",
    nombres: "Luis Alberto",
    accion: "Agradecimiento a Dios",
  },
  {
    apellidos: "Delgado Hernandez",
    nombres: "Sindy Lorena",
    accion:
      "Prestar atención a la necesidad que tienen nuestros clientes tanto bancos como comercios frente a los procesos de facturación, dar inicio a los pequeños cambios los cuales generan al cliente una experiencia única ",
  },
  {
    apellidos: "Guarin Baron",
    nombres: "Ingrid Carolina",
    accion: "Actitud de servicio ",
  },
  {
    apellidos: "Fernandez",
    nombres: "Luis Alberto",
    accion: "Gracias Dios, gracias familia, gracias ACH",
  },
  {
    apellidos: "Torres Palacios",
    nombres: "Luis Jairo",
    accion: "Esfuerzo y colaboración para mejorar la experiencia del Usuario ",
  },
  {
    apellidos: "Bolivar",
    nombres: "Diego Fernando",
    accion: "Acción",
  },
  {
    apellidos: "Andrade González",
    nombres: "Olga Lucía",
    accion:
      "Compartir los conocimientos que estoy adquiriendo en el marco de agilismo con otros proyectos con el fin de apoyar de manera activa el proceso de transformación de la organización.",
  },
  {
    apellidos: "Bolivar",
    nombres: "Diego Fernando",
    accion: "Lógica Estructurada",
  },
  {
    apellidos: "Suárez Espejo",
    nombres: "Julian Andrés",
    accion: "Generar una experiencia excepcional a clientes internos y externos al atender requerimientos o incidentes",
  },
  {
    apellidos: "González",
    nombres: "Ruth Yaned",
    accion: "Mejoramiento Continuo",
  },
  {
    apellidos: "Silva",
    nombres: "Liliana",
    accion:
      "Diseñar, transformar y liderar estrategias para acopañar a los líderes, colaboradores y equipos de trabajo en su DesarroYO integral logrando así, alcanzar los objetivos de la compañía ",
  },
  {
    apellidos: "Perea Linares",
    nombres: "Alejandro Alfonso",
    accion: "Prestar un servicio integral y holístico desde la dirección de gobierno de información. ",
  },
  {
    apellidos: "Tonnelier Piña",
    nombres: "Nicole",
    accion: "Gestión del cambio y trabajo colaborativo.",
  },
  {
    apellidos: "Quintero Sánchez",
    nombres: "Iván Alexander",
    accion: "Adaptabilidad e innovación para los clientes.",
  },
  {
    apellidos: "Romero Munar",
    nombres: "Adriana del Pilar",
    accion: "Ejercer el poder de cambio para transformarse y así contribuir al cumplimiento de los objetivos propuestos",
  },
  {
    apellidos: "Gonzalez Carmona",
    nombres: "Anyela Maritza",
    accion: "Somos una familia ACH, por eso mi acción será estar siempre dispuesta a colaborar en todo lo que se requiera en pro de poder cumplir con los objetivos de la compañia",
  },
  {
    apellidos: "Varon Arango",
    nombres: "Diana Carolina",
    accion:
      "Contribuir al desarrollo de nuestros colaboradores a través de la implementación de programas que le apunten a nuestros objetivos, siendo guía y apoyo para toda la compañía.",
  },
  {
    apellidos: "Posada Torres",
    nombres: "Leidy Viviana",
    accion: "Todos aportamos con nuestras acciones al crecimiento de la compañía, el trabajo en equipo primordial para lograr los objetivos propuestos en cada área",
  },
  {
    apellidos: "Bolaños Castro",
    nombres: "Diana Paola",
    accion:
      "MI COMPROMISO es ser gestora del cambio para contribuir y lograr los objetivos de la compañia desde las diferentes intercciones que la Dirección Comercial tenemos con clientes aliados y procesos",
  },
  {
    apellidos: "Maldonado Clavijo",
    nombres: "Angélica María",
    accion:
      "Yo me transformo, para aportar a la transformación de la compañia. Afrontando con la mejor actitud los retos y entregando resultados que sumen al propósito de ACH Colombia.",
  },
  {
    apellidos: "Urquijo Castro",
    nombres: "Daniel Adrian",
    accion: "Ser flexible",
  },
  {
    apellidos: "Gonzalez Buitrago",
    nombres: "Martha Patricia",
    accion:
      "Innovar en cada proceso y en cada acción que aporto en mi labor diaria. Identificar de qué forma puedo transformar la monotonía del trabajo en una labor motivante y transformadora.",
  },
  {
    apellidos: "Campuzano Velásquez",
    nombres: "Sandra Milena",
    accion: "Aportar mi experiencia y adquirir nuevos conocimientos, desde el autoaprendizaje para aportar a los proyectos y a mi trabajo del dia a dia en ach ",
  },
  {
    apellidos: "Niño Egas",
    nombres: "Nubia Marcela",
    accion: "Satisfacer las necesidades de mi cliente interno con oportunidad y calidad",
  },
  {
    apellidos: "Rivera Paez",
    nombres: "Jhonny",
    accion: "Compromiso",
  },
  {
    apellidos: "Sandoval",
    nombres: "Carolina",
    accion: "Dar lo mejor de mis cualidades, habilidades y conocimientos para hacer posible el cumplimiento de los objetivos de las diferentes iniciativas y proyectos de ACH",
  },
  {
    apellidos: "Medina",
    nombres: "Carla Lyliana",
    accion: "Lograr Acuerdos y Sinergias",
  },
  {
    apellidos: "Macias Vargas",
    nombres: "Edison",
    accion:
      "Daré a conocer más mi rol y procesos para que todos los demás tengan muy claro, como y en que circunstancias les puedo ayudar desde mi rol, hablare con mayor claridad para ser un mejor engranaje dentro de la compañía",
  },
  {
    apellidos: "Castro",
    nombres: "Cesar Augusto",
    accion: "Lograr que todos en el país vean a ACH Colombia y sus servicios como la mejor opción de pago",
  },
  {
    apellidos: "Bernal Tovar",
    nombres: "Farley",
    accion: "Compromiso y colaboración ",
  },
  {
    apellidos: "Gutierrez",
    nombres: "Diana Carolina",
    accion: "participar y proponer ",
  },
  {
    apellidos: "Álvarez Munar",
    nombres: "Camilo Andrés",
    accion: "Apoyar",
  },
  {
    apellidos: "Álvarez Munar",
    nombres: "Camilo Andrés",
    accion: "Asesorar",
  },
  {
    apellidos: "Rodriguez Fonseca",
    nombres: "Anderson Rolando",
    accion: "Diseñar la arquitectura del proyecto asignada",
  },
  {
    apellidos: "Amaya Páez",
    nombres: "Nelly Vanesa",
    accion: "Todas muestras acciones seran parte del cambio que será para mejorar la vida de los colombianos. ",
  },
  {
    apellidos: "Reyes",
    nombres: "Jorge Enrique",
    accion: "esforzarme mas e involucrame mucho mas en el cumplimiento de los objetivos de la compañia.",
  },
  {
    apellidos: "Hernandez Rativa",
    nombres: "Eliseo",
    accion: "Promover, impulsar y apoyar las actividades que garanticen el logro del propósito de ACH",
  },
  {
    apellidos: "Araujo Lopez",
    nombres: "Valeria",
    accion: "Abrazar el cambio, aprender y proponer, cohesionar equipos.",
  },
  {
    apellidos: "Niño Alfonso",
    nombres: "Iván Dario",
    accion: "Compartir conocimiento y facilitarnos la vida",
  },
  {
    apellidos: "Acero Barrios",
    nombres: "Andrés Felipe",
    accion: "Movilizar la innovación como una actitud, recurso y apoyo enfocado al logro de los objetivos compañía",
  },
  {
    apellidos: "Chacon Villalba",
    nombres: "Diana Alexandra",
    accion: "Una idea tiene mayor aporte si se realiza de manera colectiva.",
  },
  {
    apellidos: "Olaya",
    nombres: "Wulman Yuseth",
    accion: "El cambio y la evolución",
  },
  {
    apellidos: "Cardenas Nieto",
    nombres: "Sandra Marcela",
    accion: "Poder adaptarnos a los cambios",
  },
  {
    apellidos: "Camargo Nova",
    nombres: "John Freddy",
    accion: "Trabajo en Equipo",
  },
  {
    apellidos: "Amaya Caez",
    nombres: "Laura Sofia",
    accion: 'Colaboración al 100%. Jamás decir "no se puede" sin antes proponer una solución.',
  },
  {
    apellidos: "Cardenas Nieto",
    nombres: "Sandra Marcela",
    accion: "Conocer el impacto que tenemos como compañia en la comunidad y continuar con una mejora continua. ",
  },
  {
    apellidos: "Urbina",
    nombres: "Omar Eudes",
    accion: "Las pequeñas acciones que hacemos a diario se unen con las de los otros colaboradores generando un gran efecto mariposa",
  },
  {
    apellidos: "Soto López",
    nombres: "Fernando Alexander",
    accion: "Ser un promotor del agilísimo en la Organización impactando la entregar valor a nuestros clientes clientes c",
  },
  {
    apellidos: "Sierra Mayorga",
    nombres: "Edgar Alexander",
    accion: "El cliente es el centro de la estrategia y todos aportamos al feliz término de la estrategia.",
  },
  {
    apellidos: "Correa Barrera",
    nombres: "Astrid Liliana",
    accion: "Aportar desde mi experiencia, conocimiento del negocio en la generación de ideas que se ajusten a las necesidades de la compañía",
  },
  {
    apellidos: "Quintero Cuervo",
    nombres: "Constanza",
    accion: "La comunicación y sincronización con los equipos",
  },
  {
    apellidos: "Rivera Rios",
    nombres: "Julian David",
    accion: "Adaptación ",
  },
  {
    apellidos: "Hernandez",
    nombres: "Eduard Anubis",
    accion:
      "Efecto mariposa, hacer que todas nuestras acciones se conviertan en factores de éxito para que seamos los mejores en todo lo que hacemos y que transformemos el mundo, en pro de una mejor sociedad. ",
  },
  {
    apellidos: "Castellanos Bernal",
    nombres: "Victor Manuel",
    accion: "Asegurando nuestra información y la de nuestros clientes para brindar servicios acordes con el propósito de ACH Colombia.",
  },
  {
    apellidos: "Aguirre Criollo",
    nombres: "Maira Alexandra",
    accion:
      "Escuchar a nuestros clientes de manera aun más activa y gestionar ante los demas equipos para que sean escuchados y aportar a diseñar interacciones y servicios acordes a sus necesidades. ",
  },
  {
    apellidos: "Vargas Muñoz",
    nombres: "Lina Marcela",
    accion: "Seguir aportando en el desarrollo de los proyectos de la forma más eficiente y optimizar la gestionar del portafolio de proyectos",
  },
  {
    apellidos: "Vargas",
    nombres: "Alejandro",
    accion: "Engranar en cada equipo con el fin de optimizar los servicios y procesos de la compañía con el fin de ser la primer opción de pagos en Colombia",
  },
  {
    apellidos: "Guerrero Torres",
    nombres: "Andrea del Pilar",
    accion: "Apoyo a la compañia, enriquecer conocimientos y cumplir nuestro objetivo ACH",
  },
  {
    apellidos: "Quiceno",
    nombres: "Henry Yesid",
    accion:
      "La interacción con los distintos actores del ecosistema, y la comunicación efectiva permitirá un mejor desempeño otorgando los mejores resultados para el cumplimiento de los objetivos y propósitos de la compañía con el fin de ser la primera opción de pago de los colombianos.",
  },
  {
    apellidos: "Guerrero Torres",
    nombres: "Andrea del Pilar",
    accion: "Somos una sola compañia - Crecer juntos es el objetivo ",
  },
  {
    apellidos: "Guerrero Torres",
    nombres: "Andrea del Pilar",
    accion: "Actitud positiva ",
  },
  {
    apellidos: "Moreno Orjuela",
    nombres: "Sergio Daniel",
    accion: "Entregar lo mejor de mi en cada proceso",
  },
  {
    apellidos: "Cuan Pérez",
    nombres: "Jacqueline",
    accion: "Adaptarme a los cambios como la oruga al ser la mariposa.",
  },
  {
    apellidos: "Ladino Vigoya",
    nombres: "Clara Lucía",
    accion: "Vivir cada día como si fuera el último.",
  },
  {
    apellidos: "Franco Toro",
    nombres: "Juan David",
    accion: "Mejoramiento continuó para ser la primera opción de pago para los Colombianos",
  },
  {
    apellidos: "Genoy Rodríguez",
    nombres: "Wilson",
    accion: "Buenas Acciones en el día a día tanto en el trabajo com en familia",
  },
  {
    apellidos: "Castro Cárdenas",
    nombres: "Angie Daniela",
    accion: "Contribuir para seguir siendo la mejor compañía.",
  },
  {
    apellidos: "Granados Rodríguez",
    nombres: "Andrés Dario",
    accion: "Hacer siempre las cosas lo mejor que puedo !",
  },
  {
    apellidos: "Paez Casas",
    nombres: "Angela Rocio",
    accion: "Gratitud !! Proactividad !! Vamos con toda...!!",
  },
  {
    apellidos: "Avendaño Castillo",
    nombres: "Nelson Ricardo",
    accion: "Gestion TI Innovadora y dinamica ",
  },
  {
    apellidos: "Quijano Rozo",
    nombres: "Ingri Caterine",
    accion: "Trabajo en equipo",
  },
  {
    apellidos: "Perez",
    nombres: "Ricardo",
    accion: "Entrega de Hub de pagos con calidad y oportunidad base  paar ser el ecositema preferido por los colombianos",
  },
  {
    apellidos: "Tellez García",
    nombres: "Lida Esperanza",
    accion: "Trabajar como un solo equipo entregando un valor diferencial, con el fin de construir soluciones que mejoren la calidad de vida y experiencia de nuestros clientes",
  },
  {
    apellidos: "Romero Chilito",
    nombres: "Sandra Patricia",
    accion: "Interés Genuino en el otro",
  },
  {
    apellidos: "Ladino Vigoya",
    nombres: "Clara Lucía",
    accion: "No importa como amanezca levántate el mundo te necesita para brillar  ",
  },
  {
    apellidos: "Cubillos Cubillos",
    nombres: "Kyra Yiceth",
    accion: "Entregar siempre una sonrisa.",
  },
  {
    apellidos: "Rodriguez Alvarado",
    nombres: "Natali",
    accion: "Mayor sentido de pertenencia y compromiso con la compañia",
  },
  {
    apellidos: "Ramirez",
    nombres: "Maria Fernanda",
    accion: "Dar lo mejor de mi, contagiara todos a mi alrededor, pasión por mis actos ",
  },
  {
    apellidos: "Barreto Novoa",
    nombres: "Yuly Aidive",
    accion:
      "Implementar MUCHAS entidades a los diferentes servicios de ACH Colombia, logrando incrementar  el crecimiento transaccional y buscar alternativas para optimizar tiempos de las implementaciones.",
  },
  {
    apellidos: "Wilches Sierra",
    nombres: "Jose Emiliano",
    accion: "Trabajo en Equipo: Siempre dará los mejores resultados ",
  },
  {
    apellidos: "Velasquez",
    nombres: "Aura Mireya",
    accion: "Motivación y compromiso",
  },
  {
    apellidos: "Castillo Castro",
    nombres: "Edwin Yarin",
    accion:
      "El Efecto Mariposa, va a consistir en desplegar las alas, alzar vuelo alto, aprovechando mi aprendizaje, mi conocimiento para aportar de forma permanente a los factores de gestion de mi area, en aras de mi rol y de mis resposabilidades, generar la apropiacion de mis acciones, comprometerme a crecer de forma continua, incluir capacitacion, compartir y aportar a mi equipo de trabajo, asi garantizo la excelencia operacional y el cumplimiento de nuestra razon de ser como organizacion, la satisfaccion de nuestro clientes, la atraccion de nuevos, mediante la comunicacion entre clientes y nuevos entes que deseen llegar, es asi como entre todos la esencia y la excelencia continuara creciendo y se mantendra vigente",
  },
  {
    apellidos: "Daza",
    nombres: "Sandra Milena",
    accion: "Siendo ejemplo, guía, fortaleciendo el conocimiento y generando experiencias inolvidables.",
  },
  {
    apellidos: "Rengifo",
    nombres: "Alexander",
    accion: "Entregar lo mejor de mi, conocimiento, experiencia en todos los cambios de TI que lleva ACHColombia para ser la mejor empresa de Colombia.",
  },
  {
    apellidos: "Santa Avila",
    nombres: "Edson Jair",
    accion: "Organizar mi puesto de trabajo",
  },
  {
    apellidos: "Lizarazo Farfán",
    nombres: "Ana Milena",
    accion: "El trabajo en equipo es muy importante para lograr el bien común y lograr ser el medio de pago más utilizado por lo colombianos.",
  },
  {
    apellidos: "Chacón Martínez",
    nombres: "Yaqueline",
    accion: "Aportar con calidad",
  },
  {
    apellidos: "Osorio Villamil",
    nombres: "Luis Fernando",
    accion: "Siempre tener la mano extendida para saludar, para apoyar y para levantarnos y aprender  ",
  },
  {
    apellidos: "Deantonio Saénz",
    nombres: "Yesenia",
    accion: "Mejorar la eficiencia de los procesos",
  },
  {
    apellidos: "Diaz Rico",
    nombres: "Cristian Eduardo",
    accion: "Innovación",
  },
  {
    apellidos: "Acosta Zambrano",
    nombres: "German Ignacio",
    accion: "Pensar siempre en el cliente, para que las cosas sean más fáciles y mejorar su experiencia frente a nuestro servicio. ",
  },
  {
    apellidos: "Montes Navas",
    nombres: "Diana Carolina",
    accion:
      "Desde mi rol aportaré mis habilidades y compentencias para crear experiencias inigualables en los clientes que permitan que estos se sientan satisfechos y nos recomienden a más personas para apalancar los objetivos de ingreso, experiencia y calidad",
  },
  {
    apellidos: "Tapiero Álvarez",
    nombres: "Mavet Ximena",
    accion: "Impactar la vida de nuestros colaboradores",
  },
  {
    apellidos: "Madero Araque",
    nombres: "Giovanny De Jesus",
    accion:
      "Pretendo mejorar la comunicación con los demás participantes dentro del grupo y a mejorar mi vocabulario y la forma en que se interactua con el grupo para dar una mejor interpretación de todo lo que se hace al día día. ",
  },
  {
    apellidos: "Abril Ojeda",
    nombres: "Cesar Augusto",
    accion: "Despliegues oportunos para no retardar las pruebas que realiza gestión de desarrollo.",
  },
  {
    apellidos: "Daniel Eduardo",
    nombres: "Pedraza Riaño",
    accion: "Apropiarme del recocimiento de mi compañia en mi labor a mi familia y mi vida social, con la mejor energia y actitud para ser ejemplo en mis compañeros de trabajo.",
  },
  {
    apellidos: "Jimenez",
    nombres: "Cesar Augusto",
    accion: "Cada tarea, cada actividad de hoy será el conjunto de logros y triunfos de mañana ",
  },
  {
    apellidos: "Caballero Ayala",
    nombres: "Cristian Camilo",
    accion: "Disminuir el tiempo de toma de decisiones",
  },
  {
    apellidos: "Castro",
    nombres: "Saúl",
    accion: "TRANSFORMAR LA EXPERIENCIA DE NUESTRO CLIENTE INTERNO Y/O EXTERNO EN TODOS SUS CONTACTOS CON ACH",
  },
  {
    apellidos: "Rico",
    nombres: "Luis Carlos",
    accion: "Escuchar atentamente para dar una respuesta acertada a lo requerido",
  },
  {
    apellidos: "Perdomo",
    nombres: "Liliana María",
    accion: "Contagiar al resto de la compañía generando cambios que impacten en los resultados y metas propuestas ",
  },
  {
    apellidos: "Zamora",
    nombres: "Henry Alexander",
    accion: "Pasión, Compromiso y Asertividad ",
  },
  {
    apellidos: "Cortes",
    nombres: "Candelaria",
    accion:
      "Seguir compartiendo ¿qué es la experiencia del cliente?, ¿por qué es importante?, para facilitar la creación de experiencias memorables a nuestros clientes de parte de todos los colaboradores de la compañía",
  },
  {
    apellidos: "Marín López",
    nombres: "Diana Lorena",
    accion: "Escuchar con amor y disposición",
  },
  {
    apellidos: "Peniche Ospino",
    nombres: "Danis Daniel",
    accion:
      "Desde el cuadro de mando integral para este año, vemos un enfoque al cliente con excelencia operacional, mucha experiencia del cliente con innovación, esto es lo que siento de corazón realizar para la compañía, donde podemos medir ese tiempo pasado actual para reflejar resultados futuros en la experiencia de usuario con ese efecto mariposa.",
  },
  {
    apellidos: "Castiblanco",
    nombres: "Liliana Rocio",
    accion:
      "Como las mariposas esperamos poder adaptarnos a cada unas de las circunstancias para llegar hacer la opción de pagos numero 1 para los colombianos, dando color y vida a las actividades diarias.",
  },
  {
    apellidos: "Pinzon Onzaga",
    nombres: "Piedad Tatiana",
    accion: "Trabajo en equipo estando alineados con el plan estratégico de la compañía.",
  },
  {
    apellidos: "Giraldo",
    nombres: "Luis Alfredo",
    accion: "Alinearse con el plan estrategico de la compañia, entender a los demás, apoyar y generar ideas para el cumplimiento de las metas.",
  },
  {
    apellidos: "Cajamarca",
    nombres: "Liliana Consuelo",
    accion: "Identificando nuevas optimizaciones y cambios en losprocesos que administro para así dar mayor fluidez y aporte para ser la primera opcion de pago de los colombianos",
  },
  {
    apellidos: "Ruiz",
    nombres: "Diego Mauricio",
    accion:
      "Ejecutar mi proceso interactuando empática y eficientemente con otras áreas para lograr el mayor beneficio para nuestros clientes, para mis compañeros y para la compañia en general.",
  },
  {
    apellidos: "Molano",
    nombres: "Claudia Liliana",
    accion: "Abrir la mente y dejar volar la creatividad generando ideas y acciones que construyan",
  },
  {
    apellidos: "Rodriguez Mancipe",
    nombres: "Astrid Alexandra",
    accion: "Disposición al cambio, No esperar que la motivación e inspiración llegue, debemos empezar a buscarla!!!",
  },
  {
    apellidos: "Ardila Castellanos",
    nombres: "Kimberly Pamela",
    accion: "Todos los miembros de la compañía debemos ser parte del cambio; desde mi rol me comprometo a contribuir por medio de los proyectos que estoy liderado",
  },
  {
    apellidos: "Juan Carlos",
    nombres: "Useche Torres",
    accion: "Siempre daré una respuesta amable y actitud confiable para que tu proceso y el mío funcionen muy bien ",
  },
  {
    apellidos: "Camargo Fagua",
    nombres: "Nelcy Johanna",
    accion: "Efecto Mariposa",
  },
  {
    apellidos: "Bautista Delgado",
    nombres: "Alejandro",
    accion: "Proactividad ",
  },
  {
    apellidos: "Corredor",
    nombres: "Oscar Mauricio",
    accion: "El trabajo realizado con pasión nos ayudas a conseguir nuestras metas y obtener mejores resultados. ",
  },
  {
    apellidos: "Jimenez",
    nombres: "Cesar Augusto",
    accion: "Mejorar cada tarea y cada actividad de nuestra operación hoy, para mantener los indicadores de los procesos que se verán reflejada en nuestros clientes.",
  },
  {
    apellidos: "Reyes",
    nombres: "Jorge Enrique",
    accion:
      "Adquirir nuevos conocimientos a fin de plasmarlos en mejoras a los procesos en los cuales desde mi rol son impactados, todo en búsqueda de cumplir con los objetivos propuestos por la compañía.",
  },
  {
    apellidos: "Rios Barreto",
    nombres: "Luis Miguel",
    accion: "Sigue en tu camino! No importa lo despacio que vayas, siempre y cuando no te detengas",
  },
  {
    apellidos: "Gamboa Santamaria",
    nombres: "Nerida Adriana",
    accion:
      "El efecto sucede cuando hay muchas piezas de dominio paradas en el mismo lugar y una persona mueve la primera pieza y esta se empieza a caer a partir de la caída anterior se constituye el efecto Dominio",
  },
  {
    apellidos: "Montoya Londoño",
    nombres: "Melisa",
    accion: "Impactar positivamente al cliente.",
  },
];
