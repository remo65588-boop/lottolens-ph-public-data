# Kaggle publication package

This directory contains the metadata template for publishing the historical
results snapshot, schedule, and field definitions as a Kaggle dataset.

Before publication:

1. Copy `data/verified-pcso-draw-results-snapshot.csv`,
   `data/pcso-draw-schedule.csv`, and `data/field-definitions.csv` into the
   upload directory.
2. Copy `dataset-metadata.template.json` to `dataset-metadata.json`.
3. Replace `KAGGLE_USERNAME` with the actual Kaggle account name.
4. Confirm the dataset remains public, informational, and licensed CC BY 4.0.
5. Verify that the description identifies the historical file as an independent
   compilation and does not claim official PCSO ownership or prediction value.

Do not add API credentials or account tokens to this repository.
