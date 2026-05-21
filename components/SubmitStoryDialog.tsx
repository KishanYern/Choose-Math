"use client";

import { useRef, useState } from "react";
import { AuthGate } from "./AuthGate";
import { submitStory, RateLimitError, type StoryFormData } from "@/lib/firebase/stories";

interface SubmitStoryDialogProps {
  onSuccess?: () => void;
}

const emptyForm: StoryFormData = {
  name: "",
  title: "",
  company: "",
  degree: "",
  gradYear: new Date().getFullYear(),
  school: "",
  quote: "",
  fullStory: "",
  tags: [],
};

export function SubmitStoryDialog({ onSuccess }: SubmitStoryDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [form, setForm] = useState<StoryFormData>(emptyForm);
  const [tagInput, setTagInput] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [cooldown, setCooldown] = useState(false);

  function open() {
    setForm(emptyForm);
    setTagInput("");
    setSubmitted(false);
    setError(null);
    dialogRef.current?.showModal();
  }

  function close() {
    dialogRef.current?.close();
  }

  function set(field: keyof StoryFormData, value: string | number | string[]) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  function addTag(raw: string) {
    const tag = raw.trim();
    if (tag && !form.tags.includes(tag) && form.tags.length < 5) {
      set("tags", [...form.tags, tag]);
    }
    setTagInput("");
  }

  function removeTag(tag: string) {
    set("tags", form.tags.filter((t) => t !== tag));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      await submitStory(form);
      setSubmitted(true);
      setCooldown(true);
      setTimeout(() => setCooldown(false), 10_000);
      onSuccess?.();
    } catch (err) {
      if (err instanceof RateLimitError) {
        setError(err.message);
      } else {
        setError(err instanceof Error ? err.message : "Something went wrong.");
      }
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <button
        onClick={open}
        className="font-mono text-xs tracking-wider px-7 py-3 border border-rule text-ink-muted hover:border-ink-faint hover:text-ink transition-colors"
      >
        share your story →
      </button>

      <dialog
        ref={dialogRef}
        className="bg-paper border border-rule w-full max-w-2xl mx-auto p-0 backdrop:bg-ink/40 open:animate-none"
        onClick={(e) => { if (e.target === dialogRef.current) close(); }}
      >
        <div className="border-b border-rule px-8 py-5 flex items-center justify-between">
          <div>
            <p className="font-mono text-[11px] text-ink-faint tracking-widest uppercase mb-1">contributor portal</p>
            <h2 className="font-display text-xl text-ink font-normal">Share Your Story</h2>
          </div>
          <button onClick={close} className="text-ink-faint hover:text-ink transition-colors text-lg leading-none">✕</button>
        </div>

        <div className="px-8 py-6">
          <AuthGate prompt="Sign in with Google to share your math career story with students.">
            {submitted ? (
              <div className="text-center py-8">
                <p className="font-display text-2xl text-ink mb-3 italic">Thank you.</p>
                <p className="text-ink-muted text-sm max-w-sm mx-auto leading-relaxed">
                  Your story has been submitted for review. Once approved it will appear on the alumni stories page.
                </p>
                <button
                  onClick={close}
                  className="mt-6 font-mono text-xs tracking-wider px-6 py-2.5 bg-accent text-paper hover:bg-ink transition-colors"
                >
                  close
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field label="Full name" required>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => set("name", e.target.value)}
                      placeholder="e.g. Priya Nair"
                      className={inputClass}
                    />
                  </Field>
                  <Field label="Job title" required>
                    <input
                      type="text"
                      required
                      value={form.title}
                      onChange={(e) => set("title", e.target.value)}
                      placeholder="e.g. Quantitative Researcher"
                      className={inputClass}
                    />
                  </Field>
                  <Field label="Company / institution" required>
                    <input
                      type="text"
                      required
                      value={form.company}
                      onChange={(e) => set("company", e.target.value)}
                      placeholder="e.g. Two Sigma"
                      className={inputClass}
                    />
                  </Field>
                  <Field label="Degree" required>
                    <input
                      type="text"
                      required
                      value={form.degree}
                      onChange={(e) => set("degree", e.target.value)}
                      placeholder="e.g. BS Mathematics"
                      className={inputClass}
                    />
                  </Field>
                  <Field label="School" required>
                    <input
                      type="text"
                      required
                      value={form.school}
                      onChange={(e) => set("school", e.target.value)}
                      placeholder="e.g. University of Michigan"
                      className={inputClass}
                    />
                  </Field>
                  <Field label="Graduation year" required>
                    <input
                      type="number"
                      required
                      min={1950}
                      max={new Date().getFullYear()}
                      value={form.gradYear}
                      onChange={(e) => set("gradYear", parseInt(e.target.value))}
                      className={inputClass}
                    />
                  </Field>
                </div>

                <Field label="One-line quote" required hint="Something a current student should hear — max 200 chars">
                  <input
                    type="text"
                    required
                    maxLength={200}
                    value={form.quote}
                    onChange={(e) => set("quote", e.target.value)}
                    placeholder="Your most memorable insight about your math career"
                    className={inputClass}
                  />
                </Field>

                <Field label="Full story" required hint="Tell us how math shaped your path — 100–600 words">
                  <textarea
                    required
                    minLength={200}
                    maxLength={3000}
                    rows={6}
                    value={form.fullStory}
                    onChange={(e) => set("fullStory", e.target.value)}
                    placeholder="Describe your journey: how you chose math, a pivotal moment, and what you wish you'd known…"
                    className={`${inputClass} resize-none`}
                  />
                </Field>

                <Field label="Tags" hint="Up to 5 — press Enter or comma to add">
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {form.tags.map((tag) => (
                      <span key={tag} className="font-mono text-[10px] tracking-wider px-2 py-0.5 border border-rule text-ink-faint flex items-center gap-1">
                        {tag}
                        <button type="button" onClick={() => removeTag(tag)} className="text-ink-faint hover:text-marker leading-none">✕</button>
                      </span>
                    ))}
                  </div>
                  <input
                    type="text"
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === ",") {
                        e.preventDefault();
                        addTag(tagInput);
                      }
                    }}
                    onBlur={() => addTag(tagInput)}
                    placeholder="e.g. Data Science, Industry, PhD"
                    className={inputClass}
                    disabled={form.tags.length >= 5}
                  />
                </Field>

                {error && (
                  <p className="font-mono text-xs text-marker">{error}</p>
                )}

                <div className="flex justify-end gap-3 pt-2 border-t border-rule">
                  <button type="button" onClick={close} className="font-mono text-xs tracking-wider px-5 py-2.5 border border-rule text-ink-muted hover:text-ink transition-colors">
                    cancel
                  </button>
                  <button
                    type="submit"
                    disabled={submitting || cooldown}
                    className="font-mono text-xs tracking-wider px-6 py-2.5 bg-accent text-paper hover:bg-ink disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                  >
                    {submitting ? "submitting…" : cooldown ? "submitted ✓" : "submit story →"}
                  </button>
                </div>
              </form>
            )}
          </AuthGate>
        </div>
      </dialog>
    </>
  );
}

const inputClass =
  "w-full font-sans text-sm text-ink bg-paper-2 border border-rule px-3 py-2 focus:outline-none focus:border-ink-faint placeholder:text-ink-faint placeholder:font-sans";

function Field({ label, required, hint, children }: { label: string; required?: boolean; hint?: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="font-mono text-[11px] text-ink-faint tracking-wider uppercase">
        {label}{required && <span className="text-marker ml-0.5">*</span>}
      </label>
      {hint && <p className="font-mono text-[10px] text-ink-faint -mt-0.5">{hint}</p>}
      {children}
    </div>
  );
}
