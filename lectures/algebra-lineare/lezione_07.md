# Lezione 7 — Basi canoniche; Coordinate; Estrarre una base; Dimensione
**Data:** 25/03/2026

---

## 1. Basi canoniche

### 1.1 Base canonica di $\mathbb{K}^n$

La **base canonica** (o **standard**) di $\mathbb{K}^n$ è:

$$\mathcal{E} = (e_1, e_2, \ldots, e_n)$$

dove $e_j$ è il vettore con $1$ in posizione $j$ e $0$ altrove:

$$e_1 = \begin{pmatrix}1\\0\\0\\\vdots\\0\end{pmatrix},\quad e_2 = \begin{pmatrix}0\\1\\0\\\vdots\\0\end{pmatrix},\quad \ldots,\quad e_n = \begin{pmatrix}0\\0\\\vdots\\0\\1\end{pmatrix}$$

Ogni vettore $v = (x_1, \ldots, x_n)^T \in \mathbb{K}^n$ si scrive:

$$v = x_1 e_1 + x_2 e_2 + \cdots + x_n e_n$$

Le **coordinate di $v$ rispetto a $\mathcal{E}$** coincidono con le componenti di $v$.

### 1.2 Base canonica di $\mathbb{K}[x]_{\leq n}$

$$\mathcal{E} = (1, x, x^2, \ldots, x^n)$$

Il polinomio $p(x) = a_0 + a_1 x + \cdots + a_n x^n$ ha coordinate $(a_0, a_1, \ldots, a_n)$.

### 1.3 Base canonica di $M_{m\times n}(\mathbb{K})$

$$\mathcal{E} = \{E_{ij} : 1\leq i\leq m,\; 1\leq j\leq n\}$$

dove $(E_{ij})_{hk} = \delta_{ih}\delta_{jk}$ (delta di Kronecker). Ogni matrice $A = \sum_{i,j} a_{ij} E_{ij}$.

---

## 2. Coordinate rispetto a una base

### 2.1 Cambio di coordinate

Siano $\mathcal{B} = (v_1,\ldots,v_n)$ e $\mathcal{B}' = (w_1,\ldots,w_n)$ due basi di $V$. Dato $v \in V$:

$$[v]_{\mathcal{B}} = \begin{pmatrix}\lambda_1\\\vdots\\\lambda_n\end{pmatrix}, \qquad [v]_{\mathcal{B}'} = \begin{pmatrix}\mu_1\\\vdots\\\mu_n\end{pmatrix}$$

La relazione tra le due rappresentazioni è data dalla **matrice di cambiamento di base** $P$ (o $M_{\mathcal{B}\to\mathcal{B}'} $ ), le cui colonne sono le coordinate dei $v_j$ rispetto a $\mathcal{B}'$:

$$[v]_{\mathcal{B}'} = P\,[v]_{\mathcal{B}}$$

### 2.2 Esempio

In $\mathbb{R}^2$: $\mathcal{B} = \{(1,0),(0,1)\}$ (canonica), $\mathcal{B}' = \{(1,1),(1,-1)\}$.

Trovare $[v]_{\mathcal{B}'}$ per $v = (3,1)$:

Risolvere $\lambda_1(1,1) + \lambda_2(1,-1) = (3,1)$:

$$\begin{cases}\lambda_1 + \lambda_2 = 3\\ \lambda_1 - \lambda_2 = 1\end{cases} \implies \lambda_1 = 2,\; \lambda_2 = 1$$

Dunque $[v]_{\mathcal{B}'} = (2,1)^T$.

---

## 3. Estrarre una base da un insieme di generatori

### 3.1 Il problema

Dato un sistema di generatori $\{v_1, \ldots, v_k\}$ di $V$ (potenzialmente con ridondanze), vogliamo estrarne una **sottofamiglia** che sia base di $V$.

### 3.2 Algoritmo (riduzione per righe / eliminazione di Gauss)

1. Formiamo la matrice $A$ le cui **colonne** sono i vettori $v_1, \ldots, v_k$ (scritti in coordinate rispetto a una base fissata).
2. Applichiamo l'**eliminazione di Gauss** (riduzione a scala per righe) ad $A$.
3. Le colonne corrispondenti ai **pivot** (colonne-pivot) nella forma a scala formano una base di $\operatorname{Span}(v_1,\ldots,v_k)$.

### 3.3 Esempio

Estrarre una base da $S = \{v_1, v_2, v_3, v_4\} \subseteq \mathbb{R}^3$:

$$v_1 = \begin{pmatrix}1\\2\\0\end{pmatrix},\; v_2 = \begin{pmatrix}2\\4\\0\end{pmatrix},\; v_3 = \begin{pmatrix}0\\1\\1\end{pmatrix},\; v_4 = \begin{pmatrix}1\\3\\1\end{pmatrix}$$

Matrice (vettori per colonne):

$$A = \begin{pmatrix} 1 & 2 & 0 & 1 \\ 2 & 4 & 1 & 3 \\ 0 & 0 & 1 & 1 \end{pmatrix}$$

Riduzione: $R_2 \leftarrow R_2 - 2R_1$:

$$\begin{pmatrix} 1 & 2 & 0 & 1 \\ 0 & 0 & 1 & 1 \\ 0 & 0 & 1 & 1 \end{pmatrix}$$

$R_3 \leftarrow R_3 - R_2$:

$$\begin{pmatrix} 1 & 2 & 0 & 1 \\ 0 & 0 & 1 & 1 \\ 0 & 0 & 0 & 0 \end{pmatrix}$$

Pivot nelle colonne 1 e 3 $\implies$ base estratta: $\{v_1, v_3\}$.

Verifica: $v_2 = 2v_1$ (l.d.), $v_4 = v_1 + v_3$ (l.d.).

---

## 4. Dimensione di uno spazio vettoriale

### 4.1 Lemma fondamentale (di scambio di Steinitz)

> **Lemma di Steinitz.** Se $v_1, \ldots, v_m$ sono l.i. e $w_1, \ldots, w_k$ generano $V$, allora $m \leq k$.

*Conseguenza:* ogni insieme l.i. ha cardinalità $\leq$ ogni sistema di generatori.

### 4.2 Teorema: tutte le basi hanno la stessa cardinalità

> **Teorema.** Se $V$ ha una base finita, allora **tutte le basi** di $V$ hanno lo stesso numero di elementi.

**Dimostrazione.** Siano $\mathcal{B} = \{v_1,\ldots,v_n\}$ e $\mathcal{B}' = \{w_1,\ldots,w_m\}$ due basi. Poiché $\mathcal{B}$ genera $V$ e $\mathcal{B}'$ è l.i., per Steinitz: $m \leq n$. Per simmetria: $n \leq m$. Dunque $m = n$. $\square$

### 4.3 Definizione di dimensione

> **Definizione.** La **dimensione** di uno spazio vettoriale $V$ su $\mathbb{K}$ è:
>
> $$\dim_\mathbb{K}(V) = \text{numero di elementi di una qualsiasi base di } V$$
>
> Se $V$ non ha basi finite, si dice che $V$ ha **dimensione infinita** e si scrive $\dim(V) = +\infty$.
>
> Per convenzione: $\dim(\{\mathbf{0}\}) = 0$.

### 4.4 Primi esempi

| Spazio vettoriale $V$ | $\dim(V)$ |
|---|---|
| $\mathbb{K}^n$ | $n$ |
| $\mathbb{K}[x]_{\leq n}$ | $n+1$ |
| $M_{m\times n}(\mathbb{K})$ | $mn$ |
| $\mathbb{K}[x]$ | $+\infty$ |
| $\mathcal{C}([a,b])$ | $+\infty$ |
| $\{\mathbf{0}\}$ | $0$ |
| $\mathbb{C}$ su $\mathbb{C}$ | $1$ |
| $\mathbb{C}$ su $\mathbb{R}$ | $2$ (base $\{1,i\}$) |

> **Osservazione.** La dimensione dipende dal **campo** $\mathbb{K}$!

### 4.5 Conseguenze della dimensione

> **Proposizione.** Sia $\dim(V) = n$. Allora:
> 1. Ogni insieme l.i. in $V$ ha al massimo $n$ elementi.
> 2. Ogni sistema di generatori di $V$ ha almeno $n$ elementi.
> 3. Un insieme l.i. con esattamente $n$ elementi **è una base**.
> 4. Un sistema di $n$ generatori **è una base**.

Questi criteri permettono di verificare che un insieme è una base senza dover controllare entrambe le condizioni.

---

## 5. Criteri pratici per le basi in $\mathbb{K}^n$

In $\mathbb{K}^n$, $n$ vettori $v_1,\ldots,v_n$ formano una base **se e solo se** la matrice $A = [v_1|\cdots|v_n]$ è **invertibile** (equivalentemente: $\det(A) \neq 0$, o rango $n$).

---

## Riepilogo

| Concetto | Definizione / Risultato |
|---|---|
| Base canonica di $\mathbb{K}^n$ | $(e_1,\ldots,e_n)$ , vettori della "identità" |
| Coordinate | $n$ -upla univoca di scalari per rappresentare $v$ in base $\mathcal{B}$ |
| Estrarre base da generatori | Eliminazione di Gauss, selezione colonne-pivot |
| Lemma di Steinitz | $m$ vettori l.i., $k$ generatori $\implies m \leq k$ |
| Tutte le basi equicardinate | Unica cardinalità possibile per le basi |
| Dimensione | $\dim(V)$ = cardinalità di qualsiasi base |

---

*Prossima lezione: applicazioni lineari (trasformazioni lineari), nucleo e immagine.*
