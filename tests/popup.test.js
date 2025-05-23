import { describe, it, expect } from 'vitest';
import MailGeekPopup from '../src/popup.js';

describe('MailGeekPopup', () => {
  it('should initialize correctly', () => {
    expect(MailGeekPopup).toBeTruthy();
  });

  it('should have an updateUI method', () => {
    expect(MailGeekPopup.updateUI).toBeDefined();
  });
});