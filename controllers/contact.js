const { response } = require("express");
const Contact = require("../models/Contact");

module.exports = class APC {
    // fetch all post
    static async fetchAllContact(req, res){
        try{
            const contacts = await Contact.find();
            res.status(200).json(contacts);
        }catch(err){
            res.status(404).json({message: err.message});
        }
    }

    // fetch all by ID
    static async fetchContactByID(req, res){
       const id = req.params.id;
       try{
        const contact = await Contact.findById(id);
        res.status(200).json(contact);
       }catch(err){
        res.status(404).json({message: err.message});
       }
       
    }

    // create a contact
    static async createContact(req, res){
        const contact = req.body;
       try{
        await Contact.create(contact);
        res.status(200).json({message: 'Contact created successfully'});
       }catch{
        res.status(404).json({message: err.message});
       }
    }

    // update post
    static async updateContact(req, res){
        const id = req.params.id;

        try{
            await Contact.findByIdAndUpdate(id);
            res.status(200).json({mesage:"Contact updated successfully"});
        }catch(err){
            res.status(404).json({message: err.message});
        }
    }

    // delete post
    static async deleteContact(req, res){
       const id = req.params.id;
       try{
        const result = await Contact.findByIdAndDelete(id);
       
        res.status(200).json({message: "Contact deleted successfully"})
       }catch(err){
        res.status(404).json({message: err.message});
       }
    }
}