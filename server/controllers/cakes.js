const {Cake, Reaction} = require('../models/cake')
const cake = require('../models/cake')

module.exports = {

    all_cakes:(req, res)=>{
        Cake.find({})
        .then(all_cakes => {
            console.log('Here are all the cake', all_cakes)
            res.json(all_cakes)
        })
        .catch(err => {
            console.log('Error when showing all cakes', err)
            res.json(err)
        })
    },
    
    one_cake:(req, res) => {
        Cake.findOne({_id: req.params.id})
        .then(cake => {
            console.log('Here is the one cake', cake)
            res.json(cake)
        })
        .catch(err => {
            console.log('Error when showing a single cakes', err)
            res.json(err)
        })
    },

    add_cake:(req, res) => {
        console.log('Here is the req.body', req.body)
        const cake = new Cake()
        cake.baker = req.body.baker
        cake.picture = req.body.picture
        cake.save()
        .then(new_cake => {
            console.log('here is the new cake', new_cake)
            res.json(new_cake)
        })
        .catch(err => {
            console.log('Error when creating new cake', err)
            res.json(err)
        })
    },

    edit_cake:(req, res)=> {
        Cake.findOne({_id: req.params.id})
        .then(cake_to_update => {
            console.log('Here is the cake to update', cake_to_update)
            cake_to_update.baker = req.body.baker
            cake_to_update.rating = req.body.rating
            cake_to_update.save()
            .then(updated_cake => {
                console.log('here is the Updated cake', updated_cake)
                res.json(updated_cake)
            })
            .catch(err => {
                console.log('Error from updated cake', err)
                res.json(err)
            })
        })
        .catch(err => {
            console.log('Error when editing cake', err)
            res.json(err)
        })
    },

    delete_cake:(req, res) => {
        Cake.deleteOne({_id: req.params.id})
        .then(cake_to_delete => {
            console.log('Here is the cake to delete', cake_to_delete)
            res.json(cake_to_delete)
        })
        .catch(err => {
            console.log('Error when deleting cake', err)
            res.json(err)
        })
    },

    add_reaction:(req, res) => {
        const reaction = new Reaction()
        reaction.comment = req.body.comment
        reaction.rating = req.body.rating
        reaction.save()
        .then(new_reaction => {
            console.log("here is the new reaction", new_reaction)
            Cake.findOne({_id: req.params.id})
            .then(cake_to_recieve_reaction => {
                console.log("Here is the cake to recieve the reaction", cake_to_recieve_reaction)
                cake_to_recieve_reaction.comment.push(new_reaction)
                cake_to_recieve_reaction.save()
                .then(cake_with_reaction => {
                    console.log('Here is the cake with reaction', cake_with_reaction)
                    res.json(cake_with_reaction)
                })
                .catch(err => {
                    console.log('Error when deleting cake', err)
                    res.json(err)
                })
            })
            .catch(err => {
                console.log('Error when deleting cake', err)
                res.json(err)
            })
        })
        .catch(err => {
            console.log('Error when deleting cake', err)
            res.json(err)
        })
    }


}