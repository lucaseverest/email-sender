"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/emailConfirm";
exports.ids = ["pages/api/emailConfirm"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "dayjs":
/*!************************!*\
  !*** external "dayjs" ***!
  \************************/
/***/ ((module) => {

module.exports = require("dayjs");

/***/ }),

/***/ "dayjs/plugin/timezone":
/*!****************************************!*\
  !*** external "dayjs/plugin/timezone" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("dayjs/plugin/timezone");

/***/ }),

/***/ "dayjs/plugin/utc":
/*!***********************************!*\
  !*** external "dayjs/plugin/utc" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("dayjs/plugin/utc");

/***/ }),

/***/ "(api)/./src/pages/api/emailConfirm.ts":
/*!***************************************!*\
  !*** ./src/pages/api/emailConfirm.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _shared_dateProvider_DayjsDateProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/dateProvider/DayjsDateProvider */ \"(api)/./src/shared/dateProvider/DayjsDateProvider.ts\");\n/* harmony import */ var _utils_AppError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/AppError */ \"(api)/./src/utils/AppError.ts\");\n/* harmony import */ var _prisma__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../prisma */ \"(api)/./src/prisma/index.ts\");\n\n\n\nconst emailConfirm = async (req, res)=>{\n    if (req.method === \"PATCH\") {\n        try {\n            return await _prisma__WEBPACK_IMPORTED_MODULE_2__[\"default\"].$transaction(async (prisma)=>{\n                const { token  } = req.query;\n                // verificar se o token está vazio\n                if (!token) {\n                    throw new _utils_AppError__WEBPACK_IMPORTED_MODULE_1__.AppError(\"token not found on request query\", 422);\n                }\n                // buscar token no banco\n                const userToken = await prisma.token.findFirst({\n                    where: {\n                        token: token\n                    }\n                });\n                // se userToken n existir lançar um erro\n                if (!userToken) {\n                    throw new _utils_AppError__WEBPACK_IMPORTED_MODULE_1__.AppError(\"Token Invalid!\", 401);\n                }\n                // verificar se o token está expirado\n                const dateProvider = new _shared_dateProvider_DayjsDateProvider__WEBPACK_IMPORTED_MODULE_0__.DayjsDateProvider();\n                if (dateProvider.compareIfBefore(userToken.expiresAt, dateProvider.dateNow())) {\n                    throw new _utils_AppError__WEBPACK_IMPORTED_MODULE_1__.AppError(\"Token expired!\", 401);\n                }\n                // buscar dados do usuário\n                const user = await prisma.user.findFirst({\n                    where: {\n                        id: userToken.userId\n                    }\n                });\n                // se não tiver user associado com esse token apagar o token\n                if (!user) {\n                    await prisma.token.delete({\n                        where: {\n                            token: token\n                        }\n                    });\n                    throw new _utils_AppError__WEBPACK_IMPORTED_MODULE_1__.AppError(\"Token Invalid, please request email confirmation again\", 401);\n                }\n                // prisma update\n                await prisma.user.update({\n                    where: {\n                        email: user.email\n                    },\n                    data: {\n                        hasEmailConfirmed: true\n                    }\n                });\n                // deletar token\n                await prisma.token.delete({\n                    where: {\n                        token: token\n                    }\n                });\n                return res.status(200).json({\n                    message: \"email confirmed succesfully\"\n                });\n            });\n        } catch (error) {\n            if (error instanceof _utils_AppError__WEBPACK_IMPORTED_MODULE_1__.AppError) {\n                return res.status(error.statusCode).json({\n                    message: error.message\n                });\n            } else {\n                return res.status(500).json({\n                    message: \"Internal server error\"\n                });\n            }\n        }\n    } else {\n        res.setHeader(\"Allow\", \"POST\");\n        res.status(405).send(\"Method not allowed\");\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (emailConfirm);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2VtYWlsQ29uZmlybS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ2dGO0FBQ2hDO0FBQ2Q7QUFRbEMsTUFBTUcsWUFBWSxHQUFHLE9BQ25CQyxHQUF5QixFQUN6QkMsR0FBb0IsR0FDakI7SUFDSCxJQUFJRCxHQUFHLENBQUNFLE1BQU0sS0FBSyxPQUFPLEVBQUU7UUFDMUIsSUFBSTtZQUNGLE9BQU8sTUFBTUosNERBQW1CLENBQUMsT0FBT0EsTUFBTSxHQUFLO2dCQUNqRCxNQUFNLEVBQUVNLEtBQUssR0FBRSxHQUFHSixHQUFHLENBQUNLLEtBQUs7Z0JBRTNCLGtDQUFrQztnQkFDbEMsSUFBSSxDQUFDRCxLQUFLLEVBQUU7b0JBQ1YsTUFBTSxJQUFJUCxxREFBUSxDQUFDLGtDQUFrQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUM5RCxDQUFDO2dCQUVELHdCQUF3QjtnQkFDeEIsTUFBTVMsU0FBUyxHQUFHLE1BQU1SLE1BQU0sQ0FBQ00sS0FBSyxDQUFDRyxTQUFTLENBQUM7b0JBQzdDQyxLQUFLLEVBQUU7d0JBQ0xKLEtBQUssRUFBRUEsS0FBSztxQkFDYjtpQkFDRixDQUFDO2dCQUVGLHdDQUF3QztnQkFDeEMsSUFBSSxDQUFDRSxTQUFTLEVBQUU7b0JBQ2QsTUFBTSxJQUFJVCxxREFBUSxDQUFDLGdCQUFnQixFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUM1QyxDQUFDO2dCQUVELHFDQUFxQztnQkFDckMsTUFBTVksWUFBWSxHQUFHLElBQUliLHFGQUFpQixFQUFFO2dCQUU1QyxJQUNFYSxZQUFZLENBQUNDLGVBQWUsQ0FDMUJKLFNBQVMsQ0FBQ0ssU0FBUyxFQUNuQkYsWUFBWSxDQUFDRyxPQUFPLEVBQUUsQ0FDdkIsRUFDRDtvQkFDQSxNQUFNLElBQUlmLHFEQUFRLENBQUMsZ0JBQWdCLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQzVDLENBQUM7Z0JBRUQsMEJBQTBCO2dCQUMxQixNQUFNZ0IsSUFBSSxHQUFHLE1BQU1mLE1BQU0sQ0FBQ2UsSUFBSSxDQUFDTixTQUFTLENBQUM7b0JBQ3ZDQyxLQUFLLEVBQUU7d0JBQ0xNLEVBQUUsRUFBRVIsU0FBUyxDQUFDUyxNQUFNO3FCQUNyQjtpQkFDRixDQUFDO2dCQUVGLDREQUE0RDtnQkFDNUQsSUFBSSxDQUFDRixJQUFJLEVBQUU7b0JBQ1QsTUFBTWYsTUFBTSxDQUFDTSxLQUFLLENBQUNZLE1BQU0sQ0FBQzt3QkFDeEJSLEtBQUssRUFBRTs0QkFDTEosS0FBSyxFQUFFQSxLQUFLO3lCQUNiO3FCQUNGLENBQUMsQ0FBQztvQkFFSCxNQUFNLElBQUlQLHFEQUFRLENBQ2hCLHdEQUF3RCxFQUN4RCxHQUFHLENBQ0osQ0FBQztnQkFDSixDQUFDO2dCQUVELGdCQUFnQjtnQkFDaEIsTUFBTUMsTUFBTSxDQUFDZSxJQUFJLENBQUNJLE1BQU0sQ0FBQztvQkFDdkJULEtBQUssRUFBRTt3QkFDTFUsS0FBSyxFQUFFTCxJQUFJLENBQUNLLEtBQUs7cUJBQ2xCO29CQUNEQyxJQUFJLEVBQUU7d0JBQ0pDLGlCQUFpQixFQUFFLElBQUk7cUJBQ3hCO2lCQUNGLENBQUMsQ0FBQztnQkFFSCxnQkFBZ0I7Z0JBQ2hCLE1BQU10QixNQUFNLENBQUNNLEtBQUssQ0FBQ1ksTUFBTSxDQUFDO29CQUN4QlIsS0FBSyxFQUFFO3dCQUNMSixLQUFLLEVBQUVBLEtBQUs7cUJBQ2I7aUJBQ0YsQ0FBQyxDQUFDO2dCQUVILE9BQU9ILEdBQUcsQ0FBQ29CLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO29CQUFFQyxPQUFPLEVBQUUsNkJBQTZCO2lCQUFFLENBQUMsQ0FBQztZQUMxRSxDQUFDLENBQUMsQ0FBQztRQUNMLEVBQUUsT0FBT0MsS0FBSyxFQUFFO1lBQ2QsSUFBSUEsS0FBSyxZQUFZM0IscURBQVEsRUFBRTtnQkFDN0IsT0FBT0ksR0FBRyxDQUFDb0IsTUFBTSxDQUFDRyxLQUFLLENBQUNDLFVBQVUsQ0FBQyxDQUFDSCxJQUFJLENBQUM7b0JBQUVDLE9BQU8sRUFBRUMsS0FBSyxDQUFDRCxPQUFPO2lCQUFFLENBQUMsQ0FBQztZQUN2RSxPQUFPO2dCQUNMLE9BQU90QixHQUFHLENBQUNvQixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztvQkFBRUMsT0FBTyxFQUFFLHVCQUF1QjtpQkFBRSxDQUFDLENBQUM7WUFDcEUsQ0FBQztRQUNILENBQUM7SUFDSCxPQUFPO1FBQ0x0QixHQUFHLENBQUN5QixTQUFTLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQy9CekIsR0FBRyxDQUFDb0IsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDTSxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQUM3QyxDQUFDO0FBQ0gsQ0FBQztBQUVELGlFQUFlNUIsWUFBWSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY3JpZS10ZW1wbGF0ZS1uZXh0anMtY2hha3JhdWkvLi9zcmMvcGFnZXMvYXBpL2VtYWlsQ29uZmlybS50cz9iYmM3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHsgRGF5anNEYXRlUHJvdmlkZXIgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL2RhdGVQcm92aWRlci9EYXlqc0RhdGVQcm92aWRlclwiO1xuaW1wb3J0IHsgQXBwRXJyb3IgfSBmcm9tIFwiLi4vLi4vdXRpbHMvQXBwRXJyb3JcIjtcbmltcG9ydCBwcmlzbWEgZnJvbSBcIi4uLy4uL3ByaXNtYVwiO1xuXG5pbnRlcmZhY2UgSUVtYWlsQ29uZmlybVJlcXVlc3QgZXh0ZW5kcyBOZXh0QXBpUmVxdWVzdCB7XG4gIHF1ZXJ5OiB7XG4gICAgdG9rZW46IHN0cmluZztcbiAgfTtcbn1cblxuY29uc3QgZW1haWxDb25maXJtID0gYXN5bmMgKFxuICByZXE6IElFbWFpbENvbmZpcm1SZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZVxuKSA9PiB7XG4gIGlmIChyZXEubWV0aG9kID09PSBcIlBBVENIXCIpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGF3YWl0IHByaXNtYS4kdHJhbnNhY3Rpb24oYXN5bmMgKHByaXNtYSkgPT4ge1xuICAgICAgICBjb25zdCB7IHRva2VuIH0gPSByZXEucXVlcnk7XG5cbiAgICAgICAgLy8gdmVyaWZpY2FyIHNlIG8gdG9rZW4gZXN0w6EgdmF6aW9cbiAgICAgICAgaWYgKCF0b2tlbikge1xuICAgICAgICAgIHRocm93IG5ldyBBcHBFcnJvcihcInRva2VuIG5vdCBmb3VuZCBvbiByZXF1ZXN0IHF1ZXJ5XCIsIDQyMik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBidXNjYXIgdG9rZW4gbm8gYmFuY29cbiAgICAgICAgY29uc3QgdXNlclRva2VuID0gYXdhaXQgcHJpc21hLnRva2VuLmZpbmRGaXJzdCh7XG4gICAgICAgICAgd2hlcmU6IHtcbiAgICAgICAgICAgIHRva2VuOiB0b2tlbixcbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBzZSB1c2VyVG9rZW4gbiBleGlzdGlyIGxhbsOnYXIgdW0gZXJyb1xuICAgICAgICBpZiAoIXVzZXJUb2tlbikge1xuICAgICAgICAgIHRocm93IG5ldyBBcHBFcnJvcihcIlRva2VuIEludmFsaWQhXCIsIDQwMSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyB2ZXJpZmljYXIgc2UgbyB0b2tlbiBlc3TDoSBleHBpcmFkb1xuICAgICAgICBjb25zdCBkYXRlUHJvdmlkZXIgPSBuZXcgRGF5anNEYXRlUHJvdmlkZXIoKTtcblxuICAgICAgICBpZiAoXG4gICAgICAgICAgZGF0ZVByb3ZpZGVyLmNvbXBhcmVJZkJlZm9yZShcbiAgICAgICAgICAgIHVzZXJUb2tlbi5leHBpcmVzQXQsXG4gICAgICAgICAgICBkYXRlUHJvdmlkZXIuZGF0ZU5vdygpXG4gICAgICAgICAgKVxuICAgICAgICApIHtcbiAgICAgICAgICB0aHJvdyBuZXcgQXBwRXJyb3IoXCJUb2tlbiBleHBpcmVkIVwiLCA0MDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gYnVzY2FyIGRhZG9zIGRvIHVzdcOhcmlvXG4gICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kRmlyc3Qoe1xuICAgICAgICAgIHdoZXJlOiB7XG4gICAgICAgICAgICBpZDogdXNlclRva2VuLnVzZXJJZCxcbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBzZSBuw6NvIHRpdmVyIHVzZXIgYXNzb2NpYWRvIGNvbSBlc3NlIHRva2VuIGFwYWdhciBvIHRva2VuXG4gICAgICAgIGlmICghdXNlcikge1xuICAgICAgICAgIGF3YWl0IHByaXNtYS50b2tlbi5kZWxldGUoe1xuICAgICAgICAgICAgd2hlcmU6IHtcbiAgICAgICAgICAgICAgdG9rZW46IHRva2VuLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHRocm93IG5ldyBBcHBFcnJvcihcbiAgICAgICAgICAgIFwiVG9rZW4gSW52YWxpZCwgcGxlYXNlIHJlcXVlc3QgZW1haWwgY29uZmlybWF0aW9uIGFnYWluXCIsXG4gICAgICAgICAgICA0MDFcbiAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gcHJpc21hIHVwZGF0ZVxuICAgICAgICBhd2FpdCBwcmlzbWEudXNlci51cGRhdGUoe1xuICAgICAgICAgIHdoZXJlOiB7XG4gICAgICAgICAgICBlbWFpbDogdXNlci5lbWFpbCxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIGhhc0VtYWlsQ29uZmlybWVkOiB0cnVlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGRlbGV0YXIgdG9rZW5cbiAgICAgICAgYXdhaXQgcHJpc21hLnRva2VuLmRlbGV0ZSh7XG4gICAgICAgICAgd2hlcmU6IHtcbiAgICAgICAgICAgIHRva2VuOiB0b2tlbixcbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZXNzYWdlOiBcImVtYWlsIGNvbmZpcm1lZCBzdWNjZXNmdWxseVwiIH0pO1xuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEFwcEVycm9yKSB7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKGVycm9yLnN0YXR1c0NvZGUpLmpzb24oeyBtZXNzYWdlOiBlcnJvci5tZXNzYWdlIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZTogXCJJbnRlcm5hbCBzZXJ2ZXIgZXJyb3JcIiB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmVzLnNldEhlYWRlcihcIkFsbG93XCIsIFwiUE9TVFwiKTtcbiAgICByZXMuc3RhdHVzKDQwNSkuc2VuZChcIk1ldGhvZCBub3QgYWxsb3dlZFwiKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZW1haWxDb25maXJtO1xuIl0sIm5hbWVzIjpbIkRheWpzRGF0ZVByb3ZpZGVyIiwiQXBwRXJyb3IiLCJwcmlzbWEiLCJlbWFpbENvbmZpcm0iLCJyZXEiLCJyZXMiLCJtZXRob2QiLCIkdHJhbnNhY3Rpb24iLCJ0b2tlbiIsInF1ZXJ5IiwidXNlclRva2VuIiwiZmluZEZpcnN0Iiwid2hlcmUiLCJkYXRlUHJvdmlkZXIiLCJjb21wYXJlSWZCZWZvcmUiLCJleHBpcmVzQXQiLCJkYXRlTm93IiwidXNlciIsImlkIiwidXNlcklkIiwiZGVsZXRlIiwidXBkYXRlIiwiZW1haWwiLCJkYXRhIiwiaGFzRW1haWxDb25maXJtZWQiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsImVycm9yIiwic3RhdHVzQ29kZSIsInNldEhlYWRlciIsInNlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/emailConfirm.ts\n");

/***/ }),

/***/ "(api)/./src/prisma/index.ts":
/*!*****************************!*\
  !*** ./src/prisma/index.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"prisma\": () => (/* binding */ prisma)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = global.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (true) global.prisma = prisma;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcHJpc21hL2luZGV4LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBOEM7QUFRdkMsTUFBTUMsTUFBTSxHQUFHQyxNQUFNLENBQUNELE1BQU0sSUFBSSxJQUFJRCx3REFBWSxFQUFFLENBQUM7QUFFMUQsSUFBSUcsSUFBcUMsRUFBRUQsTUFBTSxDQUFDRCxNQUFNLEdBQUdBLE1BQU0sQ0FBQztBQUVsRSxpRUFBZUEsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY3JpZS10ZW1wbGF0ZS1uZXh0anMtY2hha3JhdWkvLi9zcmMvcHJpc21hL2luZGV4LnRzPzZiMTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgLy8gYWxsb3cgZ2xvYmFsIGB2YXJgIGRlY2xhcmF0aW9uc1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdmFyXG4gIHZhciBwcmlzbWE6IFByaXNtYUNsaWVudCB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGNvbnN0IHByaXNtYSA9IGdsb2JhbC5wcmlzbWEgfHwgbmV3IFByaXNtYUNsaWVudCgpO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSBnbG9iYWwucHJpc21hID0gcHJpc21hO1xuXG5leHBvcnQgZGVmYXVsdCBwcmlzbWE7XG4iXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwicHJpc21hIiwiZ2xvYmFsIiwicHJvY2VzcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/prisma/index.ts\n");

/***/ }),

/***/ "(api)/./src/shared/dateProvider/DayjsDateProvider.ts":
/*!******************************************************!*\
  !*** ./src/shared/dateProvider/DayjsDateProvider.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DayjsDateProvider\": () => (/* binding */ DayjsDateProvider)\n/* harmony export */ });\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ \"dayjs\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs/plugin/utc */ \"dayjs/plugin/utc\");\n/* harmony import */ var dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var dayjs_plugin_timezone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dayjs/plugin/timezone */ \"dayjs/plugin/timezone\");\n/* harmony import */ var dayjs_plugin_timezone__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_timezone__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\ndayjs__WEBPACK_IMPORTED_MODULE_0___default().extend((dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_1___default()));\ndayjs__WEBPACK_IMPORTED_MODULE_0___default().extend((dayjs_plugin_timezone__WEBPACK_IMPORTED_MODULE_2___default()));\nclass DayjsDateProvider {\n    dateNow() {\n        return dayjs__WEBPACK_IMPORTED_MODULE_0___default()().toDate();\n    }\n    compareIfBefore(start_date, end_date) {\n        return dayjs__WEBPACK_IMPORTED_MODULE_0___default()(start_date).isBefore(end_date);\n    }\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvc2hhcmVkL2RhdGVQcm92aWRlci9EYXlqc0RhdGVQcm92aWRlci50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTBCO0FBQ1M7QUFDVTtBQUM3Q0EsbURBQVksQ0FBQ0MseURBQUcsQ0FBQyxDQUFDO0FBQ2xCRCxtREFBWSxDQUFDRSw4REFBUSxDQUFDLENBQUM7QUFDdkIsTUFBTUUsaUJBQWlCO0lBQ3JCQyxPQUFPLEdBQVM7UUFDZCxPQUFPTCw0Q0FBSyxFQUFFLENBQUNNLE1BQU0sRUFBRSxDQUFDO0lBQzFCO0lBRUFDLGVBQWUsQ0FBQ0MsVUFBZ0IsRUFBRUMsUUFBYyxFQUFXO1FBQ3pELE9BQU9ULDRDQUFLLENBQUNRLFVBQVUsQ0FBQyxDQUFDRSxRQUFRLENBQUNELFFBQVEsQ0FBQyxDQUFDO0lBQzlDO0NBQ0Q7QUFFNEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jcmllLXRlbXBsYXRlLW5leHRqcy1jaGFrcmF1aS8uL3NyYy9zaGFyZWQvZGF0ZVByb3ZpZGVyL0RheWpzRGF0ZVByb3ZpZGVyLnRzP2Q1N2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRheWpzIGZyb20gXCJkYXlqc1wiO1xuaW1wb3J0IHV0YyBmcm9tIFwiZGF5anMvcGx1Z2luL3V0Y1wiO1xuaW1wb3J0IHRpbWV6b25lIGZyb20gXCJkYXlqcy9wbHVnaW4vdGltZXpvbmVcIjtcbmRheWpzLmV4dGVuZCh1dGMpO1xuZGF5anMuZXh0ZW5kKHRpbWV6b25lKTtcbmNsYXNzIERheWpzRGF0ZVByb3ZpZGVyIHtcbiAgZGF0ZU5vdygpOiBEYXRlIHtcbiAgICByZXR1cm4gZGF5anMoKS50b0RhdGUoKTtcbiAgfVxuXG4gIGNvbXBhcmVJZkJlZm9yZShzdGFydF9kYXRlOiBEYXRlLCBlbmRfZGF0ZTogRGF0ZSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBkYXlqcyhzdGFydF9kYXRlKS5pc0JlZm9yZShlbmRfZGF0ZSk7XG4gIH1cbn1cblxuZXhwb3J0IHsgRGF5anNEYXRlUHJvdmlkZXIgfTtcbiJdLCJuYW1lcyI6WyJkYXlqcyIsInV0YyIsInRpbWV6b25lIiwiZXh0ZW5kIiwiRGF5anNEYXRlUHJvdmlkZXIiLCJkYXRlTm93IiwidG9EYXRlIiwiY29tcGFyZUlmQmVmb3JlIiwic3RhcnRfZGF0ZSIsImVuZF9kYXRlIiwiaXNCZWZvcmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/shared/dateProvider/DayjsDateProvider.ts\n");

/***/ }),

/***/ "(api)/./src/utils/AppError.ts":
/*!*******************************!*\
  !*** ./src/utils/AppError.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AppError\": () => (/* binding */ AppError)\n/* harmony export */ });\nclass AppError {\n    constructor(message, statusCode = 400){\n        this.message = message;\n        this.statusCode = statusCode;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvdXRpbHMvQXBwRXJyb3IudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPLE1BQU1BLFFBQVE7SUFLbkJDLFlBQVlDLE9BQWUsRUFBRUMsVUFBVSxHQUFHLEdBQUcsQ0FBRTtRQUM3QyxJQUFJLENBQUNELE9BQU8sR0FBR0EsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQ0MsVUFBVSxHQUFHQSxVQUFVLENBQUM7SUFDL0I7Q0FDRCIsInNvdXJjZXMiOlsid2VicGFjazovL2NyaWUtdGVtcGxhdGUtbmV4dGpzLWNoYWtyYXVpLy4vc3JjL3V0aWxzL0FwcEVycm9yLnRzP2E3NWYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEFwcEVycm9yIHtcbiAgcHVibGljIHJlYWRvbmx5IG1lc3NhZ2U6IHN0cmluZztcblxuICBwdWJsaWMgcmVhZG9ubHkgc3RhdHVzQ29kZTogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2U6IHN0cmluZywgc3RhdHVzQ29kZSA9IDQwMCkge1xuICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgdGhpcy5zdGF0dXNDb2RlID0gc3RhdHVzQ29kZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkFwcEVycm9yIiwiY29uc3RydWN0b3IiLCJtZXNzYWdlIiwic3RhdHVzQ29kZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/utils/AppError.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/emailConfirm.ts"));
module.exports = __webpack_exports__;

})();