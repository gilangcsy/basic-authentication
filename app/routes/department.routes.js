const controller = require('../controllers/department.controller')

module.exports = app => {

	let router = require('express').Router()
	
	router.get('/', controller.read)
	router.get('/:id', controller.readById)
	router.post('/', controller.create)
	router.patch('/:id', controller.update)
	router.delete('/:id', controller.delete)

	app.use('/v1/departments/', router)
}