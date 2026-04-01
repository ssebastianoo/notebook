# Lezione 3 — Radici di un numero complesso; Equazioni complesse; Introduzione agli spazi vettoriali
**Data:** 11/03/2026

---

## 1. Radici $n$-esime di un numero complesso

### 1.1 Definizione

Dato $w \in \mathbb{C}$ e $n \in \mathbb{N}$, $n \geq 1$, una **radice $n$-esima** di $w$ è un numero $z \in \mathbb{C}$ tale che:

$$z^n = w$$

### 1.2 Formula per le radici

Sia $w = \rho\,e^{i\varphi}$ (con $\rho = |w|$, $\varphi = \arg(w)$). Le radici $n$-esime di $w$ sono esattamente **$n$ numeri distinti**:

$$\boxed{z_k = \sqrt[n]{\rho}\,\exp\!\left(i\,\frac{\varphi + 2\pi k}{n}\right), \quad k = 0, 1, \ldots, n-1}$$

cioè:

$$z_k = \sqrt[n]{\rho}\left(\cos\frac{\varphi+2\pi k}{n} + i\sin\frac{\varphi+2\pi k}{n}\right)$$

**Osservazioni geometriche:**
- Le $n$ radici hanno tutte lo stesso modulo $\sqrt[n]{\rho}$.
- Sono i **vertici di un poligono regolare** di $n$ lati inscritto nella circonferenza di raggio $\sqrt[n]{\rho}$.
- Sono equidistanti angolarmente, separate da $\frac{2\pi}{n}$.

### 1.3 Radici $n$-esime dell'unità

Il caso $w = 1$ (cioè $\rho = 1$, $\varphi = 0$) è particolarmente importante:

$$\omega_k = e^{i\,\frac{2\pi k}{n}} = \cos\frac{2\pi k}{n} + i\sin\frac{2\pi k}{n}, \quad k = 0,1,\ldots,n-1$$

Si chiama $\omega = e^{i\,2\pi/n}$ la **radice primitiva $n$-esima dell'unità**: tutte le altre radici sono sue potenze $\omega^k$.

**Esempio ($n=4$):** Le radici quarte dell'unità sono:
$$z_0 = 1,\quad z_1 = i,\quad z_2 = -1,\quad z_3 = -i$$

### 1.4 Esempio

Calcolare le radici cubiche di $-8$.

- $w = -8 = 8\,e^{i\pi}$, quindi $\rho = 8$, $\varphi = \pi$.
- $\sqrt[3]{8} = 2$.

$$z_k = 2\,e^{i\,\frac{\pi + 2\pi k}{3}}, \quad k = 0,1,2$$

$$z_0 = 2e^{i\pi/3} = 2\!\left(\frac{1}{2}+i\frac{\sqrt{3}}{2}\right) = 1 + i\sqrt{3}$$
$$z_1 = 2e^{i\pi} = -2$$
$$z_2 = 2e^{i5\pi/3} = 2\!\left(\frac{1}{2}-i\frac{\sqrt{3}}{2}\right) = 1 - i\sqrt{3}$$

---

## 2. Soluzioni di equazioni a variabile complessa

### 2.1 Equazioni polinomiali

Il **Teorema Fondamentale dell'Algebra** garantisce che ogni polinomio di grado $n \geq 1$ a coefficienti complessi ha esattamente $n$ radici in $\mathbb{C}$ (con molteplicità).

**Esempio.** Risolvere $z^2 + 2z + 5 = 0$.

$$z = \frac{-2 \pm \sqrt{4 - 20}}{2} = \frac{-2 \pm \sqrt{-16}}{2} = \frac{-2 \pm 4i}{2} = -1 \pm 2i$$

Le soluzioni sono $z_1 = -1 + 2i$ e $z_2 = -1 - 2i$ (coniugate tra loro, come sempre per polinomi a coefficienti reali).

> **Proprietà:** Se $p$ ha coefficienti **reali** e $z_0$ è radice, allora anche $\bar{z}_0$ è radice.

### 2.2 Equazioni del tipo $z^n = w$

Risolte con la formula delle radici $n$-esime vista sopra.

### 2.3 Equazioni con esponenziale

**Esempio.** Risolvere $e^z = -3$.

Poniamo $z = x + iy$:

$$e^{x+iy} = e^x e^{iy} = -3 = 3e^{i(\pi + 2k\pi)}$$

Confrontando modulo e argomento:

$$e^x = 3 \implies x = \ln 3, \qquad y = \pi + 2k\pi,\; k \in \mathbb{Z}$$

Soluzione: $z = \ln 3 + i(\pi + 2k\pi)$, $k \in \mathbb{Z}$.

---

## 3. Introduzione agli spazi vettoriali: prime definizioni

### 3.1 Motivazione

In matematica si incontrano spesso insiemi di oggetti (vettori geometrici, polinomi, funzioni, matrici, $n$-uple di numeri) su cui si possono fare due operazioni naturali:
1. **Sommare** due elementi dell'insieme
2. **Moltiplicare** un elemento per uno scalare (numero reale o complesso)

L'idea degli **spazi vettoriali** è astrarre queste proprietà in un'unica struttura algebrica.

### 3.2 Campo degli scalari

Gli scalari appartengono a un **campo** $\mathbb{K}$, che nel corso sarà:
- $\mathbb{K} = \mathbb{R}$ (numeri reali), oppure
- $\mathbb{K} = \mathbb{C}$ (numeri complessi)

### 3.3 Prime definizioni operative

**Vettore** è un elemento generico di un insieme $V$ su cui sono definite:

- **Somma:** un'operazione $+: V \times V \to V$ che associa a due elementi $u, v \in V$ un terzo elemento $u + v \in V$.
- **Moltiplicazione per scalare:** un'operazione $\cdot: \mathbb{K} \times V \to V$ che associa a uno scalare $\lambda \in \mathbb{K}$ e a un vettore $v \in V$ un elemento $\lambda \cdot v \in V$.

Il termine *vettore* non si riferisce necessariamente a frecce nello spazio: può essere qualunque oggetto di $V$.

### 3.4 Esempi prototipici

| Insieme $V$ | Scalari $\mathbb{K}$ | Somma | Prodotto per scalare |
|---|---|---|---|
| $\mathbb{R}^n$ | $\mathbb{R}$ | $(x_1,\ldots,x_n)+(y_1,\ldots,y_n) = (x_1+y_1,\ldots)$ | $\lambda(x_1,\ldots,x_n) = (\lambda x_1,\ldots)$ |
| $\mathbb{C}^n$ | $\mathbb{C}$ | componente per componente | componente per componente |
| $\mathbb{R}[x]_{\leq n}$ | $\mathbb{R}$ | somma di polinomi | $\lambda \cdot p(x)$ |
| $M_{m\times n}(\mathbb{R})$ | $\mathbb{R}$ | somma di matrici | $\lambda \cdot A$ |

La definizione assiomatica precisa (con tutte le proprietà richieste) sarà data nella prossima lezione.

---

## Riepilogo

| Argomento | Risultato chiave |
|---|---|
| Radici $n$-esime di $w = \rho e^{i\varphi}$ | $z_k = \sqrt[n]{\rho}\,e^{i(\varphi+2\pi k)/n}$, $k=0,\ldots,n-1$ |
| Radici dell'unità | $\omega_k = e^{i2\pi k/n}$, poligono regolare |
| TF dell'Algebra | ogni $p$ di grado $n$ ha esattamente $n$ radici in $\mathbb{C}$ |
| Spazio vettoriale (idea) | insieme con somma e prodotto per scalare |

---

*Prossima lezione: Proprietà delle operazioni; Introduzione ai sistemi lineari; Definizione assiomatica di spazio vettoriale.*
