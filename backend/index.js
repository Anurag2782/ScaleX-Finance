const express = require('express');
const connectDB = require('./config/db');
const colors = require('colors');
const Pair = require('./models/pairModel');

// Dotenc config
require("dotenv").config();

// mongoDB connection
connectDB();

const app = express();

// middleware
app.use(express.json());

// ################################ PAIR CREATION AND DELETION #############################
// Create Operation: Add a new pair 
app.post('/pairs', async (req, res) => {
    try {
        const pair = new Pair(req.body); // Assuming req.body contains the pair data
        await pair.save();
        res.json(pair);
    } catch (error) {
        console.error('Error creating pair:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Delete Operation: Delete a pair by ID
app.delete('/pairs/:pairId', async (req, res) => {
    try {
        const pair = await Pair.findByIdAndDelete(req.params.pairId);
        if (!pair) {
            return res.status(404).json({ error: 'Pair not found' });
        }
        res.json({ message: 'Pair deleted successfully' });
    } catch (error) {
        console.error('Error deleting pair:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// #########################################   PRICE SECTION    #########################################
// Create Operation: Add price data to a pair
app.post('/pairs/:pairId/priceNative', async (req, res) => {
    try {
        const pair = await Pair.findById(req.params.pairId);
        if (!pair) {
            return res.status(404).json({ error: 'Pair not found' });
        }
        pair.priceNative = req.body.priceNative;
        await pair.save();
        res.json(pair);
    } catch (error) {
        console.error('Error adding price:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
app.post('/pairs/:pairId/priceUsd', async (req, res) => {
    try {
        const pair = await Pair.findById(req.params.pairId);
        if (!pair) {
            return res.status(404).json({ error: 'Pair not found' });
        }
        pair.priceUsd = req.body.priceUsd;
        await pair.save();
        res.json(pair);
    } catch (error) {
        console.error('Error adding price:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
app.post('/pairs/:pairId/priceChange', async (req, res) => {
    try {
        const pair = await Pair.findById(req.params.pairId);
        if (!pair) {
            return res.status(404).json({ error: 'Pair not found' });
        }
        pair.priceChange = req.body.priceChange;
        await pair.save();
        res.json(pair);
    } catch (error) {
        console.error('Error adding price:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Read Operation: Retrieve price data for a pair
app.get('/pairs/:pairId/priceNative', async (req, res) => {
    try {
        // console.log(req.params.pairId);
        const pair = await Pair.findById(req.params.pairId);
        // console.log('Pair:', pair); // log the pair variable
        if (!pair) {
            return res.status(404).json({ error: 'Pair not found' });
        }
        // console.log(pair.priceNative);
        res.json({ priceNative: pair.priceNative });
    } catch (error) {
        console.error('Error fetching price:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
app.get('/pairs/:pairId/priceUsd', async (req, res) => {
    try {
        // console.log(req.params.pairId);
        const pair = await Pair.findById(req.params.pairId);
        // console.log('Pair:', pair); // log the pair variable
        if (!pair) {
            return res.status(404).json({ error: 'Pair not found' });
        }
        console.log(pair.priceUsd);
        res.json({ priceUsd: pair.priceUsd });
    } catch (error) {
        console.error('Error fetching price:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
app.get('/pairs/:pairId/priceChange', async (req, res) => {
    try {
        // console.log(req.params.pairId);
        const pair = await Pair.findById(req.params.pairId);
        // console.log('Pair:', pair); // log the pair variable
        if (!pair) {
            return res.status(404).json({ error: 'Pair not found' });
        }
        console.log(pair.priceChange);
        res.json({ priceChange: pair.priceChange });
    } catch (error) {
        console.error('Error fetching price:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Update Operation: Update price data for a pair
app.put('/pairs/:pairId/priceNative', async (req, res) => {
    try {
        
        const pair = await Pair.findById(req.params.pairId);
        if (!pair) {
            return res.status(404).json({ error: 'Pair not found' });
        }
        console.log(pair.priceNative);
        pair.priceNative = req.body.priceNative;
        await pair.save();
        console.log(pair.priceNative);
        res.json(pair);
    } catch (error) {
        console.error('Error updating price:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
app.put('/pairs/:pairId/priceUsd', async (req, res) => {
    try {
        
        const pair = await Pair.findById(req.params.pairId);
        if (!pair) {
            return res.status(404).json({ error: 'Pair not found' });
        }
        pair.priceUsd = req.body.priceUsd;
        await pair.save();
        res.json(pair);
    } catch (error) {
        console.error('Error updating price:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
app.put('/pairs/:pairId/priceChange', async (req, res) => {
    try {
        
        const pair = await Pair.findById(req.params.pairId);
        if (!pair) {
            return res.status(404).json({ error: 'Pair not found' });
        }
        pair.priceChange = req.body.priceChange;
        await pair.save();
        res.json(pair);
    } catch (error) {
        console.error('Error updating price:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Delete Operation: Delete price data for a pair
app.delete('/pairs/:pairId/priceNative', async (req, res) => {
    try {
        const pair = await Pair.findById(req.params.pairId);
        if (!pair) {
            return res.status(404).json({ error: 'Pair not found' });
        }
        pair.priceNative = 0; // Set price to 0 or null
        await pair.save();
        res.json({ message: 'Price data deleted successfully' });
    } catch (error) {
        console.error('Error deleting price:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
app.delete('/pairs/:pairId/priceUsd', async (req, res) => {
    try {
        const pair = await Pair.findById(req.params.pairId);
        if (!pair) {
            return res.status(404).json({ error: 'Pair not found' });
        }
        pair.priceUsd = 0; // Set price to 0 or null
        await pair.save();
        res.json({ message: 'Price data deleted successfully' });
    } catch (error) {
        console.error('Error deleting price:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
app.delete('/pairs/:pairId/priceChange', async (req, res) => {
    try {
        const pair = await Pair.findById(req.params.pairId);
        if (!pair) {
            return res.status(404).json({ error: 'Pair not found' });
        }
        pair.priceChange = {}; // Set price to 0 or null
        await pair.save();
        res.json({ message: 'Price data deleted successfully' });
    } catch (error) {
        console.error('Error deleting price:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


// #########################################  VOLUME SECTION #################################
// Create Operation: Add volume data to a pair
app.post('/pairs/:pairId/volume', async (req, res) => {
    try {
        const pair = await Pair.findById(req.params.pairId);
        if (!pair) {
            return res.status(404).json({ error: 'Pair not found' });
        }
        pair.volume = req.body.volume;
        await pair.save();
        res.json(pair);
    } catch (error) {
        console.error('Error adding volume:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Read Operation: Retrieve volume data for a pair
app.get('/pairs/:pairId/volume', async (req, res) => {
    try {
        const pair = await Pair.findById(req.params.pairId);
        if (!pair) {
            return res.status(404).json({ error: 'Pair not found' });
        }
        res.json({ volume: pair.volume });
    } catch (error) {
        console.error('Error fetching volume:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Update Operation: Update volume data for a pair
app.put('/pairs/:pairId/volume', async (req, res) => {
    try {
        const pair = await Pair.findById(req.params.pairId);
        if (!pair) {
            return res.status(404).json({ error: 'Pair not found' });
        }
        pair.volume = req.body.volume;
        await pair.save();
        res.json(pair);
    } catch (error) {
        console.error('Error updating volume:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Delete Operation: Delete volume data for a pair
app.delete('/pairs/:pairId/volume', async (req, res) => {
    try {
        const pair = await Pair.findById(req.params.pairId);
        if (!pair) {
            return res.status(404).json({ error: 'Pair not found' });
        }
        pair.volume = 0; // Set volume to 0 or null
        await pair.save();
        res.json({ message: 'Volume data deleted successfully' });
    } catch (error) {
        console.error('Error deleting volume:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


const port  = process.env.PORT || 8080;

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`.bgCyan.white)
})
