# Lexer for Python

Nombre: Bruno Avendaño Toledo
Matrícula: A01784613

# Reporte de Reflexión

## Reflexión sobre la Solución y Algoritmos Implementados

La solución que implementé para el análisis léxico de archivos Python involucra el uso de expresiones regulares y el lenguaje de programación Elixir. Estos algoritmos fueron efectivos en identificar y clasificar los diferentes tokens presentes en el código Python.

Durante el desarrollo de la solución, me enfrenté a varios desafíos, como la definición de las expresiones regulares para cada tipo de token y la manipulación de archivos en Elixir. Sin embargo, pude superar estos desafíos mediante la revisión de la documentación de Elixir y la realización de pruebas exhaustivas.

El tiempo de ejecución de estos algoritmos depende del tamaño del archivo de entrada, lo cual es aceptable dada la complejidad del problema que se está resolviendo. Este tiempo de ejecución podría mejorarse mediante la optimización de las expresiones regulares y la utilización de técnicas de procesamiento paralelo.

## Complejidad del Algoritmo

La complejidad de mi algoritmo, basada en el número de iteraciones, es O(n), donde n es el número de líneas en el archivo de entrada. Esto se alinea con el tiempo de ejecución observado, ya que a medida que aumenta el número de líneas, también lo hace el tiempo de ejecución.

Es importante notar que la complejidad del algoritmo no siempre se traduce directamente en el tiempo de ejecución. Factores como la eficiencia del hardware, la optimización del compilador y la carga del sistema también pueden afectar el tiempo de ejecución.

## Reflexión Ética

Es importante considerar las implicaciones éticas de la tecnología que desarrollé. Aunque esta tecnología tiene el potencial de facilitar el análisis de código Python, también podría ser utilizada para fines malintencionados, como el plagio de código.

Por ejemplo, si la tecnología se utiliza de manera inapropiada, podría facilitar la copia de código sin el debido reconocimiento a los autores originales. Por otro lado, si se utiliza correctamente, tiene el potencial de ayudar a los programadores a entender y depurar código Python de manera más eficiente.

Es crucial que continuemos desarrollando esta tecnología de manera responsable, teniendo en cuenta tanto sus beneficios potenciales como sus posibles riesgos. Esto incluye la implementación de salvaguardas adecuadas, la educación de los usuarios sobre el uso correcto y ético de la tecnología, y la disposición a adaptar y mejorar la tecnología a medida que surgen nuevos desafíos y oportunidades.

# Instructivo del Programa

El programa `lexer` es un analizador léxico para archivos Python implementado en Elixir. El programa toma como entrada un archivo Python y genera un archivo HTML con los tokens identificados y clasificados.

El programa define una serie de patrones de expresiones regulares para cada tipo de token en Python, como palabras clave, identificadores, números, operadores, etc. Luego, el programa lee el archivo de entrada línea por línea y aplica las expresiones regulares para identificar y clasificar los tokens.

Una vez que todos los tokens han sido identificados, el programa genera un archivo HTML con los tokens resaltados de acuerdo a su tipo. Cada token se envuelve en un elemento `span` con una clase CSS correspondiente a su tipo, lo que permite resaltar los tokens de diferentes colores en el navegador.

Para ejecutar el programa, simplemente pasa el nombre del archivo Python de entrada y el nombre del archivo .txt del cual deseas dar el formato. Por ejemplo:

elixir lexer.exs test.txt
