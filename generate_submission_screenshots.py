import os
from playwright.sync_api import sync_playwright

def generate_screenshots():
    # Define paths
    base_dir = os.getcwd()
    html_file = os.path.join(base_dir, "modern_shopify_layouts", "mega_template_20_sections.html")
    output_dir = os.path.join(base_dir, "submission_assets")

    file_url = f"file://{html_file}"

    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()

        # Load the page
        print(f"Loading {file_url}...")
        page.goto(file_url)

        # 1. Mobile Screenshot (750px by 1334px)
        print("Taking mobile screenshot...")
        page.set_viewport_size({"width": 750, "height": 1334})
        # Wait a bit for images/fonts to load
        page.wait_for_timeout(2000)
        page.screenshot(path=os.path.join(output_dir, "mobile_screenshot.png"))

        # 2. Desktop Screenshot (1000px by 1248px)
        print("Taking desktop screenshot...")
        page.set_viewport_size({"width": 1000, "height": 1248})
        page.wait_for_timeout(1000)
        page.screenshot(path=os.path.join(output_dir, "desktop_screenshot.png"))

        browser.close()
        print("Screenshots saved to submission_assets/")

if __name__ == "__main__":
    generate_screenshots()
