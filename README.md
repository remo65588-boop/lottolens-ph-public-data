# LottoLens PH Public PCSO Schedule and Historical Results Data

[![Version](https://img.shields.io/badge/version-v2.1.0-blue)](https://github.com/remo65588-boop/lottolens-ph-public-data/tree/v2.1.0)

This repository publishes reusable reference data for the Philippine Charity
Sweepstakes Office (PCSO) games covered by LottoLens PH. It includes the normal
draw schedule and a historical results snapshot with row-level source links.

Public dataset page:

- https://remo65588-boop.github.io/lottolens-ph-public-data/

## Files

- `data/pcso-draw-schedule.csv` - normal draw days, times, and result formats.
- `data/verified-pcso-draw-results-snapshot.csv` - 13,457 historical result rows.
- `data/field-definitions.csv` - definitions for every published field.
- `datapackage.json` - Frictionless Data metadata and table schemas.
- `api/` - free, no-auth, CORS-enabled static JSON endpoints and OpenAPI 3.1 documentation.
- `postman/` - importable Postman Collection with executable checks for all three API endpoints.
- `apis.json` - APIs.json 0.19 discovery metadata.
- `huggingface/` - publication-ready Hugging Face dataset card.
- `kaggle/` - publication-ready Kaggle metadata template.

## Historical results snapshot

The snapshot contains 13,457 rows across nine digit and jackpot games. Coverage
runs from 2022-01-02 through 2026-07-20, with game-specific start and end dates.
Each row keeps its source name and source URL so users can inspect provenance.

Validation performed before publication:

- all rows have nine CSV fields;
- no duplicate `lottery_slug + draw_date + draw_time` keys;
- no empty winning-number fields;
- all status values are `published`;
- no draw date is later than the 2026-08-07 snapshot publication date.

This is an independently compiled historical snapshot, not an official PCSO
database. Rows may cite PCSO or third-party public result archives. Use the
official PCSO website or official PCSO channels as the final authority.

## Live resources

- [Latest PCSO results and draw schedule](https://lottolensph.com/results)
- [Historical draw archive](https://lottolensph.com/history)
- [Lottery trend charts](https://lottolensph.com/trends)
- [PCSO results data coverage and methodology report](https://lottolensph.com/research/pcso-results-data-coverage)

## Static JSON API

The fixed snapshot is also available through versioned, read-only JSON endpoints:

- Documentation: https://remo65588-boop.github.io/lottolens-ph-public-data/api/
- Metadata: https://remo65588-boop.github.io/lottolens-ph-public-data/api/v1/metadata.json
- Results: https://remo65588-boop.github.io/lottolens-ph-public-data/api/v1/results.json
- Schedule: https://remo65588-boop.github.io/lottolens-ph-public-data/api/v1/schedule.json
- OpenAPI: https://remo65588-boop.github.io/lottolens-ph-public-data/api/openapi.yaml
- Postman Collection: https://raw.githubusercontent.com/remo65588-boop/lottolens-ph-public-data/main/postman/LottoLens-PH-Public-PCSO-Data.postman_collection.json

The API requires no authentication, uses HTTPS, and is served with cross-origin
access enabled. Version `v1` is a fixed snapshot, not a live result feed.

## Data scope

The package covers:

- 2D Lotto
- 3D Lotto
- 4D Lotto
- 6D Lotto
- Lotto 6/42
- Mega Lotto 6/45
- Super Lotto 6/49
- Grand Lotto 6/55
- Ultra Lotto 6/58

All times use Philippine Time (PHT, UTC+8). The schedule describes normal draw
windows. Holiday suspensions, special draws, and official advisories can change
the schedule.

## Source and verification

Schedule data is compiled from public PCSO game information and draw-schedule
materials. Historical results retain row-level provenance in `source_name` and
`source_url`. The LottoLens PH verification workflow checks structure,
uniqueness, winning-number presence, status, and date bounds before a snapshot
is published.

Official source:

- https://www.pcso.gov.ph/

## Responsible use

This dataset is provided for public information, data checking, education, and
research. It does not predict future results and does not guarantee a win.
LottoLens PH is an independent information project and is not affiliated with
or endorsed by PCSO.

## Updates

The schedule is reviewed after material PCSO schedule changes. Historical
results are published as versioned snapshots rather than silently rewritten.
The live LottoLens PH archive may be newer than the downloadable snapshot.

## License

Original documentation and field definitions are released under the Creative
Commons Attribution 4.0 International license. Underlying public facts remain
subject to their original sources.

## Citation

Citation metadata is available in `CITATION.cff`. Cite the fixed v2.1.0 source
tag below for the complete 13,457-row snapshot and its documentation:

- https://github.com/remo65588-boop/lottolens-ph-public-data/tree/v2.1.0

The earlier schedule-focused archive remains available for historical
reference at https://doi.org/10.5281/zenodo.21683518. The Figshare DOI formerly
shown here was removed by Figshare and is no longer a valid public citation.
The Zenodo DOI should not be cited as the identifier for the expanded
historical-results snapshot.
