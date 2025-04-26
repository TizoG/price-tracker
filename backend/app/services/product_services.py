"""
📌 Explicación del proceso:
1️⃣ Recibe la URL → El usuario proporciona la URL del producto de Amazon.
2️⃣ Normaliza la URL → Se eliminan parámetros innecesarios para evitar bloqueos y asegurar una URL limpia.
3️⃣ Comprueba si el producto ya existe en la base de datos → Si el producto está almacenado, se actualiza. Si no, se crea uno nuevo.
4️⃣ Llama al scraper → Ejecuta Playwright o la herramienta de scraping definida para obtener información actualizada del producto
(nombre, precio, imagen).
5️⃣ Actualiza o crea el producto → Si el producto ya existía, se actualizan los datos con la nueva información;
   si es nuevo, se guarda en la DB.
6️⃣ Añade registro al historial de precios → Guarda la evolución del precio en un historial para futuras comparaciones.

🔹 En resumen, este servicio conecta el scraping con la base de datos para mantener los productos actualizados
y con un historial de precios. 🚀
"""

from urllib.parse import urlparse
from app.scraper.amazon import scraper_amazon
from app.bbdd.database import connetion, Base
from app.api.products.api_products import get_products, post_product
from backend.app.models.price_history import PriceHistory
from backend.app.models.products import Products
from backend.app.schemas.product_schemas import ProductSchema


def normalize_url(url: str) -> str:
    """
    📌 **Normaliza una URL de Amazon**
    ✅ Extrae el identificador único (ASIN) del producto.
    ✅ Elimina parámetros innecesarios de la URL.

    🔹 **Parámetros:**  
    - `url`: La URL completa del producto en Amazon.

    🔹 **Retorno:**  
    - La URL limpia con formato `https://www.amazon.es/dp/{ASIN}`
    - Retorna `"URL no válida"` si la URL no contiene un identificador de producto.

    """
    parsed_url = urlparse(url)
    path_parts = parsed_url.path.split("/")

    if "dp" in path_parts:
        product_id = path_parts[path_parts.index("dp") + 1]
        return f"https://www.amazon.es/dp/{product_id}"

    return "URL no válida"


def scraper():
    """
    📌 **Proceso de scraping y almacenamiento de productos**
    ✅ Obtiene la URL del usuario.
    ✅ Scrapear el producto desde Amazon usando Playwright.
    ✅ Comprueba si el producto ya existe en la BD.
    ✅ Si no existe, lo inserta junto con su historial de precios.

    🔹 **Retorno:**  
    - Mensajes indicando éxito o errores en el proceso.
    """

    # Nos conectamos a la Base de Datos
    try:
        # Consulta de prueba para validar conexión
        connetion.execute("SELECT 1")
        print("✅ Conexión establecida con la Base de datos.")
    except Exception as e:
        print(f"❌ Error: No hay conexión con la base de datos. {e}")
        return

    # Introducir la URL del producto
    url = input("Introduce la URL del producto: ").strip()
    if not url:
        print("❌ Error: No se ha introducido una URL válida.")
        return

    # Normalizar la URL
    product_url = normalize_url(url)
    if product_url == "URL no válida":
        print("❌ Error: La URL introducida no es válida.")
        return

    # Scraping del producto desde Amazon
    try:
        product_scraper = scraper_amazon(product_url)
        if product_scraper is None:
            raise Exception("El scraping no devolvió datos válidos.")
    except Exception as e:
        print(f"❌ Error al scrapear el producto: {e}")
        return

    # Consultar si el producto ya existe en la Base de Datos
    try:
        db_product = get_products(product_scraper.name)
    except Exception as e:
        print(f"❌ Error al consultar la BD: {e}")
        return

    # Si el producto no está en la BD, crearlo y añadir el historial de precios
    if db_product is None:
        if not all([product_scraper.get("name"), product_scraper.get("price"), product_scraper.get("image")]):
            print("❌ Error: Datos del producto incompletos.")
            return

        try:
            product_data = ProductSchema(**product_scraper)
            post_product(product_data)
            print("✅ Producto registrado correctamente en la Base de Datos.")
        except Exception as e:
            print(f"❌ Error al insertar el producto en la BD: {e}")
            return


if __name__ == "__main__":
    scraper()
