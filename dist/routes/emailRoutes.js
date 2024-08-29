"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const EmailController_1 = require("../controllers/EmailController");
const router = (0, express_1.Router)();
router.post('/emails', EmailController_1.saveEmail);
exports.default = router;
