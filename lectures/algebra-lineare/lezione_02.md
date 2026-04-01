# Lezione 2 — Forma polare/trigonometrica, Esponenziale complesso, Potenze
**Data:** 06/03/2026

---

## 1. Forma polare (trigonometrica)

Ogni numero complesso $z \neq 0$ può essere rappresentato in **forma polare** usando il suo modulo $r = |z|$ e l'angolo $\theta$ che il vettore $z$ forma con l'asse reale positivo.

### 1.1 Argomento di un numero complesso

L'**argomento** (o **anomalia**) di $z = a + bi \neq 0$ è l'angolo $\theta \in [0, 2\pi)$ (oppure $(-\pi, \pi]$ a seconda della convenzione) tale che:

$$\cos\theta = \frac{a}{|z|}, \qquad \sin\theta = \frac{b}{|z|}$$

Si scrive $\theta = \arg(z)$. L'argomento è determinato **a meno di multipli di $2\pi$**:

$$\arg(z) = \theta + 2k\pi, \quad k \in \mathbb{Z}$$

### 1.2 Rappresentazione trigonometrica

Dalla definizione di argomento:

$$z = |z|(\cos\theta + i\sin\theta) = r(\cos\theta + i\sin\theta)$$

dove $r = |z| \geq 0$ e $\theta = \arg(z)$.

```
        Im
         |
     b • - - - - z
         |      /
         |     /  r = |z|
         |    /
         |   /
         |  / θ
 --------+----------→ Re
              a
    a = r cosθ,  b = r sinθ
```

**Casi notevoli:**

| $z$ | $r$ | $\theta$ |
|---|---|---|
| $1$ | $1$ | $0$ |
| $-1$ | $1$ | $\pi$ |
| $i$ | $1$ | $\pi/2$ |
| $-i$ | $1$ | $3\pi/2$ |
| $1+i$ | $\sqrt{2}$ | $\pi/4$ |

### 1.3 Prodotto in forma polare

Se $z_1 = r_1(\cos\theta_1 + i\sin\theta_1)$ e $z_2 = r_2(\cos\theta_2 + i\sin\theta_2)$, allora:

$$z_1 \cdot z_2 = r_1 r_2\bigl[\cos(\theta_1+\theta_2) + i\sin(\theta_1+\theta_2)\bigr]$$

> **Regola:** il prodotto **moltiplica i moduli** e **somma gli argomenti**.

---

## 2. Esponenziale complesso

### 2.1 Formula di Eulero

Si definisce l'**esponenziale complesso** tramite la formula di Eulero:

$$e^{i\theta} = \cos\theta + i\sin\theta, \quad \theta \in \mathbb{R}$$

Questa definizione è motivata dall'accordo con lo sviluppo in serie di Taylor di $e^x$, $\cos x$ e $\sin x$.

**Conseguenze immediate:**
- $e^{i\pi} + 1 = 0$ *(identità di Eulero)*
- $|e^{i\theta}| = 1$ per ogni $\theta \in \mathbb{R}$
- $e^{i\cdot 0} = 1$, $\quad e^{i\pi/2} = i$, $\quad e^{i\pi} = -1$, $\quad e^{i3\pi/2} = -i$

### 2.2 Forma esponenziale di un numero complesso

Combinando con la forma polare, ogni $z \neq 0$ si scrive:

$$\boxed{z = r\,e^{i\theta}, \quad r = |z| > 0, \quad \theta = \arg(z)}$$

**Proprietà dell'esponenziale complesso:**

| Proprietà | Formula |
|---|---|
| Prodotto | $e^{i\theta_1} \cdot e^{i\theta_2} = e^{i(\theta_1+\theta_2)}$ |
| Coniugato | $\overline{e^{i\theta}} = e^{-i\theta}$ |
| Inverso | $(e^{i\theta})^{-1} = e^{-i\theta}$ |
| Periodicità | $e^{i(\theta+2\pi)} = e^{i\theta}$ |

### 2.3 Formule di Eulero inverse

$$\cos\theta = \frac{e^{i\theta} + e^{-i\theta}}{2}, \qquad \sin\theta = \frac{e^{i\theta} - e^{-i\theta}}{2i}$$

---

## 3. Potenze di un numero complesso

### 3.1 Formula di De Moivre

Per $z = r\,e^{i\theta}$ e $n \in \mathbb{Z}$:

$$z^n = r^n e^{in\theta} = r^n(\cos(n\theta) + i\sin(n\theta))$$

**Dimostrazione (caso $n \geq 0$):** per induzione, usando la regola del prodotto in forma polare.

> **Formula di De Moivre:** $(\cos\theta + i\sin\theta)^n = \cos(n\theta) + i\sin(n\theta)$

### 3.2 Esempi

**Esempio 1.** Calcolare $(1+i)^8$.

- $|1+i| = \sqrt{2}$, $\arg(1+i) = \pi/4$
- $(1+i)^8 = (\sqrt{2})^8 \cdot e^{i \cdot 8 \cdot \pi/4} = 2^4 \cdot e^{i2\pi} = 16 \cdot 1 = 16$

**Esempio 2.** Esprimere $\cos(3\theta)$ in termini di $\cos\theta$.

Dalla formula di De Moivre con $n=3$:

$$\cos(3\theta) + i\sin(3\theta) = (\cos\theta + i\sin\theta)^3$$

Sviluppando con il binomio di Newton e separando parte reale e immaginaria:

$$\cos(3\theta) = \cos^3\theta - 3\cos\theta\sin^2\theta = 4\cos^3\theta - 3\cos\theta$$

### 3.3 Potenze di $i$

| $n$ | $i^n$ |
|---|---|
| $0$ | $1$ |
| $1$ | $i$ |
| $2$ | $-1$ |
| $3$ | $-i$ |
| $4$ | $1$ |
| $4k+r$ | $i^r$ |

Le potenze di $i$ sono **periodiche di periodo 4**.

---

## Riepilogo

| Forma | Espressione |
|---|---|
| Algebrica | $z = a + bi$ |
| Trigonometrica | $z = r(\cos\theta + i\sin\theta)$ |
| Esponenziale | $z = r\,e^{i\theta}$ |
| Potenza ($n$-esima) | $z^n = r^n e^{in\theta}$ |
| De Moivre | $(\cos\theta+i\sin\theta)^n = \cos(n\theta)+i\sin(n\theta)$ |

---

*Prossima lezione: Radici $n$-esime di un numero complesso; Introduzione agli spazi vettoriali.*
