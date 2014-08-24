'use strict';

var fs = require('fs');
var path = require('path');

module.exports = function (processor) {
    // This will allow us to use this <!-- build:includeJsFile[:target] <value> --> syntax
    processor.registerBlockType('includeJsFile', function (content, block, blockLine, blockContent) {
        var assetpath = block.asset;
        var l = blockLine.length;
        var fileContent, i, jsCode, result;

        if (fs.existsSync(assetpath)) {
            fileContent = fs.readFileSync(assetpath).toString();

            fileContent = '<script>' + block.indent + fileContent.replace(/\n$/, '') + '</script>';

            while ((i = content.indexOf(blockLine)) !== -1) {
                content = content.substring(0, i) + fileContent + content.substring(i + l);
            }
        }

        return content.replace(blockLine, content);
    });
};
