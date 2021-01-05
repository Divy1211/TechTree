# TechTree information Command on stream for Age of Empires II: Definitive Edition
1. This is an API for checking tech tree information for streamers for AoE2DE.
2. The API can be used by this link: https://alian713-twitch-commands.herokuapp.com/techtree
# Usage
    https://alian713-twitch-commands.herokuapp.com/techtree?ask=<ask one of the following questions>
    a) "do <civ> get <unit/tech>" returns a yes/no
    b) "<unit/tech>" returns a list of all civs that have access (or don't have access) to the specified unit/tech.
    c) "<civ>" returns the civ bonus snippet of the civ from the game.

# Usage on Twitch with Nightbot:
`!addcom !techtree $(urlfetch https://alian713-twitch-commands.herokuapp.com/techtree?ask=$(querystring))`

example usages:
1. !techtree do saracens get halb - no

2. !techtree saracens - Camel and Naval civilization \u2022 Market trade cost only 5% \u2022 Market costs -100 wood \u2022 Transport Ships 2x HP, 2x capacity \u2022 Galleys attack 25% faster \u2022 Archers (except skirmishers) +1 attack vs. buildings per age (starting in the Feudal Age) UU: Mameluke (camel rider) UTs: \u2022 Madrasah (Monks return 33% of their cost when killed) \u2022 Zealotry (Camel units +30 HP) TB: Foot archers +1 attack vs. buildings

3. !techtree so - The civs that have access to siege onager are: aztecs, bulgarians, celts, cumans, ethiopians, koreans, malians, mongols, saracens, slavs, teutons
