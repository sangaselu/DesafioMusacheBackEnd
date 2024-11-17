const resourceService = require('../services/ResourceService');

class ResourceController {
  async createResource(req, res) {
    try {
      const data = req.body;
      const resource = await resourceService.createResource(data);
      res.status(201).json(resource);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getAllResources(req, res) {
    try {
      const resources = await resourceService.getAllResources();
      res.status(200).json(resources);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new ResourceController();
