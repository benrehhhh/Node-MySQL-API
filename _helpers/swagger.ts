import express from 'express';
import path from 'path';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import { Router } from 'express';

const router: Router = express.Router();

const swaggerDocument = YAML.load(path.join(__dirname, '../../swagger.yaml'));

router.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

export default router;