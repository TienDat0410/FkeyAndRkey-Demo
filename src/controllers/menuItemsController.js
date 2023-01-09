const  menuItems = require("../model/menuItems");


const menuItemsController = {
    //add
    addMenuItem : async(req, res) => {
        try {
            const newMenuItems = new menuItems(req.body);
            const saveMenu = await newMenuItems.save();
            res.status(200).json(saveMenu);
        } catch (error) {
            res.status(500).json(error);
        }
        
    },
};

module.exports = menuItemsController;


