/**
 * Created by thomasmichelet on 17/01/16.
 */
module.exports = function (path) {
    return require((process.env.APP_DIR_FOR_CODE_COVERAGE || '../app/') + path);
};