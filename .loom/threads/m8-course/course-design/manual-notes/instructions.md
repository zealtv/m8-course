# Reading notes on the manual

Read the whole manual and write `docs/manual-notes.md`: a capability
reference in our own words that modules cite, so later sessions don't re-read
98 pages.

Cover, with page references:

- The data model and its limits: 8 monophonic tracks, song rows, chains of up
  to 16 phrases with transpose, 16-step phrases with 3 FX columns, tables,
  grooves, scales, instrument count.
- Timing: ticks, grooves, table tick rates, and every command that changes
  when something sounds (GRV, GGR, DEL, MTT, RET, HOP, TIC, TPO, RMX, SNG).
- Variation and chance: CHA, RND, RNL, REP, RTO, NTH, SED, INS, NXT, TBL,
  TBX, THO.
- Each engine: parameters, modulation slots, what it does well. FM Synth in
  most detail (12 algorithms, operator shapes, ratio, level, feedback, the
  four mod macros).
- Instrument modulation view: envelope and LFO types, destinations.
- Mixer, EQ, limiter, send effects and their commands.
- Render, selection-to-sample, live mode, MIDI.
- A list of open questions the manual leaves unanswered, each to be tested on
  the unit by the learner rather than guessed.

The learner said on 2026-11-12 that they run M8 headless on firmware
`M8_V6_6_4_HEADLESS.hex` (6.6.4). The manual in hand describes 6.5.2 as of
April 2026, so the firmware runs ahead of the manual.

- Write for standard hardware, with the manual's standard key names
  ([SHIFT], [OPTION], [EDIT], [PLAY], directions). Nothing specific to the
  learner's handheld or display client.
- Note where headless might differ from the hardware units (audio routing
  and inputs, microphone and speaker, battery, SD card handling, MIDI
  connections). Check against the manufacturer's headless documentation
  rather than memory.
- Read the manufacturer's changelog from 6.5.2 to 6.6.4 and note what
  changed or arrived after the manual, marked as coming from the changelog.
