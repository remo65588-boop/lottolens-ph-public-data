# Hugging Face publication package

Create a public dataset repository, then copy these files to its root:

1. `huggingface/README.md` as `README.md`
2. `data/pcso-draw-schedule.csv`
3. `data/field-definitions.csv`
4. `LICENSE`
5. `CITATION.cff`
6. `datapackage.json`

Recommended repository slug: `philippines-pcso-draw-schedule`

After publication, verify while logged out that the dataset page returns HTTP 200 and
visibly links the LottoLens PH methodology and verification pages. Do not store Hugging
Face access tokens in this repository.
