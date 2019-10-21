# Sección Dorada en JavaScript 🔥
Método de optimización de una función matemática mediante la _**Sección Dorada**_ programado en _JavaScript_

# Usabilidad 👌🏻
Este ejemplo realiza la busqueda para hallar el extremo máximo mediante reducciones sucesivas del rango de valores dadas las siguientes condiciones:

$$f(x)=-1.5x^{6}-2x^{4}+12x$$
> **Intervalo** 👉🏻 [0,2] \
> **Error:** 1% 

### La ecuación se puede alterar en el siguiente tramo de código:
```javascript
function fun(x) {
	return (-1.5 * (Math.pow(x, 6)) - 2 * (Math.pow(x, 4)) + 12*(x)).toFixed(4);
}
```
### Modificación del intervalo:
```javascript
var intervalos = [0,2];
```
### Modificación del error:
```javascript
var errorMin = 1/100;
```

## CRÉDITOS ⚡️
- [Simón Bustamante Alzate](https://instagram.com/simonba97) - 19 de Octubre del 2019


## LICENCIA ⚠
[MIT](https://opensource.org/licenses/MIT)