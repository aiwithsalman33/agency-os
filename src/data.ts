import type { Client, Deal, Invoice, Lead, Task, Thread, User } from './types';
export const users: User[] = [
  { id: 'u1', name: 'Maya Chen', email: 'admin@demo.com', role: 'admin', title: 'Founder & Admin', initials: 'MC' },
  { id: 'u2', name: 'Arjun Rao', email: 'team@demo.com', role: 'team_member', title: 'Account Director', initials: 'AR' },
  { id: 'u3', name: 'Olivia Smith', email: 'client@demo.com', role: 'client', title: 'Marketing Lead', initials: 'OS' },
];
export const leads: Lead[] = [
  { id: 'l1', name: 'Aarav Mehta', company: 'Northstar Labs', source: 'whatsapp', status: 'qualified', ownerId: 'u2', value: 180000, createdAt: 'Today' },
  { id: 'l2', name: 'Sofia Williams', company: 'Kite & Co.', source: 'meta_ads', status: 'new', ownerId: 'u1', value: 95000, createdAt: 'Today' },
  { id: 'l3', name: 'Noah Patel', company: 'Lumen Health', source: 'form', status: 'contacted', ownerId: 'u2', value: 240000, createdAt: 'Yesterday' },
  { id: 'l4', name: 'Emma Garcia', company: 'The Foundry', source: 'instagram', status: 'qualified', ownerId: 'u1', value: 74000, createdAt: 'Yesterday' },
  { id: 'l5', name: 'Liam Wilson', company: 'Aster Studio', source: 'ctwa', status: 'new', ownerId: 'u2', value: 125000, createdAt: 'Aug 18' },
  { id: 'l6', name: 'Zoya Khan', company: 'Kindred Works', source: 'manual', status: 'converted', ownerId: 'u1', value: 310000, createdAt: 'Aug 16' },
];
export const deals: Deal[] = [
  { id: 'd1', title: 'Northstar rebrand', stage: 'new', value: 180000, ownerId: 'u2', client: 'Northstar Labs', days: 2 },
  { id: 'd2', title: 'Kite growth sprint', stage: 'qualified', value: 95000, ownerId: 'u1', client: 'Kite & Co.', days: 4 },
  { id: 'd3', title: 'Lumen health launch', stage: 'proposal_sent', value: 240000, ownerId: 'u2', client: 'Lumen Health', days: 8 },
  { id: 'd4', title: 'Foundry content engine', stage: 'negotiation', value: 74000, ownerId: 'u1', client: 'The Foundry', days: 12 },
  { id: 'd5', title: 'Kindred annual retainer', stage: 'won', value: 310000, ownerId: 'u1', client: 'Kindred Works', days: 1 },
  { id: 'd6', title: 'Aster launch campaign', stage: 'lost', value: 125000, ownerId: 'u2', client: 'Aster Studio', days: 19 },
];
export const clients: Client[] = [
  { id: 'c1', name: 'Priya Shah', company: 'Northstar Labs', status: 'active', ownerId: 'u2', tasks: 8, invoices: 180000 },
  { id: 'c2', name: 'Daniel Kim', company: 'Kindred Works', status: 'active', ownerId: 'u1', tasks: 4, invoices: 0 },
  { id: 'c3', name: 'Mia Thompson', company: 'Lumen Health', status: 'active', ownerId: 'u2', tasks: 11, invoices: 240000 },
  { id: 'c4', name: 'Rohan Das', company: 'The Foundry', status: 'paused', ownerId: 'u1', tasks: 3, invoices: 74000 },
];
export const tasks: Task[] = [
  { id: 't1', title: 'Review homepage concepts', client: 'Northstar Labs', status: 'review', priority: 'high', due: 'Today' },
  { id: 't2', title: 'Prepare Q3 performance report', client: 'Kindred Works', status: 'in_progress', priority: 'medium', due: 'Tomorrow' },
  { id: 't3', title: 'Finalize campaign brief', client: 'Lumen Health', status: 'todo', priority: 'high', due: 'Aug 25' },
  { id: 't4', title: 'Publish social calendar', client: 'The Foundry', status: 'done', priority: 'low', due: 'Aug 19' },
];
export const invoices: Invoice[] = [
  { id: 'i1', number: 'INV-1048', client: 'Northstar Labs', status: 'overdue', due: 'Aug 14', total: 180000 },
  { id: 'i2', number: 'INV-1049', client: 'Lumen Health', status: 'sent', due: 'Aug 28', total: 240000 },
  { id: 'i3', number: 'INV-1047', client: 'Kindred Works', status: 'paid', due: 'Aug 10', total: 310000 },
];
export const threads: Thread[] = [
  { id: 'th1', name: 'Priya Shah', company: 'Northstar Labs', preview: 'The first direction feels very close...', unread: 2, messages: [{ id: 'm1', direction: 'inbound', sender: 'Priya', text: 'Hi Maya, we reviewed the first round.', time: '10:32' }, { id: 'm2', direction: 'outbound', sender: 'Maya', text: 'Great. I would love your thoughts on direction two.', time: '10:41' }, { id: 'm3', direction: 'inbound', sender: 'Priya', text: 'The first direction feels very close to where we want to go.', time: '10:48' }] },
  { id: 'th2', name: 'Daniel Kim', company: 'Kindred Works', preview: 'Invoice INV-1047 has been paid.', unread: 0, messages: [{ id: 'm4', direction: 'outbound', sender: 'Maya', text: 'Sharing a quick update on the launch timeline.', time: 'Yesterday' }, { id: 'm5', direction: 'inbound', sender: 'Daniel', text: 'Invoice INV-1047 has been paid.', time: 'Yesterday' }] },
  { id: 'th3', name: 'Mia Thompson', company: 'Lumen Health', preview: 'Can we move the review to Thursday?', unread: 1, messages: [{ id: 'm6', direction: 'inbound', sender: 'Mia', text: 'Can we move the review to Thursday?', time: 'Mon' }] },
];
