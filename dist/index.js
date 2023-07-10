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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmail = void 0;
const React = __importStar(require("react"));
const mail_1 = __importDefault(require("@sendgrid/mail"));
require("dotenv/config");
require('dotenv').config();
const api = (_a = process.env.SENDGRID_API_KEY) !== null && _a !== void 0 ? _a : "";
mail_1.default.setApiKey(api);
// const emailComponent = render(<PlaidVerifyIdentityEmail />)
const html = React.createElement("p", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia molestiae exercitationem nisi! Asperiores quas consequatur distinctio, beatae in reiciendis laudantium corrupti ad harum at obcaecati, consequuntur illum, necessitatibus eum possimus.");
const message = {
    to: ['mayowasamuel86@gmail', 'olumayowa@korapay.com'],
    from: {
        name: 'Verify Identity email',
        email: 'bethanyinfor@gmail.com'
    },
    subject: 'Verify your idendity',
    html
};
const sendEmail = () => {
    mail_1.default
        .send(message)
        .then(() => console.log('Email sent successfully'))
        .catch((error) => console.log(error.message));
};
exports.sendEmail = sendEmail;
//# sourceMappingURL=index.js.map