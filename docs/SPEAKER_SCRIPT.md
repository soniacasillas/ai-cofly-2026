# Guion completo de la presentación

Target oral duration: **17–18 minutes**.

The text below is the agreed Spanish script. It can be split into Reveal.js speaker notes slide by slide.

---

## Diapositiva 1 — ¿Puede una máquina aprender a leer la vida?

Buenos días.

El título de esta charla es *Cómo la inteligencia artificial está aprendiendo el lenguaje de la vida*.

Y me gustaría empezar precisamente con una pregunta:

**¿Puede una máquina aprender a leer la vida?**

Porque, de alguna manera, eso es lo que estamos intentando hacer.

Cuando pensamos en inteligencia artificial solemos pensar en ChatGPT, en herramientas que generan imágenes, en coches autónomos...

Pero la inteligencia artificial también está entrando con enorme fuerza en la biología.

Y no sólo para hacer las cosas más rápido.

Está empezando a ayudarnos a responder preguntas que, hasta hace muy poco, parecían extraordinariamente difíciles.

Hoy os quiero enseñar algunos ejemplos, haciendo un pequeño viaje...

**desde las moléculas hasta los ecosistemas.**

---

## Diapositiva 2 — La vida está llena de información

Una de las razones por las que la inteligencia artificial puede ser tan útil en biología es que...

**la vida está llena de información.**

Nuestro DNA, por ejemplo, está escrito con un alfabeto extraordinariamente sencillo: sólo cuatro letras.

A, C, G y T.

Una proteína también puede representarse como una secuencia, en este caso formada por veinte tipos distintos de aminoácidos.

Pero tenemos muchos otros tipos de información biológica.

La imagen de un tejido vista al microscopio.

La forma tridimensional de una proteína.

La estructura química de una molécula.

El canto de un pájaro.

Una fotografía captada por una cámara en medio de un bosque.

Son datos muy distintos entre sí.

Pero todos contienen **patrones**.

Y precisamente una de las cosas que los sistemas actuales de inteligencia artificial hacen especialmente bien es aprender patrones cuando les proporcionamos enormes cantidades de datos.

Esto no significa que una IA “entienda” una célula, una proteína o un ecosistema como los entiende un biólogo.

Pero puede descubrir regularidades que a nosotros nos costaría muchísimo encontrar.

---

## Diapositiva 3 — Cinco cosas que la IA está aprendiendo a hacer

Si intentáramos resumir las aplicaciones actuales de la inteligencia artificial en las biociencias, podríamos utilizar cinco verbos.

**Reconocer.**

**Predecir.**

**Buscar.**

**Diseñar.**

Y **monitorizar**.

Reconocer patrones en una imagen.

Predecir qué forma tendrá una proteína o qué efecto puede tener una mutación.

Buscar una molécula interesante entre millones de candidatos.

Diseñar moléculas o proteínas que nunca han existido.

Y monitorizar lo que está ocurriendo en un ecosistema.

Vamos a ver algunos ejemplos.

Y después volveremos a estos cinco verbos.

---

## Diapositiva 4 — PREDECIR: de una secuencia a una máquina molecular

Empecemos por las proteínas.

Una proteína puede representarse simplemente como una larga secuencia de letras, cada una correspondiente a un aminoácido.

Pero una proteína no funciona como una cadena estirada.

Se pliega.

Y adquiere una estructura tridimensional muy concreta.

Esta forma es fundamental porque determina, en gran medida, qué puede hacer la proteína.

Durante décadas, uno de los grandes retos de la biología estructural ha sido precisamente éste:

**si conozco la secuencia de aminoácidos, ¿puedo saber qué forma tridimensional tendrá la proteína?**

Aquí apareció AlphaFold.

AlphaFold aprendió a predecir la estructura tridimensional de una proteína a partir de su secuencia con una precisión que supuso un cambio enorme para el campo.

Y hoy disponemos de predicciones estructurales para más de 200 millones de proteínas.

Pensad un momento en la escala.

No estamos hablando de estudiar una proteína.

Ni mil.

Estamos hablando de poder explorar una parte enorme del universo conocido de proteínas.

Y los modelos más recientes, como AlphaFold 3, van todavía más allá.

Ya no intentan representar únicamente una proteína aislada.

Pueden modelar cómo interactúa con otras proteínas, con DNA, con RNA o con pequeñas moléculas.

Es decir:

pasamos de una secuencia de letras...

a una posible **máquina molecular en tres dimensiones**.

[PAUSA]

Pero aquí sucede algo todavía más interesante.

La inteligencia artificial no sólo está aprendiendo a **predecir** proteínas.

También está empezando a **diseñarlas**.

---

## Diapositiva 5 — DISEÑAR: proteínas que todavía no existen

Con sistemas como RFdiffusion podemos generar estructuras proteicas que no conocemos en la naturaleza y después intentar comprobar experimentalmente si funcionan.

Es un cambio conceptual enorme.

Pasamos de preguntarnos:

**“¿Cómo es esta proteína?”**

a preguntarnos:

**“¿Qué proteína necesitaría para conseguir esta función?”**

---

## Diapositiva 6 — RECONOCER: ¿qué ve la IA en esta imagen?

Ahora cambiemos completamente de escala.

[Mostrar imagen histológica.]

¿Qué veis aquí?

Probablemente para la mayoría de nosotros esto es simplemente un conjunto bastante caótico de manchas rosas y violetas.

Y es normal.

Porque interpretar correctamente una imagen histológica requiere años de formación.

Un patólogo aprende a reconocer la organización de los tejidos, la forma de las células, de los núcleos...

y patrones que pueden indicar la presencia de un tumor.

Pues bien.

La inteligencia artificial también puede aprender esos patrones.

Si entrenamos un modelo con cantidades enormes de imágenes previamente caracterizadas, puede aprender qué características visuales se asocian con distintos tipos de tejido o con determinadas patologías.

Actualmente existen modelos llamados *foundation models* de patología digital, como Virchow, que se entrenan con enormes colecciones de imágenes histológicas y después pueden aplicarse a distintas tareas.

Por ejemplo, ayudar a detectar diferentes tipos de cáncer.

Incluso algunos poco frecuentes.

Y aquí hay una idea que me parece importante.

La inteligencia artificial no tiene por qué estar “viendo un tumor” exactamente como lo ve un médico.

Está reconociendo combinaciones de características de la imagen que estadísticamente están asociadas con él.

Por eso estos sistemas pueden ser extraordinariamente útiles...

pero no eliminan la necesidad del especialista.

Son herramientas que pueden ayudar a encontrar patrones, priorizar casos o proporcionar información adicional.

---

## Diapositiva 7 — PREDECIR: ¿qué ocurre si cambio una sola letra?

Volvamos ahora al DNA.

Hemos dicho que el genoma humano está escrito con cuatro letras.

Y hace ya más de veinte años que disponemos de una primera secuencia de referencia del genoma humano.

Pero hay una diferencia enorme entre...

**leer las letras**

y

**entender lo que significan.**

Imaginad una palabra.

CASA.

Si cambio una sola letra:

COSA.

Sólo he modificado una letra, pero he cambiado el significado.

En un genoma sucede algo parecido.

Una diferencia de una sola base puede no tener ninguna consecuencia...

o puede modificar la función de un gen...

o alterar cuándo se activa...

en qué tejido...

o cuánto se expresa.

Y además, gran parte de nuestro genoma ni siquiera codifica directamente proteínas.

Contiene elementos reguladores que controlan cuándo y dónde funcionan los genes.

Aquí entran modelos como **AlphaGenome**.

AlphaGenome puede analizar regiones de hasta aproximadamente un millón de bases de DNA e intentar predecir cómo una modificación de la secuencia puede afectar distintos procesos moleculares.

Por ejemplo:

la expresión de un gen,

el *splicing*,

la accesibilidad de la cromatina,

o la unión de determinadas proteínas al DNA.

Es decir, intentamos pasar de:

**“Aquí hay una mutación”**

a

**“¿Qué consecuencias moleculares podría tener esta mutación?”**

---

## Diapositiva 8 — 9.000 millones

Y hace sólo unos días se presentó AlphaGenome Atlas.

Un mapa con predicciones para aproximadamente...

[Hacer aparecer el número.]

**9.000 millones**

de posibles cambios de una sola letra del genoma humano.

Nueve mil millones.

Evidentemente, nadie puede comprobar experimentalmente nueve mil millones de mutaciones.

Y aquí empezamos a ver una de las claves de toda esta historia.

---

## Diapositiva 9 — BUSCAR: encontrar una aguja en un pajar químico

Pasemos ahora a los medicamentos.

Imaginad que estamos buscando un nuevo antibiótico.

Podemos disponer de bibliotecas con millones de moléculas químicas.

Pero probar experimentalmente cada una de ellas sería carísimo y lentísimo.

Así que podemos hacer algo distinto.

Enseñar a un modelo qué características presentan moléculas que sí tienen actividad antibacteriana...

y pedirle que busque candidatos prometedores entre muchas otras.

Uno de los ejemplos más conocidos es la **halicina**.

Un sistema de inteligencia artificial analizó grandes colecciones de moléculas y señaló como potencial antibiótico una molécula que inicialmente había sido investigada para otra finalidad.

Los investigadores probaron después esa predicción experimentalmente...

y descubrieron que efectivamente tenía una potente actividad antibacteriana.

Pero fijaos en la secuencia.

La inteligencia artificial **no creó mágicamente un medicamento**.

Hizo algo mucho más concreto.

Ayudó a responder:

**“Entre todos estos millones de candidatos, ¿cuáles merecen que dediquemos tiempo y dinero a probarlos?”**

Y eso puede cambiar completamente la manera de buscar nuevos fármacos.

---

## Diapositiva 10 — MONITORIZAR: escuchar un ecosistema

Y podemos alejarnos todavía más.

Hasta llegar a un ecosistema.

Imaginad que queremos saber qué especies viven en un bosque y cómo cambia esa comunidad a lo largo del tiempo.

Tradicionalmente necesitaríamos observadores expertos haciendo muestreos continuamente.

Pero podemos instalar grabadoras automáticas.

Y grabar.

Durante horas.

Días.

Meses.

El problema es que entonces tenemos miles de horas de audio que alguien tendría que escuchar.

Aquí puede intervenir nuevamente la inteligencia artificial.

Herramientas como **BirdNET** transforman los sonidos en espectrogramas y aprenden a reconocer patrones asociados con el canto de diferentes especies.

Así podemos convertir enormes cantidades de audio en datos sobre qué especies aparecen, dónde y cuándo.

Y algo parecido puede hacerse con imágenes de cámaras trampa, fotografías aéreas, imágenes de satélite...

o, como veremos precisamente durante estas jornadas, con sistemas automáticos para detectar y monitorizar insectos.

Pasamos así de las moléculas...

a los ecosistemas.

---

## Diapositiva 11 — ¿Qué tienen todos estos ejemplos en común?

Ahora me gustaría volver a los ejemplos que hemos visto.

AlphaFold.

AlphaGenome.

Diagnóstico por imagen.

Descubrimiento de antibióticos.

Monitorización de biodiversidad.

Pueden parecer problemas completamente diferentes.

Pero todos tienen algo en común.

[Hacer aparecer cifras.]

Más de **200 millones de proteínas**.

Alrededor de **9.000 millones de posibles mutaciones** de una sola base.

Millones de moléculas químicas.

Millones de imágenes.

Miles y miles de horas de grabaciones.

Nuestro problema ya no es únicamente conseguir datos.

Muchas veces tenemos **demasiados datos**.

O tenemos un número inmenso de posibilidades.

Y no podemos explorarlas todas experimentalmente.

Por eso creo que una de las mejores formas de entender por qué la inteligencia artificial está teniendo tanto impacto en biología es ésta:

**nos permite explorar espacios de posibilidades que antes eran inabarcables.**

No podemos probar todas las proteínas posibles.

No podemos estudiar experimentalmente todas las mutaciones posibles.

No podemos ensayar todas las moléculas posibles.

No podemos escuchar manualmente todos los sonidos de todos los bosques.

La inteligencia artificial nos ayuda a decidir...

**dónde vale la pena mirar primero.**

---

## Diapositiva 12 — Una predicción no es una verdad

Pero esto nos lleva también a una advertencia fundamental.

Una predicción...

**no es una verdad.**

Un modelo puede equivocarse.

Puede haber aprendido sesgos presentes en los datos.

Puede funcionar muy bien con determinadas muestras y mucho peor con otras.

Por eso la secuencia correcta no es:

datos → inteligencia artificial → respuesta.

La secuencia científica es:

**datos → inteligencia artificial → predicción → experimento u observación.**

Y después...

nuevos datos.

AlphaFold puede proponernos una estructura.

Pero podemos querer verificarla experimentalmente.

AlphaGenome puede señalar que una mutación parece importante.

Pero eso no significa automáticamente que provoque una enfermedad.

Un modelo puede seleccionar una molécula candidata.

Pero esa molécula tendrá que probarse en células, en modelos animales y, eventualmente, en ensayos clínicos.

BirdNET puede decirnos que ha detectado una especie.

Pero también puede equivocarse.

Por tanto, la inteligencia artificial no sustituye al método científico.

Forma parte de él.

Nos permite generar hipótesis y seleccionar las preguntas más prometedoras.

Y después seguimos necesitando experimentos, observaciones...

y personas que entiendan la biología.

---

## Diapositiva 13 — De las moléculas a los ecosistemas

Así que volvamos a nuestros cinco verbos.

La inteligencia artificial está aprendiendo a...

**RECONOCER**

patrones en imágenes, células o tejidos.

**PREDECIR**

estructuras de proteínas o efectos de mutaciones.

**BUSCAR**

moléculas interesantes entre millones de candidatos.

**DISEÑAR**

proteínas o moléculas que quizá nunca han existido.

Y **MONITORIZAR**

animales, poblaciones y ecosistemas.

Todo esto está ocurriendo ahora.

Pero probablemente estamos todavía al principio.

Porque cuanto más aprendemos sobre la biología...

más evidente se hace su enorme complejidad.

Y quizá el verdadero potencial de estas herramientas no sea que una máquina llegue a “entender la vida” por nosotros.

Sino que nos permita hacer preguntas que hasta ahora ni siquiera podíamos plantearnos.

[PAUSA]

Y por eso me gustaría terminar volviendo a la pregunta del principio.

**¿Puede una máquina aprender el lenguaje de la vida?**

Quizá todavía no sepamos hasta dónde llegará.

Pero ya está empezando a ayudarnos a leer algunas de sus palabras...

algunas de sus frases...

y, quizá, poco a poco...

algunas de sus reglas.

Y muchos de los que estáis hoy aquí estudiaréis biología, medicina, bioinformática, ingeniería o disciplinas que todavía ni siquiera existen.

Así que seguramente seréis vosotros quienes descubramos hasta dónde podemos llegar.

Muchas gracias.
