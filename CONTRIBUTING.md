# Contributing to LottoLens PH Public Data

Thank you for helping improve the LottoLens PH public PCSO dataset.

## Ways to contribute

You can:

- report an incorrect draw result or source link;
- propose a verified missing row;
- improve field definitions, methodology, or citation guidance;
- suggest a reproducible validation check;
- fix documentation, accessibility, or metadata issues.

## Before opening an issue or pull request

1. Search existing issues and pull requests for the same problem.
2. Use a public, inspectable source. Official PCSO material is preferred when available.
3. Identify the affected game, draw date, draw time, field, and current value.
4. Include the proposed corrected value and the source URL.
5. Do not submit predictions, gambling advice, private data, copied paywalled material, or unverifiable claims.

## Data corrections

For a historical-results correction, provide:

- lottery slug and display name;
- draw date and scheduled draw time;
- current winning result;
- proposed winning result;
- source name and direct source URL;
- a short explanation of how you verified the change.

Rows should preserve the existing CSV schema and use Philippine Time (PHT, UTC+8).

## Pull request checklist

- [ ] The change is limited to one clear, reviewable purpose.
- [ ] CSV rows keep the documented field order.
- [ ] No duplicate lottery_slug + draw_date + draw_time key is introduced.
- [ ] Winning-number fields are not empty.
- [ ] Dates and times use the documented formats.
- [ ] Source URLs are public and directly support the change.
- [ ] Documentation and metadata are updated when the schema or scope changes.
- [ ] No generated files or unrelated formatting changes are included.

## Review and publication

Maintainers verify source quality, schema validity, uniqueness, date bounds, and documentation consistency before accepting a change. A pull request may be held when the supporting source is unavailable or contradictory.

Accepted corrections are included in a future versioned snapshot. Historical releases are not silently rewritten.

## Conduct

By participating, you agree to follow the repository's `CODE_OF_CONDUCT.md`.

## Questions

Open a GitHub issue for public questions about the dataset, methodology, or contribution process.

