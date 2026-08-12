---
license: cc-by-4.0
language:
  - en
tags:
  - philippines
  - pcso
  - lottery-results
  - draw-schedule
  - open-data
pretty_name: Philippines PCSO Schedule and Historical Results
size_categories:
  - 10K<n<100K
---

# Philippines PCSO Schedule and Historical Results

This public-information dataset documents normal draw days and a 13,457-row
historical results snapshot for nine Philippine Charity Sweepstakes Office games.

## Dataset contents

- `pcso-draw-schedule.csv`: one row per game, including normal schedule, expected
  result structure, official source, and a LottoLens PH reference page.
- `verified-pcso-draw-results-snapshot.csv`: independently compiled historical
  result rows with date, time, winning numbers, publication status, and source links.
- `field-definitions.csv`: definitions for each published field.

Covered games include 2D Lotto, 3D Lotto, 4D Lotto, 6D Lotto, Lotto 6/42,
Mega Lotto 6/45, Super Lotto 6/49, Grand Lotto 6/55, and Ultra Lotto 6/58.

## Intended uses

- Schedule validation and data-quality checks
- Research and educational examples
- Building result-verification or calendar tools
- Journalism and public-information workflows

This dataset does not contain predictions and must not be used to claim guaranteed
outcomes. The historical file is an independent compilation, not an official PCSO
database. Holiday suspensions, special draws, and official advisories may change the
normal schedule.

## Source and verification

The schedule is compiled from public PCSO game information and draw-schedule materials.
Historical rows retain public source names and URLs for provenance review.
Use the [official PCSO website](https://www.pcso.gov.ph/) as the final authority for
current results and special advisories.

Supporting documentation:

- [Coverage and methodology report](https://lottolensph.com/research/pcso-results-data-coverage)
- [PCSO result verification guide](https://lottolensph.com/guides/verify-pcso-results)
- [Live result history](https://lottolensph.com/history)
- [Source repository](https://github.com/remo65588-boop/lottolens-ph-public-data)

## License and citation

Original documentation and field definitions are available under CC BY 4.0.
Fixed source version: [v2.1.0](https://github.com/remo65588-boop/lottolens-ph-public-data/tree/v2.1.0).

```bibtex
@dataset{lottolens_ph_2026,
  author    = {{LottoLens PH Editorial}},
  title     = {LottoLens PH Public PCSO Schedule and Historical Results Data},
  year      = {2026},
  version   = {2.1.0},
  publisher = {LottoLens PH Editorial},
  url       = {https://github.com/remo65588-boop/lottolens-ph-public-data/tree/v2.1.0}
}
```

## Limitations

The historical snapshot is not guaranteed to be complete or current beyond its
2026-07-20 maximum coverage date. It is independently maintained and is not
affiliated with or endorsed by PCSO.
