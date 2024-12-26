const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { MongoClient, ObjectId } = require('mongodb');
const jwt = require('jsonwebtoken');

const app = express();
const port = process.env.PORT || 7000;

// Log environment variables to check if they are loaded
console.log("MongoDB User:", process.env.DB_USER);
console.log("MongoDB Password:", process.env.DB_PASS);
console.log("App running on port:", port);
const corsOptions = {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'email', 'password'],
   
};

// Apply CORS before other middleware
app.use(cors(corsOptions));

app.use(express.json());

// MongoDB Connection URL
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@pawpedia.8x3yu.mongodb.net/?retryWrites=true&w=majority&appName=PawPedia`;
const client = new MongoClient(uri);

// MongoDB Connection
async function connectToCollection(collectionName) {
    try {
        console.log(`Connecting to MongoDB collection: ${collectionName}...`);
        await client.connect();
        console.log("Connected to MongoDB");
        const database = client.db("portfolio");
        return database.collection(collectionName);
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        throw new Error("Failed to connect to MongoDB");
    }
}

// Auth Middleware
const authMiddleware = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1]; // Get token from 'Authorization' header

    if (!token) {
        return res.status(403).json({ error: 'No token provided' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(403).json({ error: 'Invalid token' });
        }
        req.user = decoded; // Attach the decoded user info to the request
        next();
    });
};

// Auth route to login
app.post('/auth/login', async (req, res) => {
    console.log(req.body);
    const { email, password } = req.body;

    const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
    const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
        // Generate JWT Token
        const token = jwt.sign({ email, role: 'admin' }, process.env.JWT_SECRET, { expiresIn: '1h' });

        return res.status(200).json({ message: 'Login successful', token });
    } else {
        return res.status(401).json({ error: 'Invalid credentials' });
    }
});

// Routes for Projects
app.get('/projects', async (req, res) => {
    try {
        const projectsCollection = await connectToCollection('projects');
        const projects = await projectsCollection.find().toArray();
        res.json(projects);
    } catch (error) {
        console.error("Failed to fetch projects:", error);
        res.status(500).json({ error: "Failed to fetch projects" });
    }
});

app.post('/projects', authMiddleware, async (req, res) => {
    const { name, url, repo, img, year, tags } = req.body;

    if (!name || !url || !repo || !year || !tags) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        const projectsCollection = await connectToCollection('projects');
        const newProject = { name, url, repo, img, year, tags };
        await projectsCollection.insertOne(newProject);
        return res.status(201).json({ message: "Project created successfully" });
    } catch (error) {
        console.error("Error during project creation:", error);
        return res.status(500).json({ error: "Failed to create project" });
    }
});

app.put('/projects/:id', authMiddleware, async (req, res) => {
    const { id } = req.params; // Get project ID from URL
    const { name, url, repo, img, year, tags } = req.body; // Get project data from the body

    try {
        const projectsCollection = await connectToCollection('projects');
        const objectId = new ObjectId(id);
        const updatedProject = { name, url, repo, img, year, tags };
        const result = await projectsCollection.updateOne(
            { _id: objectId },
            { $set: updatedProject }
        );

        if (result.matchedCount === 0) {
            return res.status(404).json({ error: 'Project not found' });
        }

        res.json({ message: 'Project updated successfully' });
    } catch (error) {
        console.error("Error during project update:", error);
        res.status(500).json({ error: "Failed to update project" });
    }
});

app.delete('/projects/:id', authMiddleware, async (req, res) => {
    const { id } = req.params;

    if (!ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'Invalid project ID format' });
    }

    try {
        const projectsCollection = await connectToCollection('projects');
        const result = await projectsCollection.deleteOne({ _id: new ObjectId(id) });

        if (result.deletedCount === 0) {
            return res.status(404).json({ error: 'Project not found' });
        }

        res.json({ message: 'Project deleted successfully' });
    } catch (error) {
        console.error("Error during project deletion:", error);
        return res.status(500).json({ error: "Failed to delete project" });
    }
});

// Routes for Blogs
app.get('/blogs', async (req, res) => {
    try {
        const blogsCollection = await connectToCollection('blogs');
        const blogs = await blogsCollection.find().toArray();
        res.json(blogs);
    } catch (error) {
        console.error("Failed to fetch blogs:", error);
        res.status(500).json({ error: "Failed to fetch blogs" });
    }
});
// Fetch a single blog post by its ID
app.get('/blogs/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const blogsCollection = await connectToCollection('blogs');

        // Fetch a single blog by its _id
        const blog = await blogsCollection.findOne({ _id: new ObjectId(id) });

        if (!blog) {
            return res.status(404).json({ error: "Blog not found" });
        }

        res.json(blog);
    } catch (error) {
        console.error("Failed to fetch blog:", error);
        res.status(500).json({ error: "Failed to fetch blog" });
    }
});

app.post('/blogs', authMiddleware, async (req, res) => {
    const { title, description, topic, img, readTime } = req.body;

    if (!title || !description || !topic || !img || !readTime) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        const blogsCollection = await connectToCollection('blogs');
        const newBlog = { title, description, topic, img, readTime, date: new Date() };
        await blogsCollection.insertOne(newBlog);
        return res.status(201).json({ message: "Blog created successfully" });
    } catch (error) {
        console.error("Error during blog creation:", error);
        return res.status(500).json({ error: "Failed to create blog" });
    }
});

// Update a blog
app.put('/blogs/:id', authMiddleware, async (req, res) => {
    const { id } = req.params; // Get blog ID from URL
    const { title, description, topic, img, readTime } = req.body; // Get blog data from the body

    if (!ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'Invalid blog ID format' });
    }

    try {
        const blogsCollection = await connectToCollection('blogs');
        const objectId = new ObjectId(id); // Convert the ID to an ObjectId
        const updatedBlog = { title, description, topic, img, readTime }; // Updated blog data

        const result = await blogsCollection.updateOne(
            { _id: objectId }, // Match the blog by ID
            { $set: updatedBlog } // Update with new data
        );

        if (result.matchedCount === 0) {
            return res.status(404).json({ error: 'Blog not found' });
        }

        res.json({ message: 'Blog updated successfully' });
    } catch (error) {
        console.error("Error during blog update:", error);
        res.status(500).json({ error: "Failed to update blog" });
    }
});

// Delete a blog
app.delete('/blogs/:id', authMiddleware, async (req, res) => {
    const { id } = req.params; // Get blog ID from URL

    if (!ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'Invalid blog ID format' });
    }

    try {
        const blogsCollection = await connectToCollection('blogs');
        const result = await blogsCollection.deleteOne({ _id: new ObjectId(id) }); // Delete the blog by ID

        if (result.deletedCount === 0) {
            return res.status(404).json({ error: 'Blog not found' });
        }

        res.json({ message: 'Blog deleted successfully' });
    } catch (error) {
        console.error("Error during blog deletion:", error);
        res.status(500).json({ error: "Failed to delete blog" });
    }
});

// Root Route
app.get('/', (req, res) => {
    res.send('Portfolio API with Auth is Running');
});



// Start the server
app.listen(port, () => {
    console.log(`Portfolio API is running on port: ${port}`);
});
