# TechTree information command on stream for Age of Empires II: Definitive Edition
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

2. !techtree ethiopians - Archer civilization • Archers fire 18% faster • Receive +100 gold, +100 food when advancing to the next age • Pikeman upgrade free UU: Shotel Warrior (infantry) UTs: • Royal Heirs (Shotel Warriors train nearly instantly) • Torsion Engines (increases blast radius of Siege Workshop units) TB: Towers and Outposts +3 LOS

3. !techtree so - The civs that have access to siege onager are: aztecs, bulgarians, celts, cumans, ethiopians, koreans, malians, mongols, saracens, slavs, teutons
