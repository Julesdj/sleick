import Express from 'express';
import lodash from 'lodash';
import Ticket, {
    validateTicket,
    validateTicketUpdate,
} from '../models/ticket.js';
import User from '../models/user.js';
// import admin from '../middleware/admin.js';
import authz from '../middleware/authz.js';

//Variables
const tickets = Express.Router();
const _ = lodash;

//Get all tickets
tickets.get('/', async (req, res) => {
    const tickets = await Ticket.find().populate(
        'submitterId',
        'firstName lastName email role'
    );
    const ticketCount = await Ticket.find().count();
    if (ticketCount === 0)
        return res.status(404).send('Could not find any tickets.');
    res.send(tickets);
});

//Create a new ticket
tickets.post('/', authz, async (req, res) => {
    //Send appropriate error
    const { error } = validateTicket(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        //Validate user
        const user = await User.findById(req.user._id);
        //Register user
        const ticket = new Ticket({
            submitterId: user._id,
            title: req.body.title,
            priority: req.body.priority,
            status: req.body.status,
            description: req.body.description,
        });

        await ticket.save();
        console.log(ticket);
        res.send(ticket);
    } catch (error) {
        res.status(400).send('submitter must be a valid user');
    }
});

//Get single ticket
tickets.get('/:id', async (req, res) => {
    try {
        const ticket = await Ticket.findById(req.params.id).populate(
            'submitter',
            'firstName lastName email'
        );
        res.send(ticket);
    } catch (error) {
        res.status(404).send('The ticket with the given ID was not found.');
    }
});

//Update a ticket
tickets.put('/:id', async (req, res) => {
    const ticketId = req.params.id;
    const { error } = validateTicketUpdate(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    try {
        const data = _.pick(req.body, [
            'title',
            'priority',
            'status',
            'description',
        ]);
        const ticket = await Ticket.findByIdAndUpdate(ticketId, data, {
            returnOriginal: false,
        });
        const updatedTicket = await ticket.save();
        res.send(updatedTicket);
    } catch (error) {
        res.status(404).send('The ticket with the given ID was not found.');
    }
});

//Protected route
tickets.delete('/:id', async (req, res) => {
    try {
        const ticket = await Ticket.findByIdAndRemove(req.params.id);
        res.send('Ticket deleted successfully!');
    } catch (error) {
        res.status(404).send('The ticket with the given ID was not found.');
    }
});

export default tickets;
