# LottoLens PH Public PCSO Schedule and Historical Results Data

[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.21683518.svg)](https://doi.org/10.5281/zenodo.21683518)

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

Citation metadata is available in `CITATION.cff` and `.zenodo.json`.

The DOI currently resolves to the earlier schedule-focused release. A new
Zenodo version is required before describing the DOI as covering this expanded
historical-results snapshot.

- https://doi.org/10.5281/zenodo.21683518
