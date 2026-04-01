# Lezione 5 — Esempi di spazi vettoriali; Sottospazi vettoriali; Combinazioni lineari e indipendenza lineare
**Data:** 18/03/2026

---

## 1. Esempi di spazi vettoriali

### 1.1 $\mathbb{K}^n$ — lo spazio prototipo

L'insieme $\mathbb{K}^n = \{(x_1,\ldots,x_n) : x_i \in \mathbb{K}\}$ con le operazioni naturali è il modello fondamentale.

$$\mathbb{R}^2: \quad u = (1,2),\; v = (3,-1) \implies u+v = (4,1),\; 2u = (2,4)$$

### 1.2 Spazi di polinomi

$\mathbb{K}[x]_{\leq n}$ = polinomi di grado $\leq n$:

$$p(x) = a_0 + a_1 x + \cdots + a_n x^n, \quad a_i \in \mathbb{K}$$

Ha dimensione $n+1$ (lo vedremo formalmente). $\mathbb{K}[x]$ (tutti i polinomi) è uno spazio vettoriale di dimensione infinita.

### 1.3 Spazi di funzioni

$\mathcal{C}([a,b])$ = funzioni continue su $[a,b]$:
- Somma: $(f+g)(x) = f(x)+g(x)$
- Prodotto per scalare: $(\lambda f)(x) = \lambda f(x)$

### 1.4 Spazi di matrici

$M_{m\times n}(\mathbb{K})$ con somma e moltiplicazione per scalare standard. Ha dimensione $mn$.

### 1.5 Esempio: $\mathbb{C}$ su $\mathbb{R}$

$\mathbb{C}$ è uno spazio vettoriale su $\mathbb{R}$ con:
- Vettori: numeri complessi $a+bi$
- Scalari: numeri reali
- Somma: la solita somma di complessi
- Prodotto: $\lambda(a+bi) = \lambda a + \lambda b\, i$ ($\lambda \in \mathbb{R}$)

---

## 2. Sottospazi vettoriali

### 2.1 Definizione

> **Definizione.** Sia $V$ uno spazio vettoriale su $\mathbb{K}$. Un sottoinsieme $W \subseteq V$ è un **sottospazio vettoriale** di $V$ se $W$ è a sua volta uno spazio vettoriale con le stesse operazioni di $V$.

### 2.2 Criterio pratico (criterio del sottospazio)

> **Proposizione.** $W \subseteq V$ è un sottospazio vettoriale **se e solo se** valgono tutte e tre le condizioni:
> 1. $\mathbf{0} \in W$ *(contiene il vettore nullo)*
> 2. $\forall\, u, v \in W:\; u + v \in W$ *(chiusura per somma)*
> 3. $\forall\, \lambda \in \mathbb{K},\; \forall\, u \in W:\; \lambda u \in W$ *(chiusura per prodotto per scalare)*

Le condizioni (2) e (3) si possono unire in:

$$\forall\, u, v \in W,\; \forall\, \lambda, \mu \in \mathbb{K}:\quad \lambda u + \mu v \in W$$

**Dimostrazione ($\Rightarrow$):** ovvia dalla definizione.
**Dimostrazione ($\Leftarrow$):** gli assiomi di gruppo abeliano ereditati da $V$ sono automaticamente soddisfatti; basta verificare la chiusura. $\square$

### 2.3 Esempi di sottospazi

| Spazio $V$ | Sottospazio $W$ |
|---|---|
| $\mathbb{R}^2$ | rette per l'origine: $W = \{(x,y): ax+by=0\}$ |
| $\mathbb{R}^3$ | piani per l'origine; rette per l'origine |
| $\mathbb{K}[x]_{\leq n}$ | $\mathbb{K}[x]_{\leq k}$ per $k \leq n$ |
| $\mathcal{C}([a,b])$ | funzioni derivabili; funzioni con $f(a)=0$ |
| qualsiasi $V$ | $\{0\}$ e $V$ stesso (sottospazi banali) |

### 2.4 Controesempio

$W = \{(x,y) \in \mathbb{R}^2 : x \geq 0\}$ **non** è un sottospazio: se $u = (1,0) \in W$, allora $-u = (-1,0) \notin W$ (fallisce la chiusura per scalari negativi).

### 2.5 Intersezione di sottospazi

> **Proposizione.** Se $W_1, W_2$ sono sottospazi di $V$, allora $W_1 \cap W_2$ è un sottospazio di $V$.

**Attenzione:** $W_1 \cup W_2$ in generale **non** è un sottospazio.

---

## 3. Combinazioni lineari

### 3.1 Definizione

> **Definizione.** Siano $v_1, v_2, \ldots, v_k \in V$ e $\lambda_1, \ldots, \lambda_k \in \mathbb{K}$. La **combinazione lineare** di $v_1, \ldots, v_k$ con coefficienti $\lambda_1, \ldots, \lambda_k$ è il vettore:
>
> $$\lambda_1 v_1 + \lambda_2 v_2 + \cdots + \lambda_k v_k = \sum_{j=1}^k \lambda_j v_j \in V$$

### 3.2 Span lineare (insieme generato)

> **Definizione.** Lo **span** (o **involucro lineare** o **insieme generato**) di $\{v_1, \ldots, v_k\}$ è:
>
> $$\operatorname{Span}(v_1,\ldots,v_k) = \left\{\sum_{j=1}^k \lambda_j v_j : \lambda_1,\ldots,\lambda_k \in \mathbb{K}\right\}$$
>
> cioè l'insieme di *tutte* le combinazioni lineari di $v_1,\ldots,v_k$.

> **Proposizione.** $\operatorname{Span}(v_1,\ldots,v_k)$ è un **sottospazio** di $V$.

**Esempio.** In $\mathbb{R}^3$:
- $\operatorname{Span}((1,0,0)) = \{(\lambda,0,0):\lambda\in\mathbb{R}\}$ = asse $x$
- $\operatorname{Span}((1,0,0),(0,1,0)) = \{(\lambda,\mu,0):\lambda,\mu\in\mathbb{R}\}$ = piano $xy$

---

## 4. Indipendenza lineare

### 4.1 Definizione

> **Definizione.** I vettori $v_1, v_2, \ldots, v_k \in V$ si dicono **linearmente indipendenti** (l.i.) se l'unica soluzione dell'equazione:
>
> $$\lambda_1 v_1 + \lambda_2 v_2 + \cdots + \lambda_k v_k = \mathbf{0}$$
>
> è la **soluzione banale** $\lambda_1 = \lambda_2 = \cdots = \lambda_k = 0$.
>
> Se esistono $\lambda_1, \ldots, \lambda_k$ **non tutti nulli** con $\sum \lambda_j v_j = \mathbf{0}$, i vettori si dicono **linearmente dipendenti** (l.d.).

### 4.2 Interpretazione geometrica

- Due vettori in $\mathbb{R}^2$ sono l.d. $\iff$ sono **paralleli** (uno è multiplo scalare dell'altro).
- Tre vettori in $\mathbb{R}^3$ sono l.d. $\iff$ sono **complanari** (giacciono sullo stesso piano per l'origine).

### 4.3 Proprietà fondamentali

> 1. Un insieme contenente $\mathbf{0}$ è sempre **linearmente dipendente**.
> 2. Un singolo vettore $\{v\}$ è l.i. $\iff$ $v \neq \mathbf{0}$.
> 3. $v_1, \ldots, v_k$ sono l.d. $\iff$ almeno uno di essi è combinazione lineare degli altri.
> 4. Ogni sottoinsieme di un insieme l.i. è l.i.
> 5. Ogni soprainsieme di un insieme l.d. è l.d.

### 4.4 Esempi

**In $\mathbb{R}^3$:**
- $e_1=(1,0,0),\; e_2=(0,1,0),\; e_3=(0,0,1)$: sono **l.i.**
- $v_1=(1,2,0),\; v_2=(2,4,0)=(2v_1)$: sono **l.d.**
- $v_1=(1,0,0),\; v_2=(0,1,0),\; v_3=(1,1,0)=v_1+v_2$: sono **l.d.**

**In $\mathbb{K}[x]_{\leq 2}$:**
- $\{1, x, x^2\}$: **l.i.**
- $\{1+x, 1-x, x\}$: **l.d.** (perché $x = \tfrac{1}{2}(1+x) - \tfrac{1}{2}(1-x)$)

---

## Riepilogo

| Concetto | Definizione chiave |
|---|---|
| Sottospazio | $W \subseteq V$ con $\mathbf{0}\in W$, chiuso per $+$ e $\cdot$ |
| Span | $\operatorname{Span}(v_1,\ldots,v_k)$ = tutte le combinazioni lineari |
| Comb. lineare | $\sum_{j=1}^k \lambda_j v_j$ con $\lambda_j \in \mathbb{K}$ |
| Indip. lineare | $\sum \lambda_j v_j = \mathbf{0} \implies \lambda_j = 0\ \forall j$ |
| Dipendenza lineare | $\exists$ coefficienti non tutti nulli con $\sum \lambda_j v_j = \mathbf{0}$ |

---

*Prossima lezione: Span e combinazioni lineari; Teorema di unicità di rappresentazione; Definizione di base.*
