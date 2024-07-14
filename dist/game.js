"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.welcomeUser = void 0;
const welcomeUser = () => {
    const helloPrompt = prompt('what is your name?');
    return (`Hello ${helloPrompt}`);
};
exports.welcomeUser = welcomeUser;
