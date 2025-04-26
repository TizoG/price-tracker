# Importar Playwright para gestionar el navegador
import json
from playwright.sync_api import sync_playwright

# URL_PRODUCT = input("Introduce la dirección url: ")


def scraper_amazon(URL_PRODUCT):
    # Iniciar Playwright y abrir un navegador sin interfaz gráfica (headless)
    with sync_playwright() as p:
        # Usar chrome como navegador
        browser = p.chromium.launch(headless=True)

        # Crear una nueva página dentro del navegador
        page = browser.new_page()

        # Ir a la URL del producto de Amazon
        page.goto(URL_PRODUCT)

        # Esperar a que la página cargue completamnete para evitar errores
        page.wait_for_load_state("networkidle")

        # Buscar el título del producto por su ID en la página
        title_element = page.locator("title").text_content()

        # Buscar el precio del producto por su clase en la página
        price_element = page.locator(
            "#corePrice_feature_div .a-price-whole").text_content()

        # Buscar la URL de la imagen del producto
        image_element = page.locator(
            "#imgTagWrapperId #landingImage").get_attribute("src")

        # Guardar la información del producto en un diccionario
        product_data = {
            "name": title_element,
            "price": price_element,
            "image": image_element
        }

        # Mostramos los productos
        print(json.dumps(product_data, ensure_ascii=False, indent=4))

        # Cerramos el navegador cuando terminemos
        browser.close()

    return product_data
