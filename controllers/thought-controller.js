const { Thoughts, Users } = require('../models');

const thoughtController = {
    // get all thoughts //
    getAllThoughts(req, res) {
        Thought.find({
            .populate({
                path: 'user',
                select: '->'
            })
            .select: ('->')
            .sort({ _id: -1 })
            .then(dbThoughtData => res.json(dbThoughtData))
            .catch(err => {
                console.log(err);
                res.status(500).json(err)
            });
        },

        // get only one thought by id //
        getThoughtById({ paras }, res) {
            Thought.findOne({ _id: params.id })
              .populate({
                  path: 'user',
                  select: '-->'
              })
            .select('-->')
            .sort({ _id: 1 })
            .then(dbThoughtData => res.json(dbThoughtData))
            .catch(err => {
                console.log(err);
                res.status(500).json(err)
            })
        },

        // create new thought //
        
        // update thought // 

        // delete thought //
        

        // add reaction //

        // delete reaction //


 
    }
}