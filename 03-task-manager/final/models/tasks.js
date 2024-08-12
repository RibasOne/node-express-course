import mongoose from 'mongoose';

const tasksSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'must provide a name'],
        trim: true,
        minlength: [3, 'name must be at least 3 characters long'],
        maxlength: [50, 'name must be at most 50 characters long']
    },
    completed: {
        type: Boolean,
        default: false,    
    }
});

const Tasks = mongoose.model('Tasks', tasksSchema);

export default Tasks;