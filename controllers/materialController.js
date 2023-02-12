const Material = require('../models/Material.js');

class materialController {
    async createMaterial(req, res) {
        try {
            const material = await Material.create(req.body);
            return res.status(200).json(material);
        } catch (e) {
            console.log(e);
            return res.status(500).json(e);
        }
    }

    async getMaterials(req, res) {
        try {
            const materials = await Material.find();
            return res.status(200).json(materials);
        } catch (e) {
            console.log(e);
            return res.status(500).json(e);
        }
    }

    async getMaterialById(req, res) {
        try {
            const material = await Material.findById(req.params.id);
            return res.status(200).json(material);
        } catch (e) {
            console.log(e);
            return res.status(500).json(e);
        }
    }

    async updateMaterial(req, res) {
        try {
            const updatedMaterial = await Material.updateOne(req.body);
            return res.status(200).json(updatedMaterial);
        } catch(e) {
            console.log(e);
            return res.status(500).json(e);
        }
    }

    async deleteMaterial(req, res) {
        try {
            const deletedMaterial = await Material.deleteOne(req.body);
            return res.status(200).json(deletedMaterial);
        } catch(e) {
            console.log(e);
            return res.status(500).json(e);
        }
    }
}

module.exports = new materialController();
