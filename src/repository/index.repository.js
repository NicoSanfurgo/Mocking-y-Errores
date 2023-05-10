import { Carts, Messages, Products, Tickets, Users } from '../dao/factory.js';
import CartsRepository from './carts.repository.js';
import MessagesRepository from './messages.repository.js';
import ProductRepository from './products.repository.js';
import TicketsRepository from './ticket.repository.js';
import UserRepository from './users.repository.js';

export const CartService = new CartsRepository(Carts);
export const MessageService = new MessagesRepository(Messages);
export const ProductService = new ProductRepository(Products);
export const TicketsService = new TicketsRepository(Tickets);
export const UserService = new UserRepository(Users);
