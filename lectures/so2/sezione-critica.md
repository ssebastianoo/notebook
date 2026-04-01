# Sezione Critica

## Busy Waiting

**Definizione:** Il busy waiting è una tecnica di sincronizzazione in cui un processo attende ripetutamente il verificarsi di una condizione eseguendo un loop che controlla continuamente lo stato della risorsa, senza rilasciare il controllo della CPU.

### Caratteristiche:
- Il processo rimane in esecuzione e occupa cicli di CPU inutilmente
- Consuma risorse di elaborazione senza svolgere lavoro utile
- Comporta uno spreco energetico significativo

### Esempio (pseudocodice):
```
while (lock == occupato) {
    // continua a controllare
}
// entra nella sezione critica
```

### Problemi:
- **Inefficienza CPU:** La CPU esegue istruzioni di controllo senza progredire
- **Contention:** In ambienti multiprocessore, aumenta il traffico su bus e cache
- **Consumi energetici:** Spreco di energia dovuto al continuo polling

### Alternativa migliore:
Utilizzare **meccanismi di sincronizzazione kernel** (semafori, mutex, condition variables) che sospendono il processo fino al verificarsi dell'evento, permettendo ad altri processi di usare la CPU.

---

## Mutua Esclusione

**Definizione:** La mutua esclusione è un principio di sincronizzazione che garantisce che soltanto un processo alla volta possa accedere a una risorsa condivisa (sezione critica), impedendo che più processi accedano simultaneamente a dati o strutture comuni.

### Obiettivo:
Prevenire **race conditions** garantendo che operazioni critiche su risorse condivise siano atomiche rispetto ad altri accessi concorrenti.

### Proprietà richieste:
1. **Mutua esclusione vera e propria:** Al massimo un processo è nella sezione critica
2. **Assenza di deadlock:** Se un processo sta aspettando di entrare, almeno uno riuscirà eventualmente
3. **Assenza di starvation:** Un processo in attesa non deve aspettare indefinitamente
4. **Efficienza:** Il sovraccarico dei meccanismi di sincronizzazione deve essere minimo

### Meccanismi di implementazione:
- **Lock (Mutex):** Variabile booleana che protegge l'accesso
- **Semafori:** Contatori che regolano l'accesso a risorse
- **Monitor:** Costrutto di sincronizzazione di alto livello
- **Variabili di condizione:** Permettono ai thread di attendere fino a una specifica condizione

### Esempio concettuale:
```
// Sezione non critica
...

// ENTRATA nella sezione critica
ACQUIRE lock

// Sezione critica (solo un processo alla volta)
operazioni_su_risorsa_condivisa()

// USCITA dalla sezione critica
RELEASE lock

// Sezione non critica
...
```

### Problema della mutua esclusione:
Bilanciare tra **sicurezza** (evitare race conditions) e **performance** (minimizzare tempi di attesa).

---

## Soluzione a Turno (Alternating Turn)

**Idea:** Usare una variabile condivisa `turn` per determinare quale processo può entrare nella sezione critica.

### Codice (2 processi):
```
Variabili condivise:
  int turn = 0;  // 0 per processo P0, 1 per processo P1

Processo Pi:
  while (true) {
    // Sezione non critica
    
    // ENTRATA
    while (turn != i) {  // attendi il tuo turno
      ;  // busy waiting
    }
    
    // Sezione critica
    
    // USCITA
    turn = 1 - i;  // cedi il turno all'altro processo
    
    // Sezione non critica
  }
```

### Proprietà:
✅ **Mutua esclusione:** Garantita  
❌ **Assenza di starvation:** NO - Se P0 è più veloce di P1, P1 non entra quando finisce P0 se P0 non è subito pronto  
❌ **Flessibilità:** Rigida - Forza un ordine rigoroso

### Problema:
Se un processo è molto più lento o termina anticipatamente, l'altro processo non può procedere anche se la sezione critica è libera.

---

## Soluzione con Ready (Flag di Interesse)

**Idea:** Usare array di **flag booleani** per indicare se ogni processo vuole accedere alla sezione critica.

### Codice (2 processi):
```
Variabili condivise:
  boolean ready[2] = {false, false};

Processo Pi:
  while (true) {
    // Sezione non critica
    
    // ENTRATA
    ready[i] = true;  // segnala interesse
    while (ready[1-i]) {  // aspetta che l'altro non sia interessato
      ;  // busy waiting
    }
    
    // Sezione critica
    
    // USCITA
    ready[i] = false;  // rilascia interesse
    
    // Sezione non critica
  }
```

### Proprietà:
✅ **Mutua esclusione:** NO - **Race condition possibile!**  
❌ **Problema critico:** Se entrambi i processi leggono che l'altro non è interessato prima che uno scriva il proprio flag, entrambi entrano in sezione critica

### Perché fallisce:
Sequenza problematica:
1. P0 legge: `ready[1] = false` ✓ può entrare
2. P1 legge: `ready[0] = false` ✓ può entrare  
3. P0 scrive: `ready[0] = true`
4. P1 scrive: `ready[1] = true`
5. **ENTRAMBI entrano in sezione critica** ❌

### Soluzione: Algoritmo di Peterson
Combina **sia `ready` che `turn`** per risolvere il problema:
```
Variabili condivise:
  boolean ready[2] = {false, false};
  int turn = 0;

Processo Pi:
  while (true) {
    ready[i] = true;        // segnala interesse
    turn = 1 - i;           // dai priorità all'altro
    while (ready[1-i] && turn == 1-i) {  // aspetta se l'altro è interessato E ha priorità
      ;
    }
    
    // Sezione critica
    
    ready[i] = false;  // rilascia interesse
  }
```

Questa soluzione **garantisce mutua esclusione, assenza di deadlock e starvation**.

---

## Algoritmo di Peterson (Soluzione Completa)

**Inventore:** Gary L. Peterson (1981)  
**Applicabilità:** 2 processi  
**Modello:** Memoria condivisa con letture/scritture atomiche

### Pseudocodice Teorico (Versione Semplificata):

```
// Variabili globali condivise
boolean ready[2] = {false, false}
integer turn = 0

// Procedure di sincronizzazione
procedure ENTRY(i):
    ready[i] ← true                    // Segnala che vuoi entrare
    turn ← 1 - i                       // Dai priorità all'altro
    while (ready[1-i] AND turn = 1-i): // Se l'altro vuole E ha priorità
        (continua a controllare)       // Aspetta

procedure EXIT(i):
    ready[i] ← false                   // Rilascia interesse

// Programma principale per processo i
program PROCESS[i]:
    loop forever:
        <non-critical section>
        
        ENTRY(i)
        <critical section>
        EXIT(i)
```

### Semantica:

| Riga | Significato |
|------|-------------|
| `ready[i] ← true` | "Voglio entrare in sezione critica" |
| `turn ← 1-i` | "Tu vai prima, io aspetto" |
| Condizione while | "Se tu vuoi E io ti ho dato priorità, aspetta" |
| `ready[i] ← false` | "Ho finito, non voglio più entrare" |

**Invariante:** Al massimo un processo è in sezione critica per volta.

### Codice Completo in C (2 thread):
```c
#include <stdio.h>
#include <pthread.h>
#include <stdbool.h>
#include <unistd.h>

// Variabili condivise
volatile bool ready[2] = {false, false};
volatile int turn = 0;

// Contatore critico per test
int counter = 0;

void* process(void* arg) {
    int i = *(int*)arg;
    
    for (int iteration = 0; iteration < 5; iteration++) {
        // Sezione non critica
        printf("[P%d] Sezione non critica (iterazione %d)\n", i, iteration);
        usleep(100000);
        
        // ========== ENTRATA ==========
        ready[i] = true;              // (1) dichiara interesse
        turn = 1 - i;                 // (2) dai priorità all'altro
        
        while (ready[1-i] && turn == (1-i)) {  // (3) aspetta
            ;  // busy waiting
        }
        
        // ========== SEZIONE CRITICA ==========
        printf("[P%d] ENTRA sezione critica\n", i);
        
        // Operazione critica
        int temp = counter;
        usleep(50000);  // Simula lavoro critico
        counter = temp + 1;
        
        printf("[P%d] counter = %d (EXIT sezione critica)\n", i, counter);
        
        // ========== USCITA ==========
        ready[i] = false;             // (4) termina interesse
        usleep(100000);
    }
    
    return NULL;
}

int main() {
    pthread_t t0, t1;
    int id0 = 0, id1 = 1;
    
    printf("=== Algoritmo di Peterson ===\n");
    printf("Creazione di 2 thread...\n\n");
    
    pthread_create(&t0, NULL, process, &id0);
    pthread_create(&t1, NULL, process, &id1);
    
    pthread_join(t0, NULL);
    pthread_join(t1, NULL);
    
    printf("\n=== Risultato finale ===\n");
    printf("counter = %d (atteso: 10)\n", counter);
    printf("Nessuna race condition!\n");
    
    return 0;
}
```

### Punti Chiave del Codice C:

1. **`volatile`:** Obbligatorio per dire al compilatore di non ottimizzare le variabili condivise
2. **`pthread_t`:** Per creare e gestire i thread
3. **`pthread_create/join`:** Per avviare e sincronizzare i thread
4. **Test di race condition:** Il counter viene incrementato 10 volte (5 per thread)
   - **Con Peterson:** counter = 10 ✅
   - **Senza sincronizzazione:** counter potrebbe essere < 10 ❌

### Nota sulla Compilazione:
Su Linux/Mac:
```bash
gcc -o peterson peterson.c -lpthread -Wall
```

Su Windows (con MinGW):
```bash
gcc -o peterson.exe peterson.c -lpthread -Wall
```

### Perché Funziona - Analisi Formale:

**Claim 1: Mutua Esclusione** ✅
- Supponi che P0 e P1 siano entrambi in sezione critica
- P0 ha superato il while (condizione falsa)
- P1 ha superato il while (condizione falsa)
- **Impossibile:** Se `ready[0] = true` e `turn = 1`, allora P0 aspetta (perché `turn != 0`)
- La struttura logica implica che solo uno può superare il while contemporaneamente

**Claim 2: Assenza di Deadlock** ✅
- Se entrambi vogliono entrare, uno dei due ha `turn` a suo favore
- Quel processo entra e poi rilascia `ready`
- Non ci sono cicli di attesa infiniti

**Claim 3: Assenza di Starvation** ✅
- Se P0 attende, allora `ready[1] = true` e `turn = 0`
- P1 può eseguire: scrive `ready[1] = true`, poi `turn = 1`
- Ora P0 ha `turn != 1`, quindi esce dal while e entra

### Proprietà:

| Proprietà | Stato |
|-----------|-------|
| Mutua esclusione | ✅ Garantita |
| Assenza di deadlock | ✅ Garantita |
| Assenza di starvation | ✅ Garantita |
| Equità (fairness) | ✅ Garantita |
| Efficienza | ⚠️ Busy waiting |

### Limitazioni:

1. **Solo 2 processi:** Non scala a N processi (esiste generalizzazione di Lamport ma è complessa)
2. **Busy waiting:** Spreca cicli CPU (problema dei sistemi moderni)
3. **Dipendenza da atomicità:** Assume che letture e scritture siano atomiche
4. **Compilatore/CPU:** Ottimizzazioni aggressive possono rompere l'algoritmo (serve `volatile` in C/C++)

### Esempio di Ordine di Esecuzione Corretto:

```
Tempo | P0                    | P1                    | Stato
-----|------------------------|------------------------|----------------
  1  | ready[0] = true        |                       | ready={T,F}
  2  | turn = 1               |                       | turn=1
  3  | legge ready[1]=false   |                       |
  4  | while(false && ...) NO |                       |
  5  |                        | ready[1] = true       | ready={T,T}
  6  |                        | turn = 0               | turn=0
  7  |                        | legge ready[0]=true   |
  8  |                        | legge turn=0          |
  9  |                        | while(true && true)   | P1 ASPETTA
 10  | ENTRA SEZIONE CRITICA  |                       |
 11  | ... work ...           |                       |
 12  | ready[0] = false       |                       | ready={F,T}
 13  | EXIT SEZIONE CRITICA   |                       |
 14  |                        | while(false && ...)NO | 
 15  |                        | ENTRA SEZIONE CRITICA |
 16  |                        | ... work ...          |
```

### Importanza Storica:
- Primo algoritmo software che risolveva il problema della mutua esclusione per 2 processi
- Ha aperto la strada alla ricerca su algoritmi lock-free
- Dimostra che la sincronizzazione non richiede hardware speciale

### Quando Usare:
- ❌ **Non usare in pratica:** I sistemi moderni forniscono mutex/semafori più efficienti
- ✅ **Usare per:** Imparare i principi della sincronizzazione, prove formali, esami

### Alternativi Moderni:
- **Mutex (Kernel):** Sospende i thread, no busy waiting
- **Spinlock:** Versione ottimizzata con busy waiting ma su CPU multi-core
- **Atomic operations:** Hardware support per operazioni sincronizzate
- **Lock-free algorithms:** CAS (Compare-And-Swap), algoritmi basati su code atomiche
