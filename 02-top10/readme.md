## Obtener las palabras mas frecuentes

El objetivo del ejercicio es desarrollar una función que reciba una cadena de texto y retorne un objeto arreglo con 
el top 10 de palabras más utilizadas junto con el número de ocurrencias en orden descendente. Esto se utilzará
para mostrar un componente de una nube de palabras, muy útil para ver rápidamente tendencias en textos o conversaciones.

# Ejemplos de entradas/salidas

1. 'a bb bb ccc ccc ccc' -> [{word:'ccc', count:3}, {word:'bb',count:2}, {word:'a', count:1}]
2. 'hola'-> [{word:'hola', count:1}]
3. 'Hola. Sin puntos.' ->  [{word:'hola', count:1}, {word:'sin',count:1}, {word:'puntos', count:1}]

# Consideraciones

- Todas las palabras tienen solo carácteres de la A a la Z y pueden incluir un solo apóstrofe.
- Debe ignorar cualquier otro caracter que no sean los antes descritos.
- La cadena debe convertirse a minúsculas antres de ser procesadas, por lo que "HOLA" y "hola" son la misma palabra. 
- Si la cadena tiene menos de diez palabras, el arreglo solo debe contener las palabras encontradas.
- Si hay empate en el conteo, ordene por palabra de forma descendente (a->z).
- De preferencia, utiliza ES6 cuando sea posible.




