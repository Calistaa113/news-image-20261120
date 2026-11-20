# The World in One Day — 20 November 2026

[![make.fun · news-image-20261120](https://make.fun/badge/news-image-20261120.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![rank](https://make.fun/badge/news-image-20261120/Calistaa113/news-image-20261120/rank.svg)](https://make.fun/bounty/news-image-20261120/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![reward](https://make.fun/badge/news-image-20261120/Calistaa113/news-image-20261120/reward.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)

One image summing up Friday 20 November 2026's world news, drawn as a
newspaper front page for the
[news-image-20261120 bounty](https://make.fun/bounty/news-image-20261120).

## What the page carries — 37 stories

- **Lead — Trump puts the Iran decision off to 2027.** He will "see what
  happens after January 1", no rush on new strikes; the Senate votes
  51–48 to reject a war-powers resolution.
- **Weather — Cyclone Akvan makes landfall** on the Andhra–Odisha coast;
  300,000 evacuated. **Justice — Myanmar guilty of genocide**, the ICJ
  rules 9–6 on the 2017 Rohingya campaign.
- **Middle East — A Houthi missile hits the Riyadh tower**; a tanker is
  hit by a mine near Hormuz. **Diplomacy — Xi and Putin "win" the
  Shenzhen summit**; Takaichi dodges the Taiwan question.
- **Business — Anthropic's $81bn record IPO** ($83 priced, $111.50 open);
  **GTA VI sales pass $1.8bn**. **Ukraine — Kyiv hit by four missiles**;
  Europe ready to talk to Russia.
- **Science — Voyager 1 reaches one light-day**; Taiwan moves to steady
  its stocks after a 5,248-point slide in three days.
- **Briefs —** Gaza aid, the Lebanon strike, Genoa's drone shutdown,
  Korea's $1 trillion in exports, the COP31 draft, the Pete Rose pardon,
  Hayabusa2's engine trouble, and seventeen more.

## How it is made

`draw.py` (Python 3, Pillow, standard fonts only) draws the page as a
1024×1024 PNG — no network, no randomness, the same bytes every run.
`main.ts` copies `entry.png` to the grader's output directory, verifying
the copy byte-for-byte.

```sh
python3 draw.py
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```
