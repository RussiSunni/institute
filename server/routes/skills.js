const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const bodyParser = require('body-parser');

router.use(bodyParser.json());

/*------------------------------------------
--------------------------------------------
Database Connection
--------------------------------------------
--------------------------------------------*/
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'C0ll1ns1n5t1tut32022',
   //  password: 'password',
    database: 'skill_tree'
});

/*------------------------------------------
--------------------------------------------
Shows Mysql Connect
--------------------------------------------
--------------------------------------------*/
conn.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('MariaDB connected...');
});

/**
 * Create New Item
 *
 * @return response()
 */
router.post('/add', (req, res, next) => {
    if (req.session.userName) {
        // Escape single quotes for SQL to accept.
        if (req.body.name != null)
            req.body.name = req.body.name.replace(/'/g, "'");
        if (req.body.description != null)
            req.body.description = req.body.description.replace(/'/g, "'");
        if (req.body.mastery_requirements != null)
            req.body.mastery_requirements =
                req.body.mastery_requirements.replace(/'/g, "'");
        // Add the skill.
        let data = {};
        data = {
            name: req.body.name,
            description: req.body.description,
            parent: req.body.parent,
            icon_image: req.body.icon_image,
            banner_image: req.body.banner_image,
            mastery_requirements: req.body.mastery_requirements,
            type: req.body.type,
            level: req.body.level,
            filter_1: req.body.filter_1
        };

        let sqlQuery1 = `INSERT INTO skills SET ?;`;

        let query = conn.query(sqlQuery1, data, (err, results) => {
            try {
                if (err) {
                    throw err;
                } else {
                    res.end();
                }
            } catch (err) {
                next(err);
            }
        });
    } else {
        res.redirect('/login');
    }
});

/**
 * Get All Items
 *
 * @return response()
 */
// Used for choosing parent skill when adding a new skill.
router.get('/list', (req, res, next) => {
    if (req.session.userName) {
        res.setHeader('Content-Type', 'application/json');
        let sqlQuery = 'SELECT * FROM skills';
        let query = conn.query(sqlQuery, (err, results) => {
            try {
                if (err) {
                    throw err;
                }
                res.json(results);
            } catch (err) {
                next(err);
            }
        });
    }
});

// Nested List
router.get('/nested-list', (req, res, next) => {
    if (req.session.userName) {
        res.setHeader('Content-Type', 'application/json');
        let sqlQuery = `
    SELECT skill_tree.skills.id, name, parent, type, level
    FROM skill_tree.skills`;
        let query = conn.query(sqlQuery, (err, results) => {
            try {
                if (err) {
                    throw err;
                }

                // Create the 'children' array.
                for (var i = 0; i < results.length; i++) {
                    results[i].children = [];
                }

                for (var i = 0; i < results.length; i++) {
                    if (results[i].parent != null && results[i].parent != 0) {
                        var parentId = results[i].parent;
                        // go through all rows again, add children
                        for (let j = 0; j < results.length; j++) {
                            if (results[j].id == parentId) {
                                results[j].children.push(results[i]);
                            }
                        }
                    }
                }

                let nestedSkills = [];
                for (var i = 0; i < results.length; i++) {
                    if (results[i].parent == null || results[i].parent == 0) {
                        nestedSkills.push(results[i]);
                    }
                }

                res.json(nestedSkills);
            } catch (err) {
                next(err);
            }
        });
    }
});

/**
 * Get Single Item
 *
 * @return response()
 */

// Individual skills.
router.get('/show/:id', (req, res, next) => {
    var skill;
    var tags;

    if (req.session.userName) {
        res.setHeader('Content-Type', 'application/json');

        // Get skill.
        let sqlQuery =
            `
                        SELECT *
                            FROM skill_tree.skills
            WHERE skill_tree.skills.id = ` +
            req.params.id +
            `; `;

        let query = conn.query(sqlQuery, (err, results) => {
            try {
                if (err) {
                    throw err;
                }

                skill = results[0];

                // Get skill tags.
                let sqlQuery2 =
                    `
                        SELECT *
                            FROM skill_tree.skill_tags
                WHERE skill_tree.skill_tags.skill_id = ` +
                    req.params.id +
                    `; `;

                let query2 = conn.query(sqlQuery2, (err, results) => {
                    try {
                        if (err) {
                            throw err;
                        }
                        tags = results;
                        skill.tags = tags;

                        res.json(skill);
                    } catch (err) {
                        next(err);
                    }
                });
            } catch (err) {
                next(err);
            }
        });
    }
});

/**
 * Edit Item
 *
 * @return response()
 */
router.put('/:id/edit', (req, res, next) => {
    if (req.session.userName) {
        // Escape single quotes for SQL to accept.
        if (req.body.name != null)
            req.body.name = req.body.name.replace(/'/g, "\\'");
        if (req.body.description != null)
            req.body.description = req.body.description.replace(/'/g, "\\'");
        if (req.body.mastery_requirements != null)
            req.body.mastery_requirements =
                req.body.mastery_requirements.replace(/'/g, "\\'");
        var sqlQuery;
        sqlQuery =
            `UPDATE skills SET name = '` +
            req.body.name +
            `', parent = '` +
            req.body.parent +
            `', description = '` +
            req.body.description +
            `', icon_image = '` +
            req.body.icon_image +
            `', banner_image = '` +
            req.body.banner_image +
            `', mastery_requirements = '` +
            req.body.mastery_requirements +
            `', type = '` +
            req.body.type +
            `', level = '` +
            req.body.level +
            `', filter_1 = '` +
            req.body.filter_1 +
            `' WHERE id = ` +
            req.params.id;

        let query = conn.query(sqlQuery, (err, results) => {
            try {
                if (err) {
                    throw err;
                }
                res.redirect('back');
            } catch (err) {
                next(err);
            }
        });
    } else {
        res.redirect('/login');
    }
});

/**
 * Delete Item
 *
 * @return response()
 */
router.delete('/:id', (req, res, next) => {
    if (req.session.userName) {
        let sqlQuery = 'DELETE FROM skills WHERE id=' + req.params.id;

        let query = conn.query(sqlQuery, (err, results) => {
            try {
                if (err) {
                    throw err;
                }
                res.end();
            } catch (err) {
                next(err);
            }
        });
    } else {
        res.redirect('/login');
    }
});

// Learning Resources
// List all for a particular skill.
router.get('/:id/resources', (req, res, next) => {
    if (req.session.userName) {
        res.setHeader('Content-Type', 'application/json');
        let sqlQuery =
            'SELECT * FROM resources WHERE skill_id=' + req.params.id;
        let query = conn.query(sqlQuery, (err, results) => {
            try {
                if (err) {
                    throw err;
                }
                res.json(results);
            } catch (err) {
                next(err);
            }
        });
    }
});

// Questions -------------------
/**
 * Get All Items
 *
 * @return response()
 */
router.get('/:id/mc-questions/list', (req, res, next) => {
    if (req.session.userName) {
        res.setHeader('Content-Type', 'application/json');
        let sqlQuery =
            'SELECT * FROM mc_questions WHERE skill_id = ' + req.params.id;
        let query = conn.query(sqlQuery, (err, results) => {
            try {
                if (err) {
                    throw err;
                }
                res.json(results);
            } catch (err) {
                next(err);
            }
        });
    }
});

router.get('/:id/essay-questions/list', (req, res, next) => {
    if (req.session.userName) {
        res.setHeader('Content-Type', 'application/json');
        let sqlQuery =
            'SELECT * FROM essay_questions WHERE skill_id = ' + req.params.id;
        let query = conn.query(sqlQuery, (err, results) => {
            try {
                if (err) {
                    throw err;
                }
                res.json(results);
            } catch (err) {
                next(err);
            }
        });
    }
});

/**
 * Create New Question
 *
 * @return response()
 */
// MC questions.
router.post('/:id/mc-questions/add', (req, res, next) => {
    if (req.session.userName) {
        // For each question.
        for (let i = 0; i < req.body.questionArray.length; i++) {
            let name;
            let question;
            let correctAnswer;
            let incorrectAnswer1;
            let incorrectAnswer2;
            let incorrectAnswer3;
            let incorrectAnswer4;
            let explanation;

            // Escape single quotes for SQL to accept.
            if (req.body.questionArray[i].name != null) {
                name = req.body.questionArray[i].name.replace(/'/g, "'");
                // Removes spaces from both sides of the string.
                name = name.trim();
            }

            if (req.body.questionArray[i].question != null) {
                question = req.body.questionArray[i].question.replace(
                    /'/g,
                    "'"
                );
                question = question.trim();
            }

            if (req.body.questionArray[i].correct_answer != null) {
                correctAnswer = req.body.questionArray[
                    i
                ].correct_answer.replace(/'/g, "'");
                correctAnswer = correctAnswer.trim();
            }

            if (req.body.questionArray[i].incorrect_answer_1 != null) {
                incorrectAnswer1 = req.body.questionArray[
                    i
                ].incorrect_answer_1.replace(/'/g, "'");
                incorrectAnswer1 = incorrectAnswer1.trim();
            }

            if (req.body.questionArray[i].incorrect_answer_2 != null) {
                incorrectAnswer2 = req.body.questionArray[
                    i
                ].incorrect_answer_2.replace(/'/g, "'");
                incorrectAnswer2 = incorrectAnswer2.trim();
            }

            if (req.body.questionArray[i].incorrect_answer_3 != null) {
                incorrectAnswer3 = req.body.questionArray[
                    i
                ].incorrect_answer_3.replace(/'/g, "'");
                incorrectAnswer3 = incorrectAnswer3.trim();
            }

            if (req.body.questionArray[i].incorrect_answer_4 != null) {
                incorrectAnswer4 = req.body.questionArray[
                    i
                ].incorrect_answer_4.replace(/'/g, "'");
                incorrectAnswer4 = incorrectAnswer4.trim();
            }

            if (req.body.questionArray[i].explanation != null) {
                explanation = req.body.questionArray[i].explanation.replace(
                    /'/g,
                    "'"
                );
                explanation = explanation.trim();
            }

            // Add the questions.
            let data = {};
            data = {
                name: name,
                question: question,
                correct_answer: correctAnswer,
                incorrect_answer_1: incorrectAnswer1,
                incorrect_answer_2: incorrectAnswer2,
                incorrect_answer_3: incorrectAnswer3,
                incorrect_answer_4: incorrectAnswer4,
                explanation: explanation,
                skill_id: req.params.id
            };
            let sqlQuery = 'INSERT INTO mc_questions SET ?';
            let query = conn.query(sqlQuery, data, (err, results) => {
                try {
                    if (err) {
                        throw err;
                    } else {
                        res.end();
                    }
                } catch (err) {
                    next(err);
                }
            });
        }
    } else {
        res.redirect('/login');
    }
});

/**
 * Create New Question
 *
 * @return response()
 */
// Essay questions.
router.post('/:id/essay-questions/add', (req, res, next) => {
    if (req.session.userName) {
        // For each question.
        for (let i = 0; i < req.body.questionArray.length; i++) {
            let name;
            let question;

            // Escape single quotes for SQL to accept.
            if (req.body.questionArray[i].name != null) {
                name = req.body.questionArray[i].name.replace(/'/g, "'");
                name = name.trim();
            }

            if (req.body.questionArray[i].question != null) {
                question = req.body.questionArray[i].question.replace(
                    /'/g,
                    "'"
                );
                question = question.trim();
            }

            // Add skill.
            let data = {};
            data = {
                name: name,
                question: question,
                skill_id: req.params.id
            };
            let sqlQuery = 'INSERT INTO essay_questions SET ?';
            let query = conn.query(sqlQuery, data, (err, results) => {
                try {
                    if (err) {
                        throw err;
                    } else {
                        res.end();
                    }
                } catch (err) {
                    next(err);
                }
            });
        }
    } else {
        res.redirect('/login');
    }
});

// router.get('*', (req, res) => {
//     res.redirect('/');
// });

module.exports = router;
