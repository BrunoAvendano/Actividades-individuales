import express from 'express';
const app = express();
app.use(express.json());

let cartas = [{
    "id": 1,
    "name": "Mama-lona",
    "type": "Attack"

}];

app.get('/cartas', (req, res) => {
    if (cartas.length === 0) {
        res.status(200).json({ message: 'No hay cartas' });
    } else {
        res.status(200).json(cartas);
    }
});

app.get('/cartas/:id', (req, res) => {
    const carta = cartas.find(c => c.id === parseInt(req.params.id));
    if (!carta) {
        res.status(404).json({ message: 'La carta no exste' });
    } else {
        res.status(200).json(carta);
    }
});

// Agregar nuevas cartas
app.post('/cartas', (req, res) => {
    const nuevaCarta = req.body;
    const existeCarta = cartas.find(c => c.id === nuevaCarta.id);
    if (existeCarta) {
        res.status(400).json({ message: 'La carta ya existe' });
    } else {
        cartas.push(nuevaCarta);
        res.status(200).json({ message: 'Carta agregada'}, nuevaCarta);
    }
});

// Borra una carta en base a su ID
app.delete("/api/cards/:id", (req, res) => {
    const cardIndex = cards.findIndex(c => c.id === req.params.id);
    if (cardIndex === -1) {
      res.status(404).json({ message: "Carta no encontrada" });
    } else {
      cards.splice(cardIndex, 1);
      res.status(200).json({ message: "Carta borrada correctamente" });
    }
  });
  
// Actualiza una carta en base a su ID
app.put("/api/cards/:id", (req, res) => {
    const cardIndex = cards.findIndex(c => c.id === req.params.id);
    if (cardIndex === -1) {
      res.status(404).json({ message: "Carta no encontrada" });
    } else {
      const card = cards[cardIndex];
      const updatedCard = { ...card, ...req.body };
      cards[cardIndex] = updatedCard;
      res.status(200).json(updatedCard);
    }
  });

app.listen(3000, () => {
console.log("server running on port 3000")
} );