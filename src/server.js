import app from './app';
import config from '../config';

app.listen(config.port, () => console.info(`App is running on port ${config.port}`));
