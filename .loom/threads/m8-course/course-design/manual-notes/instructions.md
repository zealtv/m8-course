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

The learner said on 2026-11-12 that they run M8 headless, displayed through
m8c on Knulli on a TrimUI Brick, and that the firmware "might not be bleeding
edge". The manual describes 6.5.2 as of April 2026. So:

- Ask the learner to read the firmware version off the unit and record it.
- Note which features the manual describes that their version may lack, and
  what headless lacks or changes compared with the hardware units (audio
  routing, inputs, key mapping, SD card handling). Check these against the
  manufacturer's headless documentation and changelog rather than memory.
- Record how the manual's key names map to the handheld's buttons.
