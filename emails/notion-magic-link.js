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
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotionMagicLinkEmail = void 0;
const components_1 = require("@react-email/components");
const React = __importStar(require("react"));
const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : '';
const NotionMagicLinkEmail = ({ loginCode = 'sparo-ndigo-amurt-secan', }) => (React.createElement(components_1.Html, null,
    React.createElement(components_1.Head, null),
    React.createElement(components_1.Preview, null, "Log in with this magic link"),
    React.createElement(components_1.Body, { style: main },
        React.createElement(components_1.Container, { style: container },
            React.createElement(components_1.Heading, { style: h1 }, "Login"),
            React.createElement(components_1.Link, { href: "https://notion.so", target: "_blank", style: Object.assign(Object.assign({}, link), { display: 'block', marginBottom: '16px' }) }, "Click here to log in with this magic link"),
            React.createElement(components_1.Text, { style: Object.assign(Object.assign({}, text), { marginBottom: '14px' }) }, "Or, copy and paste this temporary login code:"),
            React.createElement("code", { style: code }, loginCode),
            React.createElement(components_1.Text, { style: Object.assign(Object.assign({}, text), { color: '#ababab', marginTop: '14px', marginBottom: '16px' }) }, "If you didn't try to login, you can safely ignore this email."),
            React.createElement(components_1.Text, { style: Object.assign(Object.assign({}, text), { color: '#ababab', marginTop: '12px', marginBottom: '38px' }) }, "Hint: You can set a permanent password in Settings & members \u2192 My account."),
            React.createElement(components_1.Img, { src: `${baseUrl}/static/notion-logo.png`, width: "32", height: "32", alt: "Notion's Logo" }),
            React.createElement(components_1.Text, { style: footer },
                React.createElement(components_1.Link, { href: "https://notion.so", target: "_blank", style: Object.assign(Object.assign({}, link), { color: '#898989' }) }, "Notion.so"),
                ", the all-in-one-workspace",
                React.createElement("br", null),
                "for your notes, tasks, wikis, and databases.")))));
exports.NotionMagicLinkEmail = NotionMagicLinkEmail;
exports.default = exports.NotionMagicLinkEmail;
const main = {
    backgroundColor: '#ffffff',
};
const container = {
    paddingLeft: '12px',
    paddingRight: '12px',
    margin: '0 auto',
};
const h1 = {
    color: '#333',
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    fontSize: '24px',
    fontWeight: 'bold',
    margin: '40px 0',
    padding: '0',
};
const link = {
    color: '#2754C5',
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    fontSize: '14px',
    textDecoration: 'underline',
};
const text = {
    color: '#333',
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    fontSize: '14px',
    margin: '24px 0',
};
const footer = {
    color: '#898989',
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    fontSize: '12px',
    lineHeight: '22px',
    marginTop: '12px',
    marginBottom: '24px',
};
const code = {
    display: 'inline-block',
    padding: '16px 4.5%',
    width: '90.5%',
    backgroundColor: '#f4f4f4',
    borderRadius: '5px',
    border: '1px solid #eee',
    color: '#333',
};
//# sourceMappingURL=notion-magic-link.js.map