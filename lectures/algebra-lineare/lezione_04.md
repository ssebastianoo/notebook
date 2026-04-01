# Lezione 4 — Proprietà delle operazioni; Sistemi lineari; Definizione di Spazio Vettoriale
**Data:** 13/03/2026

---

## 1. Proprietà delle operazioni sugli spazi vettoriali

Prima di formalizzare la definizione, esploriamo le proprietà che vogliamo richiedere.

### 1.1 Proprietà della somma

Dati $u, v, w \in V$:

| # | Proprietà | Formula |
|---|---|---|
| (S1) | **Chiusura** | $u + v \in V$ |
| (S2) | **Commutatività** | $u + v = v + u$ |
| (S3) | **Associatività** | $(u+v)+w = u+(v+w)$ |
| (S4) | **Elemento neutro** | $\exists\, \mathbf{0} \in V : u + \mathbf{0} = u$ per ogni $u$ |
| (S5) | **Opposto** | $\forall\, u\in V,\; \exists\, (-u)\in V : u + (-u) = \mathbf{0}$ |

Le proprietà (S1)–(S5) dicono che $(V, +)$ è un **gruppo abeliano**.

### 1.2 Proprietà del prodotto per scalare

Dati $\lambda, \mu \in \mathbb{K}$ e $u, v \in V$:

| # | Proprietà | Formula |
|---|---|---|
| (P1) | **Chiusura** | $\lambda \cdot u \in V$ |
| (P2) | **Distributività su $V$** | $\lambda(u + v) = \lambda u + \lambda v$ |
| (P3) | **Distributività su $\mathbb{K}$** | $(\lambda + \mu)u = \lambda u + \mu u$ |
| (P4) | **Compatibilità con prodotto scalare** | $(\lambda\mu)u = \lambda(\mu u)$ |
| (P5) | **Elemento neutro scalare** | $1 \cdot u = u$ |

---

## 2. Introduzione ai sistemi lineari

### 2.1 Equazione lineare

Un'**equazione lineare** nelle incognite $x_1, x_2, \ldots, x_n \in \mathbb{K}$ è un'equazione della forma:

$$a_1 x_1 + a_2 x_2 + \cdots + a_n x_n = b$$

dove $a_1, \ldots, a_n, b \in \mathbb{K}$ sono dati (coefficienti e termine noto).

### 2.2 Sistema lineare

Un **sistema lineare** di $m$ equazioni in $n$ incognite è:

$$\begin{cases} a_{11}x_1 + a_{12}x_2 + \cdots + a_{1n}x_n = b_1 \\ a_{21}x_1 + a_{22}x_2 + \cdots + a_{2n}x_n = b_2 \\ \quad\vdots \\ a_{m1}x_1 + a_{m2}x_2 + \cdots + a_{mn}x_n = b_m \end{cases}$$

Si scrive compattamente come $Ax = b$, con:
- $A = (a_{ij}) \in M_{m\times n}(\mathbb{K})$: **matrice dei coefficienti**
- $x = (x_1, \ldots, x_n)^T$: **vettore delle incognite**
- $b = (b_1, \ldots, b_m)^T$: **vettore dei termini noti**

### 2.3 Matrice aumentata

Si raccoglie l'informazione del sistema nella **matrice aumentata** $(A \mid b)$:

$$\left(\begin{array}{cccc|c} a_{11} & a_{12} & \cdots & a_{1n} & b_1 \\ a_{21} & a_{22} & \cdots & a_{2n} & b_2 \\ \vdots & \vdots & \ddots & \vdots & \vdots \\ a_{m1} & a_{m2} & \cdots & a_{mn} & b_m \end{array}\right)$$

### 2.4 Classificazione delle soluzioni

Un sistema lineare può essere:
- **Compatibile (o consistente):** ammette almeno una soluzione
  - *determinato:* esattamente una soluzione
  - *indeterminato:* infinite soluzioni (parametriche)
- **Incompatibile (o inconsistente):** nessuna soluzione

---

## 3. Definizione di Spazio Vettoriale

### 3.1 Definizione assiomatica

> **Definizione.** Sia $\mathbb{K}$ un campo (tipicamente $\mathbb{R}$ o $\mathbb{C}$). Uno **spazio vettoriale su $\mathbb{K}$** è un insieme non vuoto $V$ dotato di due operazioni:
>
> - **Somma:** $+: V \times V \to V$
> - **Prodotto per scalare:** $\cdot: \mathbb{K} \times V \to V$
>
> che soddisfano gli assiomi **(S1)–(S5)** e **(P1)–(P5)** elencati sopra.
>
> Gli elementi di $V$ si chiamano **vettori**, gli elementi di $\mathbb{K}$ si chiamano **scalari**.

### 3.2 Unicità di vettore nullo e opposto

**Proposizione.** In ogni spazio vettoriale $V$:
1. Il vettore nullo $\mathbf{0}$ è **unico**.
2. Per ogni $v \in V$, l'opposto $-v$ è **unico**.

**Dimostrazione unicità di $\mathbf{0}$:** Siano $\mathbf{0}$ e $\mathbf{0}'$ due vettori neutri. Allora:
$$\mathbf{0} = \mathbf{0} + \mathbf{0}' = \mathbf{0}'$$

### 3.3 Proprietà derivate

> **Teorema.** In ogni spazio vettoriale $V$ valgono:
> 1. $0 \cdot v = \mathbf{0}$ per ogni $v \in V$ ($0$ è lo scalare zero)
> 2. $\lambda \cdot \mathbf{0} = \mathbf{0}$ per ogni $\lambda \in \mathbb{K}$
> 3. $(-1) \cdot v = -v$ per ogni $v \in V$
> 4. $\lambda \cdot v = \mathbf{0} \implies \lambda = 0 \text{ oppure } v = \mathbf{0}$

**Dimostrazione di (1):** $0 \cdot v = (0+0)\cdot v = 0 \cdot v + 0 \cdot v$. Sottraendo $0 \cdot v$ da entrambi i lati: $\mathbf{0} = 0 \cdot v$. $\square$

**Dimostrazione di (3):** $v + (-1)v = 1\cdot v + (-1)v = (1-1)v = 0 \cdot v = \mathbf{0}$. Dunque $(-1)v$ è l'opposto di $v$. $\square$

---

## 4. Esempi di spazi vettoriali

| Spazio $V$ | Campo $\mathbb{K}$ | Note |
|---|---|---|
| $\mathbb{R}^n$ | $\mathbb{R}$ | $n$-uple di reali |
| $\mathbb{C}^n$ | $\mathbb{C}$ | $n$-uple di complessi |
| $\mathbb{C}^n$ | $\mathbb{R}$ | stesso insieme, scalari reali |
| $M_{m\times n}(\mathbb{K})$ | $\mathbb{K}$ | matrici |
| $\mathbb{K}[x]_{\leq n}$ | $\mathbb{K}$ | polinomi di grado $\leq n$ |
| $\mathbb{K}[x]$ | $\mathbb{K}$ | tutti i polinomi |
| $\mathcal{F}(\mathbb{R},\mathbb{R})$ | $\mathbb{R}$ | funzioni $f:\mathbb{R}\to\mathbb{R}$ |
| $\{\mathbf{0}\}$ | $\mathbb{K}$ | spazio banale (zero) |

---

## Riepilogo

| Concetto | Descrizione |
|---|---|
| Spazio vettoriale | Insieme con $+$ e $\cdot$ soddisfacenti 10 assiomi |
| Vettore nullo | Unico; soddisfa $\mathbf{0} + v = v$ |
| Opposto | Unico; $v + (-v) = \mathbf{0}$; coincide con $(-1)v$ |
| Sistema lineare | $m$ equazioni lineari in $n$ incognite: $Ax = b$ |
| Matrice aumentata | $(A\mid b)$: contiene tutta l'info del sistema |

---

*Prossima lezione: Esempi di spazi vettoriali; Sottospazi vettoriali; Combinazioni lineari e indipendenza lineare.*
