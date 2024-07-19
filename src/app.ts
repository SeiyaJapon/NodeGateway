import express from 'express';
import dotenv from 'dotenv';
import authRoutes from "./domains/auth/routes/authRoutes";
import errorHandler from "./shared/middlewares/errorHandler";

dotenv.config();

const app = express();

app.use(express.json());
app.use('/api/auth', authRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Gateway running on port ${PORT}`);
});