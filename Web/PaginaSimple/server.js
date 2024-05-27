const express = require('express');
const path = require('path');
const app = express();
const port = 8000;

app.use(express.static(path.join(__dirname, 'html')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'html', 'pagina.html'));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
