const cakes = require('../controllers/cakes')

module.exports = function(app){
    app.get('/', (req, res) =>{

    })

    app.get('/cake', (req, res) => {
        cakes.all_cakes(req, res)
    })

    app.get('/cake/:id', (req, res) => {
        cakes.one_cake(req, res)
    })

    app.post('/cake', (req, res) => {
        cakes.add_cake(req, res)
    })

    app.put('/cake/:id', (req, res) =>{
        cakes.edit_cake(req, res)
    })

    app.delete('/cake/:id', (req, res) => {
        cakes.delete_cake(req, res)
    })

    app.post('/reaction/:id', (req, res) =>{
        cakes.add_reaction(req, res)
    })


}