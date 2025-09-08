import axios from 'axios';
async function loadTasks() {
    try {
        const response = await axios.get('/api/tasks');
        const tasks = response.data;
        const taskList = document.getElementById('task-list');
        taskList.innerHTML = tasks.map(task => `
               <li class="flex justify-between items-center p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                   <div>
                       <span class="font-medium">${task.title}</span>
                       ${task.description ? `<p class="text-sm text-gray-600">${task.description}</p>` : ''}
                       <p class="text-sm ${task.state ? 'text-green-500' : 'text-red-500'}">
                           ${task.state ? 'Completed' : 'Pending'}
                       </p>
                   </div>
                   <div>
                       <button data-id="${task.id}" class="edit-task text-blue-500 hover:text-blue-700 mr-2">Edit</button>
                       <button data-id="${task.id}" class="delete-task text-red-500 hover:text-red-700">Delete</button>
                   </div>
               </li>
           `).join('');
    } catch (error) {
        console.error('Error fetching tasks:', error.response?.data || error.message);
    }
}

document.getElementById('create-task-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const title = document.getElementById('new-task-title').value;
    const description = document.getElementById('new-task-description').value;
    const state = document.getElementById('new-task-state').checked;
    if (!title.trim() || title.length < 5) {
        alert('Task title is required and must be at least 5 characters.');
        return;
    }
    console.log('Sending POST request:', { title, description, state });
    try {
        await axios.post('/api/tasks', { title, description, state });
        document.getElementById('new-task-title').value = '';
        document.getElementById('new-task-description').value = '';
        document.getElementById('new-task-state').checked = false;
        loadTasks();
    } catch (error) {
        console.error('Error creating task:', error.response?.data || error.message);
        alert('Failed to create task: ' + (error.response?.data?.message || error.message));
    }
});

document.getElementById('task-list').addEventListener('click', async (e) => {
    if (e.target.classList.contains('edit-task')) {
        const id = e.target.dataset.id;
        try {
            const response = await axios.get(`/api/tasks/${id}`);
            const task = response.data;
            document.getElementById('edit-task-id').value = task.id;
            document.getElementById('edit-task-title').value = task.title;
            document.getElementById('edit-task-description').value = task.description || '';
            document.getElementById('edit-task-state').checked = task.state;
            document.getElementById('edit-task-modal').classList.remove('hidden');
        } catch (error) {
            console.error('Error fetching task:', error.response?.data || error.message);
        }
    }
    if (e.target.classList.contains('delete-task')) {
        const id = e.target.dataset.id;
        try {
            await axios.delete(`/api/tasks/${id}`);
            loadTasks();
        } catch (error) {
            console.error('Error deleting task:', error.response?.data || error.message);
        }
    }
});

document.getElementById('edit-task-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const id = document.getElementById('edit-task-id').value;
    const title = document.getElementById('edit-task-title').value;
    const description = document.getElementById('edit-task-description').value;
    const state = document.getElementById('edit-task-state').checked;
    if (!title.trim() || title.length < 5) {
        alert('Task title is required and must be at least 5 characters.');
        return;
    }
    console.log('Sending PUT request:', { id, title, description, state });
    try {
        await axios.put(`/api/tasks/${id}`, { title, description, state });
        document.getElementById('edit-task-modal').classList.add('hidden');
        loadTasks();
    } catch (error) {
        console.error('Error updating task:', error.response?.data || error.message);
        alert('Failed to update task: ' + (error.response?.data?.message || error.message));
    }
});

document.getElementById('cancel-edit').addEventListener('click', () => {
    document.getElementById('edit-task-modal').classList.add('hidden');
});

loadTasks();
