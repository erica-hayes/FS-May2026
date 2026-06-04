const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;
const DATA_FILE = path.join(__dirname, 'tasks.json');

app.use(cors());
app.use(express.json());

function readTasks() {
  try {
    const raw = fs.readFileSync(DATA_FILE, 'utf8');
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

function writeTasks(tasks) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(tasks, null, 2));
}

function ensureSeedData() {
  if (!fs.existsSync(DATA_FILE)) {
    writeTasks([
      {
        id: 1,
        label: 'Study Angular',
        priority: 'High',
        due_date: '2026-06-10 09:00:00',
        date: '2026-06-10',
        time: '09:00:00',
      },
      {
        id: 2,
        label: 'Build REST API',
        priority: 'Medium',
        due_date: '2026-06-15 14:30:00',
        date: '2026-06-15',
        time: '14:30:00',
      },
    ]);
  }
}

ensureSeedData();

app.get('/show_all_tasks', (req, res) => {
  res.json(readTasks());
});

app.post('/add_task', (req, res) => {
  const tasks = readTasks();
  const nextId = tasks.length ? Math.max(...tasks.map((t) => t.id)) + 1 : 1;
  const task = { id: nextId, ...req.body };
  tasks.push(task);
  writeTasks(tasks);
  res.status(201).json(task);
});

app.post('/edit_task', (req, res) => {
  const tasks = readTasks();
  const id = Number(req.body.id);
  const index = tasks.findIndex((t) => t.id === id);
  if (index === -1) {
    return res.status(404).json({ message: 'Task not found' });
  }
  tasks[index] = { ...tasks[index], ...req.body, id };
  writeTasks(tasks);
  res.json(tasks[index]);
});

app.get('/show_tasks_by_label', (req, res) => {
  const label = (req.query.label || '').toString().toLowerCase();
  const filtered = readTasks().filter(
    (t) => t.label && t.label.toLowerCase().includes(label)
  );
  res.json(filtered);
});

app.get('/show_tasks_by_priority', (req, res) => {
  const priority = (req.query.priority || '').toString().toLowerCase();
  const filtered = readTasks().filter(
    (t) => t.priority && t.priority.toLowerCase() === priority
  );
  res.json(filtered);
});

app.get('/show_tasks_by_due_date', (req, res) => {
  const dueDate = (req.query.due_date || '').toString();
  const filtered = readTasks().filter(
    (t) => t.due_date && t.due_date.startsWith(dueDate)
  );
  res.json(filtered);
});

app.listen(PORT, () => {
  console.log(`Task API server listening on http://localhost:${PORT}`);
});
