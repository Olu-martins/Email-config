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
exports.StripeWelcomeEmail = void 0;
const components_1 = require("@react-email/components");
const React = __importStar(require("react"));
const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : '';
const StripeWelcomeEmail = () => (React.createElement(components_1.Html, null,
    React.createElement(components_1.Head, null),
    React.createElement(components_1.Preview, null, "You're now ready to make live transactions with Stripe!"),
    React.createElement(components_1.Body, { style: main },
        React.createElement(components_1.Container, { style: container },
            React.createElement(components_1.Section, { style: box },
                React.createElement(components_1.Img, { src: `${baseUrl}/static/stripe-logo.png`, width: "49", height: "21", alt: "Stripe" }),
                React.createElement(components_1.Hr, { style: hr }),
                React.createElement(components_1.Text, { style: paragraph }, "Thanks for submitting your account information. You're now ready to make live transactions with Stripe!"),
                React.createElement(components_1.Text, { style: paragraph }, "You can view your payments and a variety of other information about your account right from your dashboard."),
                React.createElement(components_1.Button, { pX: 10, pY: 10, style: button, href: "https://dashboard.stripe.com/login" }, "View your Stripe Dashboard"),
                React.createElement(components_1.Hr, { style: hr }),
                React.createElement(components_1.Text, { style: paragraph },
                    "If you haven't finished your integration, you might find our",
                    ' ',
                    React.createElement(components_1.Link, { style: anchor, href: "https://stripe.com/docs" }, "docs"),
                    ' ',
                    "handy."),
                React.createElement(components_1.Text, { style: paragraph },
                    "Once you're ready to start accepting payments, you'll just need to use your live",
                    ' ',
                    React.createElement(components_1.Link, { style: anchor, href: "https://dashboard.stripe.com/login?redirect=%2Fapikeys" }, "API keys"),
                    ' ',
                    "instead of your test API keys. Your account can simultaneously be used for both test and live requests, so you can continue testing while accepting live payments. Check out our",
                    ' ',
                    React.createElement(components_1.Link, { style: anchor, href: "https://stripe.com/docs/dashboard" }, "tutorial about account basics"),
                    "."),
                React.createElement(components_1.Text, { style: paragraph },
                    "Finally, we've put together a",
                    ' ',
                    React.createElement(components_1.Link, { style: anchor, href: "https://stripe.com/docs/checklist/website" }, "quick checklist"),
                    ' ',
                    "to ensure your website conforms to card network standards."),
                React.createElement(components_1.Text, { style: paragraph },
                    "We'll be here to help you with any step along the way. You can find answers to most questions and get in touch with us on our",
                    ' ',
                    React.createElement(components_1.Link, { style: anchor, href: "https://support.stripe.com/" }, "support site"),
                    "."),
                React.createElement(components_1.Text, { style: paragraph }, "\u2014 The Stripe team"),
                React.createElement(components_1.Hr, { style: hr }),
                React.createElement(components_1.Text, { style: footer }, "Stripe, 354 Oyster Point Blvd, South San Francisco, CA 94080"))))));
exports.StripeWelcomeEmail = StripeWelcomeEmail;
exports.default = exports.StripeWelcomeEmail;
const main = {
    backgroundColor: '#f6f9fc',
    fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};
const container = {
    backgroundColor: '#ffffff',
    margin: '0 auto',
    padding: '20px 0 48px',
    marginBottom: '64px',
};
const box = {
    padding: '0 48px',
};
const hr = {
    borderColor: '#e6ebf1',
    margin: '20px 0',
};
const paragraph = {
    color: '#525f7f',
    fontSize: '16px',
    lineHeight: '24px',
    textAlign: 'left',
};
const anchor = {
    color: '#556cd6',
};
const button = {
    backgroundColor: '#656ee8',
    borderRadius: '5px',
    color: '#fff',
    fontSize: '16px',
    fontWeight: 'bold',
    textDecoration: 'none',
    textAlign: 'center',
    display: 'block',
    width: '100%',
};
const footer = {
    color: '#8898aa',
    fontSize: '12px',
    lineHeight: '16px',
};
//# sourceMappingURL=stripe-welcome.js.map