'use client';
import { useEffect, useState } from 'react';
import { site, services, petTypes, timeSlots } from '@/lib/site.config';
import Reveal from './Reveal';

const empty = {
  parentName: '', phone: '', petName: '', petType: 'Dog',
  breed: '', service: '', date: '', time: '', notes: '',
};

export default function BookingForm() {
  const [form, setForm] = useState(empty);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [serverMsg, setServerMsg] = useState('');

  const today = new Date().toISOString().split('T')[0];

  useEffect(() => {
    const serviceId = new URLSearchParams(window.location.search).get('service');
    const selectedService = services.find((service) => service.id === serviceId);
    if (!selectedService) return;

    setForm((current) => ({ ...current, service: selectedService.title }));
    window.history.replaceState({}, '', `${window.location.pathname}${window.location.hash}`);
  }, []);

  const set = (k) => (e) => {
    setForm((f) => ({ ...f, [k]: e.target.value }));
    setErrors((er) => ({ ...er, [k]: undefined }));
  };

  const validate = () => {
    const e = {};
    if (!form.parentName.trim()) e.parentName = 'Please enter your name.';
    if (!/^[+\d][\d\s-]{7,}$/.test(form.phone.trim())) e.phone = 'Enter a valid phone number.';
    if (!form.petName.trim()) e.petName = "Please enter your pet's name.";
    if (!form.service) e.service = 'Please choose a service.';
    if (!form.date) e.date = 'Pick a preferred date.';
    else if (form.date < today) e.date = 'Please pick a future date.';
    if (!form.time) e.time = 'Pick a preferred time.';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('sending');
    try {
      const res = await fetch('/api/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Something went wrong.');
      setStatus('success');
      setServerMsg(data.message || '');
      setForm(empty);
    } catch (err) {
      setStatus('error');
      setServerMsg(err.message);
    }
  };

  const field = 'w-full rounded-xl border-2 border-clay bg-cream/50 px-4 py-3 text-charcoal placeholder-charcoal/40 focus:border-teal focus:bg-white outline-none transition-colors';
  const errCls = 'border-red-400 bg-red-50/50';

  if (status === 'success') {
    return (
      <Reveal className="bg-white rounded-4xl shadow-lift p-8 sm:p-12 text-center">
        <div className="mx-auto grid place-items-center h-20 w-20 rounded-full bg-teal/10 text-4xl mb-5" aria-hidden>🎉</div>
        <h3 className="text-2xl font-semibold text-charcoal">Request received!</h3>
        <p className="mt-3 text-charcoal/70 max-w-md mx-auto leading-relaxed">
          Thanks for reaching out. Your appointment request has been received — our team will
          contact you shortly to confirm availability. This is a request, not a confirmed booking yet.
        </p>
        <p className="mt-4 text-sm text-charcoal/60">
          Prefer to talk now?{' '}
          <a href={`tel:${site.phoneRaw}`} className="font-bold text-teal">Call {site.phoneDisplay}</a>
        </p>
        <button onClick={() => setStatus('idle')} className="mt-6 text-sm font-bold text-teal underline underline-offset-2">
          Send another request
        </button>
      </Reveal>
    );
  }

  return (
    <Reveal className="bg-white rounded-4xl shadow-lift p-6 sm:p-9">
      <p className="mb-5 text-sm font-semibold leading-relaxed text-charcoal/65">
        Fields marked <span className="text-teal">*</span> help us prepare for your pet.
      </p>
      <form onSubmit={submit} noValidate className="grid sm:grid-cols-2 gap-4">
        <div className="sm:col-span-2">
          <label htmlFor="parentName" className="block text-sm font-bold text-charcoal mb-1.5">Pet Parent Name *</label>
          <input id="parentName" value={form.parentName} onChange={set('parentName')} placeholder="Your full name" className={`${field} ${errors.parentName ? errCls : ''}`} />
          {errors.parentName && <p className="mt-1 text-xs font-semibold text-red-500">{errors.parentName}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-bold text-charcoal mb-1.5">Phone Number *</label>
          <input id="phone" type="tel" value={form.phone} onChange={set('phone')} placeholder="+91 ..." className={`${field} ${errors.phone ? errCls : ''}`} />
          {errors.phone && <p className="mt-1 text-xs font-semibold text-red-500">{errors.phone}</p>}
        </div>

        <div>
          <label htmlFor="petName" className="block text-sm font-bold text-charcoal mb-1.5">Pet Name *</label>
          <input id="petName" value={form.petName} onChange={set('petName')} placeholder="e.g. Bruno" className={`${field} ${errors.petName ? errCls : ''}`} />
          {errors.petName && <p className="mt-1 text-xs font-semibold text-red-500">{errors.petName}</p>}
        </div>

        <div>
          <label htmlFor="petType" className="block text-sm font-bold text-charcoal mb-1.5">Pet Type</label>
          <select id="petType" value={form.petType} onChange={set('petType')} className={field}>
            {petTypes.map((t) => <option key={t}>{t}</option>)}
          </select>
        </div>

        <div>
          <label htmlFor="breed" className="block text-sm font-bold text-charcoal mb-1.5">Breed</label>
          <input id="breed" value={form.breed} onChange={set('breed')} placeholder="e.g. Labrador (optional)" className={field} />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="service" className="block text-sm font-bold text-charcoal mb-1.5">Preferred Service *</label>
          <select id="service" value={form.service} onChange={set('service')} className={`${field} ${errors.service ? errCls : ''}`}>
            <option value="">Select a service…</option>
            {services.map((s) => <option key={s.id} value={s.title}>{s.title}</option>)}
          </select>
          {errors.service && <p className="mt-1 text-xs font-semibold text-red-500">{errors.service}</p>}
        </div>

        <div>
          <label htmlFor="date" className="block text-sm font-bold text-charcoal mb-1.5">Preferred Date *</label>
          <input id="date" type="date" min={today} value={form.date} onChange={set('date')} className={`${field} ${errors.date ? errCls : ''}`} />
          {errors.date && <p className="mt-1 text-xs font-semibold text-red-500">{errors.date}</p>}
        </div>

        <div>
          <label htmlFor="time" className="block text-sm font-bold text-charcoal mb-1.5">Preferred Time *</label>
          <select id="time" value={form.time} onChange={set('time')} className={`${field} ${errors.time ? errCls : ''}`}>
            <option value="">Select a time…</option>
            {timeSlots.map((t) => <option key={t}>{t}</option>)}
          </select>
          {errors.time && <p className="mt-1 text-xs font-semibold text-red-500">{errors.time}</p>}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="notes" className="block text-sm font-bold text-charcoal mb-1.5">Additional Notes</label>
          <textarea id="notes" rows={3} value={form.notes} onChange={set('notes')} placeholder="Anything we should know about your pet? (optional)" className={`${field} resize-none`} />
        </div>

        {status === 'error' && (
          <div className="sm:col-span-2 rounded-xl bg-red-50 border-2 border-red-200 px-4 py-3 text-sm font-semibold text-red-600">
            {serverMsg || 'We couldn’t send your request. Please call us instead.'}
          </div>
        )}

        <div className="sm:col-span-2 mt-1">
          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full flex items-center justify-center gap-2 bg-teal hover:bg-teal-dark disabled:opacity-60 text-white font-bold px-7 py-4 rounded-2xl shadow-soft hover:shadow-lift transition-all"
          >
            {status === 'sending' ? (
              <><span className="h-5 w-5 rounded-full border-2 border-white/40 border-t-white animate-spin" aria-hidden /> Sending…</>
            ) : (
              <>Request Appointment <span aria-hidden>🐾</span></>
            )}
          </button>
          <p className="mt-3 text-center text-sm text-charcoal/60">
            Prefer to call?{' '}
            <a href={`tel:${site.phoneRaw}`} className="font-bold text-teal">{site.phoneDisplay}</a>
          </p>
        </div>
      </form>
    </Reveal>
  );
}
