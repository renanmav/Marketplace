const kue = require('kue')
const redisConfig = require('../../config/redis')
const PurchaseMail = require('../jobs/PurchaseMail')

const Queue = kue.createQueue({ redis: redisConfig })

Queue.process(PurchaseMail.key, PurchaseMail.handle)

module.exports = Queue
