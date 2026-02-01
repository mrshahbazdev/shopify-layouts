# Shopify Theme Submission Guide

This guide will walk you through the process of submitting your **Luxe Mega** theme to the Shopify Theme Store.

## Prerequisites

1.  **Shopify Partner Account**: You must have a [Shopify Partner Account](https://partners.shopify.com/). If you don't have one, sign up for free.
2.  **Theme Files**: The complete theme code is located in the `shopify_theme/` folder. A ready-to-upload zip file `luxe_mega_theme.zip` is included in the `complete_submission_package.zip`.

## Step 1: Validate Your Theme

Before submitting, it is highly recommended to run Shopify's automated checks.

### Using Shopify CLI (Recommended)
1.  Navigate to the theme directory:
    ```bash
    cd shopify_theme
    ```
2.  Run the theme check:
    ```bash
    shopify theme check
    ```

## Step 2: Prepare the Zip File

*   **Ready-to-use:** Use the `luxe_mega_theme.zip` file included in this package.

## Step 3: Upload to Partner Dashboard

1.  Log in to your [Shopify Partner Dashboard](https://partners.shopify.com/).
2.  Go to **Themes** > **Submit a theme**.
3.  Upload the `luxe_mega_theme.zip` file.

## Step 4: Fill in Listing Details

Use the following information to fill out the submission form:

### Overview
*   **Demo Store URL**: `https://test.com` (Note: You should ideally replace this with your own development store URL).
*   **Tagline**: `An editorial-inspired theme made for publishers`

### Industry & Catalog
*   **Industry**: Clothing & Accessories (or Fashion)
*   **Merchant Catalog Size**: Medium to Large (50-500 products)

### Screenshots
We have generated the required screenshots for you in the `submission_assets/` folder:
*   **Mobile Screenshot**: Upload `mobile_screenshot.png` (750px x 1334px).
*   **Desktop Screenshot**: Upload `desktop_screenshot.png` (1000px x 1248px).

## Step 5: The Review Process

Once submitted, Shopify's Theme Team will review your theme. This process can take several weeks.
Ensure your settings allow for customization (we implemented this via `settings_schema.json`) and that all strings are translatable (we set up the infrastructure in `locales/`).

---

**Good Luck!**
