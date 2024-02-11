"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
exports.default = () => ({
    port: parseInt(process.env.PORT, 10) || 4000,
    socketPort: parseInt(process.env.SOCKET_PORT, 10) || 8000,
    postgres: {
        host: process.env.DB_HOST || 'localhost',
        port: parseInt(process.env.DB_PORT, 10) || 5432,
        user: process.env.DB_USER || 'postgres',
        password: process.env.DB_PASSWORD || '',
        db: process.env.DB_NAME || 'postgres',
    },
});
//# sourceMappingURL=configuration.js.map