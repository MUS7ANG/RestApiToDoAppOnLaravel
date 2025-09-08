@extends('layout.app')

@section('content')
    <div class="bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto">
        <h1 class="text-2xl font-bold text-center mb-6 text-gray-800">To-Do List</h1>

        <form id="create-task-form" class="mb-6">
            <div class="mb-4">
                <input
                    type="text"
                    id="new-task-title"
                    placeholder="Task title (min 5 characters)"
                    class="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
            </div>
            <div class="mb-4">
            <textarea
                id="new-task-description"
                placeholder="Task description (optional)"
                class="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            </div>
            <div class="mb-4">
                <label class="flex items-center">
                    <input
                        type="checkbox"
                        id="new-task-state"
                        class="mr-2"
                    >
                    <span>Completed</span>
                </label>
            </div>
            <button
                type="submit"
                class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition w-full"
            >
                Add Task
            </button>
        </form>

        <ul id="task-list" class="space-y-2"></ul>
    </div>

    <div id="edit-task-modal" class="hidden fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
        <div class="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h2 class="text-xl font-bold mb-4">Edit Task</h2>
            <form id="edit-task-form">
                <input
                    type="hidden"
                    id="edit-task-id"
                >
                <div class="mb-4">
                    <input
                        type="text"
                        id="edit-task-title"
                        placeholder="Task title (min 5 characters)"
                        class="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                </div>
                <div class="mb-4">
                <textarea
                    id="edit-task-description"
                    placeholder="Task description (optional)"
                    class="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
                </div>
                <div class="mb-4">
                    <label class="flex items-center">
                        <input
                            type="checkbox"
                            id="edit-task-state"
                            class="mr-2"
                        >
                        <span>Completed</span>
                    </label>
                </div>
                <div class="flex justify-end">
                    <button
                        type="button"
                        id="cancel-edit"
                        class="mr-2 text-gray-500 hover:text-gray-700"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        class="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
                    >
                        Save
                    </button>
                </div>
            </form>
        </div>
    </div>
@endsection
