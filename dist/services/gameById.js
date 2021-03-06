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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.gameById = void 0;
const AxiosHandler_1 = require("../infra/AxiosHandler");
const utils_1 = require("./shared/utils");
const config_json_1 = __importDefault(require("../config.json"));
const gameById = (id, options) => __awaiter(void 0, void 0, void 0, function* () {
    if (typeof id !== 'string') {
        throw new Error('invalid game id');
    }
    const { limit = 10, language = 'pt-br' } = options;
    const apiUrl = config_json_1.default.Api.urlBase;
    const request = `${apiUrl}container/BR/${language}/19/${id}`;
    const { data } = yield (0, AxiosHandler_1.callAPI)(request, {});
    const result = (0, utils_1.processMultipleResultGameInfo)(data, limit);
    return result;
});
exports.gameById = gameById;
//# sourceMappingURL=gameById.js.map