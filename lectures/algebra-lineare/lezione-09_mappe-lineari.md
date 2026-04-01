# Lezione 9: Mappe Lineari

## Definizione

Sia $V$ e $W$ spazi vettoriali su un campo $\mathbb{F}$. Una funzione $T: V \to W$ si dice **mappa lineare** (o **omomorfismo**) se soddisfa:

1. **Additività:** $T(\mathbf{v}_1 + \mathbf{v}_2) = T(\mathbf{v}_1) + T(\mathbf{v}_2)$ per ogni $\mathbf{v}_1, \mathbf{v}_2 \in V$

2. **Omogeneità:** $T(c \mathbf{v}) = c T(\mathbf{v})$ per ogni $c \in \mathbb{F}$ e $\mathbf{v} \in V$

### Forma Equivalente

Una mappa $T: V \to W$ è lineare se e solo se:

$$T(c_1 \mathbf{v}_1 + c_2 \mathbf{v}_2) = c_1 T(\mathbf{v}_1) + c_2 T(\mathbf{v}_2)$$

per ogni $c_1, c_2 \in \mathbb{F}$ e $\mathbf{v}_1, \mathbf{v}_2 \in V$.

### Proprietà Fondamentali

- $T(\mathbf{0}) = \mathbf{0}$ (il vettore nullo di $V$ viene mandato nel vettore nullo di $W$)
- $T(-\mathbf{v}) = -T(\mathbf{v})$ per ogni $\mathbf{v} \in V$
- Se $\mathbf{v} = c_1 \mathbf{v}_1 + \cdots + c_n \mathbf{v}_n$, allora $T(\mathbf{v}) = c_1 T(\mathbf{v}_1) + \cdots + c_n T(\mathbf{v}_n)$

---

## Nucleo e Immagine

### Nucleo (Kernel)

Il **nucleo** di $T$ è l'insieme:

$$\ker(T) = \{\mathbf{v} \in V \mid T(\mathbf{v}) = \mathbf{0}\}$$

**Proprietà:**
- $\ker(T)$ è un sottospazio di $V$
- $T$ è **iniettiva** se e solo se $\ker(T) = \{\mathbf{0}\}$

### Immagine (Rank)

L'**immagine** di $T$ è l'insieme:

$$\text{Im}(T) = \{T(\mathbf{v}) \mid \mathbf{v} \in V\}$$

Oppure denotata con $\text{Ran}(T)$ (range).

**Proprietà:**
- $\text{Im}(T)$ è un sottospazio di $W$
- $T$ è **suriettiva** se e solo se $\text{Im}(T) = W$

---

## Teorema del Rango-Nullità

Sia $T: V \to W$ una mappa lineare tra spazi vettoriali di dimensione finita. Allora:

$$\dim(V) = \dim(\ker(T)) + \dim(\text{Im}(T))$$

Oppure equivalentemente:

$$\dim(V) = \text{nullità}(T) + \text{rango}(T)$$

dove:
- **nullità** = $\dim(\ker(T))$ (numero di dimensioni "collassate")
- **rango** = $\dim(\text{Im}(T))$ (numero di dimensioni "preservate")

---

## Esempi di Mappe Lineari

### Esempio 1: Proiezione

$$T: \mathbb{R}^3 \to \mathbb{R}^2, \quad T(x, y, z) = (x, y)$$

**Verifica linearità:**
- Additività: $T((x_1, y_1, z_1) + (x_2, y_2, z_2)) = T(x_1+x_2, y_1+y_2, z_1+z_2) = (x_1+x_2, y_1+y_2) = T(x_1, y_1, z_1) + T(x_2, y_2, z_2)$ ✓
- Omogeneità: $T(c(x, y, z)) = T(cx, cy, cz) = (cx, cy) = c(x, y) = cT(x, y, z)$ ✓

$\ker(T) = \{(0, 0, z) \mid z \in \mathbb{R}\}$ con $\dim(\ker(T)) = 1$

$\text{Im}(T) = \mathbb{R}^2$ con $\dim(\text{Im}(T)) = 2$

Verifica: $3 = 1 + 2$ ✓

### Esempio 2: Derivazione

$$T: P_3(\mathbb{R}) \to P_2(\mathbb{R}), \quad T(p(x)) = p'(x)$$

dove $P_3$ è lo spazio dei polinomi di grado $\leq 3$ e $P_2$ è quello di grado $\leq 2$.

**Linearità:** La derivata è lineare per definizione.

$\ker(T) = \{polinomi costanti\} = \text{span}\{1\}$ con $\dim(\ker(T)) = 1$

$\text{Im}(T) = P_2(\mathbb{R})$ con $\dim(\text{Im}(T)) = 3$

Verifica: $4 = 1 + 3$ ✓

### Esempio 3: Matrice

$$T: \mathbb{R}^n \to \mathbb{R}^m, \quad T(\mathbf{v}) = A\mathbf{v}$$

dove $A$ è una matrice $m \times n$.

Questa è sempre lineare per le proprietà del prodotto matrice-vettore.

---

## Isomorfismi

Una mappa lineare $T: V \to W$ è un **isomorfismo** se è **iniettiva e suriettiva**.

Questo significa:
- $\ker(T) = \{\mathbf{0}\}$ (iniettività)
- $\text{Im}(T) = W$ (suriettività)

### Proprietà

Se $T: V \to W$ è un isomorfismo, allora:
- Esiste un'inversa lineare $T^{-1}: W \to V$
- $\dim(V) = \dim(W)$
- Due spazi isomorfi sono "essenzialmente uguali" dal punto di vista della struttura vettoriale

### Esempio

$$T: \mathbb{R}^3 \to \mathbb{R}^3, \quad T(x, y, z) = (x + y, y + z, x + z)$$

Per verificare che è un isomorfismo, mostriamo $\ker(T) = \{\mathbf{0}\}$:

Se $(x + y, y + z, x + z) = (0, 0, 0)$, allora:
- $x + y = 0 \Rightarrow y = -x$
- $y + z = 0 \Rightarrow z = -y = x$
- $x + z = 0 \Rightarrow x + x = 0 \Rightarrow x = 0$

Quindi $x = y = z = 0$, quindi $\ker(T) = \{\mathbf{0}\}$. ✓

Per il teorema del rango-nullità: $\dim(\text{Im}(T)) = 3 - 0 = 3 = \dim(\mathbb{R}^3)$.

Quindi $T$ è un isomorfismo. ✓

---

## Matrice Associata a una Mappa Lineare

Se $T: V \to W$ con $\dim(V) = n$ e $\dim(W) = m$, e fissiamo basi $\mathcal{B}_V = \{\mathbf{v}_1, \ldots, \mathbf{v}_n\}$ di $V$ e $\mathcal{B}_W = \{\mathbf{w}_1, \ldots, \mathbf{w}_m\}$ di $W$, allora la matrice associata è:

$$[T]_{\mathcal{B}_V}^{\mathcal{B}_W} = \begin{pmatrix} | & | & & | \\ [T(\mathbf{v}_1)]_{\mathcal{B}_W} & [T(\mathbf{v}_2)]_{\mathcal{B}_W} & \cdots & [T(\mathbf{v}_n)]_{\mathcal{B}_W} \\ | & | & & | \end{pmatrix}$$

dove $[T(\mathbf{v}_i)]_{\mathcal{B}_W}$ è il vettore colonna delle coordinate di $T(\mathbf{v}_i)$ rispetto a $\mathcal{B}_W$.

**Nota:** Se $[\mathbf{v}]_{\mathcal{B}_V}$ sono le coordinate di $\mathbf{v}$ in base $\mathcal{B}_V$, allora:
$$[T(\mathbf{v})]_{\mathcal{B}_W} = [T]_{\mathcal{B}_V}^{\mathcal{B}_W} [\mathbf{v}]_{\mathcal{B}_V}$$
 