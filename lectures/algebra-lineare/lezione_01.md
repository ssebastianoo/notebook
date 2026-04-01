# Lezione 1 — Introduzione al corso. Numeri complessi
**Data:** 04/03/2026

---

## 1. Introduzione al corso

Il corso di **Algebra Lineare** si occupa di studiare strutture algebriche fondamentali — spazi vettoriali, trasformazioni lineari e sistemi di equazioni lineari — con applicazioni in matematica, fisica, ingegneria e informatica.

---

## 2. Numeri Complessi

### 2.1 Motivazione

L'insieme dei numeri reali $\mathbb{R}$ non è *algebricamente chiuso*: esistono equazioni polinomiali a coefficienti reali prive di soluzioni reali. L'esempio più semplice è:

$$x^2 + 1 = 0$$

Non esiste alcun $x \in \mathbb{R}$ tale che $x^2 = -1$. Per ovviare a questa limitazione, si **estende** $\mathbb{R}$ introducendo un nuovo elemento $i$ tale che:

$$i^2 = -1$$

Questo porta alla costruzione dell'insieme dei **numeri complessi** $\mathbb{C}$.

> **Teorema Fondamentale dell'Algebra** *(anticipazione)*: ogni polinomio di grado $n \geq 1$ a coefficienti in $\mathbb{C}$ ha esattamente $n$ radici in $\mathbb{C}$ (contate con molteplicità). Dunque $\mathbb{C}$ è algebricamente chiuso.

---

### 2.2 Il piano complesso (piano di Gauss/Argand)

Un numero complesso $z \in \mathbb{C}$ è una coppia ordinata di numeri reali $(a, b) \in \mathbb{R}^2$, che si scrive:

$$z = a + bi, \quad a, b \in \mathbb{R}$$

dove:
- $a = \operatorname{Re}(z)$ è la **parte reale**
- $b = \operatorname{Im}(z)$ è la **parte immaginaria**
- $i$ è l'**unità immaginaria**, con $i^2 = -1$

Si rappresenta $z$ come un punto (o vettore) nel **piano complesso**:
- l'asse orizzontale è l'**asse reale**
- l'asse verticale è l'**asse immaginario**

```
        Im
         |
     b • - - - - z = a + bi
         |      /
         |     /
         |    /  |z|
         |   /
         |  /
         | / θ
 --------+----------→ Re
         |     a
```

**Casi particolari:**
| Condizione | Tipo di numero |
|---|---|
| $b = 0$ | numero reale: $z = a \in \mathbb{R}$ |
| $a = 0,\ b \neq 0$ | numero immaginario puro: $z = bi$ |
| $a = 0,\ b = 1$ | unità immaginaria: $z = i$ |

---

### 2.3 Operazioni di somma e prodotto

#### Somma

Dati $z_1 = a_1 + b_1 i$ e $z_2 = a_2 + b_2 i$:

$$z_1 + z_2 = (a_1 + a_2) + (b_1 + b_2)i$$

La somma si effettua **componente per componente**, esattamente come la somma di vettori in $\mathbb{R}^2$.

**Proprietà della somma:**
- *Commutatività:* $z_1 + z_2 = z_2 + z_1$
- *Associatività:* $(z_1 + z_2) + z_3 = z_1 + (z_2 + z_3)$
- *Elemento neutro:* $z + 0 = z$, con $0 = 0 + 0i$
- *Opposto:* $z + (-z) = 0$, con $-z = -a - bi$

#### Prodotto

$$z_1 \cdot z_2 = (a_1 + b_1 i)(a_2 + b_2 i) = (a_1 a_2 - b_1 b_2) + (a_1 b_2 + a_2 b_1)i$$

Si ottiene **distribuendo** il prodotto e usando $i^2 = -1$.

**Proprietà del prodotto:**
- *Commutatività:* $z_1 \cdot z_2 = z_2 \cdot z_1$
- *Associatività:* $(z_1 \cdot z_2) \cdot z_3 = z_1 \cdot (z_2 \cdot z_3)$
- *Elemento neutro:* $z \cdot 1 = z$, con $1 = 1 + 0i$
- *Distributività:* $z_1(z_2 + z_3) = z_1 z_2 + z_1 z_3$
- *Inverso (per $z \neq 0$):* esiste $z^{-1}$ tale che $z \cdot z^{-1} = 1$

---

### 2.4 Rappresentazione algebrica

#### Coniugato

Il **coniugato** di $z = a + bi$ è:

$$\bar{z} = a - bi$$

Geometricamente, $\bar{z}$ è la riflessione di $z$ rispetto all'asse reale.

**Proprietà del coniugato:**
- $\overline{z_1 + z_2} = \bar{z}_1 + \bar{z}_2$
- $\overline{z_1 \cdot z_2} = \bar{z}_1 \cdot \bar{z}_2$
- $z \cdot \bar{z} = a^2 + b^2 \in \mathbb{R}_{\geq 0}$
- $z + \bar{z} = 2a = 2\operatorname{Re}(z)$
- $z - \bar{z} = 2bi = 2i\operatorname{Im}(z)$

#### Modulo

Il **modulo** di $z = a + bi$ è:

$$|z| = \sqrt{a^2 + b^2} = \sqrt{z \cdot \bar{z}} \geq 0$$

Rappresenta la **distanza** del punto $z$ dall'origine nel piano complesso.

**Proprietà del modulo:**
- $|z| = 0 \iff z = 0$
- $|z_1 \cdot z_2| = |z_1| \cdot |z_2|$
- $|z_1 + z_2| \leq |z_1| + |z_2|$ *(disuguaglianza triangolare)*

#### Inverso moltiplicativo

Per $z = a + bi \neq 0$:

$$z^{-1} = \frac{1}{z} = \frac{\bar{z}}{z \cdot \bar{z}} = \frac{a - bi}{a^2 + b^2} = \frac{a}{a^2+b^2} - \frac{b}{a^2+b^2}\,i$$

#### Divisione

$$\frac{z_1}{z_2} = z_1 \cdot z_2^{-1} = \frac{z_1 \bar{z}_2}{|z_2|^2}$$

---

## Riepilogo

| Concetto | Formula / Definizione |
|---|---|
| Numero complesso | $z = a + bi,\quad a,b \in \mathbb{R},\quad i^2=-1$ |
| Parte reale | $\operatorname{Re}(z) = a$ |
| Parte immaginaria | $\operatorname{Im}(z) = b$ |
| Coniugato | $\bar{z} = a - bi$ |
| Modulo | $|z| = \sqrt{a^2+b^2}$ |
| Somma | $(a_1+b_1 i)+(a_2+b_2 i) = (a_1+a_2)+(b_1+b_2)i$ |
| Prodotto | $(a_1+b_1 i)(a_2+b_2 i) = (a_1a_2-b_1b_2)+(a_1b_2+a_2b_1)i$ |
| Inverso | $z^{-1} = \dfrac{\bar{z}}{|z|^2}$ |

---

*Prossima lezione: Forma polare/trigonometrica, esponenziale complesso, potenze.*
