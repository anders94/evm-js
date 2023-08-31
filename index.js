const { Level } = require('level');
const db = new Level('./data');

(async () => {
    for await (const [key, value] of db.iterator()) {
	console.log(key, value);
    }

})();
