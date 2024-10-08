/*------------------------------------------
--------------------------------------------
Database Connection
--------------------------------------------
--------------------------------------------*/
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.json());
// DB
const conn = require('../config/db');

/*------------------------------------------
--------------------------------------------
Routes
--------------------------------------------
--------------------------------------------*/
// Sum of votes per source.
router.get('/:id', (req, res, next) => {
    // Not checking if user is logged in, as this is available for guest access.
    res.setHeader('Content-Type', 'application/json');
    let sqlQuery = `
    SELECT * FROM user_votes
    WHERE resource_id = ${conn.escape(req.params.id)};`;

    conn.query(sqlQuery, (err, results) => {
        try {
            if (err) {
                throw err;
            }
            res.json(results);
        } catch (err) {
            next(err);
        }
    });
});

/**
 * Upvote source.
 *
 * @return response()
 */
router.put('/:userId/:resourceId/edit/up', (req, res, next) => {
    if (req.session.userName) {
        let sqlQuery = `
        INSERT INTO user_votes (user_id, resource_id, vote) 
        VALUES(${conn.escape(req.params.userId)},
        ${conn.escape(req.params.resourceId)}, 1) 
        ON DUPLICATE KEY UPDATE vote=1;
        `;

        conn.query(sqlQuery, (err, results) => {
            try {
                if (err) {
                    throw err;
                }
                res.end();
            } catch (err) {
                next(err);
            }
        });
    }
});

// Vote source down.
router.put('/:userId/:resourceId/edit/down', (req, res, next) => {
    if (req.session.userName) {
        let sqlQuery = `
        INSERT INTO user_votes (user_id, resource_id, vote) 
        VALUES(${conn.escape(req.params.userId)}, ${conn.escape(
            req.params.resourceId
        )}, -1) 
        ON DUPLICATE KEY UPDATE vote=-1;
        `;

        conn.query(sqlQuery, (err, results) => {
            try {
                if (err) {
                    throw err;
                }
                res.end();
            } catch (err) {
                next(err);
            }
        });
    }
});

// To cancel vote.
router.put('/:userId/:resourceId/edit/cancel', (req, res, next) => {
    if (req.session.userName) {
        let sqlQuery = `
        INSERT INTO user_votes (user_id, resource_id, vote) 
        VALUES(${conn.escape(req.params.userId)}, ${conn.escape(
            req.params.resourceId
        )}, 0) 
        ON DUPLICATE KEY UPDATE vote=0;
        `;

        conn.query(sqlQuery, (err, results) => {
            try {
                if (err) {
                    throw err;
                }
                res.end();
            } catch (err) {
                next(err);
            }
        });
    }
});

router.get('*', (req, res) => {
    res.redirect('/');
});

module.exports = router;
