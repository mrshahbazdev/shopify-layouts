# Shopify Theme Submission Guide

This guide will walk you through the process of submitting your **Luxe Mega Theme** to the Shopify Theme Store.

## Prerequisites

1.  **Shopify Partner Account**: You must have a [Shopify Partner Account](https://partners.shopify.com/). If you don't have one, sign up for free.
2.  **Theme Files**: The complete theme code is located in the `shopify_theme/` folder of this repository. A ready-to-upload zip file `luxe_mega_theme.zip` has also been generated for you.

## Step 1: Validate Your Theme

Before submitting, it is highly recommended to run Shopify's automated checks to ensure your theme meets the technical requirements.

### Using Shopify CLI (Recommended)
If you have the [Shopify CLI](https://shopify.dev/docs/themes/tools/cli) installed:

1.  Navigate to the theme directory:
    ```bash
    cd shopify_theme
    ```
2.  Run the theme check:
    ```bash
    shopify theme check
    ```
3.  Fix any errors or warnings reported. Common issues include:
    *   Missing translations in `locales/`.
    *   Hardcoded URLs (ensure you use `asset_url` filters).
    *   Missing `width` and `height` attributes on images (use `image_url` filter parameters).

## Step 2: Prepare the Zip File

Shopify accepts themes in `.zip` format.
*   **We have generated this for you:** The file `luxe_mega_theme.zip` in the root of this project contains all the necessary files.
*   **Manual Method:** If you modify the files and need to zip it again, ensure you zip the *contents* of the `shopify_theme` folder, not the folder itself.
    ```bash
    cd shopify_theme
    zip -r ../luxe_mega_theme.zip *
    ```

## Step 3: Upload to Partner Dashboard

1.  Log in to your [Shopify Partner Dashboard](https://partners.shopify.com/).
2.  Go to **Themes** in the left sidebar.
3.  Click **Submit a theme**.
4.  Enter the **Theme Name** (e.g., "Luxe").
5.  Upload the `luxe_mega_theme.zip` file.
6.  Fill in the required details:
    *   **Description**: Describe the theme's style (Modern, Minimal, etc.) and target industries.
    *   **Price**: Set your desired price (usually between $180 - $350 USD).
    *   **Features**: Select the features your theme supports (e.g., Slideshow, Video, FAQ, etc.).

## Step 4: The Review Process

Once submitted, Shopify's Theme Team will review your theme. This process can take **several weeks**.

### Common Rejection Reasons to Avoid:
*   **Performance**: Low Lighthouse scores (aim for >90 on Performance, Accessibility, SEO).
*   **Accessibility**: Missing `aria-labels`, poor color contrast, or no keyboard navigation support.
*   **Settings**: Hardcoded values instead of using the Theme Editor settings. (We fixed this in `theme.liquid`).
*   **Empty States**: Sections looking broken when no content is added. (We added placeholders to most sections).

## Step 5: Publishing

If approved:
1.  You will receive an email from Shopify.
2.  You may need to make minor requested changes.
3.  Once finalized, your theme will be listed on the Shopify Theme Store!

---

**Good Luck!**
