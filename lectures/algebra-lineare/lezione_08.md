# Lezione 8: Somma di Sottospazi

## Somma fra Sottospazi

Sia $V$ uno spazio vettoriale e siano $U$ e $W$ due sottospazi di $V$.

La **somma** di $U$ e $W$ è l'insieme:

$$U + W = \{ \mathbf{u} + \mathbf{w} \mid \mathbf{u} \in U, \mathbf{w} \in W \}$$

In altre parole, $U + W$ contiene tutti i vettori che si possono scrivere come somma di un vettore di $U$ e un vettore di $W$.

### Proprietà della Somma

- $U + W$ è un sottospazio di $V$
- $U \subseteq U + W$ e $W \subseteq U + W$
- $U + W$ è il più piccolo sottospazio che contiene sia $U$ che $W$

### Formula della Dimensione

Se $U$ e $W$ sono sottospazi di uno spazio vettoriale di dimensione finita:

$$\dim(U + W) = \dim(U) + \dim(W) - \dim(U \cap W)$$

Questa formula ci dice che la dimensione della somma dipende dalle dimensioni dei singoli sottospazi e dalla dimensione della loro intersezione.

---

## Somma Diretta

Siano $U$ e $W$ due sottospazi di $V$. Diciamo che $U + W$ è una **somma diretta** se ogni vettore di $U + W$ si scrive in modo **unico** come somma di un vettore di $U$ e un vettore di $W$.

Si denota con:

$$V = U \oplus W$$

In questo caso, si dice che $U$ e $W$ sono in **somma diretta**.

### Caratterizzazione della Somma Diretta

Le seguenti affermazioni sono equivalenti:

1. $U + W$ è somma diretta
2. $U \cap W = \{\mathbf{0}\}$ (l'unico vettore comune è il vettore nullo)
3. Se $\mathbf{u} + \mathbf{w} = \mathbf{0}$ con $\mathbf{u} \in U$ e $\mathbf{w} \in W$, allora $\mathbf{u} = \mathbf{w} = \mathbf{0}$

### Conseguenza per la Dimensione

Se $U$ e $W$ sono in somma diretta, allora:

$$\dim(U \oplus W) = \dim(U) + \dim(W)$$

Questo perché $\dim(U \cap W) = 0$ (l'intersezione è il solo vettore nullo).

---

## Esempio

Sia $V = \mathbb{R}^3$.

**Esempio 1 - Somma diretta:**
- $U = \{(x, y, 0) \mid x, y \in \mathbb{R}\}$ (piano $xy$)
- $W = \{(0, 0, z) \mid z \in \mathbb{R}\}$ (asse $z$)

Allora $U \cap W = \{\mathbf{0}\}$, quindi $U \oplus W = \mathbb{R}^3$.

Ogni vettore $(x, y, z) \in \mathbb{R}^3$ si scrive **unicamente** come:
$$(x, y, z) = (x, y, 0) + (0, 0, z)$$

**Esempio 2 - Somma NON diretta:**
- $U = \{(x, y, 0) \mid x, y \in \mathbb{R}\}$ (piano $xy$)
- $W = \{(x, 0, 0) \mid x \in \mathbb{R}\}$ (asse $x$)

Allora $U \cap W = \{(x, 0, 0)\}$ (asse $x$), quindi la somma NON è diretta.

Il vettore $(1, 0, 0) \in U + W$ si scrive in più modi:
- $(1, 0, 0) = (1, 0, 0) + (0, 0, 0)$
- $(1, 0, 0) = (0, 0, 0) + (1, 0, 0)$
