const Resource = require('../models/Resource');

class ResourceService {
  async createResource(data) {
    return await Resource.create(data);
  }

  async getAllResources() {
    return await Resource.findAll();
  }
}

module.exports = new ResourceService();
