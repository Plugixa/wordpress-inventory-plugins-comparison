# WordPress Inventory Plugins Compared

A sourced comparison of the maintained WordPress inventory and stock plugins: ATUM, Stock Manager for WooCommerce, Stock Locations for WooCommerce, WP Inventory Manager, WP ERP, Zintory, Bizuno and Plugixa Inventory.

**Read it here: <https://plugixa.github.io/wordpress-inventory-plugins-comparison/>** (English, Français, Español, Deutsch, Italiano)

Every value links to the vendor page or plugin code it came from. Where a value could not be confirmed, the table says "Not checked".

> Maintained by [Plugixa](https://www.plugixa.com/), the makers of [Plugixa Inventory](https://wordpress.org/plugins/plugixa-inventory/), one of the plugins compared. See the [methodology](https://plugixa.github.io/wordpress-inventory-plugins-comparison/methodology/) for how that conflict of interest is handled.

<!-- generated:start -->
| Plugin | Best for | Active installs | Rating (count) | Paid from |
|---|---|---|---|---|
| [Plugixa Inventory](https://plugixa.github.io/wordpress-inventory-plugins-comparison/plugins/plugixa-inventory/) | Best free multi-warehouse stock ledger | new | – | €69/yr |
| [Stock Manager for WooCommerce](https://plugixa.github.io/wordpress-inventory-plugins-comparison/plugins/stock-manager-for-woocommerce/) | Best for quick bulk stock edits | 20,000+ | 4.18 (130) | Free only |
| [ATUM Inventory Management](https://plugixa.github.io/wordpress-inventory-plugins-comparison/plugins/atum/) | Best free core for WooCommerce stock | 10,000+ | 4.66 (128) | €105/yr |
| [WP ERP](https://plugixa.github.io/wordpress-inventory-plugins-comparison/plugins/wp-erp/) | Best for HR and accounting together | 5,000+ | 4.38 (149) | $474/yr |
| [WP Inventory Manager](https://plugixa.github.io/wordpress-inventory-plugins-comparison/plugins/wp-inventory-manager/) | Best for public inventory catalogues | 1,000+ | 4.56 (32) | $79.99/yr |
| [Stock Locations for WooCommerce](https://plugixa.github.io/wordpress-inventory-plugins-comparison/plugins/stock-locations-for-woocommerce/) | Best free per-location stock for WooCommerce | 900+ | 4.75 (53) | $70 once |
| [Zintory – Inventory Manager](https://plugixa.github.io/wordpress-inventory-plugins-comparison/plugins/zintory/) | Best for simple transaction-based stock tracking | 30+ | 5 (2) | $59 once |
| [Bizuno Accounting – ERP](https://plugixa.github.io/wordpress-inventory-plugins-comparison/plugins/bizuno/) | Best free full ERP inventory | 20+ | 4.5 (4) | Free only |
<!-- generated:end -->

Install counts and ratings come from the wordpress.org plugin API and are refreshed weekly.

## Pages

- [Full feature table](https://plugixa.github.io/wordpress-inventory-plugins-comparison/#table)
- [Best WordPress inventory plugins](https://plugixa.github.io/wordpress-inventory-plugins-comparison/best/best-wordpress-inventory-plugins/)
- [Best free inventory plugins](https://plugixa.github.io/wordpress-inventory-plugins-comparison/best/best-free-inventory-plugins/)
- [Best WooCommerce inventory plugins](https://plugixa.github.io/wordpress-inventory-plugins-comparison/best/woocommerce-inventory-plugins/)
- [Inventory plugins without WooCommerce](https://plugixa.github.io/wordpress-inventory-plugins-comparison/best/inventory-plugins-without-woocommerce/)
- [Inventory plugins for several warehouses](https://plugixa.github.io/wordpress-inventory-plugins-comparison/best/multi-warehouse-inventory-plugins/)
- [ATUM vs Stock Manager for WooCommerce](https://plugixa.github.io/wordpress-inventory-plugins-comparison/compare/atum-vs-stock-manager-for-woocommerce/)
- [ATUM alternatives](https://plugixa.github.io/wordpress-inventory-plugins-comparison/alternatives/atum/)

## Corrections

Found a wrong or outdated value? [Open an issue](https://github.com/Plugixa/wordpress-inventory-plugins-comparison/issues/new) with a link to the vendor page that shows the correct one. Vendors are welcome to correct their own entries.

## How it works

| Path | Contents |
|---|---|
| `src/data/features.yaml` | The feature list |
| `src/data/products/*.yaml` | Facts per plugin; each checked value names its source |
| `src/data/wporg/*.json` | wordpress.org numbers, written by `npm run wporg` |
| `src/data/pages.yaml` | Which versus, alternatives and best-of pages exist |
| `src/i18n/{en,fr,es,de,it}/` | All text, one folder per language |

The build fails if a checked value has no source, or if a "partial" value has no note.

```sh
npm install
npm run dev      # local preview
npm run wporg    # refresh wordpress.org numbers
npm run readme   # regenerate the table above
npm run build    # output in dist/
```

To publish under another address, change `SITE` and `BASE` in `astro.config.mjs`.

## Licence

Code: MIT. Data and text: CC BY 4.0. Plugin names are trademarks of their owners.
