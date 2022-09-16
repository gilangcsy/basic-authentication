const db = require('../models/index');
const Department = db.department
const Op = db.Sequelize.Op;

module.exports = {
    async read(req, res, next) {
        try {
            const result = await Department.findAll({
                where: {
                    deleted_at: null
                },
                order: [
                    ['created_at', 'ASC']
                ]
            })

            res.status(200).send({
                success: true,
                message: "get all department data has been succeed.",
                data: result
            })
        }
        catch (err) {
            next(err)
        }
    },

    async readById(req, res, next) {
        try {
            const { id } = req.params

            const result = await Department.findOne({
                where: {
                    id: id,
                    deleted_at: null
                }
            })

            res.status(200).send({
                success: true,
                message: "get department by id has been succeed.",
                data: result
            })
        }
        catch (err) {
            next(err)
        }
    },
    
    async create(req, res, next) {
        try {
            const { name, created_by } = req.body

            const createData = await Department.create({
                name: name,
                created_by: created_by
            })

            res.status(200).send({
                success: true,
                message: "create department data has been succeed.",
                data: createData
            })
        }
        catch (err) {
            next(err)
        }
    },

    async update(req, res, next) {
        try {
            const { name, updated_by } = req.body
            const { id } = req.params

            const checkIfExists = await Department.findOne({
                where: {
                    id: id,
                    deleted_at: null
                }
            })

            if(checkIfExists) {
                await Department.update({
                    name: name,
                    updaetd_at: new Date(),
                    updated_by: updated_by
                }, {
                    where: {
                        id: id
                    }
                })
    
                res.status(200).send({
                    success: true,
                    message: "update department data has been succeed."
                })
            } else {
                res.status(404).send({
                    success: false,
                    message: "id not found."
                })
            }

        }
        catch (err) {
            next(err)
        }
    },

    async delete(req, res, next) {
        try {
            const { deleted_by } = req.body
            const { id } = req.params

            const checkIfExists = await Department.findOne({
                where: {
                    id: id,
                    deleted_at: null
                }
            })

            if(checkIfExists) {
                await Department.update({
                    deleted_at: new Date(),
                    deleted_by: deleted_by
                }, {
                    where: {
                        id: id
                    }
                })
    
                res.status(200).send({
                    success: true,
                    message: "delete department data has been succeed."
                })
            } else {
                res.status(404).send({
                    success: false,
                    message: "id not found."
                })
            }

        }
        catch (err) {
            next(err)
        }
    },
}