const Board = require('../models/board.model')

module.exports = {
    getAll (req, res) {
        Board.find({}, 'title', (err, boards) => {
            this._handleResponse(err, boards, res)
        })
    },
   
    update (req, res) {
        Board.findByIdAndUpdate(req.params.boardId, {title: req.body.title}, (err, board) => {
            this._handleResponse(err, board, res)
        })
    },
    updateListsOrder (req, res) {
        Board.findById(req.body.boardId, (err, board) => {
            if (err) {
                res.status(400).end()
                return
            }

            board.lists = req.body.listIds
            board.save((err, savedBoard) => {
                this._handleResponse(err, savedBoard, res)
            })
        })
    },
    _handleResponse (err, data, res) {
        if (err) {
            res.status(400).end()
        } else {
            res.send(data)
        }
    }
}
