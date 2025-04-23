# Price Tracker - Seguimiento de Precios

## Descripción

Price Tracker es una aplicación web diseñada para recopilar y analizar la evolución de los precios de productos a lo largo del tiempo. Mediante scraping periódico, se obtienen datos actualizados que se almacenan en una base de datos relacional, permitiendo generar gráficos e informes que facilitan el análisis de tendencias de mercado.

## Características

-   **Registro de Productos:** Almacena información esencial de cada producto, como nombre, imagen y precio actual.
-   **Historial de Precios:** Guarda cada cambio de precio con fecha de captura, fuente del dato y, opcionalmente, la variación respecto a precios anteriormente registrados.
-   **Scraping Programado:** Se implementa un proceso automatizado para obtener los precios de forma periódica (por ejemplo, semanalmente).
-   **Dashboard Interactivo:** Interfaz desarrollada en React que facilita la visualización de datos y la interpretación de tendencias mediante gráficos dinámicos.

## Tecnologías Utilizadas

-   **Backend:** Python, SQLAlchemy, (FastAPI o Django según la implementación)
-   **Base de Datos:** MySQL
-   **Frontend:** React
-   **Automatización y Scraping:** Herramientas de web scraping (como BeautifulSoup o Scrapy)

## Instalación

1. **Clonar el repositorio:**
    ```bash
    git clone https://github.com/tu-usuario/price-tracker.git
    cd price-tracker
    ```
