/*------------------------------------------
--------------------------------------------
Middleware
--------------------------------------------
--------------------------------------------*/
const express = require('express');
// Router.
const router = express.Router();

// For printing to PDF.
var fs = require('fs');
var PDFDocument = require('pdfkit');
var SVGtoPDF = require('svg-to-pdfkit');

/*------------------------------------------
--------------------------------------------
Routes
--------------------------------------------
--------------------------------------------*/

// Print to PDF.
/*** ExpressJs code for webserver ***/
router.post('/print-pdf', (req, res, next) => {
    // Add the SVG-to_PDFKit plugin to the PDFKit doc.
    PDFDocument.prototype.addSVG = function (svg, x, y, options) {
        return SVGtoPDF(this, svg, x, y, options), this;
    };
    // Create a new PDF doc.
    var width;
    var height;

    // Full tree with no filtering.
    if (req.body.treeType == 'linear') {
        width = 6000;
        height = 27500;
    } else if (req.body.treeType == 'radial') {
        width = 20000;
        height = 20000;
    }

    // This is the size of the full linear chart, with no filters.
    const doc = new PDFDocument({ size: [width, height] });

    // HTTP response to client.
    doc.pipe(res);
    // Add the SVG to the doc.
    doc.addSVG(req.body.svg, 0, 0);
    // finalize the PDF and end the stream
    doc.end();
});

module.exports = router;
