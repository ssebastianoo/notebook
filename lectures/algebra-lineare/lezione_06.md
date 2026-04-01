# Lezione 6 — Combinazioni lineari e span; Teorema di unicità; Definizione di base
**Data:** 20/03/2026

---

## 1. Combinazioni lineari e span lineare

### 1.1 Richiamo e approfondimento

Dall'ultima lezione: lo **span** di $S = \{v_1, \ldots, v_k\} \subseteq V$ è:

$$\operatorname{Span}(S) = \left\{\sum_{j=1}^k \lambda_j v_j : \lambda_j \in \mathbb{K}\right\}$$

È il **più piccolo sottospazio** di $V$ che contiene tutti i $v_j$:

> **Proposizione.** Se $W$ è un sottospazio di $V$ con $v_1, \ldots, v_k \in W$, allora $\operatorname{Span}(v_1,\ldots,v_k) \subseteq W$.

Quindi $\operatorname{Span}(S)$ è l'intersezione di tutti i sottospazi di $V$ contenenti $S$.

### 1.2 Insiemi di generatori

> **Definizione.** Un insieme $S = \{v_1, \ldots, v_k\} \subseteq V$ è un **sistema di generatori** (o $S$ **genera** $V$) se:
>
> $$\operatorname{Span}(v_1,\ldots,v_k) = V$$
>
> cioè ogni vettore di $V$ è combinazione lineare di $v_1, \ldots, v_k$.

**Esempi:**
- $\{(1,0),(0,1)\}$ genera $\mathbb{R}^2$: ogni $(a,b) = a(1,0) + b(0,1)$.
- $\{(1,0),(0,1),(1,1)\}$ genera ancora $\mathbb{R}^2$ (ma con ridondanza).
- $\{1, x, x^2, \ldots, x^n\}$ genera $\mathbb{K}[x]_{\leq n}$.

### 1.3 Span e dipendenza lineare

> **Proposizione.** $v_{k+1} \in \operatorname{Span}(v_1,\ldots,v_k)$ $\iff$ $v_1,\ldots,v_k, v_{k+1}$ sono linearmente dipendenti.

*Conseguenza:* aggiungere a un sistema generatori un vettore già nello span non lo "allarga".

---

## 2. Teorema di unicità della rappresentazione

### 2.1 Enunciato

> **Teorema (Unicità della rappresentazione).** Sia $V$ uno spazio vettoriale e siano $v_1, \ldots, v_n \in V$ **linearmente indipendenti**. Allora ogni vettore $v \in \operatorname{Span}(v_1,\ldots,v_n)$ si scrive in modo **unico** come combinazione lineare:
>
> $$v = \lambda_1 v_1 + \cdots + \lambda_n v_n$$
>
> I coefficienti $(\lambda_1, \ldots, \lambda_n) \in \mathbb{K}^n$ sono univocamente determinati da $v$.

**Dimostrazione.** Supponiamo che $v$ abbia due rappresentazioni:

$$v = \lambda_1 v_1 + \cdots + \lambda_n v_n = \mu_1 v_1 + \cdots + \mu_n v_n$$

Sottraendo:

$$(\lambda_1 - \mu_1)v_1 + \cdots + (\lambda_n - \mu_n)v_n = \mathbf{0}$$

Per l'indipendenza lineare di $v_1, \ldots, v_n$: $\lambda_j - \mu_j = 0$ per ogni $j$, quindi $\lambda_j = \mu_j$. $\square$

### 2.2 Importanza del teorema

Il teorema ci dice che se i generatori sono linearmente indipendenti, possiamo **identificare univocamente** ogni vettore con la sua $n$-upla di coordinate. Questo è il fondamento della nozione di **base** e del concetto di **sistema di coordinate**.

---

## 3. Definizione di base

### 3.1 Definizione

> **Definizione.** Una **base** di uno spazio vettoriale $V$ su $\mathbb{K}$ è un insieme ordinato $\mathcal{B} = (v_1, v_2, \ldots, v_n)$ di vettori di $V$ tale che:
>
> 1. $v_1, \ldots, v_n$ sono **linearmente indipendenti**
> 2. $\operatorname{Span}(v_1, \ldots, v_n) = V$ *(sistema di generatori)*

Equivalentemente: ogni $v \in V$ si scrive in **modo unico** come $v = \sum_{j=1}^n \lambda_j v_j$.

### 3.2 Caratterizzazioni equivalenti

> **Proposizione.** Per un insieme $\mathcal{B} = \{v_1, \ldots, v_n\}$ le seguenti affermazioni sono equivalenti:
>
> (a) $\mathcal{B}$ è una base di $V$
>
> (b) $\mathcal{B}$ è un sistema di generatori **minimale** (rimuovendo qualsiasi elemento, non genera più $V$)
>
> (c) $\mathcal{B}$ è un insieme l.i. **massimale** (aggiungendo qualsiasi elemento, diventa l.d.)

### 3.3 Coordinate rispetto a una base

> **Definizione.** Sia $\mathcal{B} = (v_1,\ldots,v_n)$ una base di $V$. Per ogni $v \in V$, scrivendo $v = \sum_{j=1}^n \lambda_j v_j$ (unica per il teorema di unicità), i coefficienti $\lambda_1, \ldots, \lambda_n \in \mathbb{K}$ si chiamano **coordinate di $v$ rispetto a $\mathcal{B}$**.

Si scrive:

$$[v]_{\mathcal{B}} = \begin{pmatrix} \lambda_1 \\ \vdots \\ \lambda_n \end{pmatrix} \in \mathbb{K}^n$$

L'applicazione $v \mapsto [v]_\mathcal{B}$ è un **isomorfismo** $V \to \mathbb{K}^n$ (lo vedremo in seguito).

### 3.4 Esempi di basi

**Base canonica di $\mathbb{R}^n$:**

$$e_1 = (1,0,\ldots,0),\quad e_2 = (0,1,\ldots,0),\quad \ldots,\quad e_n = (0,0,\ldots,1)$$

Ogni $(x_1,\ldots,x_n) = x_1 e_1 + \cdots + x_n e_n$.

**Base canonica di $\mathbb{K}[x]_{\leq n}$:**

$$\{1, x, x^2, \ldots, x^n\}$$

**Base canonica di $M_{m\times n}(\mathbb{K})$:**

$E_{ij}$ = matrice con $1$ in posizione $(i,j)$ e $0$ altrove.

**Base non canonica di $\mathbb{R}^2$:**

$\mathcal{B} = \{(1,1),(1,-1)\}$: è una base, e le coordinate di $(3,1)$ sono $\lambda_1 = 2, \lambda_2 = 1$ (perché $2(1,1)+1(1,-1) = (3,1)$).

---

## 4. Basi e sistemi lineari

Trovare le coordinate di $v$ rispetto a $\mathcal{B} = \{v_1,\ldots,v_n\}$ equivale a **risolvere il sistema lineare**:

$$\lambda_1 v_1 + \cdots + \lambda_n v_n = v$$

cioè $[\,v_1\,|\,v_2\,|\,\cdots\,|\,v_n\,]\,\lambda = v$, dove le colonne sono i vettori della base.

---

## Riepilogo

| Concetto | Definizione |
|---|---|
| Sistema di generatori | $\operatorname{Span}(v_1,\ldots,v_k) = V$ |
| Teorema di unicità | Coefficienti di una combinazione lineare rispetto a vettori l.i. sono unici |
| Base | Insieme l.i. che genera $V$ |
| Coordinate | $[v]_\mathcal{B} = (\lambda_1,\ldots,\lambda_n)$ tali che $v = \sum\lambda_j v_j$ |
| Base $\iff$ | Generatori minimali $\iff$ Insieme l.i. massimale |

---

*Prossima lezione: Basi canoniche; coordinate; estrarre una base da un sistema di generatori; dimensione.*
