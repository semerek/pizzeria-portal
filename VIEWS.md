# Dashboard

- `/`
    - statystyki dzisiejszych zamówień (zdalne i lokalne)
    - listę rezerwacji i eventów zaplanowanych na dzisiaj

# Logowanie

- `/login`
    - pola na login i hasło
    - guzik do zalogowania (link do dashboardu)

# Widok dostępności stolików

- `/tables`
    - wyboru daty i godziny 
    - tabelę z listą rezerwacji oraz wydarzeń
        - każda klumna = stolikiem
        - każdy wiersz = 30 min
        - ma przypominać widok tygodnia w kalendarzu Google, gdzie w kolumnach zamiast dni są różne stoliki 
        - po kliknięciu rezerwacji lub eventu, przechodzimy na stronę szczegółów
- `/tables/booking/:id`
    - zawiera wszystkie informacje dotyczące rezerwacji
    - umożliwia edycję i zapisanie zmian
- `/tables/booking/:id/new`
    - analogicznie do powyższej bez początkowych informacji
- `/tables/events/:id/new`
    - analogicznie do powyższej bez początkowych informacji
- `/tables/events/:id/new`
    - analogicznie do powyższej bez początkowych informacji


# Widok kelnera

- `/waiter`
    - tabela 
        - w wierszach stoliki
        - w kolumnach różne rodzaje informacji (status, czas od ostatniej aktywności)
        - w ostatniej kolumnie dostępne akcje dla danego stolika
- `/waiter/order/new`
    - numer stolika (edytowany)
    - menu produktów
    - opcje wybranego produktu
    - zamówienie (zamówione produkty z opcjami i ceną)
- `/waiter/order/:id`
    - jak powyższa

# Widok kuchni

- `/kitchen`
    - wyświetla listę zamówień w kolejności ich złożenia
    - lista musi zawierać:
        - numer stolika (lub zamówienia zdalnego
        - pełnw informacje dot. zamówionych dań na liście musi być możliwość oznaczenia zamówienia jako zrealizowane