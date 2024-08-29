"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const image_1 = __importDefault(require("next/image"));
const page_module_css_1 = __importDefault(require("./page.module.css"));
return (React.createElement("main", null,
    React.createElement(Navigation, null),
    React.createElement("section", { className: classes.root },
        React.createElement(Modal, { isOpen: isModalOpen, onClose: closeModal, closeByIcon: true },
            React.createElement(Typography, { variant: "bodyLarge", styling: "bold" }, "Obrigado por demonstrar interesse!"),
            React.createElement(Typography, { variant: "body" }, "Em breve voc\u00EA receber\u00E1 mais informa\u00E7\u00F5es.")),
        React.createElement("div", { className: classes.logo },
            React.createElement(Logo, { size: logoSize })),
        React.createElement("div", { className: classes.content },
            React.createElement(Typography, { variant: titleSize, as: "h1", align: "center", className: classes.title })))));
By;
{
    ' ';
}
React.createElement(image_1.default, { src: "/vercel.svg", alt: "Vercel Logo", className: page_module_css_1.default.vercelLogo, width: 100, height: 24, priority: true })
    ,
        React.createElement(Checkbox, { id: "communications", label: React.createElement(Typography, { variant: "bodySmall" }, "Desejo receber comunica\u00E7\u00F5es sobre promoc\u00F5es e novidades."), ...register('communications') })
            ,
                React.createElement("div", { className: classes.email },
                    React.createElement(Input, { id: "email", type: "email", placeholder: "Digite seu email", startAdornment: React.createElement(image_1.default, { src: "/email.svg", alt: "Email", width: 20, height: 16 }), error: errors?.email?.message, ...register('email') }),
                    React.createElement(Button, { type: "submit" },
                        React.createElement(image_1.default, { src: "/arrow-foward.svg", alt: "Email", width: 16, height: 16 })));
form >
    React.createElement(Typography, { variant: "bodySmall", align: "justify", styling: "bold" }, "Ao preencher este formul\u00E1rio voc\u00EA a equipe do E-Healthy, a te contactar por e-mail. Nenhum dos seus dados ser\u00E1 utilizado por terceiros e interrompemos a sua assinatura a qualquer momento que desejar.");
div >
;
section >
;
main >
;
;
;
exports.default = Home;
