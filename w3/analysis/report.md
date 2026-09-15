# WeChat: reproducible data analysis and paper comparison

**Team Leader: Tian Qin.** Prepared with AI assistance for the W3 poster. Repository uploads are coordinated centrally by Tian Qin. No unverified member contribution is claimed.

## Scope and reproduction

The input contains published aggregate figures, not raw survey responses collected by this team. The script reproduces descriptive calculations and exports the reported coefficients; it does not refit the original models or calculate new p-values.

Run with an existing Node.js installation, with no third-party packages:

    node w3/analysis/analyze_wechat.mjs

Outputs: `summary.json`, `metrics.csv`, `report.md`, `validation.json`.

## 1. Platform scale: level and growth answer different questions

| Year-end | Combined active accounts (million) | Net addition (million) | Annual growth (%) |
| --- | --- | --- | --- |
| 2021 | 1268.2 | — | — |
| 2022 | 1313.2 | 45.0 | 3.55 |
| 2023 | 1343.0 | 29.8 | 2.27 |
| 2024 | 1385.0 | 42.0 | 3.13 |
| 2025 | 1418.0 | 33.0 | 2.38 |

The reported annual series rises by **149.8 million accounts (11.81%)** from 2021 to 2025. Annual additions fluctuate; growth is positive in each interval but is not steadily accelerating. These calculations inherit the rounding of the published totals.

The separate **30 June 2026** observation is **1,439 million**. It is not added as another year-end point. Accounts are not unique people or a China-only population count. These totals describe platform activity, not satisfaction or causal business effects.

Sources: [Tencent Holdings Limited, Annual Report 2022](https://static.www.tencent.com/uploads/2023/04/06/214dce4c5312264800b20cfab64861ba.pdf); [Tencent Holdings Limited, Annual Report 2025](https://static.www.tencent.com/uploads/2026/04/09/62d786fcf3d3c8cb7e54791ee95439ac.pdf); [Tencent Offering Circular, published 9 June 2026](https://www.hkexnews.hk/listedco/listconews/sehk/2026/0609/2026060900199.pdf); [Tencent Holdings Limited, Interim Report 2026](https://www.tencent.com/wp-content/uploads/2026/08/E700_IR.pdf).

## 2. Commerce: intention and perceived value

| Predictor | Correlation with repurchase intention (r) |
| --- | --- |
| Utilitarian value | 0.661 |
| Hedonic value | 0.584 |
| Recommendations | 0.417 |
| Feedback | 0.414 |
| Interactivity | 0.404 |

Guo and Li analyse **514 valid WeChat-shopper questionnaires**. Utilitarian and hedonic value have numerically larger correlations than the three platform features shown. Their standardized paths in the structural model are Utilitarian value **0.485** and Hedonic value **0.284**, both reported p < .001. Those model paths must remain separate from the correlations above.

**Critical reading:** this is a selected, self-report shopper sample and a cross-sectional model. It concerns intention, not verified purchases. The ordering of coefficients is descriptive; it is not a test that two coefficients differ significantly.

**Our interpretation:** useful product information and enjoyable interaction are reasonable design questions to investigate. The study does not establish that introducing either will increase actual sales.

Source: [Guo, J., & Li, L. (2022). Exploring the Relationship Between Social Commerce Features and Consumers’ Repurchase Intentions: The Mediating Role of Perceived Value.](https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2021.775056/full) (Table 4, Figure 2 and sample description).

## 3. Social connections: retain significant and nonsignificant results

| Earlier interaction | Bonding beta (reported p) | Bridging beta (reported p) |
| --- | --- | --- |
| Association | 0.11 (p < .05) | 0.04 (p = .31) NS |
| Private interaction | 0.14 (p < .01) | 0.07 (p = .12) NS |
| Broadcasting | 0.01 (p = .78) NS | 0.13 (p < .05) |
| Reviewability | -0.02 (p = .68) NS | 0.11 (p < .05) |

The two-wave panel retained **740 of 1202 respondents (61.56%)**. All eight focal paths, including four nonsignificant paths, are preserved. Bonding concerns support and trust within close ties; bridging concerns resources across wider connections. Neither is a count of contacts.

**Critical reading:** the temporal design relates earlier use to later social capital while accounting for earlier outcome levels and selected covariates, but remains observational. Attrition and other unmeasured differences can affect interpretation. NS does not mean proof of no relationship.

**Our interpretation:** a group can choose communication routines according to its purpose, while treating the reported associations as evidence to discuss rather than guaranteed intervention effects.

Source: [Zhang, L., & Jung, E. H. (2023). Time counts? A two-wave panel study investigating the effects of WeChat affordances on social capital and well-being.](https://academic.oup.com/jcmc/article/28/1/zmac030/6827860) (Structural model, Figure 2, sample and data collection).

## 4. Overload: compare outcomes without inventing a causal threshold

| Pressure | Fatigue beta | Anxiety beta |
| --- | --- | --- |
| Social comparison | 0.137 | 0.190 |
| Privacy concern | 0.207 | 0.209 |
| Information overload | 0.097 | 0.228 |
| Functional overload | 0.187 | 0.221 |
| Social overload | 0.301 | 0.214 |

All ten paths are reported p < .01. Social overload has the numerically largest fatigue coefficient in this model; information overload has the largest anxiety coefficient. This ordering does not establish significant differences between coefficients. Paths from fatigue and anxiety to lurking are **0.291** and **0.126**, respectively (both reported p < .01). Lurking means observing content without active participation.

| Reported daily WeChat time | Respondents | Share of study sample |
| --- | --- | --- |
| < 2 h | 309 | 37.0% |
| 2–4 h | 374 | 44.7% |
| 4–6 h | 105 | 12.6% |
| > 6 h | 48 | 5.7% |

**Critical reading:** these **836 respondents**, surveyed in January–February 2024, are not a national user census. The time bins are copied from the paper; the largest category does not define a healthy or safe time limit. The cross-sectional self-report design cannot establish whether overload caused fatigue, anxiety or lurking.

**Our interpretation:** clearer response expectations and fewer duplicate messages are possible practices to trial. Their effects were not tested in this research.

Source: [Liu, X., Feng, R., Chen, X., & Yuan, Y. (2024). “Left on read” examining social media users’ lurking behavior: an integration of anxiety and social media fatigue.](https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2024.1406895/full) (Table 1, Section 5.3 and Figure 2).

## 5. What combining these sources does and does not support

| Evidence | Unit / population | Question answered | Key limit |
| --- | --- | --- | --- |
| Tencent reports | Combined active accounts | How large is measured activity? | Accounts are not people or welfare |
| Guo & Li (2022) | 514 WeChat shoppers; r and beta | How do perceived values relate to intention? | No observed repeat-sales outcome |
| Zhang & Jung (2023) | 740 retained panel respondents; beta | How do interaction types relate to later social capital? | Observational with participant loss |
| Liu et al. (2024) | 836 survey respondents; beta and sample shares | How do pressures relate to fatigue/anxiety? | Cross-sectional; no safe-time threshold |

The poster gives a balanced account of opportunities and demands. It does not pool sample sizes, average incompatible coefficients, estimate a single overall effect of WeChat, or claim the group conducted the source surveys.

## Validation

- PASS: Annual observations are consecutive year-end years
- PASS: All annual account totals are finite and positive
- PASS: Annual differences sum to total change
- PASS: Commerce coefficients use correlation bounds
- PASS: All eight social-capital paths are present
- PASS: All four reported nonsignificant paths retained
- PASS: Two-wave retention matches reported rounding
- PASS: Daily-time counts total the survey sample
- PASS: Daily-time shares match reported one-decimal rounding
- PASS: Daily-time shares total 100 percent

Input SHA-256: `96b6b0945e9626c7eaed14c19d616d4d4673f70860e3bc8ace6a5c731be34c3f`. Source-to-paper verification is recorded separately in the poster preparation files; these automated checks test structure and arithmetic, not the truth of every source transcription.
