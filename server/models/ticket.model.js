import mongoose from 'mongoose';
import Joi from 'joi';

const { Schema } = mongoose;

const ticketSchema = new Schema(
    {
        submitterId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        title: {
            type: String,
            required: true,
            minlength: 5,
            maxlength: 100,
        },
        priority: {
            type: String,
            enum: ['low', 'medium', 'high'],
            default: 'low',
        },
        status: {
            type: String,
            enum: ['new', 'open', 'in progess', 'resolved'],
            default: 'new',
        },
        device: {
            type: String,
            enum: ['phone', 'laptop', 'pc', 'tablet'],
            required: true,
        },
        browser: {
            type: String,
            enum: [
                'google chrome',
                'microsft edge',
                'mozilla firefox',
                'safari',
                'other',
            ],
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

//Ticket Moddel
const Ticket = mongoose.models.Ticket || mongoose.model('Ticket', ticketSchema);

//User input validation using Joi
export function validateTicket(ticket) {
    const schema = Joi.object({
        // submitter: Joi.string().required(),
        title: Joi.string().min(5).max(100).required(),
        priority: Joi.string().valid('low', 'medium', 'high'),
        status: Joi.string().valid('new', 'open', 'in progess', 'resolved'),
        device: Joi.string()
            .valid('phone', 'laptop', 'pc', 'tablet')
            .required(),
        browser: Joi.string()
            .valid(
                'google chrome',
                'microsft edge',
                'mozilla firefox',
                'safari',
                'other'
            )
            .required(),
        description: Joi.string().min(5).required(),
    });

    return schema.validate(ticket);
}
export function validateTicketUpdate(ticket) {
    const schema = Joi.object({
        title: Joi.string().min(5).max(100),
        priority: Joi.string().valid('low', 'medium', 'high'),
        status: Joi.string().valid('new', 'open', 'in progess', 'resolved'),
        device: Joi.string().valid('phone', 'laptop', 'pc', 'tablet'),
        browser: Joi.string().valid(
            'google chrome',
            'microsft edge',
            'mozilla firefox',
            'safari',
            'other'
        ),
        description: Joi.string().min(5),
    });

    return schema.validate(ticket);
}

export default Ticket;
