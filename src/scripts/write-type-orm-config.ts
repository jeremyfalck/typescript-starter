import configService from '../config/database-config';
import fs = require('fs');
fs.writeFileSync('ormconfig.json', JSON.stringify(configService, null, 2));
