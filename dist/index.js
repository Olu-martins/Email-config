"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmail = void 0;
const React = __importStar(require("react"));
const verify_identity_html_1 = __importDefault(require("./emails/merchants/verify-identity-html"));
const mail_1 = __importDefault(require("@sendgrid/mail"));
const render_1 = require("@react-email/render");
require("dotenv/config");
// const apiKey: string = process.env.SENDGRID_API_KEY ?? "";
mail_1.default.setApiKey('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');
const emailComponent = (0, render_1.render)(React.createElement(verify_identity_html_1.default, null));
const message = {
    to: ['mayowasamuel86@gmail', 'olumayowa@korapay.com'],
    from: {
        name: 'Verify Identity email',
        email: 'bethanyinfor@gmail.com'
    },
    subject: 'Verify your idendity',
    html: emailComponent
};
const sendEmail = () => {
    mail_1.default
        .send(message)
        .then(() => console.log('Email sent successfully'))
        .catch((error) => console.log(error.message));
};
exports.sendEmail = sendEmail;
//# sourceMappingURL=index.js.map