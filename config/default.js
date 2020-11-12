/**
 * The default configuration file.
 */

module.exports = {
  PORT: process.env.PORT || 3001,
  LOG_LEVEL: process.env.LOG_LEVEL || 'debug',

  KAFKA_URL: process.env.KAFKA_URL || 'localhost:9092',
  // below are used for secure Kafka connection, they are optional
  // for the local Kafka, they are not needed
  KAFKA_CLIENT_CERT: process.env.KAFKA_CLIENT_CERT,
  KAFKA_CLIENT_CERT_KEY: process.env.KAFKA_CLIENT_CERT_KEY,

  // Kafka group id
  KAFKA_GROUP_ID: process.env.KAFKA_GROUP_ID || 'taas-es-processor',

  topics: {
    TAAS_JOB_CREATE_TOPIC: process.env.TAAS_JOB_CREATE_TOPIC || 'taas.job.create',
    TAAS_JOB_UPDATE_TOPIC: process.env.TAAS_JOB_UPDATE_TOPIC || 'taas.job.update',
    TAAS_JOB_DELETE_TOPIC: process.env.TAAS_JOB_DELETE_TOPIC || 'taas.job.delete',
    // topics for jobcandidate service
    TAAS_JOB_CANDIDATE_CREATE_TOPIC: process.env.TAAS_JOB_CANDIDATE_CREATE_TOPIC || 'taas.jobcandidate.create',
    TAAS_JOB_CANDIDATE_UPDATE_TOPIC: process.env.TAAS_JOB_CANDIDATE_UPDATE_TOPIC || 'taas.jobcandidate.update',
    TAAS_JOB_CANDIDATE_DELETE_TOPIC: process.env.TAAS_JOB_CANDIDATE_DELETE_TOPIC || 'taas.jobcandidate.delete',
    // topics for job service
    TAAS_RESOURCE_BOOKING_CREATE_TOPIC: process.env.TAAS_RESOURCE_BOOKING_CREATE_TOPIC || 'taas.resourcebooking.create',
    TAAS_RESOURCE_BOOKING_UPDATE_TOPIC: process.env.TAAS_RESOURCE_BOOKING_UPDATE_TOPIC || 'taas.resourcebooking.update',
    TAAS_RESOURCE_BOOKING_DELETE_TOPIC: process.env.TAAS_RESOURCE_BOOKING_DELETE_TOPIC || 'taas.resourcebooking.delete'
  },

  esConfig: {
    HOST: process.env.ES_HOST || 'http://localhost:9200',

    ELASTICCLOUD: {
      id: process.env.ELASTICCLOUD_ID,
      username: process.env.ELASTICCLOUD_USERNAME,
      password: process.env.ELASTICCLOUD_PASSWORD
    },

    AWS_REGION: process.env.AWS_REGION || 'us-east-1', // AWS Region to be used if we use AWS ES

    ES_INDEX_JOB: process.env.ES_INDEX_JOB || 'job',
    ES_INDEX_JOB_CANDIDATE: process.env.ES_INDEX_JOB_CANDIDATE || 'job_candidate',
    ES_INDEX_RESOURCE_BOOKING: process.env.ES_INDEX_RESOURCE_BOOKING || 'resource_booking'
  }
}
