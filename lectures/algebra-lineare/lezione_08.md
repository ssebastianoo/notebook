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

## Sottospazi Complementari

Due sottospazi $U$ e $W$ di uno spazio vettoriale $V$ si dicono **complementari** se:

$$V = U \oplus W$$

In altre parole, $U$ e $W$ sono complementari quando la loro somma diretta è uguale a tutto lo spazio $V$.

### Caratterizzazione

Le seguenti affermazioni sono equivalenti:

1. $U$ e $W$ sono complementari
2. $U + W = V$ e $U \cap W = \{\mathbf{0}\}$
3. Ogni vettore di $V$ si scrive **unicamente** come $\mathbf{v} = \mathbf{u} + \mathbf{w}$ con $\mathbf{u} \in U$ e $\mathbf{w} \in W$

### Proprietà

Se $U$ e $W$ sono complementari in $V$, allora:

$$\dim(V) = \dim(U) + \dim(W)$$

Si dice che $W$ è il **complemento** di $U$ in $V$, denotato talvolta con $U^c$ o $W = V/U$.

### Nota Importante

Il complemento di un sottospazio **non è unico**. Uno stesso sottospazio $U$ può avere diversi complementi, a seconda dello spazio ambiente.

**Esempio:** In $\mathbb{R}^2$, il sottospazio $U = \text{span}\{(1, 0)\}$ (asse $x$) può essere complementato da:
- $W_1 = \text{span}\{(0, 1)\}$ (asse $y$)
- $W_2 = \text{span}\{(1, 1)\}$ (bisettrice)
- Infiniti altri complementi!

---

## Teorema di Grassmann

Il **Teorema di Grassmann** è uno dei risultati più importanti dell'algebra lineare. Fornisce una relazione fondamentale tra le dimensioni di due sottospazi e della loro somma e intersezione.

### Enunciato

Sia $V$ uno spazio vettoriale di dimensione finita e siano $U$ e $W$ due sottospazi di $V$. Allora:

$$\dim(U + W) = \dim(U) + \dim(W) - \dim(U \cap W)$$

### Interpretazione

Questa formula ci dice che:
- Se conosciamo le dimensioni di $U$, $W$ e della loro intersezione $U \cap W$, possiamo calcolare immediatamente la dimensione della loro somma
- La "perdita" di dimensione nella somma è esattamente la dimensione dell'intersezione
- Ciò riflette il fatto che quando "sommiamo" i due sottospazi, gli elementi comuni (intersezione) non vengono contati due volte

### Conseguenze

**Caso 1 - Somma diretta:**
Se $U$ e $W$ sono in somma diretta, allora $U \cap W = \{\mathbf{0}\}$, quindi:
$$\dim(U \oplus W) = \dim(U) + \dim(W)$$

**Caso 2 - Sottospazi disgiunti (tranne lo zero):**
Se $\dim(U \cap W) = 0$, i due sottospazi si "intersecano solo nel vettore nullo" e la formula diventa:
$$\dim(U + W) = \dim(U) + \dim(W)$$

**Caso 3 - Legame con lo spazio ambiente:**
Se $V = U + W$ e $\dim(V) = n$, allora:
$$n = \dim(U) + \dim(W) - \dim(U \cap W)$$

### Dimostrazione Intuitiva

Prendendo una base di $U \cap W$:
- La estendo a una base di $U$ (aggiungendo $\dim(U) - \dim(U \cap W)$ vettori)
- La estendo a una base di $W$ (aggiungendo $\dim(W) - \dim(U \cap W)$ vettori)
- L'unione di questi vettori forma una base di $U + W$

Contando i vettori ottenuti:
$$\dim(U + W) = \dim(U \cap W) + [\dim(U) - \dim(U \cap W)] + [\dim(W) - \dim(U \cap W)] = \dim(U) + \dim(W) - \dim(U \cap W)$$

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

---

## Esercizi

### Esercizio 1: Identificare Somma Diretta

Sia $V = \mathbb{R}^3$ e siano:
- $U = \text{span}\{(1, 0, 0), (0, 1, 0)\}$ (piano $xy$)
- $W = \text{span}\{(1, 1, 1)\}$ (retta passante per l'origine)

Stabilire se $U$ e $W$ sono in somma diretta.

**Soluzione:**
Controlliamo se $U \cap W = \{\mathbf{0}\}$.

Un vettore in $U \cap W$ ha la forma:
- $(x, y, 0)$ per stare in $U$
- $\lambda(1, 1, 1)$ per stare in $W$

Quindi: $(x, y, 0) = \lambda(1, 1, 1)$

Da questo sistema: $x = \lambda$, $y = \lambda$, $0 = \lambda$

L'unica soluzione è $\lambda = 0$, quindi $U \cap W = \{\mathbf{0}\}$. ✓

Quindi **sì, $U$ e $W$ sono in somma diretta**: $U \oplus W = \mathbb{R}^3$.

---

### Esercizio 2: Applicare il Teorema di Grassmann

Sia $V = \mathbb{R}^4$ e siano:
- $U = \{(x, y, z, 0) \mid x, y, z \in \mathbb{R}\}$, quindi $\dim(U) = 3$
- $W = \{(x, x, w, w) \mid x, w \in \mathbb{R}\}$, quindi $\dim(W) = 2$

Calcolare $\dim(U + W)$ e $\dim(U \cap W)$.

**Soluzione:**
Troviamo l'intersezione. Un vettore in $U \cap W$ deve essere:
- $(x_1, y_1, z_1, 0)$ (in $U$)
- $(x_2, x_2, w_2, w_2)$ (in $W$)

Quindi: $x_1 = x_2$, $y_1 = x_2$, $z_1 = w_2$, $0 = w_2$

Da $0 = w_2$ otteniamo $z_1 = 0$. Da $y_1 = x_1$, il vettore è $(x_1, x_1, 0, 0)$.

Quindi $U \cap W = \{(x, x, 0, 0) \mid x \in \mathbb{R}\} = \text{span}\{(1, 1, 0, 0)\}$

$\dim(U \cap W) = 1$.

Per il Teorema di Grassmann:
$$\dim(U + W) = \dim(U) + \dim(W) - \dim(U \cap W) = 3 + 2 - 1 = 4$$

Quindi $U + W = \mathbb{R}^4$.

---

### Esercizio 3: Basi e Somma Diretta

Sia $V = \mathbb{R}^3$ e siano:
- $U = \text{span}\{(1, 0, 0), (0, 1, 0)\}$
- $W = \text{span}\{(0, 0, 1)\}$

Verificare che $U \oplus W = \mathbb{R}^3$ e scrivere il vettore $(2, 3, 5)$ come $\mathbf{u} + \mathbf{w}$ con $\mathbf{u} \in U$ e $\mathbf{w} \in W$.

**Soluzione:**
$U \cap W = \{\mathbf{0}\}$ perché gli unici vettori comuni sarebbero della forma $(0, 0, 0)$.

Quindi $U \oplus W = \mathbb{R}^3$. ✓

Scrivere $(2, 3, 5)$:
- $\mathbf{u} = (2, 3, 0) \in U$
- $\mathbf{w} = (0, 0, 5) \in W$

Verifica: $(2, 3, 0) + (0, 0, 5) = (2, 3, 5)$ ✓

---

### Esercizio 4: Complemento Ortogonale (Avanzato)

Sia $V = \mathbb{R}^4$ e sia $U = \{(x, y, 0, 0) \mid x, y \in \mathbb{R}\}$ con $\dim(U) = 2$.

Trovare un sottospazio $W$ tale che $U \oplus W = \mathbb{R}^4$.

**Soluzione:**
Dobbiamo trovare $W$ con $\dim(W) = 2$ e $U \cap W = \{\mathbf{0}\}$.

Una scelta è: $W = \{(0, 0, z, w) \mid z, w \in \mathbb{R}\}$ (ultimi due componenti).

Verifica:
- $\dim(W) = 2$ ✓
- $U \cap W = \{\mathbf{0}\}$ (nessun vettore non nullo in comune) ✓
- $U \oplus W = \mathbb{R}^4$ ✓

Nota: non è l'unica scelta! Ad esempio, $W' = \text{span}\{(1, 0, 1, 0), (0, 1, 0, 1)\}$ funziona altrettanto bene.
