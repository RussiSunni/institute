const conn = require('../../config/db');

const editSelfPermission = (req, res, next) => {
    const userRole = req.session.role;
    const userId = req.session.userId;
    const userToEditId = req.params.id;
    // Student can edit themselves
    if (userToEditId == userId) {
        return next();
    } else {
        // If the conditions are not met, forbid the action
        return res.status(403).json({
            message: 'Forbidden: You do not have permission to edit this user'
        });
    }
};

module.exports = editSelfPermission;
