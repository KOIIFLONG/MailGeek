import { describe, it, expect } from 'vitest';
import MailGeekContent from '../src/content.js';

describe('MailGeekContent', () => {
  it('should initialize correctly', () => {
    expect(MailGeekContent).toBeTruthy();
  });

  it('should have a processEmails method', () => {
    expect(MailGeekContent.processEmails).toBeDefined();
    expect(MailGeekContent.processEmails()).toEqual([]);
  });
});