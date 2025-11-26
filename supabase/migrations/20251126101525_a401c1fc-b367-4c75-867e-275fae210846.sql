-- Add missing columns to contact_submissions table
ALTER TABLE contact_submissions 
ADD COLUMN budget text,
ADD COLUMN timeline text;