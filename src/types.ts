export type Role = 'admin' | 'team_member' | 'client';
export type DealStage = 'new' | 'qualified' | 'proposal_sent' | 'negotiation' | 'won' | 'lost';
export type LeadStatus = 'new' | 'contacted' | 'qualified' | 'unqualified' | 'converted';
export interface User { id: string; name: string; email: string; role: Role; title: string; initials: string; }
export interface Lead { id: string; name: string; company: string; source: string; status: LeadStatus; ownerId: string; value: number; createdAt: string; }
export interface Deal { id: string; title: string; stage: DealStage; value: number; ownerId: string; client: string; days: number; }
export interface Client { id: string; name: string; company: string; status: 'active' | 'paused' | 'churned'; ownerId: string; tasks: number; invoices: number; }
export interface Message { id: string; direction: 'inbound' | 'outbound'; sender: string; text: string; time: string; }
export interface Thread { id: string; name: string; company: string; preview: string; unread: number; messages: Message[]; }
export interface Task { id: string; title: string; client: string; status: 'todo' | 'in_progress' | 'review' | 'done'; priority: 'low' | 'medium' | 'high'; due: string; }
export interface Invoice { id: string; number: string; client: string; status: 'draft' | 'sent' | 'paid' | 'overdue'; due: string; total: number; }
