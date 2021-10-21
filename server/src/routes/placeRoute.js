import express from 'express'
import request from '../controllers/placeController'

const placeroute = express.Router()

placeroute.get('/getplaces', request.GetPlaces)
placeroute.post('/addplace',request.AddPlaces)

export default placeroute