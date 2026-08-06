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
pretty_name: Philippines PCSO Draw Schedule and Result Format
size_categories:
  - n<1K
---

# Philippines PCSO Draw Schedule and Result Format

This small public-information dataset documents normal draw days, Philippine-time
draw windows, result formats, and field definitions for the major Philippine Charity
Sweepstakes Office games covered by LottoLens PH.

## Dataset contents

- `pcso-draw-schedule.csv`: one row per game, including normal schedule, expected
  result structure, official source, and a LottoLens PH reference page.
- `field-definitions.csv`: definitions for each published field.

Covered games include 2D Lotto, 3D Lotto, 4D Lotto, 6D Lotto, Lotto 6/42,
Mega Lotto 6/45, Super Lotto 6/49, Grand Lotto 6/55, and Ultra Lotto 6/58.

## Intended uses

- Schedule validation and data-quality checks
- Research and educational examples
- Building result-verification or calendar tools
- Journalism and public-information workflows

This dataset does not contain predictions and must not be used to claim guaranteed
outcomes. Holiday suspensions, special draws, and official advisories may change the
normal schedule.

## Source and verification

The schedule is compiled from public PCSO game information and draw-schedule materials.
Use the [official PCSO website](https://www.pcso.gov.ph/) as the final authority for
current results and special advisories.

Supporting documentation:

- [Coverage and methodology report](https://lottolensph.com/research/pcso-results-data-coverage)
- [PCSO result verification guide](https://lottolensph.com/guides/verify-pcso-results)
- [Live result history](https://lottolensph.com/history)
- [Source repository](https://github.com/remo65588-boop/lottolens-ph-public-data)

## License and citation

Original documentation and field definitions are available under CC BY 4.0.
Persistent DOI: [10.5281/zenodo.21683518](https://doi.org/10.5281/zenodo.21683518).

```bibtex
@dataset{lottolens_ph_2026,
  author    = {{LottoLens PH Editorial}},
  title     = {LottoLens PH Public PCSO Draw Schedule Data},
  year      = {2026},
  version   = {1.1.0},
  publisher = {Zenodo},
  doi       = {10.5281/zenodo.21683518},
  url       = {https://doi.org/10.5281/zenodo.21683518}
}
```

## Limitations

The files describe normal schedules rather than a complete archive of winning numbers.
They are independently maintained and are not affiliated with or endorsed by PCSO.
