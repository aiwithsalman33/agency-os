import { useState } from 'react';
import { Edit3, MoreHorizontal, Plus, Trash2, X } from 'lucide-react';

type ModuleKind = 'clients' | 'workflows' | 'forms' | 'meta' | 'email' | 'proposals';
type RecordItem = { id: string; name: string; detail: string; status: string; meta: string };
const seed: Record<ModuleKind, RecordItem[]> = {
  clients: [
    { id: 'c1', name: 'Priya Shah', detail: 'Northstar Labs · priya@northstar.io', status: 'Active', meta: '8 open tasks · ₹180k open' },
    { id: 'c2', name: 'Daniel Kim', detail: 'Kindred Works · daniel@kindred.co', status: 'Active', meta: '4 open tasks · Paid' },
    { id: 'c3', name: 'Mia Thompson', detail: 'Lumen Health · mia@lumen.health', status: 'Active', meta: '11 open tasks · ₹240k open' },
    { id: 'c4', name: 'Rohan Das', detail: 'The Foundry · rohan@foundry.studio', status: 'Paused', meta: '3 open tasks · ₹74k open' },
  ],
  workflows: [
    { id: 'w1', name: 'Instagram DM auto-reply', detail: 'Instagram DM · Trigger: new follower', status: 'Enabled', meta: '596 runs this month' },
    { id: 'w2', name: 'Month-end invoice reminders', detail: 'Invoice reminder · Delay: 3 days', status: 'Enabled', meta: '780 runs this month' },
    { id: 'w3', name: 'Stalled deal nudge', detail: 'Deal nudge · Condition: no activity 5 days', status: 'Paused', meta: '412 runs this month' },
  ],
  forms: [
    { id: 'f1', name: 'Website enquiry form', detail: 'verdant.agency/contact · 6 fields', status: 'Published', meta: '128 responses' },
    { id: 'f2', name: 'Brand discovery call', detail: 'Share link · 9 fields', status: 'Draft', meta: '42 responses' },
    { id: 'f3', name: 'Campaign brief', detail: 'Embedded form · 12 fields', status: 'Published', meta: '27 responses' },
  ],
  meta: [
    { id: 'a1', name: 'Verdant Lead Ads', detail: 'Lead Ads · Business Manager connected', status: 'Active', meta: '₹420k spend · 216 leads' },
    { id: 'a2', name: 'CTWA August Sprint', detail: 'Click to WhatsApp · Account 2384', status: 'Paused', meta: '₹180k spend · 84 conversations' },
    { id: 'a3', name: 'Northstar Retargeting', detail: 'Lead Ads · Account 2384', status: 'Active', meta: '₹94k spend · 61 leads' },
  ],
  email: [
    { id: 'e1', name: 'Inbox · Maya Chen', detail: 'maya@verdant.agency · 12 unread', status: 'Connected', meta: '48 messages today' },
    { id: 'e2', name: 'Billing inbox', detail: 'billing@verdant.agency · 3 unread', status: 'Connected', meta: '16 messages today' },
  ],
  proposals: [
    { id: 'p1', name: 'Northstar rebrand proposal', detail: 'Northstar Labs · Proposal sent', status: 'Sent', meta: '₹180k · Aug 20' },
    { id: 'p2', name: 'Kite growth sprint', detail: 'Kite & Co. · Minimal template', status: 'Draft', meta: '₹95k · Aug 18' },
    { id: 'p3', name: 'Kindred annual retainer', detail: 'Kindred Works · Accepted', status: 'Accepted', meta: '₹310k · Aug 12' },
  ],
};
const copy: Record<ModuleKind, { kicker: string; title: string; description: string; action: string; columns: [string, string, string, string] }> = {
  clients: { kicker: 'CRM / Relationships', title: 'Clients', description: 'The people behind the projects.', action: 'Add client', columns: ['Client', 'Contact', 'Status', 'Open work'] },
  workflows: { kicker: 'Automation', title: 'Workflows', description: 'Quiet systems for the repetitive parts of good work.', action: 'New workflow', columns: ['Workflow', 'Trigger', 'Status', 'Runs'] },
  forms: { kicker: 'Automation / Capture', title: 'Forms', description: 'Collect structured demand and send responses into your pipeline.', action: 'New form', columns: ['Form', 'Configuration', 'Status', 'Responses'] },
  meta: { kicker: 'Automation / Acquisition', title: 'Meta Ads', description: 'Track campaign spend, lead volume, and click-to-WhatsApp performance.', action: 'New campaign', columns: ['Campaign', 'Type', 'Status', 'Performance'] },
  email: { kicker: 'Communication', title: 'Email', description: 'Keep connected mailboxes and client conversations in one calm workspace.', action: 'Compose email', columns: ['Mailbox', 'Details', 'Status', 'Activity'] },
  proposals: { kicker: 'CRM / Sales enablement', title: 'Proposals', description: 'Create, track, and refine proposals that move good work forward.', action: 'New proposal', columns: ['Proposal', 'Details', 'Status', 'Value'] },
};
export default function ModuleCrud({ kind, showToast }: { kind: ModuleKind; showToast: (message: string) => void }) {
  const [items, setItems] = useState(seed[kind]); const [query, setQuery] = useState(''); const [editing, setEditing] = useState<RecordItem | null | undefined>(undefined); const config = copy[kind];
  const filtered = items.filter((item) => `${item.name} ${item.detail} ${item.meta}`.toLowerCase().includes(query.toLowerCase()));
  const remove = (id: string) => { setItems((current) => current.filter((item) => item.id !== id)); showToast('Record deleted'); };
  return <><div className="page-head"><div><p className="eyebrow">{config.kicker}</p><h1>{config.title}</h1><p>{config.description}</p></div><button className="primary" onClick={() => setEditing(null)}><Plus size={16} /> {config.action}</button></div><div className="section-wrap"><div className="toolbar"><input className="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder={`⌕  Search ${config.title.toLowerCase()}...`} /><span className="muted">{items.length} records</span></div><table className="table"><thead><tr>{config.columns.map((column) => <th key={column}>{column}</th>)}<th>Actions</th></tr></thead><tbody>{filtered.map((item) => <tr key={item.id}><td><div className="person"><div className="avatar">{item.name.split(' ').map((word) => word[0]).join('').slice(0, 2)}</div><div><strong>{item.name}</strong><small>{item.detail.split(' · ')[0]}</small></div></div></td><td className="muted">{item.detail.split(' · ').slice(1).join(' · ')}</td><td><span className={`pill ${item.status === 'Active' || item.status === 'Enabled' || item.status === 'Published' ? 'green' : item.status === 'Paused' ? 'amber' : ''}`}>{item.status}</span></td><td><strong>{item.meta}</strong></td><td><div className="crud-actions"><button title="Edit" onClick={() => setEditing(item)}><Edit3 size={14} /></button><button title="Delete" onClick={() => remove(item.id)}><Trash2 size={14} /></button><MoreHorizontal size={16} color="#8c9a91" /></div></td></tr>)}</tbody></table>{filtered.length === 0 && <div className="empty">No matching records.</div>}</div>{editing !== undefined && <RecordModal kind={kind} record={editing} close={() => setEditing(undefined)} save={(record) => { setItems((current) => editing ? current.map((item) => item.id === editing.id ? { ...record, id: editing.id } : item) : [{ ...record, id: `${kind}-${Date.now()}` }, ...current]); setEditing(undefined); showToast(editing ? 'Changes saved' : `${config.title.slice(0, -1)} created`); }} />}</>;
}
function RecordModal({ kind, record, close, save }: { kind: ModuleKind; record: RecordItem | null; close: () => void; save: (record: Omit<RecordItem, 'id'>) => void }) { const [name, setName] = useState(record?.name || ''); const [detail, setDetail] = useState(record?.detail || ''); const [status, setStatus] = useState(record?.status || (kind === 'forms' ? 'Draft' : kind === 'workflows' ? 'Enabled' : 'Active')); const [meta, setMeta] = useState(record?.meta || 'New record'); return <div className="modal-backdrop" onMouseDown={close}><div className="modal" onMouseDown={(event) => event.stopPropagation()}><div className="modal-top"><div><p className="eyebrow">{kind}</p><h2>{record ? 'Edit record' : 'Create record'}</h2></div><button className="icon-btn" onClick={close}><X size={16} /></button></div><div className="form-field"><label>Name</label><input autoFocus value={name} onChange={(event) => setName(event.target.value)} /></div><div className="form-field"><label>Details</label><input value={detail} onChange={(event) => setDetail(event.target.value)} placeholder="Add a useful description" /></div><div className="form-field"><label>Status</label><select value={status} onChange={(event) => setStatus(event.target.value)}><option>Active</option><option>Enabled</option><option>Published</option><option>Draft</option><option>Paused</option></select></div><div className="form-field"><label>Summary</label><input value={meta} onChange={(event) => setMeta(event.target.value)} /></div><div className="modal-actions"><button className="secondary" onClick={close}>Cancel</button><button className="primary" onClick={() => save({ name: name || 'Untitled', detail: detail || 'No details added', status, meta })}>{record ? 'Save changes' : 'Create'}</button></div></div></div>; }
