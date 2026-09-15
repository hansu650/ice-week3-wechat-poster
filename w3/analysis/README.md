# Data analysis and paper comparison

Start with the [analysis report](report.md). It explains the figures, compares the three study designs, distinguishes correlations from model paths, and documents what the evidence cannot establish.

Run `node w3/analysis/analyze_wechat.mjs` from the repository root with an existing Node.js installation. No third-party packages or network access are required.

- [Source data](../data/wechat_evidence.json): reported aggregate values and original-source links.
- [Analysis script](analyze_wechat.mjs): reproducible growth, retention and sample-share calculations.
- [Metric table](metrics.csv): 49 labelled rows, with units, populations and reported significance.
- [Structured results](summary.json): annual growth and all reported model/correlation values.
- [Validation](validation.json): ten arithmetic/structure checks.

This is secondary analysis of published aggregate evidence. Raw respondent data are not supplied, so the original correlations, model coefficients and p-values are not re-estimated. Prepared with AI assistance for Team Leader Tian Qin; other members' completed work is not inferred.
