const firebase = require(`./firebase.js`);
const database = firebase.firebase.database();
async function techTreeInfo(ask) {
    ask = ask.toLowerCase();
    data = await database.ref(`civ bonus list`).once(`value`);
    civ_bonus_list = data.val();
    data = await database.ref(`tech tree civ list`).once(`value`);
    tech_tree = data.val();
    data = await database.ref(`inverted aliases`).once(`value`);
    inverted_aliases = data.val();
    if(ask.startsWith(`do`)) {
        ask = ask.split(` `);
        passed_name = ask.slice(3).join(` `);
        object_name = inverted_aliases[passed_name]
        if(!tech_tree[object_name] && !tech_tree.unique.unit[object_name] && !tech_tree.unique.tech[object_name])
            return `unit ${passed_name} does not exist`;
        if(!tech_tree.name.includes(ask[1]))
            return `civ ${ask[1]} does not exist`;
        if((object_name in tech_tree && tech_tree[object_name].includes(ask[1])) || (object_name in tech_tree.unique.unit && tech_tree.unique.unit[object_name].includes(ask[1])) || (object_name in tech_tree.unique.tech && tech_tree.unique.tech[object_name].includes(ask[1])))
            return `yes`;
        return `no`;
    } else {
        unit = inverted_aliases[ask]
        if(tech_tree.name.includes(ask) || ask == "alian713")
            return civ_bonus_list[ask];
        else {
            civ_list = tech_tree[unit] || tech_tree.unique.unit[unit] || tech_tree.unique.tech[unit];
            if(civ_list) {
                if (civ_list.length > 17) {
                    if(civ_list.length == 35)
                        return `All civs have access to ${unit}`;
                    civ_list = tech_tree.name.filter(civ => !civ_list.includes(civ));
                    return `All civs have access to ${unit} except: `+civ_list.join(`, `);
                }
                return `The civs that have access to ${unit} are: `+civ_list.join(`, `);
            }
            return `please check the input and try again`;
        }
    }
}
exports.techTreeInfo = techTreeInfo;