"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodemailerMailAdapter = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const transport = nodemailer_1.default.createTransport({
    host: 'smtp.mailtrap.io',
    port: 2525,
    auth: {
        user: '8cafa6ff406b09',
        pass: '0b0181b1fe56a5',
    },
});
class NodemailerMailAdapter {
    async sendMail({ subject, body }) {
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Alex Mello <admmello@gmail.com>',
            subject,
            html: body,
        });
    }
}
exports.NodemailerMailAdapter = NodemailerMailAdapter;
