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
        createThought({ params, body }, res) {
            Thought.create(body)
              .then(({ _id }) => {
                  return.user.findOneAndUpdate(
                      { userName: body.username },
                      { $push: { thoughts: _id } },
                      { new: true }
                  );
              })
              .then(dbUserData => {
                  res.status(404).json({ message: 'No user found with this username :('});
                  return;
              }
              res.json(dbUserData);
            })
            .catch(err => res.json(err));
        },
        
        // update thought by ID // 
        updateThought({ params, body }, res) {
            Thought.findOneAndUpdate(
                { _id: params.id },
                body,
                { new: true, runValidators: true }
            )
            .then(updatedThought => {
                if (!updatedThought) {
                    return res.status(404).json({ message: 'No thought with this ID' });
                }
                res.json(updatedThought);
            })
            .catch(err => res.json(err));
            },
        },

        // delete thought //
        deleteThought({ params, body}, res) {
            Thought.findOneAndDelete({ _id: params.id })
              .then(deletedThought => {
                  if (!deletedThought) {
                      return res.status(404).json({ message: 'No thought with this ID!'})
                  } 
                  res.json(deletedThought);
              })
              .catch(err => res.json(err));
        }
    };


        // add reaction //
        addReaction ({ params, body}, res) {
            Thought.findOneAndUpdate(
                { _id: params.thoughtId },
                { $push: { reactions: body } },
                { new: true, runValidators: true }
            )
            .then(dbThoughtData => {
                if (!dbThoughtData) {
                    res.status(404).json({ message: 'No thought with this Id'});
                    return;
                }
                res.json(dbThoughtData)
            })
            .catch(err => res.json(err));
        },

        // delete reaction //
        removeReaction({ params }, res) {
            Thought.findOneAndUpdate(
                { _id: params.thoughtId },
                { $pull: {reactions: { reactionId: params.reactionId}}},
                { new: true }
            )
            .then(dbThoughtData => res.json(dbThoughtData))
            .catch(err => res.json(err));
        }
};

module.exports = thoughtController