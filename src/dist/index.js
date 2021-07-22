"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
require("reflect-metadata");
var typeorm_1 = require("typeorm");
var express_1 = require("express");
var User_1 = require("./entity/User");
var Post_1 = require("./entity/Post");
var app = express_1["default"]();
app.use(express_1["default"].json());
//user crud
app.post("/users", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, name, email, role, user, err_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, name = _a.name, email = _a.email, role = _a.role;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                user = User_1.User.create({ name: name, email: email, role: role });
                return [4 /*yield*/, user.save()];
            case 2:
                _b.sent();
                return [2 /*return*/, res.status(201).json({
                        user: user
                    })];
            case 3:
                err_1 = _b.sent();
                console.log(err_1);
                res.status(400).json({ err: err_1 });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
app.get("/users", function (_, res) { return __awaiter(void 0, void 0, void 0, function () {
    var users, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, User_1.User.find()];
            case 1:
                users = _a.sent();
                res.status(200).json({
                    users: users
                });
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                res.status(404).json({
                    error: error_1
                });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
app.put("/users/:uuid", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var uuid, _a, name, email, role, user, error_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                uuid = req.params.uuid;
                _a = req.body, name = _a.name, email = _a.email, role = _a.role;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 4, , 5]);
                return [4 /*yield*/, User_1.User.findOneOrFail({ uuid: uuid })];
            case 2:
                user = _b.sent();
                user.name = name || user.name;
                user.email = email || user.email;
                user.role = role || user.role;
                return [4 /*yield*/, user.save()];
            case 3:
                _b.sent();
                res.status(201).json({
                    user: user
                });
                return [3 /*break*/, 5];
            case 4:
                error_2 = _b.sent();
                res.status(404).json({
                    error: error_2
                });
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); });
app["delete"]("/users/:uuid", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var uuid, user, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                uuid = req.params.uuid;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 5]);
                return [4 /*yield*/, User_1.User.findOneOrFail({ uuid: uuid })];
            case 2:
                user = _a.sent();
                return [4 /*yield*/, user.remove()];
            case 3:
                _a.sent();
                res.status(204).json({
                    data: null
                });
                return [3 /*break*/, 5];
            case 4:
                error_3 = _a.sent();
                res.status(404).json({ error: error_3 });
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); });
app.get("/users/:uuid", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var uuid, user, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                uuid = req.params.uuid;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, User_1.User.findOne({ uuid: uuid })];
            case 2:
                user = _a.sent();
                res.status(201).json({
                    user: user
                });
                return [3 /*break*/, 4];
            case 3:
                error_4 = _a.sent();
                res.status(404).json({ error: error_4 });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
//post
app.post("/posts", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, title, body, post, error_5;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, title = _a.title, body = _a.body;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                post = Post_1.Post.create({ title: title, body: body });
                return [4 /*yield*/, post.save()];
            case 2:
                _b.sent();
                res.status(201).json({
                    post: post
                });
                return [3 /*break*/, 4];
            case 3:
                error_5 = _b.sent();
                res.status(400).json({
                    error: error_5
                });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
typeorm_1.createConnection()
    .then(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        app.listen(3333, function () {
            console.log("listening to the port 3333");
        });
        return [2 /*return*/];
    });
}); })["catch"](function (error) { return console.log(error); });
