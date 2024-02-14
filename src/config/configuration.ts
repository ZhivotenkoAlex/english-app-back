import { config } from 'dotenv'

config()

export default () => ({
  port: parseInt(process.env.PORT, 10) || 4000,
  socketPort: parseInt(process.env.SOCKET_PORT, 10) || 8000,
  postgres: {
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT, 10) || 5432,
    user: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || '',
    db: process.env.DB_NAME || 'postgres',
  },
})
