const express = require(`express`);
const app = express();
const port = process.env.PORT || 3000;

app.get(`/techtree`, async function(req, res) {
    const techtree = require(`./tech tree.js`);
    const result = await techtree.techTreeInfo(req.query.ask);
    res.send(result);
});
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});